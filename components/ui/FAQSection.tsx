import type { FAQ } from "@/lib/schema";

export function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  id = "faqs",
}: {
  faqs: FAQ[];
  title?: string;
  id?: string;
}) {
  if (faqs.length === 0) return null;

  return (
    <section id={id} className="scroll-mt-8 py-10" aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`} className="mb-6 font-display text-2xl font-semibold text-[#1B1F18]">
        {title}
      </h2>
      <div className="divide-y divide-[#D0D4C8] border-y border-[#D0D4C8]">
        {faqs.map((faq) => (
          <div key={faq.question} className="py-6">
            <h3 className="font-display text-lg font-semibold text-[#1B1F18]">{faq.question}</h3>
            <p className="mt-3 leading-relaxed text-[#3E4538]">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
