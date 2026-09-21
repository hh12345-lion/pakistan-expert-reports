/**
 * Send a brief → Google Sheet
 * Named columns so each cell maps to a form field.
 *
 * Netlify env:
 *   GOOGLE_SERVICE_ACCOUNT_EMAIL
 *   GOOGLE_PRIVATE_KEY
 *   GOOGLE_SHEET_ID
 *   GOOGLE_SHEET_TAB_NAME (optional, default Sheet1)
 */

const BRAND_NAME = "Pakistan Expert Reports";

function getSiteDomain() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || "https://pakistanexpertreports.com";
  try {
    return new URL(raw).hostname.replace(/^www\./, "");
  } catch {
    return "pakistanexpertreports.com";
  }
}

/** Map this site's brief note, and common aliases, onto lowercase `message`. */
function resolveLeadMessage(body) {
  if (!body || typeof body !== "object") return "";
  const keys = [
    "message",
    "summary",
    "caseBrief",
    "caseSummary",
    "description",
    "notes",
    "brief",
    "case_summary",
    "caseDescription",
  ];
  for (const key of keys) {
    if (body[key] != null && String(body[key]).trim()) return String(body[key]).trim();
  }
  return "";
}

async function notifyLead(body, fields) {
  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;
  if (!webhookUrl) return;

  const payload = {
    "Full Name": fields.fullName,
    Email: fields.email,
    "Phone Number": sanitize(body.phone ?? ""),
    "Brand name": BRAND_NAME,
    domain: getSiteDomain(),
    message: sanitize(resolveLeadMessage(body)),
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(12_000),
    });
    if (!res.ok) console.error("Lead webhook status", res.status);
  } catch (error) {
    console.error("Lead webhook failed:", error?.message);
  }
}

/** Column order = sheet columns A…  Header text is what appears in row 1. */
export const BRIEF_COLUMNS = [
  { key: "timestamp", header: "Timestamp" },
  { key: "fullName", header: "Full Name" },
  { key: "organisation", header: "Law Firm" },
  { key: "email", header: "Email" },
  { key: "summary", header: "Brief case note" },
  { key: "brand", header: "Brand" },
];

export const BRIEF_HEADERS = BRIEF_COLUMNS.map((c) => c.header);

export function normalizePrivateKey(raw) {
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

export function sanitize(str) {
  return String(str ?? "")
    .replace(/<[^>]*>/g, "")
    .trim();
}

export function fieldsFromBody(body = {}) {
  const fullName = sanitize(body.fullName ?? body.name ?? "");
  const email = sanitize(body.email).toLowerCase();
  return {
    timestamp: new Date().toISOString(),
    fullName,
    organisation: sanitize(body.organisation ?? body.law_firm ?? body.lawFirm ?? ""),
    email,
    summary: sanitize(body.summary ?? body.note ?? ""),
    brand: BRAND_NAME,
  };
}

export function rowFromFields(fields) {
  return BRIEF_COLUMNS.map((col) => fields[col.key] ?? "");
}

function json(statusCode, payload) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
    },
    body: JSON.stringify(payload),
  };
}

function sheetRange(sheetName, a1Suffix) {
  const escaped = String(sheetName).replace(/'/g, "''");
  return `'${escaped}'!${a1Suffix}`;
}

async function getSheetsClient() {
  const { google } = await import("googleapis");
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

async function getSheetId(sheets, spreadsheetId, sheetName) {
  const info = await sheets.spreadsheets.get({ spreadsheetId });
  const sheet = info.data.sheets?.find((s) => s.properties?.title === sheetName);
  return sheet?.properties?.sheetId ?? 0;
}

async function ensureHeaderRow(sheets, spreadsheetId, sheetName) {
  const range = sheetRange(sheetName, "1:1");
  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });
  const row = existing.data.values?.[0] ?? [];
  const alreadyLabeled = BRIEF_HEADERS.every((header, i) => row[i] === header);
  if (alreadyLabeled) return;

  const rowEmpty = row.every((cell) => !String(cell ?? "").trim());
  if (!rowEmpty) {
    const sheetId = await getSheetId(sheets, spreadsheetId, sheetName);
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
    requestBody: { values: [BRIEF_HEADERS] },
  });
}

export async function appendBriefToSheet(fields) {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const sheetName = process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1";
  if (
    !spreadsheetId ||
    !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
    !process.env.GOOGLE_PRIVATE_KEY
  ) {
    throw new Error("Google Sheets env vars are missing");
  }

  const sheets = await getSheetsClient();
  await ensureHeaderRow(sheets, spreadsheetId, sheetName);
  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: sheetRange(sheetName, "A:A"),
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [rowFromFields(fields)] },
  });

  return response.data.updates?.updatedRange;
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return json(204, {});
  }
  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method Not Allowed" });
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "Invalid JSON" });
  }

  const fields = fieldsFromBody(body);
  if (!fields.fullName || !fields.email) {
    return json(400, { error: "fullName and email are required" });
  }

  try {
    const updatedRange = await appendBriefToSheet(fields);
    await notifyLead(body, fields);
    return json(200, { ok: true, columns: BRIEF_HEADERS, updatedRange });
  } catch (error) {
    console.error("submit-brief sheet write failed:", error?.message);
    return json(500, { error: "Failed to save submission" });
  }
}
