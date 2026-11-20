import type { Metadata } from "next";
import { fitDescription, fitTitle } from "@/lib/fit";
import { SITE_URL } from "./constants";
import { isProductionSite } from "./seo/is-production";

const OG_IMAGE_ALT = "Pakistan Expert Reports - Pakistan Country Expert Reports";

export const OPEN_GRAPH_IMAGE = {
  url: `${SITE_URL}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: OG_IMAGE_ALT,
} as const;

export function createMetadata({
  title,
  description,
  path = "",
  noindex = false,
  follow = true,
}: {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
  follow?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const blockIndexing = noindex || !isProductionSite();
  // "Page | Brand" when it fits in 60 characters, otherwise shortened at a natural break (never mid-word);
  // absolute, so the layout template cannot add the brand a second time. Descriptions fitted to 110–155.
  title = fitTitle(title, "fit");
  description = fitDescription(description);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Pakistan Expert Reports",
      locale: "en_GB",
      type: "website",
      images: [OPEN_GRAPH_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description },
    robots: blockIndexing
      ? { index: false, follow, googleBot: { index: false, follow } }
      : { index: true, follow: true },
  };
}
