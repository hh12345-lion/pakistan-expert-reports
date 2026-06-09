export type Guide = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  aboutServiceId?: string;
  sections: { heading: string; content: string[] }[];
};

export const guides: Guide[] = [
  {
    slug: "ahmadi-asylum-pakistan-guide",
    metaTitle: "Ahmadi Asylum from Pakistan: Expert Evidence Guide for Solicitors",
    metaDescription:
      "Ahmadi asylum from Pakistan expert evidence guide. Ordinance XX 1984, TLP mob violence, March 2025 CPIN Version 6.0, MN and Others [2012], and Ahmadiyya verification.",
    h1: "Ahmadi Asylum Claims from Pakistan: Expert Evidence Guide",
    aboutServiceId: "ahmadi-asylum-reports",
    sections: [
      {
        heading: "Legal Framework: Ordinance XX and Blasphemy Exposure",
        content: [
          "Ahmadi Muslims in Pakistan are legally prohibited under Ordinance XX 1984 from calling themselves Muslim, using Islamic terminology, or practising their faith openly. Violations carry criminal penalties and expose Ahmadis to blasphemy charges under ss295 to 298 of the Pakistan Penal Code, including s295-C which carries the death penalty for blasphemy against the Prophet Muhammad.",
          "Expert reports must address both the statutory framework and its practical enforcement. Known Ahmadis are vulnerable to mob attacks, TLP mobilisation, and police complicity in harassment. The March 2025 CPIN Version 6.0 confirms that killings of Ahmadis are on the rise and that courts do not apply correct standards in blasphemy cases.",
        ],
      },
      {
        heading: "MN and Others [2012] and the March 2025 CPIN",
        content: [
          "MN and Others (Ahmadis - country conditions) Pakistan CG [2012] UKUT 00389 remains the leading country guidance for Ahmadi asylum claims in UK tribunals. Solicitors should address how the appellant's circumstances align with or depart from the guidance framework established in that decision.",
          "The March 2025 Ahmadis CPIN Version 6.0 confirms that while the state is able to protect Ahmadis in principle, it is generally unwilling to do so. Police are complicit in harassment, judges are reluctant to decide blasphemy cases due to fear of retribution, and expert reports must assess the individual appellant's profile and visibility against these confirmed conditions.",
        ],
      },
      {
        heading: "Ahmadiyya Muslim Association UK Verification",
        content: [
          "Ahmadi asylum claims frequently require verification of Ahmadi identity and community standing. The Ahmadiyya Muslim Association UK provides a verification procedure that solicitors should coordinate alongside expert instruction. Expert reports address country conditions; verification addresses community membership and religious identity.",
          "The letter of instruction should confirm whether verification has been obtained or is pending, and identify any visibility factors such as known mosque attendance, community leadership roles, or prior incidents of harassment that affect risk on return.",
        ],
      },
      {
        heading: "Expert Report Structure for Ahmadi Claims",
        content: [
          "Ahmadi expert reports should follow Immigration Tribunal Practice Direction paragraph 10: expert qualifications, methodology, sources cited, specific conclusions on risk and state protection, and a declaration of independence. Reports must comply with the Adam Pipe October 2025 guide on expert reports in the immigration tribunal.",
          "Reports should cross-reference the March 2025 CPIN and MN and Others [2012], identify where the appellant's circumstances differ from general CPIN positions, and address internal relocation feasibility for visible Ahmadis. Reports that merely restate CPIN content without independent analysis fail the standard identified in the Adam Pipe guide.",
        ],
      },
    ],
  },
  {
    slug: "blasphemy-pakistan-expert-guide",
    metaTitle: "Blasphemy Asylum from Pakistan: Expert Evidence Guide for Solicitors",
    metaDescription:
      "Blasphemy asylum from Pakistan expert evidence guide. ss295-298 PPC misuse, mob justice, acquittal risk, TLP violence, and state protection failures.",
    h1: "Blasphemy Asylum Claims from Pakistan: Expert Evidence Guide",
    aboutServiceId: "blasphemy-expert-reports",
    sections: [
      {
        heading: "Blasphemy Laws and Widespread Misuse",
        content: [
          "Pakistan's blasphemy laws under ss295 to 298 of the Pakistan Penal Code are among the most frequently cited persecution grounds in UK asylum tribunals. Section 295-C carries the death penalty for blasphemy against the Prophet Muhammad. Laws are widely misused to settle personal disputes, target religious minorities including Ahmadis and Christians, and suppress dissent.",
          "Expert reports analyse the specific circumstances of the blasphemy accusation, the motives of the accuser, the appellant's profile, and whether the accusation arose from genuine religious offence or personal enmity. This contextual analysis is essential for tribunals assessing credibility and risk on return.",
        ],
      },
      {
        heading: "Mob Justice and TLP Violence",
        content: [
          "Blasphemy accusations in Pakistan frequently trigger mob violence before or regardless of judicial process. Tehreek-e-Labbaik Pakistan (TLP) has mobilised large-scale protests and violence against those accused of blasphemy, including Ahmadis and religious minorities. Police protection during mob incidents is often inadequate or absent.",
          "Expert reports address the realistic risk of vigilante violence, whether the appellant's case has attracted public attention, and whether TLP or other extremist groups have been mobilised against the appellant or their community.",
        ],
      },
      {
        heading: "Acquittal Does Not Provide Protection",
        content: [
          "A critical point for tribunal submissions is that acquittal of blasphemy charges does not provide genuine protection from ongoing risk. Individuals acquitted of blasphemy charges often face continuing risk from extremist groups who disagree with the court's decision and may use vigilante violence.",
          "Expert reports address whether acquittal provides genuine protection or merely legal clearance that fails to address the ongoing risk from non-state actors. Reports should cite examples of post-acquittal violence and the practical inability of police to protect acquitted individuals.",
        ],
      },
      {
        heading: "State Protection and Expert Analysis Approach",
        content: [
          "State protection for blasphemy accusees is limited by police complicity, judicial reluctance, and the broader culture of impunity for anti-blasphemy violence. The March 2025 Ahmadis CPIN confirms that courts do not apply correct standards in blasphemy cases and judges fear retribution.",
          "Expert reports apply a structured methodology: identify the accusation context, assess mob violence risk, analyse police and judicial response, evaluate acquittal protection value, and conclude on real risk on return with OSCOLA-cited sources. Reports must comply with Practice Direction paragraph 10 and the Adam Pipe October 2025 guide.",
        ],
      },
    ],
  },
  {
    slug: "pakistan-cpin-guide",
    metaTitle: "Pakistan CPINs 2025: Solicitor's Guide to Country Guidance",
    metaDescription:
      "Current Home Office CPINs on Pakistan for UK asylum solicitors. Ahmadis March 2025, Shia Muslims, blasphemy, actors of protection, and challenging CPIN findings.",
    h1: "Pakistan CPINs 2025: A Solicitor's Guide to Current Country Guidance",
    aboutServiceId: "cpin-challenge",
    sections: [
      {
        heading: "Current Pakistan CPINs",
        content: [
          "The Home Office publishes Country Policy Information Notes (CPINs) on Pakistan covering Ahmadis (Version 6.0, March 2025), Shia Muslims (July 2021), Healthcare and Medical Treatment (July 2024), and Country of Origin Background (current). The March 2025 Ahmadis CPIN is the most significant recent update, confirming state able but unwilling protection, rising killings, and police complicity.",
          "MN and Others (Ahmadis - country conditions) Pakistan CG [2012] UKUT 00389 provides leading Upper Tribunal country guidance that tribunals continue to apply alongside current CPINs. Solicitors should cite both the CPIN and country guidance where relevant to the appellant's profile.",
        ],
      },
      {
        heading: "How to Use CPINs in Tribunal Submissions",
        content: [
          "CPINs are not binding on tribunals but carry significant weight. Solicitors should identify the relevant CPIN for the appellant's profile, extract the key findings, and address whether the appellant's individual circumstances fall within or outside the general CPIN position.",
          "Where the CPIN supports the appellant, cite it directly. Where it does not, instruct an expert to provide independent analysis challenging the CPIN's general findings with profile-specific and locality-specific evidence.",
        ],
      },
      {
        heading: "The Expert Role Beyond the CPIN",
        content: [
          "An expert report does not simply reproduce CPIN content. The expert's role is to provide independent, objective analysis of whether the appellant's specific profile creates a real risk, applying current field research and source citations beyond the CPIN.",
          "Reports that merely restate CPIN findings without independent analysis are a red flag identified in the Adam Pipe October 2025 guide on expert reports in the immigration tribunal. Experts must address the individual factual matrix, not generic country summaries.",
        ],
      },
      {
        heading: "Challenging CPIN Findings",
        content: [
          "CPINs can be challenged with field research, updated country evidence, NGO reports, and profile-specific analysis. Common challenge areas include actors of protection (state able but unwilling for Ahmadis and blasphemy accusees), internal relocation for women fleeing honour violence, and political persecution risk for PTI supporters.",
          "Expert reports supporting CPIN challenges must cite sources to OSCOLA standards and address the Immigration Tribunal Practice Direction paragraph 10 requirements for expert evidence. Legal Aid prior authority is required before instruction in most asylum proceedings.",
        ],
      },
    ],
  },
  {
    slug: "honour-based-violence-pakistan",
    metaTitle: "Honour-Based Violence Pakistan: Expert Evidence Guide for Solicitors",
    metaDescription:
      "Honour-based violence Pakistan expert evidence guide. Honour killings, forced marriage, police FIR failures, Particular Social Group, and internal relocation.",
    h1: "Honour-Based Violence Asylum Claims from Pakistan: Expert Evidence Guide",
    aboutServiceId: "honour-based-violence-reports",
    sections: [
      {
        heading: "Honour Killings and Forced Marriage",
        content: [
          "Honour-based violence in Pakistan encompasses honour killings, forced marriage, domestic abuse, and community-enforced compliance with patriarchal norms. While Pakistan has enacted legislation against honour killings and domestic violence, enforcement is deeply inconsistent and social norms perpetuate impunity.",
          "Expert reports must provide regional and family-context-specific analysis, not national generalisations. The nature of the honour threat, the family's standing in the community, and prior incidents of violence all affect the risk assessment.",
        ],
      },
      {
        heading: "Police Failure and FIR Registration",
        content: [
          "Police frequently refuse to register FIRs (First Information Reports) in honour violence cases, particularly where the perpetrators are family members or where local police are influenced by community leaders and jirga tribal council decisions. Courts are often reluctant to prosecute family members in honour cases.",
          "Expert reports assess the practical availability of police protection in the appellant's specific region and family context, addressing not only the formal existence of protection mechanisms but their practical effectiveness.",
        ],
      },
      {
        heading: "Particular Social Group Analysis",
        content: [
          "Women fleeing honour-based violence in Pakistan frequently rely on Particular Social Group analysis under the Refugee Convention 1951. Expert reports support this analysis by documenting the social norms, enforcement mechanisms, and state response that define the group's treatment in Pakistani society.",
          "Reports should address intersectionality with forced marriage, watta satta exchange marriage, and domestic abuse where relevant to the appellant's profile, providing the granular analysis tribunals require.",
        ],
      },
      {
        heading: "Internal Relocation Analysis",
        content: [
          "Internal relocation for women fleeing honour-based violence is extremely difficult in Pakistan, particularly where the family has resources and connections nationwide. Expert reports assess whether the family's reach, the nature of the honour threat, and the appellant's personal circumstances make internal relocation a viable and not unduly harsh option.",
          "Reports should address both safety and the unduly harsh test, considering support networks, employment prospects, accommodation, and the risk of family locating the appellant in proposed relocation cities such as Karachi, Lahore, or Islamabad.",
        ],
      },
    ],
  },
  {
    slug: "pakistan-political-asylum-guide",
    metaTitle: "Political Persecution Pakistan: Expert Evidence Guide for Solicitors",
    metaDescription:
      "Political persecution Pakistan expert evidence guide. PTI supporters, journalists, enforced disappearances, Baloch nationalists, and 2025 to 2026 conditions.",
    h1: "Political Persecution Asylum Claims from Pakistan: Expert Evidence Guide",
    aboutServiceId: "political-persecution-reports",
    sections: [
      {
        heading: "PTI Supporters and the Post-2023 Crackdown",
        content: [
          "Pakistan's political landscape has been particularly turbulent since 2022 to 2023, with PTI (Pakistan Tehreek-e-Insaf) supporters facing targeted persecution by state and military intelligence agencies following the events of 2023 to 2024. Expert reports assess the individual's political profile, visibility, and UK-based activities against current enforcement patterns.",
          "Reports distinguish between high-profile and low-profile political involvement. PTI supporters with visible UK-based activities, including demonstrations, social media activity, and financial contributions, may face heightened risk on return.",
        ],
      },
      {
        heading: "Journalists and Human Rights Defenders",
        content: [
          "Journalists and human rights defenders in Pakistan face restrictions on press freedom, harassment, detention, and in some cases enforced disappearance. Expert reports assess the appellant's published work, affiliations, prior incidents, and whether their profile would attract authority attention on return.",
          "Reports cite current country evidence on media freedom indices, documented cases of journalist persecution, and the practical availability of state protection for those who have criticised the military or government.",
        ],
      },
      {
        heading: "Enforced Disappearances and Baloch Nationalists",
        content: [
          "Enforced disappearances remain a serious concern in Pakistan, particularly affecting Baloch nationalists, activists, and political opponents in Balochistan and other regions. Expert reports address geographic variation in risk and the specific threat profile in Balochistan including Quetta and surrounding areas.",
          "Reports should address whether the appellant's ethnic, political, or activist profile creates risk beyond the general population, and whether state protection is realistically available given documented patterns of military intelligence involvement.",
        ],
      },
      {
        heading: "Current Conditions 2025 to 2026",
        content: [
          "Expert reports on political persecution must reflect current conditions in 2025 to 2026, not outdated pre-2023 analysis. The political environment continues to evolve, and fresh claim and appeal cases require updated country evidence addressing the current crackdown context.",
          "Reports should follow Immigration Tribunal Practice Direction paragraph 10, comply with the Adam Pipe October 2025 guide, and provide profile-specific conclusions on risk on return, state protection, and internal relocation for the individual appellant.",
        ],
      },
    ],
  },
  {
    slug: "instructing-pakistan-expert",
    metaTitle: "Instructing a Pakistan Expert Report: Solicitor's Guide",
    metaDescription:
      "How to instruct a Pakistan expert report. Adam Pipe October 2025 guide, letter of instruction, Legal Aid prior authority, Ahmadiyya verification, and tribunal requirements.",
    h1: "Instructing a Pakistan Country Expert: A Solicitor's Guide",
    aboutServiceId: "country-condition-reports",
    sections: [
      {
        heading: "The Adam Pipe October 2025 Guide",
        content: [
          "Adam Pipe's Expert Reports in the Immigration Tribunal guide (October 2025, No.8 Chambers) sets out key requirements for expert evidence in immigration proceedings. Reports must be the independent product of the expert, address matters within expertise, cite sources, and comply with Practice Direction requirements.",
          "Reports that simply reproduce CPIN content without independent analysis fail to meet the standard identified in the guide. Pakistan expert reports must address the individual factual matrix with profile-specific and locality-specific analysis.",
        ],
      },
      {
        heading: "Letter of Instruction Requirements",
        content: [
          "The letter of instruction should identify the expert's role, list questions to be addressed, provide all relevant case materials, specify the deadline, and confirm funding arrangements. For Pakistan cases, identify the specific asylum profile (Ahmadi, blasphemy, Shia, honour-based violence, LGBTQ+, political) and the CPINs relevant to the claim.",
          "Include the screening record, Asylum Interview Record (AIR), Home Office refusal letter (RFRL), and client witness statement as minimum materials. For Ahmadi claims, confirm whether Ahmadiyya Muslim Association UK verification has been obtained or is pending.",
        ],
      },
      {
        heading: "Legal Aid Prior Authority",
        content: [
          "Most Pakistan expert reports in asylum proceedings are Legal Aid funded. LAA prior authority is required before instruction. Typical LAA-approved rates are £50 to £100 per hour for report preparation, with fixed fee reports also available.",
          "Apply for prior authority as soon as the need for expert evidence is identified. Include the expert's CV, proposed scope, and estimated cost. Pakistan is the second-highest asylum nationality in the UK, and expert evidence is frequently required in Ahmadi, blasphemy, and honour-based violence appeals.",
        ],
      },
      {
        heading: "Documents to Provide",
        content: [
          "Provide: screening record, AIR, RFRL, any previous expert reports, country guidance decisions including MN and Others [2012] where relevant, CPINs relevant to the claim, client witness statement, and any supporting documentary evidence such as blasphemy FIR copies or Ahmadiyya verification letters.",
          "The more complete the instruction materials, the more focused and cost-effective the expert report. Confirm hearing date, tribunal venue, and whether oral evidence may be required, particularly in Upper Tribunal country guidance cases.",
        ],
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
