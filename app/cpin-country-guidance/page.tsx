import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { ResponsiveTableWrap } from "@/components/ui/ResponsiveTableWrap";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
import { cpinQuickReference } from "@/data/cpin-data";
import { guides } from "@/data/guides";
import { getCpinRelatedLinks } from "@/data/related-links";
import { JsonLd } from "@/components/ui/JsonLd";

const cpinFaqs = [
  {
    question: "What is a CPIN in UK asylum law?",
    answer:
      "A Country Policy Information Note (CPIN) is a Home Office document setting out the UK government's position on country conditions for asylum decision-making. CPINs are not binding on immigration tribunals but carry significant weight. Pakistan has multiple updated CPINs in 2024 to 2025 covering Ahmadis, Shia Muslims, blasphemy, women, LGBTQ+, and actors of protection.",
  },
  {
    question: "What does the March 2025 CPIN say about Ahmadis?",
    answer:
      "The March 2025 CPIN Version 6.0 on Ahmadis confirms that while the state is able to protect Ahmadis in principle, it is generally unwilling to do so. Police are complicit in harassment, courts do not apply correct standards in blasphemy cases, and judges are reluctant to decide blasphemy cases due to fear of retribution. Expert reports assess the individual appellant's profile against these confirmed country conditions.",
  },
  {
    question: "Can expert evidence challenge Home Office CPIN findings?",
    answer:
      "Yes. Expert reports provide independent analysis beyond CPIN reproduction. Where the CPIN does not reflect the appellant's profile, the expert may challenge findings with field research, NGO reports, and profile-specific evidence on actors of protection, internal relocation, and blasphemy risk.",
  },
];

export const metadata = createMetadata({
  title: "Pakistan CPIN & Country Guidance 2025 | Expert Report Solicitor Guide",
  description:
    "Current Home Office CPINs on Pakistan for UK asylum solicitors commissioning expert reports — Ahmadis (March 2025), Shia Muslims, blasphemy, women, LGBTQ+, and actors of protection.",
  path: "/cpin-country-guidance",
});

