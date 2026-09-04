/** Live canonical host (apex). */
const PRODUCTION_SITE_URL = "https://pakistanexpertreports.com";

/** Public origin for sitemap/canonicals — never localhost or Netlify preview. */
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
/** Visible copy: site serves UK immigration practitioners only */
export const SITE_REGION_LABEL = "United Kingdom";
export const SITE_TAGLINE =
  "Country expert evidence for UK immigration solicitors on Pakistani asylum appeals";
export const LINKEDIN_URL = "https://www.linkedin.com/company/PakistanExpertReports";

/** Distinct from Instruct / Retain expert / Contact Us on sister sites */
export const BRIEF_PATH = "/send-brief";
export const BRIEF_LABEL = "Send a brief";
export const BRIEF_SUBMIT_LABEL = "Lodge this brief";

/** Indus Folio — wine, olive-ink, stone paper (not PCE teal/brass, not glacier/ember) */
export const COLORS = {
  ink: "#1B1F18",
  primary: "#1B1F18",
  accent: "#8B1E3F",
  highlight: "#4A5C3A",
  background: "#F4F6F1",
  sectionAlt: "#E6E9DF",
  border: "#D0D4C8",
  heading: "#1B1F18",
  body: "#3E4538",
} as const;
