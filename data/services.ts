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
    title: "Country Condition Reports (General Pakistan)",
    navLabel: "Country Condition Reports",
    description:
      "Comprehensive Pakistan country condition reports for asylum appeals, covering state protection, internal relocation, and profile-specific risk analysis.",
    metaTitle: "Pakistan Country Condition Reports UK | Asylum Expert Evidence",
    metaDescription:
      "CPR Part 35 Pakistan country condition reports for UK asylum and immigration tribunals. State protection, internal relocation, and profile-specific analysis.",
    content: [
      "Pakistan country condition reports provide the independent, authoritative evidence UK immigration tribunals require to assess risk on return, state protection, and internal relocation for Pakistani asylum claimants.",
      "Reports address the specific factual matrix of each case, citing Home Office CPINs, MN and Others (Ahmadis) [2012] UKUT 00389, UNHCR sources, and field research. All reports comply with Immigration Tribunal Practice Direction paragraph 10.",
    ],
    relatedHref: "/asylum-profiles/actors-of-protection-pakistan",
    methodology: [
      { phase: "Case scoping", whatWeDo: "Identify asylum profile, relevant CPINs, and claim grounds", deliverable: "Scope confirmation and expert match" },
      { phase: "Research", whatWeDo: "Field research, Home Office COI, UNHCR, and primary sources", deliverable: "Source bibliography" },
      { phase: "Report drafting", whatWeDo: "OSCOLA-cited report addressing the specific claim matrix", deliverable: "Practice Direction compliant expert report" },
    ],
    faqs: [
      {
        question: "What should a Pakistan country condition report include?",
        answer:
          "Reports address profile-specific risk, state protection analysis, internal relocation feasibility, and consistency with current CPINs and country guidance, with OSCOLA-cited sources and field research.",
      },
      {
        question: "How long does a standard Pakistan country condition report take?",
        answer: "Typically 2 to 3 weeks from instruction. Urgent turnaround (5 business days) may be available subject to expert availability.",
      },
      {
        question: "Are Pakistan country condition reports Legal Aid compatible?",
        answer: "Yes. Most reports in asylum proceedings are Legal Aid funded. LAA prior authority is required before instruction.",
      },
    ],
  },
  {
    id: "ahmadi-asylum-reports",
    title: "Ahmadi Asylum Reports",
    navLabel: "Ahmadi Asylum Reports",
    description:
      "Specialist reports on Ordinance XX 1984, TLP mobilisation, blasphemy charges, the March 2025 Ahmadi CPIN, and MN and Others [2012] country guidance.",
    metaTitle: "Ahmadi Pakistan Asylum Expert Reports UK | Ordinance XX & CPIN",
    metaDescription:
      "Ahmadi Pakistan asylum expert reports for UK tribunals. Ordinance XX 1984, March 2025 CPIN Version 6.0, MN and Others [2012], TLP, and state protection analysis.",
    content: [
      "Ahmadi asylum claims from Pakistan require specialist expert evidence on Ordinance XX 1984, constitutional and penal code restrictions, TLP mobilisation, and blasphemy accusations under sections 295 to 298 of the Pakistan Penal Code.",
      "Expert reports assess whether the appellant's specific profile creates a real risk beyond the general CPIN position, consistent with MN and Others (Ahmadis) Pakistan CG [2012] UKUT 00389 and the March 2025 Ahmadi CPIN Version 6.0.",
    ],
    relatedHref: "/asylum-profiles/ahmadi-muslims-pakistan",
    methodology: [
      { phase: "Legal framework", whatWeDo: "Analyse Ordinance XX, blasphemy provisions, and TLP threat patterns", deliverable: "Legislative and doctrinal analysis section" },
      { phase: "Risk assessment", whatWeDo: "Community violence, police complicity, state protection availability", deliverable: "Risk on return analysis" },
      { phase: "Report", whatWeDo: "Profile-specific report citing MN and Others [2012] and March 2025 CPIN", deliverable: "Tribunal-ready expert report" },
    ],
    faqs: [
      {
        question: "What does the March 2025 Ahmadi CPIN say?",
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
    metaTitle: "Pakistan Blasphemy Expert Reports UK | ss295-298 PPC Evidence",
    metaDescription:
      "Pakistan blasphemy expert reports for UK tribunals. ss295 to 298 PPC, mob justice, acquittal risk, FIR misuse, and state protection analysis.",
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
    metaTitle: "Pakistan Honour-Based Violence Expert Reports UK | HBV Evidence",
    metaDescription:
      "Honour-based violence Pakistan expert reports for UK tribunals. Honour killing, watta satta, jirga, internal relocation for women, and state protection analysis.",
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
        question: "What HBV evidence do expert reports address?",
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
    metaTitle: "LGBTQ+ Pakistan Asylum Expert Reports UK | s377 & HJ (Iran)",
    metaDescription:
      "LGBTQ+ Pakistan asylum expert reports for UK tribunals. s377 PPC, khawaja sira, HJ (Iran) [2010] standard, and internal relocation analysis.",
    content: [
      "LGBTQ+ asylum claims from Pakistan require specialist expert evidence on section 377 of the Pakistan Penal Code, Sharia-influenced social attitudes, police harassment, and violence from family and non-state actors.",
      "Expert reports assess whether the appellant's specific profile creates a real risk that goes beyond general country conditions, consistent with the HJ (Iran) [2010] UKSC 31 standard on sexuality and the well-founded fear test.",
    ],
    relatedHref: "/asylum-profiles/lgbtq-asylum-pakistan",
    methodology: [
      { phase: "Legal framework", whatWeDo: "Analyse s377 PPC, enforcement practice, and khawaja sira context", deliverable: "Legislative analysis section" },
      { phase: "Risk assessment", whatWeDo: "Family violence, police harassment, NGO protection availability", deliverable: "Risk on return analysis" },
      { phase: "Report", whatWeDo: "HJ (Iran) consistent country conditions report", deliverable: "Tribunal-ready expert report" },
    ],
    faqs: [
      {
        question: "How do LGBTQ+ expert reports approach sexuality?",
        answer:
          "Experts provide country conditions context only. They do not determine the claimant's sexuality. Reports address criminalisation, enforcement, and risk on return under the HJ (Iran) [2010] standard.",
      },
      {
        question: "What is the legal position for LGBTQ+ people in Pakistan?",
        answer:
          "Section 377 of the Pakistan Penal Code criminalises certain same-sex conduct. Social attitudes remain deeply hostile, and LGBTQ+ individuals face violence from family, community, and state actors including police.",
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
    metaTitle: "Pakistan Political Persecution Expert Reports UK | PTI Risk",
    metaDescription:
      "Political persecution Pakistan expert reports for UK tribunals. PTI supporters, enforced disappearances, arrest risk, and state protection analysis.",
    content: [
      "Political persecution claims from Pakistan frequently involve PTI supporters, activists, journalists, and critics of the military establishment. Since 2022, large-scale arrests, detention, and enforced disappearances have targeted political opposition figures and their supporters.",
      "Expert reports assess the individual's profile, including UK diaspora activity, social media presence, and prior detention, against current enforcement patterns and the availability of effective state protection.",
    ],
    relatedHref: "/asylum-profiles/political-persecution-pakistan",
    methodology: [
      { phase: "Profile analysis", whatWeDo: "Assess political affiliation, visibility, and UK activity", deliverable: "Political risk profile summary" },
      { phase: "Country research", whatWeDo: "Current arrest patterns, detention conditions, enforced disappearances", deliverable: "Country conditions analysis" },
      { phase: "Report", whatWeDo: "Profile-specific risk on return assessment", deliverable: "Tribunal-ready expert report" },
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
      "Independent analysis challenging Home Office CPIN findings with field research and profile-specific assessment beyond generic CPIN positions.",
    metaTitle: "Pakistan CPIN Challenge Expert Reports UK | Independent Analysis",
    metaDescription:
      "Challenge Home Office Pakistan CPIN findings with independent expert reports. Field research, updated evidence, and profile-specific analysis for UK tribunals.",
    content: [
      "CPIN challenge reports provide independent analysis where the Home Office CPIN position does not reflect the appellant's specific profile or where country conditions have materially changed.",
      "Common challenge areas include the March 2025 Ahmadi CPIN (Version 6.0), actors of protection, internal relocation for women, political opposition risk, and blasphemy acquittal safety.",
    ],
    relatedHref: "/cpin-country-guidance",
    methodology: [
      { phase: "CPIN review", whatWeDo: "Identify relevant CPIN findings and gaps", deliverable: "CPIN analysis memo" },
      { phase: "Independent research", whatWeDo: "Field research, NGO reports, updated country evidence", deliverable: "Challenge evidence base" },
      { phase: "Report", whatWeDo: "Profile-specific analysis beyond CPIN generalisations", deliverable: "CPIN challenge expert report" },
    ],
    faqs: [
      {
        question: "When should solicitors instruct a CPIN challenge report?",
        answer:
          "When the appellant's profile differs from the general CPIN position, when CPINs are outdated, or when field research contradicts Home Office findings on state protection or internal relocation.",
      },
      {
        question: "Can experts simply reproduce CPIN content?",
        answer:
          "No. Reports that reproduce CPIN without independent analysis fail the tribunal standard. Challenge reports must provide independent, sourced analysis addressing the individual appellant's circumstances.",
      },
      {
        question: "Which Pakistan CPINs are most frequently challenged?",
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
      "Tribunal attendance and oral evidence for country guidance cases, Upper Tribunal proceedings, and directed expert attendance.",
    metaTitle: "Pakistan Expert Report Oral Evidence UK | Tribunal Attendance",
    metaDescription:
      "Pakistan expert report oral evidence and tribunal attendance for country guidance cases, Upper Tribunal proceedings, and directed expert evidence.",
    content: [
      "Oral evidence is most common in Upper Tribunal country guidance cases or where the tribunal directs expert attendance. Pakistan Expert Reports experts are experienced in giving evidence and cross-examination on Pakistan country conditions.",
      "Experts prepare for oral evidence by reviewing the report, letter of instruction, tribunal bundle, and anticipated cross-examination on methodology and sources.",
    ],
    relatedHref: "/case-types/upper-tribunal-pakistan",
    methodology: [
      { phase: "Preparation", whatWeDo: "Review report, bundle, and anticipated questions", deliverable: "Oral evidence preparation" },
      { phase: "Tribunal attendance", whatWeDo: "Give evidence and respond to cross-examination", deliverable: "Oral evidence at hearing" },
      { phase: "Follow-up", whatWeDo: "Written answers if directed post-hearing", deliverable: "Supplementary written responses" },
    ],
    faqs: [
      {
        question: "When is oral evidence required for Pakistan cases?",
        answer:
          "Most commonly in Upper Tribunal country guidance cases or where the tribunal directs. First-tier Tribunal cases may also require oral evidence on complex country guidance points such as MN and Others [2012].",
      },
      {
        question: "How should solicitors prepare experts for oral evidence?",
        answer:
          "Provide the full tribunal bundle, grounds of appeal, Home Office decision, and any country guidance decisions. Confirm hearing date and format (in person or video) well in advance.",
      },
      {
        question: "Is there an additional fee for tribunal attendance?",
        answer: "Yes. Oral evidence fees are quoted separately based on hearing duration, preparation time, and travel if required.",
      },
    ],
  },
];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
