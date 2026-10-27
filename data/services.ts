import type { FAQ } from "@/lib/schema";

export type ServicePhase = {
  phase: string;
  whatWeDo: string;
  deliverable: string;
};

export type Service = {
  id: string;
  title: string;
  navLabel: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  content: string[];
  relatedHref: string;
  methodology: ServicePhase[];
  faqs: FAQ[];
};

export const services: Service[] = [
  {
    id: "country-condition-reports",
    title: "Pakistan Country Condition Reports",
    navLabel: "Country Condition Reports",
    description:
      "Reports on conditions in Pakistan for any asylum profile, answering whether the police and courts would protect the appellant and whether a move to another city would be safe.",
    metaTitle: "Pakistan Country Condition Reports | Asylum Expert Evidence",
    metaDescription:
      "Pakistan country reports for tribunals, written to CPR Part 35: police and court protection, relocation to Karachi, Lahore or Islamabad, and the appellant's own risk profile.",
    content: [
      "Most Pakistani refusal letters turn on two arguments: that the police will protect the appellant, and that they could move to a large city. A country condition report tests both against what the evidence shows for someone with the appellant's profile.",
      "Each report works from the facts of the case and draws on the Pakistan CPINs, UNHCR material, field research and, where relevant, MN and Others (Ahmadis) [2012] UKUT 00389. Reports meet paragraph 10 of the Immigration Tribunal Practice Direction.",
    ],
    relatedHref: "/asylum-profiles/actors-of-protection-pakistan",
    methodology: [
      { phase: "Case scoping", whatWeDo: "Pin down the Pakistani profile, the CPINs relied on and the Convention ground", deliverable: "Scope confirmation and expert match" },
      { phase: "Research", whatWeDo: "Pakistani press and field sources checked against Home Office COI and UNHCR", deliverable: "Source bibliography" },
      { phase: "Report drafting", whatWeDo: "Report answering the instruction questions, with OSCOLA citations", deliverable: "Report meeting the tribunal's practice direction" },
    ],
    faqs: [
      {
        question: "What goes into a Pakistan country condition report?",
        answer:
          "The risk to someone with the appellant's profile, whether Pakistani police and courts would protect them, whether relocation within Pakistan is realistic, and how the evidence compares with current CPINs and country guidance, all sourced and cited in OSCOLA form.",
      },
      {
        question: "When will the report be ready?",
        answer: "Usually 2 to 3 weeks after instruction. For tight deadlines, a report in 5 business days may be possible if an author is free.",
      },
      {
        question: "Can the report be paid for by Legal Aid?",
        answer: "Yes, and most are. Apply for prior authority from the Legal Aid Agency before instructing us.",
      },
    ],
  },
  {
    id: "ahmadi-asylum-reports",
    title: "Ahmadi Asylum Reports",
    navLabel: "Ahmadi Asylum Reports",
    description:
      "Specialist reports on Ordinance XX 1984, TLP mobilisation, blasphemy charges, the March 2025 Ahmadi CPIN, and MN and Others [2012] country guidance.",
    metaTitle: "Ahmadi Pakistan Asylum Expert Reports | Ordinance XX & CPIN",
    metaDescription:
      "Ahmadi Pakistan asylum expert reports for tribunals. Ordinance XX 1984, March 2025 CPIN Version 6.0, MN and Others [2012], TLP, and state protection analysis.",
    content: [
      "Ahmadi asylum claims from Pakistan require specialist expert evidence on Ordinance XX 1984, constitutional and penal code restrictions, TLP mobilisation, and blasphemy accusations under sections 295 to 298 of the Pakistan Penal Code.",
      "The key question in most Ahmadi appeals is whether this appellant practises or would practise their faith openly. Reports apply MN and Others (Ahmadis) Pakistan CG [2012] UKUT 00389 and the March 2025 Ahmadi CPIN Version 6.0 to that question for the individual, rather than restating the general position.",
    ],
    relatedHref: "/asylum-profiles/ahmadi-muslims-pakistan",
    methodology: [
      { phase: "Legal framework", whatWeDo: "Analyse Ordinance XX, blasphemy provisions, and TLP threat patterns", deliverable: "Legislative and doctrinal analysis section" },
      { phase: "Risk assessment", whatWeDo: "Community violence, police complicity, state protection availability", deliverable: "Risk on return analysis" },
      { phase: "Report", whatWeDo: "Profile-specific report citing MN and Others [2012] and March 2025 CPIN", deliverable: "Tribunal-ready expert report" },
    ],
    faqs: [
      {
        question: "How does the March 2025 Ahmadi CPIN affect a report?",
        answer:
          "Version 6.0 confirms the state is able but unwilling to protect Ahmadis. Killings are on the rise and police are often complicit. Expert reports assess whether the appellant's profile creates a real risk beyond this general position.",
      },
      {
        question: "How do Ahmadi expert reports address verification?",
        answer:
          "Reports may reference Ahmadiyya Muslim Association UK verification where instructed, but experts provide independent country conditions analysis. They do not determine religious identity or credibility.",
      },
      {
        question: "Is MN and Others [2012] still relevant?",
        answer:
          "Yes. The Upper Tribunal country guidance in MN and Others (Ahmadis) Pakistan CG [2012] UKUT 00389 remains authoritative. The March 2025 CPIN updates factual conditions but does not displace the legal framework.",
      },
    ],
  },
  {
    id: "blasphemy-expert-reports",
    title: "Blasphemy Expert Reports",
    navLabel: "Blasphemy Expert Reports",
    description:
      "Expert evidence on blasphemy law misuse under ss295 to 298 PPC, mob violence, acquittal risk, and TLP mobilisation.",
    metaTitle: "Pakistan Blasphemy Expert Reports | ss295-298 PPC Evidence",
    metaDescription:
      "Pakistan blasphemy expert reports for tribunals. ss295 to 298 PPC, mob justice, acquittal risk, FIR misuse, and state protection analysis.",
    content: [
      "Blasphemy accusations in Pakistan are frequently weaponised in personal disputes, land conflicts, and sectarian campaigns. Sections 295 to 298 of the Pakistan Penal Code carry severe penalties, and acquittal does not guarantee safety from mob violence or retaliatory prosecution.",
      "Expert reports assess the appellant's specific profile, including prior FIRs, public accusations, and community hostility, against current enforcement patterns and the limited availability of effective state protection.",
    ],
    relatedHref: "/asylum-profiles/blasphemy-accusations-pakistan",
    methodology: [
      { phase: "Legal analysis", whatWeDo: "Examine ss295 to 298 PPC, bail practice, and trial outcomes", deliverable: "Blasphemy law framework section" },
      { phase: "Risk assessment", whatWeDo: "Mob violence, TLP mobilisation, acquittal risk, and FIR patterns", deliverable: "Profile-specific risk analysis" },
      { phase: "Report", whatWeDo: "Country conditions report on blasphemy misuse and return risk", deliverable: "Tribunal-ready expert report" },
    ],
    faqs: [
      {
        question: "How are blasphemy laws misused in Pakistan?",
        answer:
          "Accusations are commonly lodged to settle personal disputes, seize property, or target religious minorities. FIRs may be registered without credible evidence, and accused persons face prolonged detention, mob violence, and social ostracism even before trial.",
      },
      {
        question: "Does acquittal mean an appellant is safe on return?",
        answer:
          "No. Acquittal does not remove community hostility or the risk of retaliatory accusations. Expert reports address ongoing mob violence risk, TLP mobilisation, and the limits of state protection after acquittal.",
      },
      {
        question: "What blasphemy evidence do expert reports address?",
        answer:
          "Reports cover ss295 to 298 PPC framework, FIR registration practice, trial and bail outcomes, mob justice patterns, TLP activity, and whether effective state protection is realistically available for the appellant's profile.",
      },
    ],
  },
  {
    id: "honour-based-violence-reports",
    title: "Honour-Based Violence Reports",
    navLabel: "Honour-Based Violence Reports",
    description:
      "Expert evidence on honour killing, watta satta, jirga decisions, and state protection for women and girls at risk.",
    metaTitle: "Pakistan Honour-Based Violence Expert Reports | HBV Evidence",
    metaDescription:
      "Honour-based violence Pakistan expert reports for tribunals. Honour killing, watta satta, jirga, internal relocation for women, and state protection analysis.",
    content: [
      "Honour-based violence in Pakistan encompasses honour killing, forced marriage, watta satta exchange marriages, and jirga-imposed punishments. Women who resist family control, seek independence, or are perceived to have damaged family honour face serious risk from family and community actors.",
      "Expert reports provide locality-specific analysis of HBV prevalence, police and court responses, shelter availability, and whether internal relocation within Pakistan is safe and reasonable for the individual appellant.",
    ],
    relatedHref: "/asylum-profiles/women-honour-based-violence",
    methodology: [
      { phase: "Profile analysis", whatWeDo: "Assess family dynamics, prior threats, and jirga involvement", deliverable: "HBV risk profile summary" },
      { phase: "Protection assessment", whatWeDo: "Police response, shelter access, prosecution outcomes", deliverable: "State protection analysis" },
      { phase: "Report", whatWeDo: "Internal relocation and unduly harsh test assessment for women", deliverable: "Tribunal-ready expert report" },
    ],
    faqs: [
      {
        question: "Can women internally relocate in Pakistan?",
        answer:
          "Internal relocation depends on the appellant's profile, family reach, and support networks. For many women at risk of honour-based violence, relocation is neither safe nor reasonable because family and jirga networks operate nationally.",
      },
      {
        question: "What is watta satta and how does it affect HBV claims?",
        answer:
          "Watta satta is an exchange marriage practice linking two families. A woman seeking to leave an abusive marriage may trigger retaliation against her natal family, increasing honour-based violence risk. Expert reports address this intersection where relevant.",
      },
      {
        question: "Which honour-based violence issues does a report cover?",
        answer:
          "Reports cover honour killing prevalence, jirga practice, police and court responses, shelter availability, forced marriage risk, and whether state protection is effective for the appellant's specific circumstances.",
      },
    ],
  },
  {
    id: "lgbtq-asylum-pakistan",
    title: "LGBTQ+ Asylum Reports",
    navLabel: "LGBTQ+ Asylum Reports",
    description:
      "Specialist reports on s377 Pakistan Penal Code, khawaja sira communities, social attitudes, and state protection under the HJ (Iran) standard.",
    metaTitle: "LGBTQ+ Pakistan Asylum Expert Reports | s377 & HJ (Iran)",
    metaDescription:
      "LGBTQ+ Pakistan asylum expert reports for tribunals. s377 PPC, khawaja sira, HJ (Iran) [2010] standard, and internal relocation analysis.",
    content: [
      "LGBTQ+ asylum claims from Pakistan require specialist expert evidence on section 377 of the Pakistan Penal Code, Sharia-influenced social attitudes, police harassment, and violence from family and non-state actors.",
      "For Pakistani LGBTQ+ appellants, the report looks at how the appellant would live on return and why, which is the question HJ (Iran) [2010] UKSC 31 requires, and documents the risk from family, community and police.",
    ],
    relatedHref: "/asylum-profiles/lgbtq-asylum-pakistan",
    methodology: [
      { phase: "Legal framework", whatWeDo: "Analyse s377 PPC, enforcement practice, and khawaja sira context", deliverable: "Legislative analysis section" },
      { phase: "Risk assessment", whatWeDo: "Family violence, police harassment, NGO protection availability", deliverable: "Risk on return analysis" },
      { phase: "Report", whatWeDo: "Report structured around the HJ (Iran) questions", deliverable: "Tribunal-ready expert report" },
    ],
    faqs: [
      {
        question: "Does the report decide whether the appellant is gay?",
        answer:
          "No. Sexuality is a matter for the tribunal. The report explains the law in Pakistan, how it is enforced, and the risk on return for someone with the identity the appellant describes, applying HJ (Iran) [2010].",
      },
      {
        question: "What does Pakistani law say about same-sex relationships?",
        answer:
          "Same-sex conduct is an offence under section 377 of the Pakistan Penal Code. Beyond the law, LGBTQ+ Pakistanis report violence from relatives, neighbours and police, and the report documents both.",
      },
      {
        question: "Can LGBTQ+ Pakistanis internally relocate?",
        answer:
          "Internal relocation viability depends on the appellant's profile, family reach, and visibility. For many LGBTQ+ claimants, family and community networks operate nationally, limiting safe relocation options.",
      },
    ],
  },
  {
    id: "political-persecution-reports",
    title: "Political Persecution Reports",
    navLabel: "Political Persecution Reports",
    description:
      "Profile-specific risk assessment for PTI supporters, political activists, journalists, and critics facing arrest, detention, or enforced disappearance.",
    metaTitle: "Pakistan Political Persecution Expert Reports | PTI Risk",
    metaDescription:
      "Political persecution Pakistan expert reports for tribunals. PTI supporters, enforced disappearances, arrest risk, and state protection analysis.",
    content: [
      "Political persecution claims from Pakistan frequently involve PTI supporters, activists, journalists, and critics of the military establishment. Since 2022, large-scale arrests, detention, and enforced disappearances have targeted political opposition figures and their supporters.",
      "Expert reports assess the individual's profile, including diaspora activity, social media presence, and prior detention, against current enforcement patterns and the availability of effective state protection.",
    ],
    relatedHref: "/asylum-profiles/political-persecution-pakistan",
    methodology: [
      { phase: "Profile analysis", whatWeDo: "Assess political affiliation, visibility, and diaspora activity", deliverable: "Political risk profile summary" },
      { phase: "Country research", whatWeDo: "Current arrest patterns, detention conditions, enforced disappearances", deliverable: "Country conditions analysis" },
      { phase: "Report", whatWeDo: "Assessment of risk on return for this appellant", deliverable: "Tribunal-ready expert report" },
    ],
    faqs: [
      {
        question: "What risk do PTI supporters face on return?",
        answer:
          "PTI supporters and activists face arrest, detention, and enforced disappearance. Risk extends to individuals with UK-based political activity, social media posts, and participation in diaspora demonstrations.",
      },
      {
        question: "Does UK-based political activity create risk on return?",
        answer:
          "Yes. Pakistani authorities monitor diaspora political activity. Expert reports assess whether the appellant's UK-based PTI involvement would bring them to the attention of authorities on return.",
      },
      {
        question: "What political persecution evidence do expert reports address?",
        answer:
          "Reports cover PTI crackdown patterns, enforced disappearances, detention conditions, bail practice, media freedom restrictions, and whether state protection is available for the appellant's profile.",
      },
    ],
  },
  {
    id: "cpin-challenge",
    title: "CPIN Challenge Reports",
    navLabel: "CPIN Challenge Reports",
    description:
      "Reports that test the Home Office's Pakistan CPINs against newer evidence and the appellant's own profile.",
    metaTitle: "Pakistan CPIN Challenge Expert Reports | Independent Analysis",
    metaDescription:
      "Where a refusal leans on a Pakistan CPIN, these reports show the tribunal what newer and more specific evidence says, from Ahmadi cases to state protection.",
    content: [
      "Pakistan CPINs are updated only every few years, while conditions for Ahmadis, political activists and others can shift quickly. A CPIN challenge report sets out where the CPIN no longer reflects the evidence or misses the appellant's profile.",
      "Common challenge areas include the March 2025 Ahmadi CPIN (Version 6.0), actors of protection, internal relocation for women, political opposition risk, and blasphemy acquittal safety.",
    ],
    relatedHref: "/cpin-country-guidance",
    methodology: [
      { phase: "CPIN review", whatWeDo: "List the CPIN passages relied on and where they fall short", deliverable: "CPIN analysis memo" },
      { phase: "Independent research", whatWeDo: "Gather Pakistani field sources, NGO reporting and newer data", deliverable: "Challenge evidence base" },
      { phase: "Report", whatWeDo: "Apply the evidence to the appellant rather than the general case", deliverable: "CPIN challenge expert report" },
    ],
    faqs: [
      {
        question: "When is a CPIN challenge report worth commissioning?",
        answer:
          "When the refusal relies on a Pakistan CPIN that is out of date, that does not cover someone like the appellant, or whose view of police protection or relocation is contradicted by more recent reporting.",
      },
      {
        question: "Is it enough for a report to quote the CPIN?",
        answer:
          "No. Tribunals give little weight to a report that repeats the CPIN. The value of a challenge report is its own sourced analysis of the appellant's situation.",
      },
      {
        question: "Which Pakistan CPINs come up most in challenges?",
        answer:
          "Ahmadis (March 2025 Version 6.0), actors of protection, internal relocation for women, political opposition, and blasphemy-related risk on return after acquittal.",
      },
    ],
  },
  {
    id: "oral-evidence",
    title: "Expert Report Oral Evidence",
    navLabel: "Oral Evidence",
    description:
      "The report's author attends the hearing to explain the Pakistan evidence and answer questions when the tribunal asks for it.",
    metaTitle: "Pakistan Expert Report Oral Evidence | Tribunal Attendance",
    metaDescription:
      "Authors of Pakistan country reports available to give evidence at First-tier and Upper Tribunal hearings, including country guidance cases.",
    content: [
      "Our authors have given evidence on Pakistan before tribunals and are used to being questioned on it. Attendance is most often needed in Upper Tribunal country guidance cases or when a judge directs it.",
      "Before the hearing, the author rereads the report, the instructions and the bundle, and prepares for questions about their sources and method.",
    ],
    relatedHref: "/case-types/upper-tribunal-pakistan",
    methodology: [
      { phase: "Preparation", whatWeDo: "Prepare on the report, bundle and likely questions", deliverable: "Oral evidence preparation" },
      { phase: "Tribunal attendance", whatWeDo: "Attend, give evidence and answer questions", deliverable: "Oral evidence at hearing" },
      { phase: "Follow-up", whatWeDo: "Answer any written questions the tribunal sets afterwards", deliverable: "Supplementary written responses" },
    ],
    faqs: [
      {
        question: "Will the author need to attend the hearing?",
        answer:
          "Usually only in Upper Tribunal country guidance cases or when directed. A First-tier hearing may also call for it where a difficult point arises, for example on applying MN and Others [2012].",
      },
      {
        question: "What does the author need before the hearing?",
        answer:
          "The full bundle, the grounds of appeal, the Home Office decision and any country guidance cases, plus the hearing date and whether it is in person or by video, as early as possible.",
      },
      {
        question: "Does attending the hearing cost extra?",
        answer: "Yes. Attendance is quoted separately, depending on preparation time, the length of the hearing and any travel.",
      },
    ],
  },
];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
