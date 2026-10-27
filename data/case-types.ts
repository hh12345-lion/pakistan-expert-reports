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
    metaTitle: "Pakistan Country Report for a First-tier Tribunal Appeal",
    metaDescription:
      "Pakistan expert report for First-tier Tribunal asylum appeals. Country condition reports for Ahmadis, blasphemy, Shia Muslims, honour-based violence, LGBTQ+, and political persecution. Legal Aid compatible.",
    h1: "Country Reports for Pakistani First-tier Tribunal Appeals",
    content: [
      "Pakistan is one of the largest sources of asylum appeals in the First-tier Tribunal, and the claims are unusually varied: Ahmadi faith, blasphemy accusations, Shia sectarian attacks, honour-based violence, LGBTQ+ claims under s377, PTI and other political activity, and risk to returning failed asylum seekers. The report is built around whichever of these the refusal letter disputes.",
      "For a Pakistani appeal the report usually has to answer whether the account fits what is known about the appellant's area and community, what would happen on return, and whether the police or a move to another city would keep them safe. It follows paragraph 10 of the Immigration Tribunal Practice Direction and the October 2025 guide Expert Reports in the Immigration Tribunal by Adam Pipe of No.8 Chambers.",
      "Build in 2 to 3 weeks for a standard report. Authors are chosen for their track record before tribunals and their command of the Pakistan material that matters most, such as the March 2025 Ahmadis CPIN Version 6.0 and MN and Others (Ahmadis) Pakistan CG [2012] UKUT 00389.",
    ],
    faqs: [
      {
        question: "How early should the report be commissioned for an FTT appeal?",
        answer:
          "Once the grounds are settled, ideally straight after lodging. A standard report takes 2 to 3 weeks, and urgent work is possible for close hearings, but leaving it late can force an adjournment request and add cost.",
      },
      {
        question: "What should the FTT report address?",
        answer:
          "The conditions that matter for this claim in Pakistan, whether police and courts would protect the appellant, whether relocation is realistic, how the evidence sits with the current CPINs and, for Ahmadis, MN and Others [2012], with sources from Home Office COI, UNHCR and field research.",
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
    metaTitle: "Pakistan Expert Report Upper Tribunal | Country Guidance",
    metaDescription:
      "Pakistan expert report for Upper Tribunal country guidance and departure cases. MN and Others [2012], March 2025 Ahmadis CPIN, and oral evidence.",
    h1: "Pakistan Expert Report for Upper Tribunal Proceedings",
    content: [
      "Pakistani cases reach the Upper Tribunal on appeal from the First-tier, and occasionally as country guidance cases or arguments to depart from existing guidance such as MN and Others. At this level the report's sourcing and method are examined closely.",
      "MN and Others (Ahmadis - country conditions) Pakistan CG [2012] UKUT 00389 remains the leading country guidance for Ahmadi claims. With the March 2025 Ahmadis CPIN Version 6.0 confirming that the state is able but unwilling to protect Ahmadis, experts must address whether existing guidance and CPIN positions remain current and provide granular country analysis.",
      "Country guidance hearings are where authors are most often asked to attend. Ours have been questioned before on blasphemy law misuse, TLP mob violence and whether protection is available for particular profiles.",
    ],
    faqs: [
      {
        question: "Will the author have to attend an Upper Tribunal hearing?",
        answer:
          "Usually only in country guidance cases or when the tribunal directs. If so, expect questions on the current CPINs, whether MN and Others [2012] still applies, the field research and the risk to the appellant.",
      },
      {
        question: "Which CPINs matter most in Pakistani Upper Tribunal cases?",
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
    metaTitle: "Country Report for Ahmadi Appeals | MN and Others & 2025 CPIN",
    metaDescription:
      "Ahmadi asylum Pakistan expert report for tribunals. Ordinance XX 1984, TLP mob violence, March 2025 CPIN Version 6.0, MN and Others [2012], and Ahmadiyya verification.",
    h1: "Ahmadi Asylum Claims from Pakistan: Expert Report Evidence",
    content: [
      "Ahmadi asylum claims from Pakistan are the largest single Pakistan asylum profile in immigration tribunals. Ahmadis are legally prohibited under Ordinance XX 1984 from calling themselves Muslim, using Islamic terminology, or practising their faith openly. Violations carry criminal penalties and expose Ahmadis to blasphemy charges under ss295 to 298 of the Pakistan Penal Code.",
      "Expert reports address TLP mob violence, the rising killing of Ahmadis, police complicity in harassment, judicial reluctance to decide blasphemy cases due to fear of retribution, and the March 2025 CPIN Version 6.0 position that the state is able but unwilling to protect. Reports must be consistent with MN and Others (Ahmadis) Pakistan CG [2012] UKUT 00389 and current country conditions.",
      "Country-specific expertise is essential. Expert reports must demonstrate current knowledge of Ahmadi legal restrictions, community visibility, Ahmadiyya Muslim Association UK verification procedures, and the specific risk profile of the appellant.",
    ],
    faqs: [
      {
        question: "Which test applies in an Ahmadi appeal?",
        answer:
          "Tribunals assess whether the appellant faces a well-founded fear of persecution as an Ahmadi Muslim. Expert reports provide country conditions evidence on Ordinance XX, blasphemy exposure, TLP violence, and state protection failures, supporting the tribunal's overall assessment against MN and Others [2012] and the March 2025 CPIN.",
      },
      {
        question: "What changed in the March 2025 Ahmadis CPIN?",
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
    metaTitle: "Blasphemy Asylum Pakistan Expert Report | ss295-298 PPC Evidence",
    metaDescription:
      "Blasphemy asylum Pakistan expert report for tribunals. ss295-C death penalty, mob justice, acquittal risk, TLP violence, and state protection failures.",
    h1: "Blasphemy Asylum Claims from Pakistan: Expert Report Evidence",
    content: [
      "Blasphemy asylum claims from Pakistan are among the most common persecution grounds in immigration tribunals. Pakistan's blasphemy laws under ss295 to 298 of the Pakistan Penal Code carry the death penalty for blasphemy against the Prophet Muhammad under s295-C. Laws are widely misused against religious minorities, Ahmadis, Christians, and personal enemies.",
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
    metaTitle: "Honour-Based Violence Pakistan Expert Report | Women Asylum Evidence",
    metaDescription:
      "Honour-based violence Pakistan expert report for tribunals. Honour killings, forced marriage, police FIR failures, Particular Social Group, and internal relocation.",
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
    metaTitle: "Country Report on Return to Pakistan | Deportation & Removal",
    metaDescription:
      "Deportation and removal Pakistan expert report for tribunals. Risk on return analysis, failed asylum seekers, state protection, and interim relief evidence.",
    h1: "Country Reports When Removal to Pakistan Is Pending",
    content: [
      "When a Pakistani national faces deportation or removal, the report looks at what would happen after arrival: whether their profile would draw attention, whether the police would help, and whether another city would be safer. It can support deportation appeals, judicial review of removal directions, interim relief and failed asylum seeker cases.",
      "Reports are tied to the individual's profile and cite the CPINs that apply to it, such as the March 2025 Ahmadis CPIN or the July 2021 Shia Muslims CPIN, alongside any country guidance. Where removal is close, they are written to a short deadline.",
      "If a hearing or removal directions are already set, we can take the case on urgently, whether the risk on return arises from Ahmadi faith, a blasphemy accusation, political activity or sexuality.",
    ],
    faqs: [
      {
        question: "Can expert evidence stop a deportation to Pakistan?",
        answer:
          "The report does not argue the case; it gives the court an independent account of risk on return, protection and relocation in Pakistan, which the representatives then build their arguments on.",
      },
      {
        question: "How fast can a report be produced when removal is imminent?",
        answer:
          "In 5 business days where needed. Send us the removal or hearing date and we will confirm whether an author can meet it.",
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
    metaTitle: "Country Report for a Pakistani Fresh Claim",
    metaDescription:
      "Fresh claims Pakistan expert report for immigration cases. March 2025 Ahmadis CPIN, changed conditions, and updated country evidence reports.",
    h1: "Country Reports for Fresh Claims by Pakistani Nationals",
    content: [
      "Two developments drive many Pakistani fresh claims: the March 2025 Ahmadis CPIN Version 6.0 and the political crackdowns since 2023. A fresh claim report shows how these, or new facts about the appellant, change the picture since the last decision.",
      "The report dates the previous decision, compares the evidence then and now for the appellant's profile, and explains why the difference meets the fresh claim threshold.",
      "Common fresh claim triggers include updated Ahmadis CPIN findings on rising killings and police complicity, new blasphemy accusations or TLP mobilisation, changed political persecution risk for PTI supporters, and new evidence of UK-based activity attracting Pakistani authority attention.",
    ],
    faqs: [
      {
        question: "How is a fresh claim report different?",
        answer:
          "It is a comparison rather than a fresh assessment. It sets out what is new since the last decision, whether in Pakistan or about the appellant, why that matters to the fresh claim threshold, and why it could not reasonably have been raised before.",
      },
      {
        question: "Which CPIN changes support Pakistani fresh claims?",
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
    metaTitle: "Country Report for Pakistani Political Claims | PTI & Journalists",
    metaDescription:
      "Political persecution Pakistan expert report for tribunals. PTI supporters, journalists, enforced disappearances, Baloch nationalists, and 2025 conditions.",
    h1: "Country Reports for Pakistani Political Asylum Claims",
    content: [
      "Political persecution asylum claims from Pakistan have increased significantly following the post-2023 crackdown on PTI supporters, journalists, human rights defenders, and Baloch nationalists. Expert reports assess the individual's political profile, visibility, and diaspora activities against current enforcement patterns by state and military intelligence agencies.",
      "Expert reports address enforced disappearances, detention conditions, freedom of press restrictions, and whether individuals with diaspora political activity would attract Pakistani authority attention on return. Reports cite current country evidence and profile-specific risk analysis.",
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
