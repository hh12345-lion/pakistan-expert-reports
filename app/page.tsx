import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/ui/JsonLd";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { asylumProfiles } from "@/data/asylum-profiles";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/metadata";
import { BRIEF_LABEL, BRIEF_PATH } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Pakistan Expert Reports UK | Country Expert Witness & Asylum Tribunal Evidence",
  description:
    "Commission qualified Pakistan expert reports for UK immigration tribunals and asylum appeals. Serving UK solicitors and Legal Aid practitioners. Ahmadis, blasphemy, Shia Muslims, honour-based violence, LGBTQ+, and political persecution.",
  path: "/",
});

const pillars = [
  {
    title: "Practice Direction compliant",
    body: "Reports follow Immigration Tribunal Practice Direction paragraph 10 and CPR Part 35 — independence, disclosed sources, and reasoned opinion, not advocacy.",
  },
  {
    title: "CPIN-current citation",
    body: "Experts engage March 2025 Ahmadis CPIN Version 6.0, July 2021 Shia Muslims CPIN, MN and Others [2012], and the live 2024–2025 Pakistan stack — including where the CPIN understates risk.",
  },
  {
    title: "Legal Aid compatible",
    body: "LAA prior authority pathways and rates available across the main Pakistani profiles in First-tier and Upper Tribunal proceedings.",
  },
];

const processSteps = [
  {
    title: "Lodge the brief",
    body: "Name, firm, email, and a short case note: profile, forum (FTT / UT / fresh claim), and any hearing date.",
  },
  {
    title: "Scope and match",
    body: "We reply within one business day with expert availability, proposed scope, and Legal Aid rates where relevant.",
  },
  {
    title: "Prior authority",
    body: "For Legal Aid matters, confirm LAA prior authority before drafting begins. Typical report windows are two to three weeks.",
  },
  {
    title: "Tribunal-ready report",
    body: "Independent country evidence addressing risk, state protection, and internal relocation against the appellant’s matrix.",
  },
];

