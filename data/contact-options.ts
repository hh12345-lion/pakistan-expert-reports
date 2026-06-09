export const CASE_PROFILES = [
  "Ahmadi Muslims",
  "Blasphemy Accusations",
  "Shia Muslims",
  "Women / Honour-Based Violence",
  "LGBTQ+ Asylum",
  "Political Persecution (PTI / Journalists)",
  "Christians / Religious Minorities",
  "Failed Asylum / Risk on Return",
  "Other / Multiple",
] as const;

export const PROCEEDINGS = [
  "FTT Asylum Appeal",
  "Upper Tribunal",
  "Fresh Claim",
  "Deportation / Removal",
  "Other",
] as const;

export const FUNDING_OPTIONS = ["Legal Aid", "Privately Funded", "Unsure"] as const;

export const URGENCY_OPTIONS = [
  "Standard (2-3 weeks)",
  "Urgent (5 business days)",
  "Critical (48 hours)",
] as const;
