import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { caseTypes, getCaseType } from "@/data/case-types";
import { getAsylumProfile } from "@/data/asylum-profiles";
import { getService } from "@/data/services";
import { getCaseTypeRelatedLinks } from "@/data/related-links";

export function generateStaticParams() {
  return caseTypes.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCaseType(slug);
  if (!c) return {};
  return createMetadata({ title: c.metaTitle, description: c.metaDescription, path: `/case-types/${slug}` });
}

export default async function CaseTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ct = getCaseType(slug);
  if (!ct) notFound();

  const crumbs = [{ label: "Home", href: "/" }, { label: "Case Types", href: "/case-types" }, { label: ct.title }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={ct.faqs} />
      <PageShell title={ct.h1} breadcrumbs={crumbs}>
        {ct.content.map((p, i) => (
          <p key={i} className="mb-4 text-[#374151] leading-relaxed">
            {p}
          </p>
        ))}

        <FAQSection faqs={ct.faqs} />

        <h3 className="mt-8 font-semibold text-[#0C3547]">Related asylum profiles</h3>
        <ul className="mt-2 space-y-1">
          {ct.relatedProfiles.map((s) => {
            const profile = getAsylumProfile(s);
            return (
              <li key={s}>
                <Link href={`/asylum-profiles/${s}`} className="text-[#C8922A] hover:underline">
                  {profile?.title ?? s}
                </Link>
              </li>
            );
          })}
        </ul>

        <h3 className="mt-6 font-semibold text-[#0C3547]">Related services</h3>
        <ul className="mt-2 space-y-1">
          {ct.relatedServices.map((id) => {
            const service = getService(id);
            return (
              <li key={id}>
                <Link href={`/services/${id}`} className="text-[#C8922A] hover:underline">
                  {service?.title ?? id}
                </Link>
              </li>
            );
          })}
        </ul>

        <RelatedLinks links={getCaseTypeRelatedLinks(slug)} title="Related resources" />
      </PageShell>
    </>
  );
}
