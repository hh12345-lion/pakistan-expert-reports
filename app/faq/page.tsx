import { FAQSection } from "@/components/ui/FAQSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqs } from "@/data/faq";
import { createMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/schema";
import { BRIEF_LABEL, BRIEF_PATH } from "@/lib/constants";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Pakistan Expert Report Questions | FAQ for UK Solicitors",
  description:
    "Answers for UK immigration solicitors on Pakistan expert reports: CPINs, MN and Others [2012], Legal Aid, timelines, and the main Pakistani asylum profiles.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <section className="border-b border-[#D0D4C8] px-4 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8B1E3F]">Questions</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-[#1B1F18]">
            Practitioner questions on Pakistan expert evidence
          </h1>
          <p className="mt-4 leading-relaxed text-[#3E4538]">
            Short answers for solicitors commissioning country evidence for Pakistani asylum appeals. For a live matter,{" "}
            <Link href={BRIEF_PATH} className="font-medium text-[#8B1E3F] underline-offset-2 hover:underline">
              {BRIEF_LABEL.toLowerCase()}
            </Link>
            .
          </p>
          <FAQSection faqs={faqs} title="Frequently asked questions" />
          <Link href={BRIEF_PATH} className="btn-brief mt-4">
            {BRIEF_LABEL}
          </Link>
        </div>
      </section>
    </>
  );
}
