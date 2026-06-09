import { asylumProfiles } from "../../data/asylum-profiles";
import { caseTypes } from "../../data/case-types";
import { guides } from "../../data/guides";
import { glossaryTerms } from "../../data/glossary";
import { services } from "../../data/services";
import { glossaryAnchorId } from "../glossary";
import { LINKEDIN_URL, SITE_URL } from "../constants";
import {
  getCaseTypeRelatedLinks,
  getCpinRelatedLinks,
  getGuideRelatedLinks,
  getProfileRelatedLinks,
  HOMEPAGE_FEATURED_PROFILE_SLUGS,
} from "../../data/related-links";
import { APP_STATIC_PATHS } from "./publicUrlInventory";
import { SEO_SLUG_REDIRECTS } from "./slug-redirects";

const REQUIRED_CPIN_SECTION_IDS = [
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

const REQUIRED_GLOSSARY_ANCHORS: Record<string, string> = {
  "Ahmadi (Qadiani)": "ahmadi-qadiani",
  "Ordinance XX 1984 (Ahmadis)": "ordinance-xx-1984-ahmadis",
  "TLP (Tehreek-e-Labbaik Pakistan)": "tlp-tehreek-e-labbaik-pakistan",
  "Blasphemy Laws (ss295-298 PPC)": "blasphemy-laws-ss295-298-ppc",
  "Country Guidance (MN and Others [2012])": "country-guidance-mn-and-others-2012",
  "s377 Pakistan Penal Code": "s377-pakistan-penal-code",
  "PTI (Pakistan Tehreek-e-Insaf)": "pti-pakistan-tehreek-e-insaf",
  "Ahmadiyya Muslim Association UK": "ahmadiyya-muslim-association-uk",
  "State Protection": "state-protection",
  "Internal Relocation Alternative": "internal-relocation-alternative",
};

const REMOVED_PAGE_REDIRECTS: Record<string, string> = {
  "/fees": "/how-to-instruct",
  "/faq": "/guides",
  "/experts": "/qualifications",
};

const REQUIRED_STATIC_PATHS = [
  "/",
  "/cpin-country-guidance",
  "/asylum-profiles",
  "/services",
  "/what-is-a-pakistan-expert-report",
  "/case-types",
  "/how-to-instruct",
  "/qualifications",
  "/guides",
  "/glossary",
];

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

  if (asylumProfiles.length !== 8) {
    issues.push({ level: "error", message: `Expected 8 asylum profiles, found ${asylumProfiles.length}` });
  }
  if (caseTypes.length !== 8) {
    issues.push({ level: "error", message: `Expected 8 case types, found ${caseTypes.length}` });
  }
  if (services.length !== 8) {
    issues.push({ level: "error", message: `Expected 8 services, found ${services.length}` });
  }
  if (guides.length !== 6) {
    issues.push({ level: "error", message: `Expected 6 guides, found ${guides.length}` });
  }

  for (const slug of HOMEPAGE_FEATURED_PROFILE_SLUGS) {
    if (!asylumProfiles.some((p) => p.slug === slug)) {
      issues.push({ level: "error", message: `Homepage featured profile missing: ${slug}` });
    }
  }

  for (const profile of asylumProfiles) {
    const links = getProfileRelatedLinks(profile.slug);
    const hasCpin = links.some((l) => l.href.includes("/cpin-country-guidance"));
    const hasInstruct = links.some((l) => l.href === "/how-to-instruct");
    const hasContact = links.some((l) => l.href === "/contact");
    if (!hasCpin || !hasInstruct || !hasContact) {
      issues.push({
        level: "error",
        message: `Profile ${profile.slug} missing Rule A links (CPIN/instruct/contact)`,
      });
    }
    if (profile.faqs.length < 2) {
      issues.push({ level: "warn", message: `Profile ${profile.slug} has fewer than 2 FAQs` });
    }
  }

  for (const ct of caseTypes) {
    const links = getCaseTypeRelatedLinks(ct.slug);
    const hasInstruct = links.some((l) => l.href === "/how-to-instruct");
    const hasContact = links.some((l) => l.href === "/contact");
    const hasProfile = links.some((l) => l.href.startsWith("/asylum-profiles/"));
    if (!hasInstruct || !hasContact || !hasProfile) {
      issues.push({
        level: "error",
        message: `Case type ${ct.slug} missing required internal links (profile/instruct/contact)`,
      });
    }
    if (ct.faqs.length < 2) {
      issues.push({ level: "warn", message: `Case type ${ct.slug} has fewer than 2 FAQs` });
    }
  }

  for (const guide of guides) {
    const links = getGuideRelatedLinks(guide.slug);
    const hasCpin = links.some((l) => l.href.includes("/cpin-country-guidance"));
    const hasInstruct = links.some((l) => l.href === "/how-to-instruct");
    const hasContact = links.some((l) => l.href === "/contact");
    if (!hasCpin || !hasInstruct || !hasContact) {
      issues.push({
        level: "error",
        message: `Guide ${guide.slug} missing Rule B links (CPIN/instruct/contact)`,
      });
    }
  }

  const cpinLinks = getCpinRelatedLinks();
  const cpinProfileLinks = cpinLinks.filter((l) => l.href.startsWith("/asylum-profiles/") && l.href !== "/asylum-profiles");
  if (cpinProfileLinks.length < 8) {
    issues.push({
      level: "error",
      message: `CPIN pillar should link to all 8 profiles (found ${cpinProfileLinks.length} profile links)`,
    });
  }

  for (const service of services) {
    if (service.faqs.length < 2) {
      issues.push({ level: "warn", message: `Service ${service.id} has fewer than 2 FAQs` });
    }
  }

  for (const [term, expectedId] of Object.entries(REQUIRED_GLOSSARY_ANCHORS)) {
    const termRow = glossaryTerms.find((t) => t.term === term);
    if (!termRow) {
      issues.push({ level: "error", message: `Glossary missing term: ${term}` });
      continue;
    }
    const actualId = glossaryAnchorId(termRow.term);
    if (actualId !== expectedId) {
      issues.push({
        level: "error",
        message: `Glossary anchor mismatch for "${term}": expected ${expectedId}, got ${actualId}`,
      });
    }
  }

  const expertReportTerm = glossaryTerms.find((t) => t.term === "Expert Report");
  if (!expertReportTerm?.link) {
    issues.push({ level: "warn", message: "Glossary missing linked Expert Report term" });
  }

  for (const [from, to] of Object.entries(REMOVED_PAGE_REDIRECTS)) {
    if (SEO_SLUG_REDIRECTS[from] !== to) {
      issues.push({ level: "error", message: `Missing redirect ${from} → ${to}` });
    }
  }

  const requiredRedirects = [
    "/asylum-profiles/ahmadi-muslims",
    "/guides/ahmadi-asylum-pakistan",
    "/case-types/political-claim",
    "/what-is-a-pakistan-expert-witness",
  ];
  for (const path of requiredRedirects) {
    if (!SEO_SLUG_REDIRECTS[path]) {
      issues.push({ level: "warn", message: `Missing slug redirect for ${path}` });
    }
  }

  if (SEO_SLUG_REDIRECTS["/what-is-a-pakistan-expert-witness"] !== "/what-is-a-pakistan-expert-report") {
    issues.push({
      level: "error",
      message: "what-is-a-pakistan-expert-witness must redirect to /what-is-a-pakistan-expert-report",
    });
  }

  return issues;
}

export { REQUIRED_CPIN_SECTION_IDS };
