import Link from "next/link";
import { asylumProfiles } from "@/data/asylum-profiles";
import { services } from "@/data/services";

export default function NotFound() {
  const featuredProfiles = asylumProfiles.slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden bg-[#0C3547] py-16 text-center md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #2E7D52 0%, transparent 50%), radial-gradient(circle at 80% 20%, #C8922A 0%, transparent 40%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C8922A]">Pakistan Expert Reports</p>
          <p className="mt-8 text-8xl font-bold leading-none text-[#2E7D52]/90 sm:text-9xl" aria-hidden="true">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Page not found</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/80">
            The page you requested does not exist or may have moved. Use the links below to find Pakistan expert report
            guidance for UK asylum and immigration tribunals.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] bg-[#2E7D52] px-8 py-3 font-semibold text-white transition hover:bg-[#256b42]"
            >
              Return to Homepage
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] border-2 border-white/80 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F8F7] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl font-bold text-[#0C3547]">Popular destinations</h2>
          <nav className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Quick links">
            {[
              { label: "Asylum Profiles", href: "/asylum-profiles", desc: "Ahmadi, blasphemy, Shia, HBV, LGBTQ+" },
              { label: "Expert Services", href: "/services", desc: "Country reports, CPIN challenge, oral evidence" },
              { label: "CPIN & Country Guidance", href: "/cpin-country-guidance", desc: "March 2025 Ahmadis CPIN, MN and Others" },
              { label: "How to Instruct", href: "/how-to-instruct", desc: "Legal Aid, letter of instruction, timelines" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-[8px] border border-[#C8DDD6] bg-white p-5 text-left transition hover:border-[#2E7D52] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
              >
                <span className="font-semibold text-[#0C3547] group-hover:text-[#2E7D52]">{item.label}</span>
                <span className="mt-1 block text-sm text-[#374151]">{item.desc}</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-lg font-bold text-[#0C3547]">Asylum profiles</h2>
              <ul className="mt-4 space-y-2">
                {featuredProfiles.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/asylum-profiles/${p.slug}`}
                      className="text-sm font-medium text-[#C8922A] hover:underline"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/asylum-profiles" className="text-sm font-semibold text-[#0C3547] hover:underline">
                    View all profiles →
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0C3547]">Services</h2>
              <ul className="mt-4 space-y-2">
                {services.slice(0, 5).map((s) => (
                  <li key={s.id}>
                    <Link href={`/services/${s.id}`} className="text-sm font-medium text-[#C8922A] hover:underline">
                      {s.navLabel}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services" className="text-sm font-semibold text-[#0C3547] hover:underline">
                    View all services →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
