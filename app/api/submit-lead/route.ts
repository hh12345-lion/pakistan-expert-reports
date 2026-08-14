import { NextResponse } from "next/server";
import { appendRowWithRetry, isGoogleSheetsConfigured } from "@/lib/google-sheets";

const BRAND_NAME = "Pakistan Expert Reports";

type LeadBody = {
  fullName?: string;
  organisation?: string;
  email?: string;
  phone?: string;
  caseProfile?: string;
  proceedings?: string;
  funding?: string;
  deadline?: string;
  urgency?: string;
  summary?: string;
};

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

export async function POST(request: Request) {
  if (!isGoogleSheetsConfigured()) {
    const missing: string[] = [];
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) missing.push("GOOGLE_SERVICE_ACCOUNT_EMAIL");
    if (!process.env.GOOGLE_PRIVATE_KEY) missing.push("GOOGLE_PRIVATE_KEY");
    if (!process.env.GOOGLE_SHEET_ID) missing.push("GOOGLE_SHEET_ID");
    return NextResponse.json(
      {
        error: "Lead storage not configured. Add Google Sheets vars in Netlify.",
        ...(process.env.NODE_ENV === "development" && { missing }),
      },
      { status: 500 }
    );
  }

  let body: LeadBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const fullName = sanitize(body.fullName ?? "");
  const email = (body.email ?? "").toLowerCase().trim();
  const phone = sanitize(body.phone ?? "");

  if (!fullName || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const row = [
    new Date().toISOString(),
    fullName,
    sanitize(body.organisation ?? ""),
    email,
    phone,
    sanitize(body.caseProfile ?? ""),
    sanitize(body.proceedings ?? ""),
    sanitize(body.funding ?? ""),
    body.deadline ?? "",
    sanitize(body.urgency ?? ""),
    sanitize(body.summary ?? ""),
    BRAND_NAME,
  ];

  try {
    await appendRowWithRetry(row);
  } catch (error) {
    console.error("Google Sheets write failed:", {
      message: error instanceof Error ? error.message : "Unknown error",
      timestamp: new Date().toISOString(),
    });
    return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
