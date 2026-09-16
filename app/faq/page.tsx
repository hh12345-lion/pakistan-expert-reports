import { FAQSection } from "@/components/ui/FAQSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqs } from "@/data/faq";
import { createMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/schema";
import { BRIEF_LABEL, BRIEF_PATH } from "@/lib/constants";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Pakistan Expert Report Questions | FAQ for Solicitors",
  description:
    "Answers for immigration solicitors on Pakistan expert reports: CPINs, MN and Others [2012], Legal Aid, timelines, and the main Pakistani asylum profiles.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <section className="border-b border-[#CCD1C5] px-4 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#801F37]">Questions</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-[#191D18]">
            Practitioner questions on Pakistan expert evidence
          </h1>
          <p className="mt-4 leading-relaxed text-[#3F433E]">
            Short answers for solicitors commissioning country evidence for Pakistani asylum appeals. For a live matter,{" "}
            <Link href={BRIEF_PATH} className="font-medium text-[#801F37] underline-offset-2 hover:underline">
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