export default function CpinCountryGuidancePage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "CPIN & Country Guidance" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={cpinFaqs} />
      <JsonLd
        data={articleSchema({
          headline: "Pakistan CPIN & Country Guidance 2025: A Guide for UK Asylum Solicitors",
          description:
            "Current Home Office CPINs on Pakistan for UK asylum solicitors. Ahmadis (March 2025), Shia Muslims, blasphemy, women, LGBTQ+, and actors of protection.",
          path: "/cpin-country-guidance",
        })}
      />
      <PageShell
        title="Pakistan CPIN & Country Guidance 2025: A Guide for UK Asylum Solicitors"
        subtitle="Current Home Office CPINs, leading country guidance, and the expert report role beyond generic country policy."
        breadcrumbs={crumbs}
      >
        <p className="text-[#374151] leading-relaxed">
          A Country Policy Information Note (CPIN) is a Home Office document setting out the UK government&apos;s
          position on country conditions for asylum decision-making. CPINs are not binding on immigration tribunals
          but carry significant weight. For Pakistani asylum claims, multiple CPINs have been updated in 2024 to 2025,
          making current knowledge essential for both solicitors and expert reports.
        </p>
        <p className="mt-4 text-[#374151] leading-relaxed">
          This guide provides a quick reference to all current Pakistan CPINs, summarises leading country guidance
          including MN and Others (Ahmadis) Pakistan CG [2012] UKUT 00389, and explains how expert reports relate to
          and may challenge CPIN findings. It is designed for UK immigration solicitors, Legal Aid practitioners,
          and barristers instructing Pakistan country experts.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#0C3547]">Current Pakistan CPINs: Quick Reference Table</h2>
        <div className="mt-4">
          <ResponsiveTableWrap>
            <table className="w-full min-w-[600px] border-collapse text-sm">
              <caption className="mb-3 text-left text-base font-semibold text-[#0C3547]">
                Pakistan CPIN quick reference for UK asylum practitioners (2025)
              </caption>
              <thead>
                <tr className="border-b border-[#C8DDD6] bg-[#F4F8F7]">
                  <th className="px-4 py-3 text-left font-semibold text-[#0C3547]">CPIN Topic</th>
                  <th className="px-4 py-3 text-left font-semibold text-[#0C3547]">Version/Date</th>
                  <th className="px-4 py-3 text-left font-semibold text-[#0C3547]">Key Finding</th>
                </tr>
              </thead>
              <tbody>
                {cpinQuickReference.map((row) => (
                  <tr key={row.topic} className="border-b border-[#C8DDD6]">
                    <td className="px-4 py-3 text-[#374151]">{row.topic}</td>
                    <td className="px-4 py-3 text-[#374151]">{row.versionDate}</td>
                    <td className="px-4 py-3 text-[#374151]">{row.keyFinding}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ResponsiveTableWrap>
        </div>

        <section id="ahmadis" className="scroll-mt-24 mt-10">
          <h2 className="text-xl font-bold text-[#0C3547]">March 2025 Ahmadis CPIN Version 6.0</h2>
          <p className="mt-4 text-[#374151] leading-relaxed">
            The March 2025 CPIN on Ahmadis confirms that while the state is able to protect Ahmadis in principle, it
            is generally unwilling to do so. Police are complicit in harassment, the killing of Ahmadis is on the rise,
            TLP blasphemy mob violence continues, and courts do not apply correct standards in blasphemy cases. See the{" "}
            <Link href="/asylum-profiles/ahmadi-muslims-pakistan" className="font-semibold text-[#C8922A] hover:underline">
              Ahmadi Muslims profile
            </Link>{" "}
            and{" "}
            <Link href="/guides/ahmadi-asylum-pakistan-guide" className="font-semibold text-[#C8922A] hover:underline">
              Ahmadi expert evidence guide
            </Link>
            .
          </p>
        </section>

        <section id="shia-muslims" className="scroll-mt-24 mt-10">
          <h2 className="text-xl font-bold text-[#0C3547]">July 2021 Shia Muslims CPIN</h2>
          <p className="mt-4 text-[#374151] leading-relaxed">
            The July 2021 CPIN on Shia Muslims in Pakistan confirms sectarian risk from Sunni extremist groups
            including ASWJ (formerly SSP), targeted killings, and particular danger for Hazara Shia in Quetta,
            Balochistan. State protection is limited and inconsistent. See the{" "}
            <Link href="/asylum-profiles/shia-muslims-pakistan" className="font-semibold text-[#C8922A] hover:underline">
              Shia Muslims profile
            </Link>
            .
          </p>
        </section>

        <section id="blasphemy" className="scroll-mt-24 mt-10">
          <h2 className="text-xl font-bold text-[#0C3547]">Blasphemy Accusations CPIN</h2>
          <p className="mt-4 text-[#374151] leading-relaxed">
            Home Office country guidance on blasphemy in Pakistan confirms that accusations under sections 295 to 298 of
            the Pakistan Penal Code are widely misused, that mob violence frequently follows allegations, and that state
            protection is generally unavailable for those accused. Acquittal does not remove ongoing risk from extremist
            groups. See the{" "}
            <Link href="/asylum-profiles/blasphemy-accusations-pakistan" className="font-semibold text-[#C8922A] hover:underline">
              blasphemy accusations profile
            </Link>{" "}
            and{" "}
            <Link href="/guides/blasphemy-pakistan-expert-guide" className="font-semibold text-[#C8922A] hover:underline">
              blasphemy expert evidence guide
            </Link>
            .
          </p>
        </section>

        <section id="women-vawg" className="scroll-mt-24 mt-10">
          <h2 className="text-xl font-bold text-[#0C3547]">Women & Violence Against Women and Girls (VAWG)</h2>
          <p className="mt-4 text-[#374151] leading-relaxed">
            Pakistan CPINs on women and girls confirm that while legislation exists against honour killings and domestic
            violence, enforcement is deeply inconsistent. Police frequently refuse to register FIRs in honour violence
            cases, and internal relocation is extremely difficult where families have nationwide reach. See the{" "}
            <Link href="/asylum-profiles/women-honour-based-violence" className="font-semibold text-[#C8922A] hover:underline">
              women and honour-based violence profile
            </Link>{" "}
            and{" "}
            <Link href="/guides/honour-based-violence-pakistan" className="font-semibold text-[#C8922A] hover:underline">
              honour-based violence expert guide
            </Link>
            .
          </p>
        </section>

        <section id="lgbtq" className="scroll-mt-24 mt-10">
          <h2 className="text-xl font-bold text-[#0C3547]">LGBTQ+ and s377 PPC</h2>
          <p className="mt-4 text-[#374151] leading-relaxed">
            Same-sex conduct is criminalised under section 377 of the Pakistan Penal Code with penalties of up to life
            imprisonment. Social attitudes are predominantly hostile and state protection is generally unavailable.
            Khawaja Sira individuals face severe discrimination despite partial legal recognition. Expert evidence
            applies the HJ (Iran) [2010] standard. See the{" "}
            <Link href="/asylum-profiles/lgbtq-asylum-pakistan" className="font-semibold text-[#C8922A] hover:underline">
              LGBTQ+ asylum profile
            </Link>
            .
          </p>
        </section>

        <section id="political-opposition" className="scroll-mt-24 mt-10">
          <h2 className="text-xl font-bold text-[#0C3547]">Political Opposition & PTI Supporters</h2>
          <p className="mt-4 text-[#374151] leading-relaxed">
            Current country guidance confirms real risk for PTI supporters, journalists, and human rights defenders
            following the 2023 to 2024 crackdown. Enforced disappearances of Baloch nationalists and activists remain a
            serious concern. UK-based political activity may increase visibility on return. See the{" "}
            <Link href="/asylum-profiles/political-persecution-pakistan" className="font-semibold text-[#C8922A] hover:underline">
              political persecution profile
            </Link>{" "}
            and{" "}
            <Link href="/guides/pakistan-political-asylum-guide" className="font-semibold text-[#C8922A] hover:underline">
              political persecution expert guide
            </Link>
            .
          </p>
        </section>

        <section id="actors-of-protection" className="scroll-mt-24 mt-10">
          <h2 className="text-xl font-bold text-[#0C3547]">Actors of Protection</h2>
          <p className="mt-4 text-[#374151] leading-relaxed">
            Pakistan&apos;s ability and willingness to protect varies significantly by profile and location. For Ahmadis
            and blasphemy accusees, the state is able but generally unwilling to protect. For women facing honour
            violence, formal protection exists but enforcement is deeply inconsistent. See the{" "}
            <Link href="/asylum-profiles/actors-of-protection-pakistan" className="font-semibold text-[#C8922A] hover:underline">
              actors of protection profile
            </Link>
            .
          </p>
        </section>

        <section id="mn-and-others-2012" className="scroll-mt-24 mt-10">
          <h2 className="text-xl font-bold text-[#0C3547]">MN and Others (Ahmadis) Pakistan CG [2012] UKUT 00389</h2>
          <p className="mt-4 text-[#374151] leading-relaxed">
            MN and Others (Ahmadis) Pakistan CG [2012] UKUT 00389 remains the leading country guidance case for Ahmadi
            asylum claims from Pakistan. The Upper Tribunal held that Ahmadis in Pakistan face a real risk of persecution
            and that the state is generally unwilling to provide effective protection. While the CPIN landscape has evolved
            since 2012, the March 2025 Ahmadis CPIN Version 6.0 confirms the core findings on state unwillingness to
            protect remain current.
          </p>
          <p className="mt-4 text-[#374151] leading-relaxed">
            Expert reports addressing Ahmadi claims must analyse the individual appellant&apos;s profile and visibility
            against both the leading country guidance and current CPIN findings, including TLP mob violence, blasphemy
            charges, and police complicity in harassment. See also{" "}
            <Link href="/glossary#country-guidance-mn-and-others-2012" className="font-semibold text-[#C8922A] hover:underline">
              MN and Others [2012] in the glossary
            </Link>
            .
          </p>
        </section>

        <section id="internal-relocation" className="scroll-mt-24 mt-10">
          <h2 className="text-xl font-bold text-[#0C3547]">Internal Relocation in Pakistan</h2>
          <p className="mt-4 text-[#374151] leading-relaxed">
            Internal relocation viability depends entirely on the appellant&apos;s profile. Women fleeing honour-based
            violence face particular difficulty where families have resources and connections nationwide. LGBTQ+
            individuals cannot safely relocate because s377 PPC applies nationwide. Expert reports assess whether
            internal relocation is viable and not unduly harsh for the individual appellant.
          </p>
        </section>

        <h2 className="mt-10 text-xl font-bold text-[#0C3547]">How Expert Reports Relate to CPINs</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Expert reports do not simply reproduce CPIN content. The expert&apos;s role is to provide independent,
          objective analysis of whether the appellant&apos;s specific profile creates a real risk, applying current
          field research and source citations beyond the CPIN. Reports that merely restate CPIN findings without
          independent analysis are identified as a red flag in the Adam Pipe October 2025 guide.
        </p>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Where the CPIN supports the appellant, the expert confirms and applies the CPIN to the individual profile.
          Where the CPIN does not support the appellant, the expert may challenge CPIN findings with field research,
          NGO reports, and profile-specific evidence. See our{" "}
          <Link href="/services/cpin-challenge" className="font-semibold text-[#C8922A] hover:underline">
            CPIN challenge reports service
          </Link>
          .
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#0C3547]">Expert&apos;s Role: Beyond the CPIN</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          An expert report provides profile-specific and region-specific analysis that CPINs, by their nature, cannot
          offer. For Ahmadi claims, this includes visibility assessment and Ahmadiyya Muslim Association UK verification.
          For blasphemy accusations, the expert analyses whether acquittal provides genuine protection or merely legal
          clearance. For women fleeing honour-based violence, the expert assesses family reach and internal relocation
          viability.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#0C3547]">Legal Aid Compatibility</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Most Pakistan expert reports in asylum proceedings are Legal Aid funded through the Legal Aid Agency (LAA).
          Prior authority is required before instruction. See our{" "}
          <Link href="/how-to-instruct" className="font-semibold text-[#C8922A] hover:underline">
            how to instruct page
          </Link>{" "}
          and{" "}
          <Link href="/guides/instructing-pakistan-expert" className="font-semibold text-[#C8922A] hover:underline">
            instructing guide
          </Link>{" "}
          for the LAA prior authority process and typical rates.
        </p>

        <div className="mt-10 rounded-[8px] border border-[#C8DDD6] bg-[#F4F8F7] p-6">
          <h3 className="font-semibold text-[#0C3547]">All Pakistani Asylum Profiles</h3>
          <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
            <li><Link href="/asylum-profiles/ahmadi-muslims-pakistan" className="text-[#C8922A] hover:underline">Ahmadi Muslims</Link></li>
            <li><Link href="/asylum-profiles/blasphemy-accusations-pakistan" className="text-[#C8922A] hover:underline">Blasphemy Accusations</Link></li>
            <li><Link href="/asylum-profiles/shia-muslims-pakistan" className="text-[#C8922A] hover:underline">Shia Muslims</Link></li>
            <li><Link href="/asylum-profiles/women-honour-based-violence" className="text-[#C8922A] hover:underline">Women & Honour-Based Violence</Link></li>
            <li><Link href="/asylum-profiles/lgbtq-asylum-pakistan" className="text-[#C8922A] hover:underline">LGBTQ+ Asylum</Link></li>
            <li><Link href="/asylum-profiles/political-persecution-pakistan" className="text-[#C8922A] hover:underline">Political Persecution</Link></li>
            <li><Link href="/asylum-profiles/christians-religious-minorities" className="text-[#C8922A] hover:underline">Christians & Religious Minorities</Link></li>
            <li><Link href="/asylum-profiles/actors-of-protection-pakistan" className="text-[#C8922A] hover:underline">Actors of Protection</Link></li>
          </ul>
        </div>

        <div className="mt-8 rounded-[8px] border border-[#C8DDD6] bg-[#F4F8F7] p-6">
          <h3 className="font-semibold text-[#0C3547]">Solicitor Guides</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link href={`/guides/${g.slug}`} className="text-[#C8922A] hover:underline">
                  {g.h1.replace(/:.*$/, "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <FAQSection faqs={cpinFaqs} />
        <RelatedLinks links={getCpinRelatedLinks()} />
      </PageShell>
    </>
  );
}
