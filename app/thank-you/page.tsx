import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Thank You | Pakistan Expert Reports",
  description: "Your instruction request has been received. We will respond within one business day.",
  path: "/thank-you",
  noindex: true,
  follow: false,
});

const steps = [
  {
    step: "1",
    title: "Case review",
    body: "We review your case details and match you with a qualified Pakistan country expert for your profile and hearing date.",
  },
  {
    step: "2",
    title: "Response within one business day",
    body: "You receive proposed scope, timeline, expert availability, and indicative fees where applicable.",
  },
  {
    step: "3",
    title: "Legal Aid prior authority",
    body: "For Legal Aid cases, confirm LAA prior authority before the expert begins work on your report.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0C3547] py-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 30%, #2E7D52 0%, transparent 45%), radial-gradient(circle at 30% 80%, #C8922A 0%, transparent 35%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C8922A]">Pakistan Expert Reports</p>
          <div
            className="mx-auto mt-8 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-2 border-[#2E7D52]/40 bg-[#2E7D52]/15"
            aria-hidden="true"
          >
            <svg className="h-9 w-9 text-[#2E7D52]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl">Thank you</h1>
          <p className="mt-4 text-lg leading-relaxed text-white/85">
            Your instruction request has been received successfully. A member of our team will respond within one
            business day.
          </p>
          <p className="mt-2 text-sm text-white/55">
            For urgent tribunal deadlines, please note your hearing date in any follow-up correspondence.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/"
              className="inline-flex min-h-[44px] min-w-[200px] items-center justify-center rounded-[4px] bg-[#2E7D52] px-8 py-3 font-semibold text-white transition hover:bg-[#256b42]"
            >
              Return to Homepage
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-[44px] min-w-[200px] items-center justify-center rounded-[4px] border-2 border-white/80 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F8F7] py-14">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-center text-xl font-bold text-[#0C3547]">What happens next?</h2>
          <ol className="mt-8 space-y-4">
            {steps.map((item) => (
              <li
                key={item.step}
                className="flex gap-4 rounded-[8px] border border-[#C8DDD6] bg-white p-5 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0C3547] text-sm font-bold text-white">
                  {item.step}
                </span>
                <div className="text-left">
                  <p className="font-semibold text-[#0C3547]">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#374151]">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-[#C8DDD6] pt-8">
            <Link
              href="/how-to-instruct"
              className="inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline"
            >
              How to instruct a Pakistan expert report
            </Link>
            <Link
              href="/guides/instructing-pakistan-expert"
              className="inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline"
            >
              Solicitor instructing guide
            </Link>
            <Link
              href="/cpin-country-guidance"
              className="inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline"
            >
              Pakistan CPIN guidance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
