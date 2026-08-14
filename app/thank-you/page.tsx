import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { BRIEF_LABEL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Thank You | Pakistan Expert Reports",
  description: "Your brief has been received. We will respond within one business day.",
  path: "/thank-you",
  noindex: true,
  follow: false,
});

export default function ThankYouPage() {
  return (
    <section className="px-4 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8B1E3F]">Brief received</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-[#1B1F18]">Thank you</h1>
        <p className="mt-5 text-lg leading-relaxed text-[#3E4538]">
          Your note is with the desk. We reply within one business day with expert availability, scope, and the Legal
          Aid pathway where relevant.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn-brief">
            Home
          </Link>
          <Link href="/faq" className="btn-ghost text-[#1B1F18]">
            Questions
          </Link>
        </div>
        <p className="mt-8 text-sm text-[#3E4538]/80">
          If you sent a {BRIEF_LABEL.toLowerCase()} in error, reply to the confirmation email or write to the desk.
        </p>
      </div>
    </section>
  );
}
