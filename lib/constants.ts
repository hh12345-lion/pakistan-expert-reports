/** Live canonical host (apex). */
const PRODUCTION_SITE_URL = "https://pakistanexpertreports.com";

/** Public origin for sitemap/canonicals; never localhost or Netlify preview. */
export function getPublicSiteUrl(): string {
  const fallback = PRODUCTION_SITE_URL;
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return fallback;
  try {
    const u = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
    if (
      u.hostname === "localhost" ||
      u.hostname === "127.0.0.1" ||
      u.hostname.endsWith(".netlify.app")
    ) {
      return fallback;
    }
    u.hostname = u.hostname.replace(/^www\./i, "");
    return u.origin.replace(/\/$/, "");
  } catch {
    return fallback;
  }
}

export const SITE_URL = getPublicSiteUrl();
export const SITE_NAME = "Pakistan Expert Reports";
/** Visible copy: site serves immigration practitioners */
export const SITE_REGION_LABEL = "";
export const SITE_TAGLINE =
  "Country expert evidence for immigration solicitors on Pakistani asylum appeals";
export const LINKEDIN_URL = "https://www.linkedin.com/company/PakistanExpertReports";

/** Distinct from Instruct / Retain expert / Contact Us on sister sites */
export const BRIEF_PATH = "/send-brief";
export const BRIEF_LABEL = "Send a brief";
export const BRIEF_SUBMIT_LABEL = "Lodge this brief";

/** Brand guide palette */
export const COLORS = {
  ink: "#191D18",
  primary: "#191D18",
  accent: "#801F37",
  highlight: "#801F37",
  background: "#F2F5EF",
  sectionAlt: "#E2E6DB",
  border: "#CCD1C5",
  heading: "#191D18",
  body: "#3F433E",
} as const;
