import Link from "next/link";

export function CTASection({
  title = "Ready to instruct a Pakistan country expert?",
  description = "Send firm name, contact, and a short case note. We reply within one business day with availability, Legal Aid rates where relevant, and next steps under the Immigration Tribunal Practice Direction.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#141A22] py-14 sm:py-16">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[url('/images/lahore-badshahi.jpg')] bg-cover bg-center opacity-25"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#141A22] via-[#141A22]/92 to-[#141A22]/55" aria-hidden />
      <div className="relative mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5A8FA8]">Instruction desk</p>
        <h2 className="mt-3 max-w-xl font-display text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">{description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] w-full items-center justify-center border border-[#C45E2D] bg-[#C45E2D] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-transparent hover:text-[#C45E2D] sm:w-auto"
          >
            Contact us
          </Link>
          <Link
            href="/how-to-instruct"
            className="inline-flex min-h-[44px] w-full items-center justify-center border border-white/35 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:border-white hover:bg-white/5 sm:w-auto"
          >
            How to instruct
          </Link>
        </div>
      </div>
    </section>
  );
}
