export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.pakistanexpertreports.com";
export const SITE_NAME = "Pakistan Expert Reports";
export const SITE_EMAIL = "cases@pakistanexpertreports.com";
/** Visible copy: site serves UK immigration practitioners only */
export const SITE_REGION_LABEL = "United Kingdom";
export const SITE_TAGLINE = "Expert reports for UK immigration solicitors, Legal Aid practitioners, and asylum tribunals";
export const LINKEDIN_URL = "https://www.linkedin.com/company/PakistanExpertReports";

export const COLORS = {
  primary: "#0C3547",
  accent: "#2E7D52",
  highlight: "#C8922A",
  background: "#FFFFFF",
  sectionAlt: "#F4F8F7",
  border: "#C8DDD6",
  heading: "#0C3547",
  body: "#374151",
} as const;
