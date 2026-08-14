import { LINKEDIN_URL, SITE_URL } from "../constants";
import { APP_STATIC_PATHS } from "./publicUrlInventory";
import { SEO_SLUG_REDIRECTS } from "./slug-redirects";
import { faqs } from "../../data/faq";

const REQUIRED_STATIC_PATHS = ["/", "/faq"];

export type ArchitectureIssue = { level: "error" | "warn"; message: string };

export function verifySeoArchitecture(): ArchitectureIssue[] {
  const issues: ArchitectureIssue[] = [];

  if (SITE_URL !== "https://www.pakistanexpertreports.com") {
    issues.push({
      level: "error",
      message: `SITE_URL must be https://www.pakistanexpertreports.com (got ${SITE_URL})`,
    });
  }

  if (!LINKEDIN_URL.includes("PakistanExpertReports")) {
    issues.push({
      level: "warn",
      message: `LINKEDIN_URL should use PakistanExpertReports sameAs (got ${LINKEDIN_URL})`,
    });
  }

  for (const path of REQUIRED_STATIC_PATHS) {
    if (!APP_STATIC_PATHS.some((e) => e.path === path)) {
      issues.push({ level: "error", message: `APP_STATIC_PATHS missing ${path}` });
    }
  }

  if (faqs.length < 8) {
    issues.push({ level: "error", message: `Expected at least 8 FAQs, found ${faqs.length}` });
  }

  if (SEO_SLUG_REDIRECTS["/contact"] !== "/send-brief") {
    issues.push({ level: "error", message: "/contact must redirect to /send-brief" });
  }
  if (SEO_SLUG_REDIRECTS["/asylum-profiles"] !== "/#profiles") {
    issues.push({ level: "error", message: "/asylum-profiles must redirect to /#profiles" });
  }
  if (SEO_SLUG_REDIRECTS["/how-to-instruct"] !== "/#process") {
    issues.push({ level: "error", message: "/how-to-instruct must redirect to /#process" });
  }

  return issues;
}

export const REQUIRED_CPIN_SECTION_IDS = [
  "ahmadis",
  "shia-muslims",
  "blasphemy",
  "women-vawg",
  "lgbtq",
  "political-opposition",
  "actors-of-protection",
  "mn-and-others-2012",
  "internal-relocation",
] as const;
