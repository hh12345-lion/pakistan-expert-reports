import type { FAQ } from "@/lib/schema";

export type AsylumProfile = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string[];
  faqs: FAQ[];
  relatedCaseTypes: string[];
};

export const asylumProfiles: AsylumProfile[] = [
  {
    slug: "ahmadi-muslims-pakistan",
    title: "Ahmadi Muslims Pakistan",
    metaTitle: "Ahmadi Muslim Expert Report UK | Pakistan Asylum Evidence & CPIN 2025",
    metaDescription:
      "Ahmadi Muslim expert report for UK asylum tribunals. Ordinance XX 1984, TLP mob violence, March 2025 CPIN Version 6.0, MN and Others [2012], and Ahmadiyya verification.",
    h1: "Ahmadi Muslim Expert Report UK | Pakistan Asylum Evidence",
    content: [
      "Ahmadi Muslims in Pakistan face a distinct legal and social persecution framework. Under Ordinance XX of 1984, Ahmadis are legally prohibited from calling themselves Muslim, using Islamic terminology, or practising their faith openly. Violations carry criminal penalties and expose Ahmadis to blasphemy charges under sections 295 to 298 of the Pakistan Penal Code. Known Ahmadis face public hostility and violence from extremist groups including Tehreek-e-Labbaik Pakistan (TLP), with mob attacks, harassment, and targeted killings on the rise.",
      "The March 2025 Home Office CPIN on Ahmadis, Version 6.0, confirms that while the state is able to protect Ahmadis in principle, it is generally unwilling to do so. Police are complicit in harassment, courts do not apply correct standards in blasphemy cases, and judges are reluctant to decide blasphemy matters due to fear of retribution. MN and Others (Ahmadis: country conditions) Pakistan CG [2012] UKUT 00389 remains the leading country guidance case, establishing that Ahmadis face a real risk of persecution in Pakistan.",
      "Expert reports provide profile-specific analysis for UK immigration tribunals, assessing the appellant's visibility, community involvement, and risk on return against current country conditions. Reports address Ahmadiyya Muslim Association UK verification procedures, TLP blasphemy mob violence, police complicity, and the gap between formal legal protections and practical protection availability. Early instruction allows sufficient time for verification and granular country analysis consistent with Immigration Tribunal Practice Direction paragraph 10.",
    ],
    faqs: [
      {
        question: "What is the legal position of Ahmadi Muslims in Pakistan?",
        answer:
          "Ahmadis face public hostility and violence from extremists including TLP; the community faces religious restrictions including being unable to openly celebrate festivals like Eid; known Ahmadis are vulnerable to mob attacks. Ahmadis are legally prohibited from calling themselves Muslim, using Islamic terminology, or practising their faith openly under Ordinance XX 1984. Violations carry criminal penalties and expose Ahmadis to blasphemy charges.",
      },
      {
        question: "What does the March 2025 CPIN say about Ahmadis?",
        answer:
          "The March 2025 CPIN Version 6.0 confirms that while the state is able to protect Ahmadis in principle, it is generally unwilling to do so. Police are complicit in harassment, courts do not apply correct standards in blasphemy cases, and judges are reluctant to decide blasphemy cases due to fear of retribution. Expert reports assess the individual appellant's profile and visibility against these confirmed country conditions.",
      },
    ],
    relatedCaseTypes: ["ahmadi-asylum-claims", "asylum-appeal-ftt", "upper-tribunal-pakistan"],
  },
  {
    slug: "blasphemy-accusations-pakistan",
    title: "Blasphemy Accusations Pakistan",
    metaTitle: "Blasphemy Accusation Expert Report UK | Pakistan Asylum Reports",
    metaDescription:
      "Blasphemy accusation expert report for UK asylum tribunals. Sections 295 to 298 PPC, death penalty under s295-C, mob violence, police failures, and acquittal risk analysis.",
    h1: "Blasphemy Accusation Expert Report UK | Pakistan Asylum Evidence",
    content: [
      "Pakistan's blasphemy laws, contained in sections 295 to 298 of the Pakistan Penal Code, carry severe penalties including the death penalty under section 295-C for blasphemy against the Prophet Muhammad. These laws are widely misused to settle personal disputes, target religious minorities, and suppress dissent. Ahmadis and Christians are among the primary targets, but accusations affect individuals across religious and social backgrounds.",
      "State protection for those accused of blasphemy is generally inadequate. Police frequently fail to protect accused individuals from mob violence, and judicial processes are compromised by extremist pressure and fear of retribution among judges. Even where charges are dropped or defendants are acquitted, individuals often face continuing risk from extremist groups who reject court outcomes and pursue vigilante violence.",
      "Expert reports analyse the specific circumstances of a blasphemy accusation, the appellant's profile and visibility, and whether effective state protection is realistically available given police and judicial complicity. Reports address mob justice patterns, the distinction between formal acquittal and genuine protection, and the intersection of blasphemy claims with Ahmadi, Christian, and other minority persecution profiles in UK tribunal proceedings.",
    ],
    faqs: [
      {
        question: "How are blasphemy laws misused in Pakistan?",
        answer:
          "Pakistan's blasphemy laws, including s295-C which carries the death penalty for blasphemy against the Prophet Muhammad, are widely misused to settle personal disputes, target religious minorities, and suppress dissent. Expert reports analyse the specific circumstances of a blasphemy accusation, the appellant's profile, and whether effective state protection is realistically available given police and judicial complicity.",
      },
      {
        question: "Does an acquittal in Pakistan provide protection from mob violence?",
        answer:
          "No. Individuals acquitted of blasphemy charges often face continuing risk from extremist groups who disagree with the court's decision and may use vigilante violence. Expert reports address whether acquittal provides genuine protection or merely legal clearance that fails to address the ongoing risk.",
      },
    ],
    relatedCaseTypes: ["blasphemy-asylum-pakistan", "asylum-appeal-ftt", "fresh-claims-pakistan"],
  },
  {
    slug: "shia-muslims-pakistan",
    title: "Shia Muslims Pakistan",
    metaTitle: "Shia Muslim Expert Report UK | Pakistan Asylum Reports & Sectarian Risk",
    metaDescription:
      "Shia Muslim expert report for UK asylum tribunals. ASWJ and LeJ sectarian violence, Hazara persecution in Balochistan, July 2021 CPIN, and state protection analysis.",
    h1: "Shia Muslim Expert Report UK | Pakistan Asylum Evidence",
    content: [
      "Shia Muslims in Pakistan face targeted violence from Sunni extremist groups, particularly Ahle Sunnat Wal Jamaat (ASWJ), formerly Sipah-e-Sahaba Pakistan (SSP), and Lashkar-e-Jhangvi (LeJ). Sectarian killings, bomb attacks on Shia congregations, and targeted assassinations of community leaders remain a serious concern across Punjab, Sindh, and Khyber Pakhtunkhwa.",
      "Hazara Shia in Quetta, Balochistan face particular danger from sustained bomb attacks, targeted killings, and forced displacement. The July 2021 Home Office CPIN on Shia Muslims confirms sectarian risk and limited state protection. While the state has taken some action against sectarian groups, enforcement is inadequate and attacks continue with impunity in many areas.",
      "Expert reports provide community-specific and region-specific risk analysis for UK immigration tribunals. Reports assess the appellant's sect, geographic origin, visibility within the Shia community, and the practical availability of state protection in their specific location. Analysis addresses both refugee convention persecution grounds and the adequacy of internal relocation within Pakistan for Shia profiles at heightened risk.",
    ],
    faqs: [
      {
        question: "What risks do Shia Muslims face in Pakistan?",
        answer:
          "Shia Muslims in Pakistan face targeted violence from Sunni extremist groups, particularly ASWJ (Ahle Sunnat Wal Jamaat), formerly SSP. Hazara Shia in Quetta, Balochistan face particular danger from bomb attacks, targeted killings, and forced displacement. Expert reports provide community-specific and region-specific risk analysis.",
      },
      {
        question: "Does state protection exist for Shia Muslims?",
        answer:
          "State protection for Shia Muslims is limited and inconsistent. While the state has taken some action against sectarian groups, enforcement is inadequate and attacks continue. Expert reports assess the practical availability of protection for the individual appellant's specific profile and location.",
      },
    ],
    relatedCaseTypes: ["asylum-appeal-ftt", "upper-tribunal-pakistan", "fresh-claims-pakistan"],
  },
  {
    slug: "women-honour-based-violence",
    title: "Women & Honour-Based Violence Pakistan",
    metaTitle: "Honour-Based Violence Expert Report UK | Pakistan Women Asylum Reports",
    metaDescription:
      "Women and honour-based violence expert report for UK asylum tribunals. Honour killings, forced marriage, police FIR failures, particular social group analysis, and internal relocation.",
    h1: "Women & Honour-Based Violence Expert Report UK | Pakistan",
    content: [
      "Women in Pakistan face serious risks from honour-based violence, including honour killings, forced marriage, domestic abuse, and retaliation for perceived breaches of family or community honour. While Pakistan has enacted legislation against honour killings and domestic violence, enforcement is deeply inconsistent. Police frequently refuse to register First Information Reports (FIRs) in honour violence cases, and courts are often reluctant to prosecute family members.",
      "Particular Social Group (PSG) analysis is central to women fleeing honour-based violence in UK asylum proceedings. Expert reports assess the nature of the honour threat, the family's resources and reach, regional enforcement patterns, and the role of jirga (tribal council) decisions in perpetuating impunity. Social norms in many communities continue to prioritise family honour over individual safety.",
      "Internal relocation for women fleeing honour-based violence is extremely difficult in Pakistan, particularly where the family has resources and connections nationwide. Expert reports assess whether the family's reach, the nature of the honour threat, and the appellant's personal circumstances make internal relocation a viable and not unduly harsh option. Reports provide the granular, family-context-specific analysis tribunals require under current Violence Against Women and Girls (VAWG) country conditions.",
    ],
    faqs: [
      {
        question: "What protection exists for women fleeing honour-based violence in Pakistan?",
        answer:
          "While Pakistan has enacted legislation against honour killings and domestic violence, enforcement is deeply inconsistent. Police frequently refuse to register FIRs (First Information Reports) in honour violence cases; courts are often reluctant to prosecute family members; and social norms perpetuate impunity. Expert reports provide regional and family-context-specific analysis of the protection available in the individual appellant's situation.",
      },
      {
        question: "Can women internally relocate within Pakistan to escape honour-based violence?",
        answer:
          "Internal relocation for women fleeing honour-based violence is extremely difficult in Pakistan, particularly where the family has resources and connections nationwide. Expert reports assess whether the family's reach, the nature of the honour threat, and the appellant's personal circumstances make internal relocation a viable and not unduly harsh option.",
      },
    ],
    relatedCaseTypes: ["honour-based-violence-pakistan", "asylum-appeal-ftt", "deportation-removal-pakistan"],
  },
  {
    slug: "lgbtq-asylum-pakistan",
    title: "LGBTQ+ Asylum Pakistan",
    metaTitle: "LGBTQ+ Asylum Pakistan Expert Report UK | s377 PPC & HJ (Iran)",
    metaDescription:
      "LGBTQ+ asylum from Pakistan expert report for UK tribunals. Section 377 PPC criminalisation, Khawaja Sira community, HJ (Iran) standard, and state protection analysis.",
    h1: "LGBTQ+ Asylum Expert Report UK | Pakistan Country Evidence",
    content: [
      "Same-sex conduct is criminalised in Pakistan under section 377 of the Pakistan Penal Code, carrying potential penalties of up to life imprisonment plus fine. Social attitudes towards LGBTQ+ individuals are predominantly hostile, and state protection is generally unavailable. LGBTQ+ Pakistanis face violence from family members, community vigilantes, and in some cases state actors including police.",
      "Expert reports assess individual appellant profiles against current country conditions and the HJ (Iran) [2010] UKSC 31 standard on sexuality and the well-founded fear test under the Refugee Convention 1951. Reports address criminalisation frameworks, enforcement practice, family and community violence, and the practical impossibility of living openly as an LGBTQ+ person in Pakistan without real risk of harm.",
      "Khawaja Sira (hijra and transgender) individuals occupy a distinct legal and social position in Pakistan. Following a 2009 Supreme Court ruling, Khawaja Sira individuals have some formal legal recognition, but face severe discrimination, violence, and social exclusion in practice. Expert reports addressing transgender asylum claims from Pakistan analyse both the formal legal position and the practical reality of life for Khawaja Sira individuals across different regions of Pakistan.",
    ],
    faqs: [
      {
        question: "What is the legal position for LGBTQ+ people in Pakistan?",
        answer:
          "Same-sex conduct is criminalised under s377 of the Pakistan Penal Code, carrying potential penalties of up to life imprisonment plus fine. Social attitudes towards LGBTQ+ individuals are predominantly hostile and state protection is generally unavailable. Expert reports assess the individual appellant's profile against current country conditions and the HJ (Iran) [2010] standard.",
      },
      {
        question: "What is the Khawaja Sira community in Pakistan?",
        answer:
          "Khawaja Sira (hijra and transgender) individuals have some formal legal recognition in Pakistan following a 2009 Supreme Court ruling, but face severe discrimination, violence, and social exclusion. Expert reports addressing transgender asylum claims from Pakistan analyse both the formal legal position and the practical reality of life for Khawaja Sira individuals in Pakistan.",
      },
    ],
    relatedCaseTypes: ["asylum-appeal-ftt", "upper-tribunal-pakistan", "fresh-claims-pakistan"],
  },
  {
    slug: "political-persecution-pakistan",
    title: "Political Persecution Pakistan",
    metaTitle: "Political Persecution Pakistan Expert Report UK | PTI & Journalists",
    metaDescription:
      "Political persecution expert report for UK asylum tribunals. PTI supporters post-2023 crackdown, journalists, enforced disappearances, Baloch nationalists, and military intelligence targeting.",
    h1: "Political Persecution Expert Report UK | Pakistan Asylum Evidence",
    content: [
      "Pakistan's political landscape has been particularly turbulent since 2022 to 2023, with PTI (Pakistan Tehreek-e-Insaf) supporters, journalists, human rights defenders, and activists facing targeted persecution by state and military intelligence agencies. Enforced disappearances of Baloch nationalists, journalists, and political activists remain a serious concern, with limited accountability for perpetrators.",
      "Since the events of 2023 to 2024, PTI supporters with a visible profile face real risk on return to Pakistan, particularly those involved in UK-based activities that may be known to Pakistani authorities. Journalists and media workers face harassment, arbitrary detention, and violence for reporting on military conduct, political corruption, and human rights abuses. Freedom of press protections exist in law but are inconsistently enforced.",
      "Expert reports assess the individual's political profile, activities, and visibility against current country conditions. Reports address the post-2023 crackdown context, military intelligence targeting patterns, enforced disappearance risk for Baloch nationalists, and the practical availability of state protection for political dissidents. Analysis supports both refugee convention claims and deportation risk assessments in UK immigration tribunal proceedings.",
    ],
    faqs: [
      {
        question: "What political persecution risks exist in Pakistan?",
        answer:
          "Pakistan's political landscape has been particularly turbulent since 2022 to 2023, with PTI supporters, journalists, and human rights defenders facing targeted persecution by state and military intelligence agencies. Enforced disappearances of Baloch nationalists, journalists, and activists remain a serious concern. Expert reports assess the individual's political profile and activities against current conditions.",
      },
      {
        question: "What is the risk for PTI supporters returning to Pakistan?",
        answer:
          "Since the events of 2023 to 2024, PTI (Pakistan Tehreek-e-Insaf) supporters with a profile, particularly those involved in UK-based activities visible to Pakistani authorities, face real risk on return. Expert reports assess the profile, visibility, and activities of the individual appellant against the current crackdown context.",
      },
    ],
    relatedCaseTypes: ["political-claim-pakistan", "asylum-appeal-ftt", "deportation-removal-pakistan"],
  },
  {
    slug: "christians-religious-minorities",
    title: "Christians & Religious Minorities Pakistan",
    metaTitle: "Christian & Religious Minority Expert Report UK | Pakistan Asylum",
    metaDescription:
      "Christian and religious minority expert report for UK asylum tribunals. Blasphemy misuse, Jaranwala 2023 attacks, mob violence, Hindu and Sikh minority risk, and state protection failures.",
    h1: "Christian & Religious Minority Expert Report UK | Pakistan",
    content: [
      "Christians and other religious minorities in Pakistan face serious risks from blasphemy allegations, frequently used as a pretext for mob violence and targeted attacks. The August 2023 Jaranwala attacks, where mobs burned Christian homes and churches following blasphemy allegations, illustrate the continuing severity of the risk. Hindu and Sikh communities face distinct but related patterns of discrimination, forced conversion pressure, and violence in parts of Punjab and Sindh.",
      "State response to attacks on Christian and minority communities has been inconsistent. Some prosecutions have followed major incidents like Jaranwala, but impunity for perpetrators of anti-Christian and anti-minority violence remains widespread. Police protection failures before and during mob attacks are a recurring feature of blasphemy-related violence against religious minorities.",
      "Expert reports address both state protection failures and non-state actor violence in UK immigration tribunal proceedings. Reports analyse the appellant's community, geographic location, visibility, and any prior blasphemy allegations or mob threats. Analysis covers the systemic protection failures documented in Home Office CPINs and their application to individual refugee and humanitarian protection claims from Pakistan.",
    ],
    faqs: [
      {
        question: "What risks do Christians face in Pakistan?",
        answer:
          "Christians in Pakistan face serious risks from blasphemy allegations, frequently used as a pretext for mob violence and targeted attacks. The August 2023 Jaranwala attacks, where mobs burned Christian homes and churches following blasphemy allegations, illustrate the continuing severity of the risk. Expert reports address both state protection failures and non-state actor violence.",
      },
      {
        question: "What is the state's response to attacks on Christians?",
        answer:
          "State response to attacks on Christian communities has been inconsistent. Some prosecutions have followed major incidents like Jaranwala, but impunity for perpetrators of anti-Christian violence remains widespread. Expert reports assess the systemic protection failures and their application to individual cases.",
      },
    ],
    relatedCaseTypes: ["blasphemy-asylum-pakistan", "asylum-appeal-ftt", "fresh-claims-pakistan"],
  },
  {
    slug: "actors-of-protection-pakistan",
    title: "Actors of Protection Pakistan",
    metaTitle: "Actors of Protection Pakistan Expert Report UK | State Protection Analysis",
    metaDescription:
      "Actors of protection expert report for Pakistan asylum cases. Police complicity, judicial failures, state ability vs willingness, geographic variation, and profile-specific analysis.",
    h1: "Actors of Protection Expert Report UK | Pakistan Country Evidence",
    content: [
      "State protection in Pakistan varies significantly by appellant profile and location. For Ahmadis and blasphemy accusees, the March 2025 CPIN confirms the state is able but generally unwilling to protect. Police are complicit in harassment, courts fail to apply correct standards in blasphemy cases, and judges are reluctant to decide due to fear of retribution. For women facing honour-based violence, formal protection mechanisms exist but enforcement is deeply inconsistent.",
      "The Pakistani police force has significant limitations, including corruption, resource constraints, and in some cases active complicity in harm against certain groups. Expert reports assess both the formal existence of protection mechanisms and their practical effectiveness for the specific appellant profile, including the role of military intelligence, the judicial system, and provincial security agencies.",
      "Geographic variation is critical in Pakistan protection analysis. Protection availability differs between major urban centres such as Islamabad, Lahore, and Karachi and rural or conflict-affected areas in Balochistan, Khyber Pakhtunkhwa, and Punjab. Expert reports address the state protection test under UNHCR guidelines, profile-specific willingness analysis, and whether non-state actors of protection can realistically substitute for ineffective state protection in the individual appellant's circumstances.",
    ],
    faqs: [
      {
        question: "Can the Pakistani state protect those facing persecution?",
        answer:
          "Pakistan's ability and willingness to protect varies significantly by profile and location. For Ahmadis and blasphemy accusees, the state is able but generally unwilling to protect. Police are complicit in harassment and courts fail to apply correct standards. For women facing honour violence, formal protection exists but enforcement is deeply inconsistent. Expert reports provide profile-specific and region-specific protection analysis.",
      },
      {
        question: "How does police corruption affect protection claims?",
        answer:
          "Police corruption and complicity in Pakistan, particularly in religious and honour-based cases, significantly undermines the practical availability of state protection. Expert reports assess not only the formal existence of protection mechanisms but their practical effectiveness for the specific individual in their specific circumstances.",
      },
    ],
    relatedCaseTypes: ["asylum-appeal-ftt", "upper-tribunal-pakistan", "deportation-removal-pakistan"],
  },
];

export function getAsylumProfile(slug: string): AsylumProfile | undefined {
  return asylumProfiles.find((p) => p.slug === slug);
}
