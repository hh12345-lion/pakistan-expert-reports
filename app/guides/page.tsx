import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { guides } from "@/data/guides";

export const metadata = createMetadata({
  title: "Pakistan Asylum Solicitor Guides | Expert Evidence Resources",
  description:
    "Solicitor guides on Pakistan CPINs, Ahmadi asylum, blasphemy, honour-based violence, political persecution, and instructing Pakistan expert reports for UK immigration tribunals.",
  path: "/guides",
});

export default function GuidesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Guides" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Solicitor Guides: Pakistan Expert Evidence"
        subtitle="Practical guides for UK immigration solicitors instructing Pakistan country expert reports."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-[#374151] leading-relaxed">
          These guides cover current Pakistan CPINs, profile-specific expert evidence requirements, and the instruction
          process for Legal Aid and privately funded cases. All guides align with Immigration Tribunal Practice
          Direction paragraph 10 and the Adam Pipe October 2025 guide.
        </p>
        <CardGrid
          items={guides.map((g) => ({
            title: g.h1,
            description: g.metaDescription.slice(0, 120) + "...",
            href: `/guides/${g.slug}`,
          }))}
        />
        <p className="mt-8 text-[#374151]">
          For a comprehensive CPIN overview, see our{" "}
          <Link href="/cpin-country-guidance" className="font-semibold text-[#C8922A] hover:underline">
            Pakistan CPIN & Country Guidance pillar page
          </Link>
          .
        </p>
      </PageShell>
    </>
  );
}
