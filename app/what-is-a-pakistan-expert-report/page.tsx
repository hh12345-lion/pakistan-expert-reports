import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "What Is a Pakistan Expert Report? | UK Immigration Tribunal Evidence",
  description:
    "A Pakistan expert report provides independent country condition evidence for UK immigration tribunals — Ahmadi persecution, blasphemy, Shia Muslims, women, and LGBTQ+ asylum explained for solicitors.",
  path: "/what-is-a-pakistan-expert-report",
});

const reportChecklist = [
  "Profile-specific risk assessment against current country conditions",
  "State protection analysis citing the March 2025 Ahmadis CPIN and July 2021 Shia Muslims CPIN",
  "Internal relocation feasibility for the individual appellant's circumstances",
  "Current CPIN and MN and Others [2012] country guidance analysis relevant to the claim",
  "Source citations to OSCOLA standards and field research",
];

export default function WhatIsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "What Is a Pakistan Expert Report?" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="What Is a Pakistan Expert Report?"
        subtitle="The role, content, and value of independent Pakistan country evidence in UK immigration tribunals."
        breadcrumbs={crumbs}
      >
        <div className="rounded-[8px] border border-[#C8DDD6] bg-[#F4F8F7] p-5 sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#C8922A]">Definition</p>
          <p className="mt-3 text-base leading-relaxed text-[#374151] sm:text-lg">
            A Pakistan expert report is an independent country condition report prepared by a qualified specialist for
            UK immigration tribunals. It provides objective evidence on profile-specific persecution risk, state
            protection, internal relocation, and current Home Office CPIN positions — without determining credibility
            or ultimate refugee status.
          </p>
        </div>

        <h2 className="mt-10 text-xl font-bold text-[#0C3547]">
          What Should a Pakistan Expert Report Contain?
        </h2>
        <p className="mt-3 text-sm text-[#374151]">
          Tribunal-ready reports typically address the following (featured-snippet checklist):
        </p>
        <ul className="mt-4 space-y-2 rounded-[8px] border border-[#C8DDD6] bg-white p-5 sm:p-6">
          {reportChecklist.map((item) => (
            <li key={item} className="flex gap-3 text-[#374151] leading-relaxed">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#2E7D52]" aria-hidden />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-[#374151] leading-relaxed">
          Pakistan is the second-highest asylum claim nationality in the UK. Expert evidence is essential where Home
          Office refusals rely on generic CPIN positions that do not reflect the appellant&apos;s specific profile,
          whether Ahmadi persecution under Ordinance XX, blasphemy accusations, Shia sectarian violence, honour-based
          violence, LGBTQ+ criminalisation under section 377 PPC, or political persecution including PTI supporters and
          journalists.
        </p>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Expert reports must comply with Immigration Tribunal Practice Direction paragraph 10 and the Expert Reports in
          the Immigration Tribunal guide (October 2025) by Adam Pipe of No.8 Chambers. The expert&apos;s paramount duty
          is to the tribunal, not to the instructing solicitor or the appellant.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#0C3547]">When Should Solicitors Instruct?</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Instruct as soon as the need for expert evidence is identified, ideally when the appeal is lodged. Allow 2 to
          3 weeks for a standard report. For Legal Aid cases, apply for LAA prior authority before instruction. For
          Ahmadi claims, coordinate Ahmadiyya Muslim Association UK verification alongside expert report instruction.
        </p>

        <RelatedLinks
          links={[
            { label: "Asylum Profiles", href: "/asylum-profiles" },
            { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
            { label: "How to Instruct", href: "/how-to-instruct" },
            { label: "Qualifications", href: "/qualifications" },
            { label: "Contact Us", href: "/contact" },
          ]}
        />
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[44px] w-full items-center justify-center rounded-[4px] bg-[#2E7D52] px-6 py-3 font-semibold text-white hover:bg-[#256b42] sm:w-auto"
        >
          Contact Us
        </Link>
      </PageShell>
    </>
  );
}
