import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "How to Instruct a Pakistan Expert Report UK | Step-by-Step Guide",
  description:
    "Step-by-step guide for UK solicitors on instructing a Pakistan expert report for asylum appeals, Legal Aid cases, and immigration tribunal proceedings.",
  path: "/how-to-instruct",
});

const steps = [
  {
    n: 1,
    title: "Identify the Profile",
    body: "Determine the appellant's asylum profile: Ahmadi Muslims, blasphemy accusations, Shia Muslims, women and honour-based violence, LGBTQ+, political persecution, Christians and religious minorities, or multiple profiles. This determines which CPINs, Ahmadiyya verification, and expert specialism are required.",
  },
  {
    n: 2,
    title: "Legal Aid or Privately Funded?",
    body: "Most Pakistan expert reports in asylum proceedings are Legal Aid funded. Confirm funding status before instruction. Privately funded cases follow a different fee structure.",
  },
  {
    n: 3,
    title: "Prior Authority from LAA (if Legal Aid)",
    body: "Apply for LAA prior authority before instructing the expert. Include the expert's CV, proposed scope, estimated hours, and fee. Typical LAA rates are £50 to £100 per hour for report preparation.",
  },
  {
    n: 4,
    title: "Letter of Instruction",
    body: "Provide a detailed letter of instruction specifying the expert's role, questions to address, hearing date, and funding arrangements. Reference relevant CPINs (Ahmadis March 2025 Version 6.0, Shia Muslims July 2021, blasphemy, women, LGBTQ+), MN and Others (Ahmadis) Pakistan CG [2012] UKUT 00389, and Ahmadiyya Muslim Association UK verification where applicable.",
  },
  {
    n: 5,
    title: "Provide All Relevant Materials",
    body: "Include the screening record, Asylum Interview Record (AIR), Home Office refusal letter (RFRL), client witness statement, any previous expert reports, relevant CPINs, and Ahmadiyya verification letters for Ahmadi claims.",
  },
  {
    n: 6,
    title: "Expert Analysis and Report",
    body: "The expert prepares an independent report addressing the letter of instruction. Standard reports take 2 to 3 weeks. Urgent reports available in 5 business days.",
  },
  {
    n: 7,
    title: "Written Questions and Oral Evidence",
    body: "If required, respond to written questions from the opposing party. Oral evidence is most common in country guidance cases or where the tribunal directs expert attendance.",
  },
];

export default function HowToInstructPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "How to Instruct" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="How to Instruct a Pakistan Expert Report"
        subtitle="Seven steps for UK immigration solicitors and Legal Aid practitioners."
        breadcrumbs={crumbs}
      >
        <div className="space-y-6">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-4 rounded-[8px] border border-[#C8DDD6] bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0C3547] font-bold text-white">
                {s.n}
              </span>
              <div>
                <h2 className="font-bold text-[#0C3547]">{s.title}</h2>
                <p className="mt-2 text-[#374151]">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-xl font-bold text-[#0C3547]">Legal Aid</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Most Pakistan expert reports in asylum proceedings are Legal Aid funded. LAA prior authority is required before
          instruction. See our{" "}
          <Link href="/guides/instructing-pakistan-expert" className="font-semibold text-[#C8922A] hover:underline">
            instructing guide
          </Link>{" "}
          for the prior authority process and typical LAA rates, aligned with the Adam Pipe October 2025 requirements.
        </p>

        <RelatedLinks
          links={[
            { label: "Instructing guide", href: "/guides/instructing-pakistan-expert" },
            { label: "Qualifications", href: "/qualifications" },
            { label: "Solicitor guides", href: "/guides" },
            { label: "Instruct an expert", href: "/contact" },
          ]}
        />
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[44px] items-center rounded-[4px] bg-[#2E7D52] px-6 py-3 font-semibold text-white hover:bg-[#256b42]"
        >
          Instruct an Expert
        </Link>
      </PageShell>
    </>
  );
}
