import { ContactForm } from "@/components/forms/ContactForm";
import { BRIEF_LABEL, SITE_EMAIL } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: `${BRIEF_LABEL} | Pakistan Expert Reports UK`,
  description:
    "Send a short brief to commission a Pakistan expert report. Legal Aid compatible. Response within one business day.",
  path: "/send-brief",
  noindex: true,
});

export default function SendBriefPage() {
  return (
    <section className="px-4 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8B1E3F]">{BRIEF_LABEL}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-[#1B1F18]">Four fields. We reply within a day.</h1>
        <p className="mt-4 text-[#3E4538] leading-relaxed">
          For UK solicitors and Legal Aid practitioners. Confidential — availability, scope, and next steps by the next
          business day.
        </p>
        <div className="mt-10">
          <ContactForm />
        </div>
        <p className="mt-8 text-sm text-[#3E4538]">
          Prefer email?{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-medium text-[#8B1E3F] underline-offset-2 hover:underline">
            {SITE_EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}
