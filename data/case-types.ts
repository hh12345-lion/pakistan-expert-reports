import type { FAQ } from "@/lib/schema";

export type CaseType = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string[];
  faqs: FAQ[];
  relatedProfiles: string[];
  relatedServices: string[];
};

export const caseTypes: CaseType[] = [
  {
    slug: "asylum-appeal-ftt",
    title: "FTT Asylum Appeal",
    metaTitle: "Pakistan Expert Report for FTT Asylum Appeals | First-tier Tribunal UK",
    metaDescription:
      "Pakistan expert report for First-tier Tribunal asylum appeals. Country condition reports for Ahmadis, blasphemy, Shia Muslims, honour-based violence, LGBTQ+, and political persecution. Legal Aid compatible.",
    h1: "Pakistan Expert Report for First-tier Tribunal Asylum Appeals",
    content: [
      "First-tier Tribunal (Immigration and Asylum Chamber) appeals are the primary forum for challenging Home Office refusals of Pakistani asylum claims. Pakistan is the second-highest asylum claim nationality in the UK, spanning Ahmadi persecution, blasphemy accusations, Shia sectarian targeting, honour-based violence, LGBTQ+ criminalisation under s377, political persecution including PTI supporters, and risk on return for failed asylum seekers.",
      "Expert country condition reports provide the independent, authoritative evidence tribunals require to assess credibility, risk on return, state protection, and internal relocation. Reports must comply with Immigration Tribunal Practice Direction paragraph 10 and the Expert Reports in the Immigration Tribunal guide (October 2025) by Adam Pipe of No.8 Chambers.",
      "Early instruction is critical. Allow 2 to 3 weeks for a standard report. Pakistan Expert Reports matches solicitors with qualified Pakistan country experts who have tribunal acceptance records, current CPIN knowledge including the March 2025 Ahmadis CPIN Version 6.0, and familiarity with MN and Others (Ahmadis) Pakistan CG [2012] UKUT 00389.",
    ],
    faqs: [
      {
        question: "When should I instruct a Pakistan expert for a First-tier Tribunal appeal?",
        answer:
          "Instruct as soon as the appeal is lodged and grounds are identified. Allow 2 to 3 weeks for a standard report. Urgent instructions are available for imminent hearings. Late instruction risks adjournment applications and increased costs.",
      },
      {
        question: "What should a Pakistan expert report for the FTT contain?",
        answer:
          "Reports should address the specific factual matrix: country conditions relevant to the claim, state protection analysis, internal relocation feasibility, consistency with current CPINs and MN and Others [2012] where applicable, and source citations to Home Office COI, UNHCR, and field research.",
      },
    ],
    relatedProfiles: [
      "ahmadi-muslims-pakistan",
      "blasphemy-accusations-pakistan",
      "actors-of-protection-pakistan",
    ],
    relatedServices: ["country-condition-reports", "cpin-challenge"],
  },
  {
    slug: "upper-tribunal-pakistan",
    title: "Upper Tribunal Pakistan",
    metaTitle: "Pakistan Expert Report Upper Tribunal | Country Guidance UK",
    metaDescription:
      "Pakistan expert report for Upper Tribunal country guidance and departure cases. MN and Others [2012], March 2025 Ahmadis CPIN, and oral evidence.",
    h1: "Pakistan Expert Report for Upper Tribunal Proceedings",
    content: [
      "Upper Tribunal (Immigration and Asylum Chamber) proceedings include country guidance applications, departure from guidance cases, and appeals from First-tier Tribunal decisions on Pakistani asylum claims. Expert evidence in Upper Tribunal work must meet the highest evidential standards.",
      "MN and Others (Ahmadis - country conditions) Pakistan CG [2012] UKUT 00389 remains the leading country guidance for Ahmadi claims. With the March 2025 Ahmadis CPIN Version 6.0 confirming that the state is able but unwilling to protect Ahmadis, experts must address whether existing guidance and CPIN positions remain current and provide granular country analysis.",
      "Oral evidence is most common in Upper Tribunal country guidance cases. Pakistan Expert Reports experts are experienced in tribunal attendance and cross-examination on Pakistan country conditions, including blasphemy law misuse, TLP mob violence, and profile-specific protection analysis.",
    ],
    faqs: [
      {
        question: "When is oral evidence required in Upper Tribunal Pakistan cases?",
        answer:
          "Oral evidence is most common in country guidance cases or where the tribunal directs. Experts should be prepared to give evidence on current CPIN positions, MN and Others [2012] applicability, field research findings, and profile-specific risk analysis under cross-examination.",
      },
      {
        question: "Which Pakistan CPINs are most relevant to Upper Tribunal work?",
        answer:
          "The March 2025 Ahmadis CPIN Version 6.0, July 2021 Shia Muslims CPIN, July 2024 Healthcare CPIN, and actors of protection analysis are the most frequently cited in current Upper Tribunal Pakistan cases alongside MN and Others [2012].",
      },
    ],
    relatedProfiles: [
      "ahmadi-muslims-pakistan",
      "political-persecution-pakistan",
      "actors-of-protection-pakistan",
    ],
    relatedServices: ["cpin-challenge", "oral-evidence"],
  },
  {
    slug: "ahmadi-asylum-claims",
    title: "Ahmadi Asylum Claims",
    metaTitle: "Ahmadi Asylum Pakistan Expert Report UK | March 2025 CPIN & MN and Others",
    metaDescription:
      "Ahmadi asylum Pakistan expert report for UK tribunals. Ordinance XX 1984, TLP mob violence, March 2025 CPIN Version 6.0, MN and Others [2012], and Ahmadiyya verification.",
    h1: "Ahmadi Asylum Claims from Pakistan: Expert Report Evidence",
    content: [
      "Ahmadi asylum claims from Pakistan are the largest single Pakistan asylum profile in UK immigration tribunals. Ahmadis are legally prohibited under Ordinance XX 1984 from calling themselves Muslim, using Islamic terminology, or practising their faith openly. Violations carry criminal penalties and expose Ahmadis to blasphemy charges under ss295 to 298 of the Pakistan Penal Code.",
      "Expert reports address TLP mob violence, the rising killing of Ahmadis, police complicity in harassment, judicial reluctance to decide blasphemy cases due to fear of retribution, and the March 2025 CPIN Version 6.0 position that the state is able but unwilling to protect. Reports must be consistent with MN and Others (Ahmadis) Pakistan CG [2012] UKUT 00389 and current country conditions.",
      "Country-specific expertise is essential. Expert reports must demonstrate current knowledge of Ahmadi legal restrictions, community visibility, Ahmadiyya Muslim Association UK verification procedures, and the specific risk profile of the appellant.",
    ],
    faqs: [
      {
        question: "What evidence standard applies to Ahmadi Pakistan asylum claims?",
        answer:
          "Tribunals assess whether the appellant faces a well-founded fear of persecution as an Ahmadi Muslim. Expert reports provide country conditions evidence on Ordinance XX, blasphemy exposure, TLP violence, and state protection failures, supporting the tribunal's overall assessment against MN and Others [2012] and the March 2025 CPIN.",
      },
      {
        question: "What does the March 2025 Ahmadis CPIN say?",
        answer:
          "The March 2025 CPIN Version 6.0 confirms that while the state is able to protect Ahmadis in principle, it is generally unwilling to do so. Police are complicit in harassment, courts do not apply correct standards in blasphemy cases, and judges are reluctant to decide blasphemy cases due to fear of retribution. Expert reports assess the individual appellant's profile against these confirmed conditions.",
      },
    ],
    relatedProfiles: [
      "ahmadi-muslims-pakistan",
      "blasphemy-accusations-pakistan",
      "actors-of-protection-pakistan",
    ],
    relatedServices: ["ahmadi-asylum-reports", "blasphemy-expert-reports"],
  },
  {
    slug: "blasphemy-asylum-pakistan",
    title: "Blasphemy Asylum Pakistan",
    metaTitle: "Blasphemy Asylum Pakistan Expert Report UK | ss295-298 PPC Evidence",
    metaDescription:
      "Blasphemy asylum Pakistan expert report for UK tribunals. ss295-C death penalty, mob justice, acquittal risk, TLP violence, and state protection failures.",
    h1: "Blasphemy Asylum Claims from Pakistan: Expert Report Evidence",
    content: [
      "Blasphemy asylum claims from Pakistan are among the most common persecution grounds in UK immigration tribunals. Pakistan's blasphemy laws under ss295 to 298 of the Pakistan Penal Code carry the death penalty for blasphemy against the Prophet Muhammad under s295-C. Laws are widely misused against religious minorities, Ahmadis, Christians, and personal enemies.",
      "Expert reports address the specific circumstances of the blasphemy accusation, police protection failures, mob justice risk including TLP violence, and whether acquittal provides genuine protection or merely legal clearance that fails to address ongoing extremist risk. Reports must address state ability versus willingness to protect.",
      "Expert reports analyse whether effective state protection is realistically available given police and judicial complicity, and whether internal relocation would expose the appellant to renewed accusations or vigilante violence.",
    ],
    faqs: [
      {
        question: "What does a blasphemy expert report for Pakistan contain?",
        answer:
          "Reports address the blasphemy accusation context, applicable provisions of the Pakistan Penal Code, mob violence risk, police and judicial complicity, whether acquittal provides ongoing protection, state protection availability, and internal relocation feasibility for the specific profile.",
      },
      {
        question: "Does an acquittal in Pakistan provide protection from mob violence?",
        answer:
          "No. Individuals acquitted of blasphemy charges often face continuing risk from extremist groups who disagree with the court's decision and may use vigilante violence. Expert reports address whether acquittal provides genuine protection or merely legal clearance that fails to address the ongoing risk.",
      },
    ],
    relatedProfiles: [
      "blasphemy-accusations-pakistan",
      "ahmadi-muslims-pakistan",
      "christians-religious-minorities",
    ],
    relatedServices: ["blasphemy-expert-reports", "country-condition-reports"],
  },
  {
    slug: "honour-based-violence-pakistan",
    title: "Honour-Based Violence Pakistan",
    metaTitle: "Honour-Based Violence Pakistan Expert Report UK | Women Asylum Evidence",
    metaDescription:
      "Honour-based violence Pakistan expert report for UK tribunals. Honour killings, forced marriage, police FIR failures, Particular Social Group, and internal relocation.",
    h1: "Honour-Based Violence Asylum Claims from Pakistan: Expert Report Evidence",
    content: [
      "Honour-based violence asylum claims from Pakistan require expert evidence on honour killings, forced marriage, domestic abuse, and deeply inconsistent state protection. Pakistan has enacted legislation against honour killings and domestic violence, but enforcement remains inadequate and police frequently refuse to register FIRs in honour violence cases.",
      "Expert reports address Particular Social Group analysis, regional and family-context-specific protection availability, and whether internal relocation is viable where the family has nationwide reach and connections. Reports must address intersectionality with forced marriage, watta satta exchange marriage, and jirga tribal council decisions.",
      "Country-specific expertise is essential for tribunals assessing whether the appellant faces a well-founded fear of persecution from family or community actors and whether state protection is practically available in their specific circumstances.",
    ],
    faqs: [
      {
        question: "What does an honour-based violence expert report for Pakistan contain?",
        answer:
          "Reports address the nature of the honour threat, family reach and resources, police and judicial response in the specific region, FIR registration practice, Particular Social Group analysis, state protection availability, and internal relocation feasibility for the specific profile.",
      },
      {
        question: "Can women internally relocate within Pakistan to escape honour-based violence?",
        answer:
          "Internal relocation for women fleeing honour-based violence is extremely difficult in Pakistan, particularly where the family has resources and connections nationwide. Expert reports assess whether the family's reach, the nature of the honour threat, and the appellant's personal circumstances make internal relocation a viable and not unduly harsh option.",
      },
    ],
    relatedProfiles: [
      "women-honour-based-violence",
      "actors-of-protection-pakistan",
      "shia-muslims-pakistan",
    ],
    relatedServices: ["honour-based-violence-reports", "country-condition-reports"],
  },
  {
    slug: "deportation-removal-pakistan",
    title: "Deportation & Removal Pakistan",
    metaTitle: "Deportation Removal Pakistan Expert Report UK | Risk on Return",
    metaDescription:
      "Deportation and removal Pakistan expert report for UK tribunals. Risk on return analysis, failed asylum seekers, state protection, and interim relief evidence.",
    h1: "Deportation & Removal to Pakistan: Expert Report Evidence",
    content: [
      "Deportation and removal cases require expert evidence on risk on return, state protection, and internal relocation for Pakistani nationals. This includes appeals against deportation orders, judicial review of removal directions, interim relief applications, and risk assessments for failed asylum seekers.",
      "Expert reports address the specific profile of the individual facing removal, citing current CPINs including the March 2025 Ahmadis CPIN, July 2021 Shia Muslims CPIN, and profile-specific country guidance. Reports must be prepared quickly where removal is imminent.",
      "Pakistan Expert Reports provides urgent instruction capability for deportation cases with hearing dates or removal directions pending, including Ahmadi, blasphemy, political, and LGBTQ+ risk on return analysis.",
    ],
    faqs: [
      {
        question: "Can expert evidence stop a deportation to Pakistan?",
        answer:
          "Expert evidence supports the legal arguments made by the appellant's representatives. The expert provides independent country condition analysis on risk on return, state protection, and relocation that the tribunal or court considers alongside other evidence.",
      },
      {
        question: "How quickly can a Pakistan expert report be prepared for deportation cases?",
        answer:
          "Urgent reports can be prepared within 5 business days where necessary. Contact us with the removal date or hearing date for availability confirmation.",
      },
    ],
    relatedProfiles: [
      "actors-of-protection-pakistan",
      "political-persecution-pakistan",
      "lgbtq-asylum-pakistan",
    ],
    relatedServices: ["country-condition-reports", "cpin-challenge"],
  },
  {
    slug: "fresh-claims-pakistan",
    title: "Fresh Claims Pakistan",
    metaTitle: "Fresh Claims Pakistan Expert Report UK | New Evidence Reports",
    metaDescription:
      "Fresh claims Pakistan expert report for UK immigration cases. March 2025 Ahmadis CPIN, changed conditions, and updated country evidence reports.",
    h1: "Fresh Claims from Pakistan: Expert Report Evidence",
    content: [
      "Fresh claims require evidence that conditions in Pakistan have changed or that new evidence exists which was not previously considered. With the March 2025 Ahmadis CPIN Version 6.0 and ongoing political crackdowns since 2023, fresh claim evidence often addresses material changes since the original decision.",
      "Expert reports identify what has changed since the previous decision, whether new CPINs or country guidance affect the appellant's profile, and provide updated country condition analysis addressing the fresh claim threshold under Home Office and tribunal practice.",
      "Common fresh claim triggers include updated Ahmadis CPIN findings on rising killings and police complicity, new blasphemy accusations or TLP mobilisation, changed political persecution risk for PTI supporters, and new evidence of UK-based activity attracting Pakistani authority attention.",
    ],
    faqs: [
      {
        question: "What makes a fresh claim expert report different from an appeal report?",
        answer:
          "Fresh claim reports must identify what is new since the previous decision, address the fresh claim threshold, and explain why the new evidence could not reasonably have been provided earlier. The expert focuses on material changes in country conditions or new profile information.",
      },
      {
        question: "Which CPIN updates are most relevant to Pakistan fresh claims?",
        answer:
          "The March 2025 Ahmadis CPIN Version 6.0, July 2021 Shia Muslims CPIN, July 2024 Healthcare CPIN, and updated political persecution conditions following the 2023 to 2024 crackdown are the most significant recent updates affecting fresh claims.",
      },
    ],
    relatedProfiles: [
      "ahmadi-muslims-pakistan",
      "political-persecution-pakistan",
      "blasphemy-accusations-pakistan",
    ],
    relatedServices: ["cpin-challenge", "country-condition-reports"],
  },
  {
    slug: "political-claim-pakistan",
    title: "Political Persecution Pakistan",
    metaTitle: "Political Persecution Pakistan Expert Report UK | PTI & Journalists",
    metaDescription:
      "Political persecution Pakistan expert report for UK tribunals. PTI supporters, journalists, enforced disappearances, Baloch nationalists, and 2025 conditions.",
    h1: "Political Persecution Asylum Claims from Pakistan: Expert Report Evidence",
    content: [
      "Political persecution asylum claims from Pakistan have increased significantly following the post-2023 crackdown on PTI supporters, journalists, human rights defenders, and Baloch nationalists. Expert reports assess the individual's political profile, visibility, and UK-based activities against current enforcement patterns by state and military intelligence agencies.",
      "Expert reports address enforced disappearances, detention conditions, freedom of press restrictions, and whether individuals with UK diaspora political activity would attract Pakistani authority attention on return. Reports cite current country evidence and profile-specific risk analysis.",
      "Reports must distinguish between high-profile and low-profile political involvement, address geographic variation in risk including Balochistan, and analyse state protection availability for the specific appellant profile.",
    ],
    faqs: [
      {
        question: "What risk do PTI supporters face on return to Pakistan?",
        answer:
          "Since the events of 2023 to 2024, PTI supporters with a visible profile, particularly those involved in UK-based activities known to Pakistani authorities, face real risk on return. Expert reports assess the profile, visibility, and activities of the individual appellant against the current crackdown context.",
      },
      {
        question: "How do experts assess journalists and human rights defenders?",
        answer:
          "Experts assess the appellant's published work, affiliations, prior incidents of harassment or detention, and whether their profile would bring them to the attention of military intelligence or civilian authorities on return, citing current country conditions and enforcement patterns.",
      },
    ],
    relatedProfiles: [
      "political-persecution-pakistan",
      "actors-of-protection-pakistan",
      "shia-muslims-pakistan",
    ],
    relatedServices: ["political-persecution-reports", "country-condition-reports"],
  },
];

export function getCaseType(slug: string): CaseType | undefined {
  return caseTypes.find((c) => c.slug === slug);
}
