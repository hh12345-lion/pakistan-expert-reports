import { asylumProfiles } from "./asylum-profiles";
import { caseTypes } from "./case-types";

export type RelatedLink = { label: string; href: string };

const INSTRUCTION_LINKS: RelatedLink[] = [
  { label: "How to Instruct a Pakistan Expert Report", href: "/how-to-instruct" },
  { label: "Contact Us", href: "/contact" },
];

/** Appendix D: Profile Minimum Links Matrix (SEO-ARCHITECTURE.md) */
export function getProfileRelatedLinks(slug: string): RelatedLink[] {
  const map: Record<string, RelatedLink[]> = {
    "ahmadi-muslims-pakistan": [
      { label: "March 2025 Ahmadis CPIN Version 6.0", href: "/cpin-country-guidance#ahmadis" },
      { label: "Ahmadi Asylum Case Type", href: "/case-types/ahmadi-asylum-claims" },
      { label: "FTT Asylum Appeal", href: "/case-types/asylum-appeal-ftt" },
      { label: "Ahmadi Expert Evidence Guide", href: "/guides/ahmadi-asylum-pakistan-guide" },
      { label: "Ordinance XX 1984 (Glossary)", href: "/glossary#ordinance-xx-1984-ahmadis" },
      { label: "TLP (Glossary)", href: "/glossary#tlp-tehreek-e-labbaik-pakistan" },
    ],
    "blasphemy-accusations-pakistan": [
      { label: "Blasphemy CPIN Analysis", href: "/cpin-country-guidance#blasphemy" },
      { label: "Blasphemy Asylum Case Type", href: "/case-types/blasphemy-asylum-pakistan" },
      { label: "FTT Asylum Appeal", href: "/case-types/asylum-appeal-ftt" },
      { label: "Blasphemy Expert Evidence Guide", href: "/guides/blasphemy-pakistan-expert-guide" },
      { label: "Blasphemy Laws (Glossary)", href: "/glossary#blasphemy-laws-ss295-298-ppc" },
    ],
    "shia-muslims-pakistan": [
      { label: "July 2021 Shia Muslims CPIN", href: "/cpin-country-guidance#shia-muslims" },
      { label: "FTT Asylum Appeal", href: "/case-types/asylum-appeal-ftt" },
      { label: "Upper Tribunal Pakistan", href: "/case-types/upper-tribunal-pakistan" },
      { label: "Pakistan CPIN Guide for Solicitors", href: "/guides/pakistan-cpin-guide" },
    ],
    "women-honour-based-violence": [
      { label: "Women & VAWG CPIN Section", href: "/cpin-country-guidance#women-vawg" },
      { label: "Honour-Based Violence Case Type", href: "/case-types/honour-based-violence-pakistan" },
      { label: "FTT Asylum Appeal", href: "/case-types/asylum-appeal-ftt" },
      { label: "Honour-Based Violence Expert Guide", href: "/guides/honour-based-violence-pakistan" },
      { label: "Internal Relocation (Glossary)", href: "/glossary#internal-relocation-alternative" },
    ],
    "lgbtq-asylum-pakistan": [
      { label: "LGBTQ+ CPIN Section", href: "/cpin-country-guidance#lgbtq" },
      { label: "FTT Asylum Appeal", href: "/case-types/asylum-appeal-ftt" },
      { label: "Fresh Claims Pakistan", href: "/case-types/fresh-claims-pakistan" },
      { label: "Pakistan CPIN Guide", href: "/guides/pakistan-cpin-guide" },
      { label: "s377 Pakistan Penal Code (Glossary)", href: "/glossary#s377-pakistan-penal-code" },
    ],
    "political-persecution-pakistan": [
      { label: "Political Opposition CPIN Section", href: "/cpin-country-guidance#political-opposition" },
      { label: "Political Claim Case Type", href: "/case-types/political-claim-pakistan" },
      { label: "FTT Asylum Appeal", href: "/case-types/asylum-appeal-ftt" },
      { label: "Political Persecution Expert Guide", href: "/guides/pakistan-political-asylum-guide" },
      { label: "PTI (Glossary)", href: "/glossary#pti-pakistan-tehreek-e-insaf" },
    ],
    "christians-religious-minorities": [
      { label: "Blasphemy CPIN Section", href: "/cpin-country-guidance#blasphemy" },
      { label: "Blasphemy Asylum Case Type", href: "/case-types/blasphemy-asylum-pakistan" },
      { label: "FTT Asylum Appeal", href: "/case-types/asylum-appeal-ftt" },
      { label: "Blasphemy Expert Evidence Guide", href: "/guides/blasphemy-pakistan-expert-guide" },
    ],
    "actors-of-protection-pakistan": [
      { label: "Actors of Protection CPIN Section", href: "/cpin-country-guidance#actors-of-protection" },
      { label: "FTT Asylum Appeal", href: "/case-types/asylum-appeal-ftt" },
      { label: "Upper Tribunal Pakistan", href: "/case-types/upper-tribunal-pakistan" },
      { label: "Pakistan CPIN Guide for Solicitors", href: "/guides/pakistan-cpin-guide" },
      { label: "State Protection (Glossary)", href: "/glossary#state-protection" },
    ],
  };

  return [...(map[slug] ?? [{ label: "CPIN & Country Guidance", href: "/cpin-country-guidance" }]), ...INSTRUCTION_LINKS];
}

