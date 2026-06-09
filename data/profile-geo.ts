export type ProfileGeoBlock =
  | { type: "table"; caption: string; headers: string[]; rows: string[][] }
  | { type: "list"; title: string; items: string[] }
  | { type: "steps"; title: string; steps: string[] };

const ahmadiGeo: ProfileGeoBlock[] = [
  {
    type: "table",
    caption: "Ahmadi legal position under Ordinance XX 1984 (summary for UK tribunals)",
    headers: ["Restriction", "Legal basis", "Risk on return"],
    rows: [
      ["Cannot call themselves Muslim", "Ordinance XX 1984", "Blasphemy charges, mob violence"],
      ["Cannot use Islamic terminology", "Ordinance XX 1984", "Police harassment, TLP attacks"],
      ["Cannot practise faith openly", "Ordinance XX 1984", "Community targeting, social exclusion"],
    ],
  },
  {
    type: "list",
    title: "TLP threat factors for Ahmadis in Pakistan",
    items: [
      "Tehreek-e-Labbaik Pakistan (TLP) mobilises blasphemy accusations against Ahmadis",
      "Mob violence following blasphemy allegations, often before police intervention",
      "Police complicity in harassment and failure to protect known Ahmadis",
      "March 2025 CPIN Version 6.0: state able but unwilling to protect Ahmadis",
      "Killing of Ahmadis on the rise according to current Home Office country guidance",
    ],
  },
  {
    type: "list",
    title: "Key sources for Ahmadi asylum expert reports",
    items: [
      "CPIN Pakistan: Ahmadis, Version 6.0, March 2025",
      "MN and Others (Ahmadis) Pakistan CG [2012] UKUT 00389",
      "Ahmadiyya Muslim Association UK verification procedure",
      "Home Office COI on blasphemy and religious minorities",
    ],
  },
];

const blasphemyGeo: ProfileGeoBlock[] = [
  {
    type: "table",
    caption: "Pakistan blasphemy law provisions (ss295 to 298 PPC)",
    headers: ["Section", "Offence", "Maximum penalty"],
    rows: [
      ["s295-C", "Blasphemy against Prophet Muhammad", "Death penalty"],
      ["s295-B", "Defiling the Quran", "Life imprisonment"],
      ["s298", "Insulting religious feelings", "Up to 10 years"],
    ],
  },
  {
    type: "list",
    title: "Blasphemy accusation risk factors in Pakistan",
    items: [
      "Blasphemy laws widely misused to settle personal disputes and target minorities",
      "Mob justice often precedes or follows police action regardless of charge outcome",
      "Acquittal does not remove risk from extremist groups who reject court decisions",
      "Ahmadis and Christians are primary targets of blasphemy allegations",
      "Police protection failures and judicial reluctance due to fear of retribution",
    ],
  },
];

const womenGeo: ProfileGeoBlock[] = [
  {
    type: "list",
    title: "Honour-based violence protection failures in Pakistan",
    items: [
      "Police frequently refuse to register FIRs in honour violence cases",
      "Courts often reluctant to prosecute family members in honour killing cases",
      "Honour killings, forced marriage, and domestic abuse remain widespread",
      "Internal relocation extremely difficult where family has nationwide reach",
      "Particular Social Group analysis required for women fleeing honour-based violence",
    ],
  },
];

const politicalGeo: ProfileGeoBlock[] = [
  {
    type: "list",
    title: "Political persecution risk factors (2025 to 2026)",
    items: [
      "PTI supporters face crackdown following 2023 to 2024 political events",
      "Journalists and human rights defenders targeted by state and intelligence agencies",
      "Enforced disappearances of Baloch nationalists, journalists, and activists",
      "UK-based political activity may increase visibility on return to Pakistan",
      "Expert reports assess individual profile and activities against current conditions",
    ],
  },
];

const profileGeoMap: Record<string, ProfileGeoBlock[]> = {
  "ahmadi-muslims-pakistan": ahmadiGeo,
  "blasphemy-accusations-pakistan": blasphemyGeo,
  "women-honour-based-violence": womenGeo,
  "political-persecution-pakistan": politicalGeo,
};

export function getProfileGeoContent(slug: string): ProfileGeoBlock[] {
  return profileGeoMap[slug] ?? [];
}
