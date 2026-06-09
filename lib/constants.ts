export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.pakistanexpertreports.com";
export const SITE_NAME = "Pakistan Expert Reports";
export const SITE_EMAIL = "info@pakistanexpertreports.com";
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
