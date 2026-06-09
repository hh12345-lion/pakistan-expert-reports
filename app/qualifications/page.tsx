import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Pakistan Expert Report Qualifications UK | Credentials & Standards",
  description:
    "What qualifications should a Pakistan expert report hold? Academic credentials, field research, Urdu/Punjabi/Sindhi language skills, CPIN knowledge, and Immigration Tribunal Practice Direction compliance.",
  path: "/qualifications",
});

export default function QualificationsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Qualifications" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell title="Pakistan Expert Report Qualifications UK" breadcrumbs={crumbs}>
        <h2 className="text-xl font-bold text-[#0C3547]">What Makes a Qualified Pakistan Expert</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          A qualified Pakistan expert report holds academic credentials (PhD, MA, or equivalent research background) in
          South Asian Studies, Political Science, International Relations, Anthropology, Law, or a related discipline.
          Field research experience in Pakistan is essential, not optional.
        </p>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Language expertise in Urdu, Punjabi, and/or Sindhi demonstrates the ability to assess conditions beyond
          English-language sources. Current knowledge of country conditions, including familiarity with all relevant
          Pakistan CPINs including the March 2025 Ahmadis CPIN Version 6.0 and MN and Others (Ahmadis) Pakistan CG
          [2012] UKUT 00389, is required. Prior tribunal acceptance demonstrates evidential reliability.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#0C3547]">
          Immigration Tribunal Practice Direction: Expert Duties
        </h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          An expert&apos;s paramount duty is to the tribunal: to assist it in reaching a decision by providing an
          objective, unbiased opinion on matters within their expertise, not to advocate for either the appellant or
          the Home Office. Expert evidence should be the independent product of the expert, uninfluenced by the
          pressures of litigation.
        </p>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Reports must address matters within the expert&apos;s expertise, cite verifiable sources, and distinguish
          fact from opinion. The expert must not express views on the credibility of the appellant or the ultimate
          legal conclusion on refugee status.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#0C3547]">Red Flags</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[#374151]">
          <li>Expert without current knowledge of Pakistan</li>
          <li>Reports that simply reproduce CPIN without independent analysis</li>
          <li>No field research or in-country experience</li>
          <li>Cannot distinguish between provincial conditions within Pakistan</li>
          <li>No prior tribunal acceptance</li>
        </ul>
      </PageShell>
    </>
  );
}