const cpinRows = [
  { item: "Ahmadis CPIN", note: "March 2025 Version 6.0 — state able, generally unwilling to protect." },
  { item: "MN and Others [2012]", note: "Leading Ahmadi country guidance; still the UT framework." },
  { item: "Shia Muslims CPIN", note: "July 2021 — sectarian risk, Hazara Quetta, limited protection." },
  { item: "s295–298 / s377 PPC", note: "Blasphemy death penalty under s295-C; LGBTQ+ criminalisation under s377." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />

      <section className="border-b border-[#D0D4C8] px-4 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B1E3F]">Pakistan Expert Reports</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.12] tracking-tight text-[#1B1F18] sm:text-5xl">
            Country evidence for Pakistani asylum appeals — written for the UK tribunal file
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#3E4538]">
            We match UK immigration solicitors and Legal Aid practitioners with qualified Pakistan country experts for
            FTT and Upper Tribunal. Ahmadi, blasphemy, Shia, honour-based violence, LGBTQ+, and political profiles.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={BRIEF_PATH} className="btn-brief">
              {BRIEF_LABEL}
            </Link>
            <Link href="/faq" className="btn-ghost text-[#1B1F18]">
              Read questions
            </Link>
          </div>
          <figure className="relative mt-12 aspect-[16/8] overflow-hidden">
            <Image
              src="/images/lahore-badshahi.jpg"
              alt="Badshahi Mosque at dusk, Lahore, Pakistan"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 48rem"
            />
          </figure>
        </div>
      </section>

      <section id="evidence" className="scroll-mt-8 border-b border-[#D0D4C8] bg-[#E6E9DF] px-4 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4A5C3A]">Why evidence</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-[#1B1F18]">
            High-volume nationality. Template CPIN refusals still decide too many files.
          </h2>
          <p className="mt-5 leading-relaxed text-[#3E4538]">
            Pakistani claims sit among the most frequent before UK asylum tribunals. Refusals often lift generic CPIN
            extracts that miss locality, visibility, and the gap between formal “actors of protection” and lived risk.
            Independent country evidence is how Ordinance XX, blasphemy practice, Shia targeting, HBV dynamics, s377
            PPC, and political crackdowns — including PTI and press cases — get onto the record as reasoned opinion.
          </p>
          <ol className="mt-10 space-y-0 border-t border-[#D0D4C8]">
            {pillars.map((item, i) => (
              <li key={item.title} className="grid gap-2 border-b border-[#D0D4C8] py-5 sm:grid-cols-[2.5rem_1fr]">
                <span className="font-display text-sm text-[#8B1E3F]">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#1B1F18]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="profiles" className="scroll-mt-8 border-b border-[#D0D4C8] px-4 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8B1E3F]">Profiles</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-[#1B1F18]">
            The Pakistani asylum profiles that drive UK briefs
          </h2>
          <p className="mt-4 leading-relaxed">
            Each profile is the refusal pattern solicitors actually meet — statute, CPIN posture, and where expert
            opinion typically strengthens the bundle.
          </p>
          <ul className="mt-8 border-t border-[#D0D4C8]">
            {asylumProfiles.map((p) => (
              <li key={p.slug} className="border-b border-[#D0D4C8] py-6">
                <h3 className="font-display text-xl font-semibold text-[#1B1F18]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{p.content[0]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="reports" className="scroll-mt-8 border-b border-[#D0D4C8] bg-[#1B1F18] px-4 py-14 text-[#F4F6F1] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A8B39A]">Reports</p>
          <h2 className="mt-3 font-display text-3xl font-semibold">Scopes matched to how Pakistani cases are run</h2>
          <ul className="mt-8 border-t border-white/15">
            {services.map((s) => (
              <li key={s.id} className="border-b border-white/15 py-5">
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="process" className="scroll-mt-8 border-b border-[#D0D4C8] px-4 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4A5C3A]">Process</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-[#1B1F18]">How a brief becomes a report</h2>
          <ol className="mt-8 border-t border-[#D0D4C8]">
            {processSteps.map((step, i) => (
              <li key={step.title} className="grid gap-2 border-b border-[#D0D4C8] py-5 sm:grid-cols-[2.5rem_1fr]">
                <span className="font-display text-sm text-[#8B1E3F]">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#1B1F18]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link href={BRIEF_PATH} className="btn-brief mt-8">
            {BRIEF_LABEL}
          </Link>
        </div>
      </section>

      <section id="cpin" className="scroll-mt-8 border-b border-[#D0D4C8] bg-[#E6E9DF] px-4 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4A5C3A]">CPIN desk</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-[#1B1F18]">
            Live Pakistan CPIN and country guidance, kept on the desk
          </h2>
          <p className="mt-4 leading-relaxed">
            A solicitor-facing map of the authorities that actually move Pakistani appeals — and where expert evidence
            typically goes beyond the CPIN extract.
          </p>
          <div className="table-scroll mt-8">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead>
                <tr className="border-b border-[#1B1F18]">
                  <th className="py-3 pr-4 font-semibold text-[#1B1F18]">Authority</th>
                  <th className="py-3 font-semibold text-[#1B1F18]">What the file usually needs</th>
                </tr>
              </thead>
              <tbody>
                {cpinRows.map((row) => (
                  <tr key={row.item} className="border-b border-[#D0D4C8]">
                    <td className="py-3 pr-4 align-top font-medium text-[#1B1F18]">{row.item}</td>
                    <td className="py-3 align-top">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8B1E3F]">Next step</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-[#1B1F18]">Four fields. Reply within one business day.</h2>
          <p className="mt-4 leading-relaxed">
            No long intake. Send the brief; we confirm availability, scope, and the Legal Aid pathway where it applies.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={BRIEF_PATH} className="btn-brief">
              {BRIEF_LABEL}
            </Link>
            <Link href="/faq" className="btn-ghost text-[#1B1F18]">
              Practitioner questions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
