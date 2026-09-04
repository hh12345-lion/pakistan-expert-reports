import { google, sheets_v4 } from "googleapis";

type CellValue = string | number | boolean | null;

interface SheetTarget {
  spreadsheetId?: string;
  sheetName?: string;
}

interface AppendResult {
  success: boolean;
  updatedRange: string | null | undefined;
}

/** Netlify often stores the key with literal \n and optional wrapping quotes. */
export function normalizePrivateKey(raw?: string): string | undefined {
  if (!raw) return undefined;
  let key = raw.trim();
  if (
    (key.startsWith('"') && key.endsWith('"')) ||
    (key.startsWith("'") && key.endsWith("'"))
  ) {
    key = key.slice(1, -1);
  }
  return key.replace(/\\n/g, "\n");
}

export function isGoogleSheetsConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SHEET_ID &&
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY
  );
}

function getAuthClient() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

function getSheetsClient(): sheets_v4.Sheets {
  return google.sheets({ version: "v4", auth: getAuthClient() });
}

function sheetRange(sheetName: string, a1Suffix = "A:A"): string {
  const escaped = sheetName.replace(/'/g, "''");
  return `'${escaped}'!${a1Suffix}`;
}

/** Must match netlify/functions/submit-brief.mjs BRIEF_COLUMNS */
export const BRIEF_HEADERS = [
  "Timestamp",
  "Full Name",
  "Law Firm",
  "Email",
  "Brief case note",
  "Brand",
] as const;

export async function ensureBriefHeaderRow(target?: SheetTarget): Promise<void> {
  const sheets = getSheetsClient();
  const spreadsheetId = target?.spreadsheetId || process.env.GOOGLE_SHEET_ID;
  const sheetName = target?.sheetName || process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1";
  if (!spreadsheetId) {
    throw new Error("Missing spreadsheet ID: set GOOGLE_SHEET_ID or pass spreadsheetId");
  }

  const range = sheetRange(sheetName, "1:1");
  const existing = await sheets.spreadsheets.values.get({ spreadsheetId, range });
  const row = existing.data.values?.[0] ?? [];
  const alreadyLabeled = BRIEF_HEADERS.every((header, i) => row[i] === header);
  if (alreadyLabeled) return;

  const rowEmpty = row.every((cell) => !String(cell ?? "").trim());
  if (!rowEmpty) {
    const info = await sheets.spreadsheets.get({ spreadsheetId });
    const tab = info.data.sheets?.find((s) => s.properties?.title === sheetName);
    const sheetId = tab?.properties?.sheetId ?? 0;
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            insertDimension: {
              range: { sheetId, dimension: "ROWS", startIndex: 0, endIndex: 1 },
              inheritFromBefore: false,
            },
          },
        ],
      },
    });
  }

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: sheetRange(sheetName, "A1"),
    valueInputOption: "RAW",
    requestBody: { values: [[...BRIEF_HEADERS]] },
  });
}

export async function appendRow(
  values: CellValue[],
  target?: SheetTarget
): Promise<AppendResult> {
  const sheets = getSheetsClient();
  const spreadsheetId = target?.spreadsheetId || process.env.GOOGLE_SHEET_ID;
  const sheetName = target?.sheetName || process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1";

  if (!spreadsheetId) {
    throw new Error("Missing spreadsheet ID: set GOOGLE_SHEET_ID or pass spreadsheetId");
  }

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: sheetRange(sheetName),
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [values],
    },
  });

  return {
    success: true,
    updatedRange: response.data.updates?.updatedRange,
  };
}

export async function appendRowWithRetry(
  values: CellValue[],
  maxRetries = 2,
  target?: SheetTarget
): Promise<AppendResult> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await appendRow(values, target);
    } catch (error: unknown) {
      const err = error as { code?: number };
      const isRetryable = err?.code === 429 || err?.code === 503 || err?.code === 500;
      if (isRetryable && attempt < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, 2 ** attempt * 1000));
        continue;
      }
      throw error;
    }
  }
  throw new Error("Max retries exceeded");
}
