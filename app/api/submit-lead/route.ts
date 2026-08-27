import { NextResponse } from "next/server";
import {
  appendRowWithRetry,
  ensureBriefHeaderRow,
  isGoogleSheetsConfigured,
} from "@/lib/google-sheets";

const BRAND_NAME = "Pakistan Expert Reports";

function getSiteDomain(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || "https://pakistanexpertreports.com";
  try {
    return new URL(raw).hostname.replace(/^www\./, "");
  } catch {
    return "pakistanexpertreports.com";
  }
}

type LeadBody = {
  fullName?: string;
  name?: string;
  organisation?: string;
  law_firm?: string;
  email?: string;
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

  const fullName = sanitize(body.fullName ?? body.name ?? "");
  const email = (body.email ?? "").toLowerCase().trim();
  const organisation = sanitize(body.organisation ?? body.law_firm ?? "");
  const summary = sanitize(body.summary ?? "");

  if (!fullName || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const row = [
    new Date().toISOString(),
    fullName,
    organisation,
    email,
    summary,
    BRAND_NAME,
  ];

  try {
    await ensureBriefHeaderRow();
    await appendRowWithRetry(row);
  } catch (error) {
    console.error("Google Sheets write failed:", {
      message: error instanceof Error ? error.message : "Unknown error",
      timestamp: new Date().toISOString(),
    });
    return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
  }

  
  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "Full Name": fullName,
          Email: email,
          "Phone Number": "",
          "Brand name": BRAND_NAME,
          domain: getSiteDomain(),
        }),
      });
    } catch (error) {
      console.error("Lead webhook failed:", {
        message: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  return NextResponse.json({ ok: true });
}
