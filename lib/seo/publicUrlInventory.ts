import { SITE_URL } from "../constants";

export type PublicUrlEntry = {
  path: string;
  priority: number;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
};

/** Indexable landing folio + FAQ. Form and legal pages stay noindex. */
export const APP_STATIC_PATHS: PublicUrlEntry[] = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/faq", priority: 0.8, changefreq: "monthly" },
];

export const NON_INDEXABLE_PATHS = [
  "/send-brief",
  "/contact",
  "/thank-you",
  "/privacy",
  "/terms",
  "/cookie-policy",
] as const;

export const ROBOTS_DISALLOW_PATHS = [
  "/thank-you",
  "/send-brief",
  "/api/",
  "/admin/",
  "/private/",
  "/.netlify/",
] as const;

export type PublicUrlInventory = {
  siteUrl: string;
  entries: PublicUrlEntry[];
  allPaths: string[];
  allUrls: string[];
};

export function buildPublicUrlInventory(siteUrl: string = SITE_URL): PublicUrlInventory {
  const origin = siteUrl.replace(/\/$/, "");
  const entries = [...APP_STATIC_PATHS];
  const allPaths = entries.map((e) => e.path);
  const allUrls = allPaths.map((p) => (p === "/" ? origin : `${origin}${p}`));
  return { siteUrl: origin, entries, allPaths, allUrls };
}