/** Rule B: Guide → profile, CPIN, instruction, contact */
export function getGuideRelatedLinks(slug: string): RelatedLink[] {
  const map: Record<string, RelatedLink[]> = {
    "pakistan-cpin-guide": [
      { label: "Ahmadi Muslims Profile", href: "/asylum-profiles/ahmadi-muslims-pakistan" },
      { label: "Blasphemy Accusations Profile", href: "/asylum-profiles/blasphemy-accusations-pakistan" },
      { label: "Shia Muslims Profile", href: "/asylum-profiles/shia-muslims-pakistan" },
      { label: "Women & Honour-Based Violence Profile", href: "/asylum-profiles/women-honour-based-violence" },
      { label: "LGBTQ+ Asylum Profile", href: "/asylum-profiles/lgbtq-asylum-pakistan" },
      { label: "Political Persecution Profile", href: "/asylum-profiles/political-persecution-pakistan" },
      { label: "Christians & Religious Minorities", href: "/asylum-profiles/christians-religious-minorities" },
      { label: "Actors of Protection", href: "/asylum-profiles/actors-of-protection-pakistan" },
      { label: "CPIN & Country Guidance Pillar", href: "/cpin-country-guidance" },
      { label: "CPIN Challenge Service", href: "/services/cpin-challenge" },
    ],
    "ahmadi-asylum-pakistan-guide": [
      { label: "Ahmadi Muslims Profile", href: "/asylum-profiles/ahmadi-muslims-pakistan" },
      { label: "March 2025 Ahmadis CPIN", href: "/cpin-country-guidance#ahmadis" },
      { label: "MN and Others [2012]", href: "/cpin-country-guidance#mn-and-others-2012" },
      { label: "Ahmadi Asylum Case Type", href: "/case-types/ahmadi-asylum-claims" },
      { label: "Ahmadiyya Verification (Glossary)", href: "/glossary#ahmadiyya-muslim-association-uk" },
    ],
    "blasphemy-pakistan-expert-guide": [
      { label: "Blasphemy Accusations Profile", href: "/asylum-profiles/blasphemy-accusations-pakistan" },
      { label: "Christians & Religious Minorities", href: "/asylum-profiles/christians-religious-minorities" },
      { label: "Blasphemy CPIN Section", href: "/cpin-country-guidance#blasphemy" },
      { label: "Blasphemy Asylum Case Type", href: "/case-types/blasphemy-asylum-pakistan" },
    ],
    "honour-based-violence-pakistan": [
      { label: "Women & Honour-Based Violence Profile", href: "/asylum-profiles/women-honour-based-violence" },
      { label: "Women & VAWG CPIN Section", href: "/cpin-country-guidance#women-vawg" },
      { label: "Honour-Based Violence Case Type", href: "/case-types/honour-based-violence-pakistan" },
    ],
    "pakistan-political-asylum-guide": [
      { label: "Political Persecution Profile", href: "/asylum-profiles/political-persecution-pakistan" },
      { label: "Political Opposition CPIN Section", href: "/cpin-country-guidance#political-opposition" },
      { label: "Political Claim Case Type", href: "/case-types/political-claim-pakistan" },
    ],
    "instructing-pakistan-expert": [
      { label: "Ahmadi Muslims Profile", href: "/asylum-profiles/ahmadi-muslims-pakistan" },
      { label: "Blasphemy Accusations Profile", href: "/asylum-profiles/blasphemy-accusations-pakistan" },
      { label: "Women & Honour-Based Violence Profile", href: "/asylum-profiles/women-honour-based-violence" },
      { label: "Political Persecution Profile", href: "/asylum-profiles/political-persecution-pakistan" },
      { label: "Qualifications", href: "/qualifications" },
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
    ],
  };

  return [...(map[slug] ?? [{ label: "CPIN & Country Guidance", href: "/cpin-country-guidance" }]), ...INSTRUCTION_LINKS];
}

export function getCaseTypeRelatedLinks(slug: string): RelatedLink[] {
  const ct = caseTypes.find((c) => c.slug === slug);
  const profileLinks: RelatedLink[] = (ct?.relatedProfiles ?? []).map((profileSlug) => {
    const profile = asylumProfiles.find((p) => p.slug === profileSlug);
    return {
      label: profile?.title ?? profileSlug,
      href: `/asylum-profiles/${profileSlug}`,
    };
  });

  return [
    { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
    ...profileLinks,
    ...INSTRUCTION_LINKS,
  ];
}

export function getCpinRelatedLinks(): RelatedLink[] {
  return [
    { label: "All Asylum Profiles", href: "/asylum-profiles" },
    { label: "Ahmadi Muslims", href: "/asylum-profiles/ahmadi-muslims-pakistan" },
    { label: "Blasphemy Accusations", href: "/asylum-profiles/blasphemy-accusations-pakistan" },
    { label: "Shia Muslims", href: "/asylum-profiles/shia-muslims-pakistan" },
    { label: "Women & Honour-Based Violence", href: "/asylum-profiles/women-honour-based-violence" },
    { label: "LGBTQ+ Asylum", href: "/asylum-profiles/lgbtq-asylum-pakistan" },
    { label: "Political Persecution", href: "/asylum-profiles/political-persecution-pakistan" },
    { label: "Christians & Religious Minorities", href: "/asylum-profiles/christians-religious-minorities" },
    { label: "Actors of Protection", href: "/asylum-profiles/actors-of-protection-pakistan" },
    { label: "All Solicitor Guides", href: "/guides" },
    { label: "Pakistan CPIN Guide", href: "/guides/pakistan-cpin-guide" },
    ...INSTRUCTION_LINKS,
  ];
}

/** Homepage transactional profile slugs (SEO-ARCHITECTURE.md Section 2) */
export const HOMEPAGE_FEATURED_PROFILE_SLUGS = [
  "ahmadi-muslims-pakistan",
  "blasphemy-accusations-pakistan",
  "women-honour-based-violence",
  "political-persecution-pakistan",
] as const;
