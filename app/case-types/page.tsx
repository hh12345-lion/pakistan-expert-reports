import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { caseTypes } from "@/data/case-types";

export const metadata = createMetadata({
  title: "Pakistan Asylum Case Types | Expert Report UK",
  description:
    "Pakistan expert report evidence for FTT asylum appeals, Upper Tribunal, Ahmadi claims, blasphemy, honour-based violence, deportation, and fresh claims.",
  path: "/case-types",
});

export default function CaseTypesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Case Types" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Pakistan Asylum Case Types"
        subtitle="Expert witness evidence for all major UK immigration tribunal proceedings involving Pakistani nationals."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-[#374151] leading-relaxed">
          Pakistan Expert Reports provides qualified country expert reports for First-tier Tribunal appeals, Upper
          Tribunal proceedings, Ahmadi and blasphemy claims, honour-based violence cases, LGBTQ+ asylum, political
          persecution including PTI supporters, deportation and removal, and fresh claims with updated CPIN evidence.
        </p>
        <CardGrid
          items={caseTypes.map((c) => ({
            title: c.title,
            description: c.content[0].slice(0, 140) + "...",
            href: `/case-types/${c.slug}`,
          }))}
        />
        <p className="mt-8 text-[#374151]">
          See also our{" "}
          <Link href="/asylum-profiles" className="font-semibold text-[#C8922A] hover:underline">
            asylum profiles hub
          </Link>{" "}
          for profile-specific expert evidence pages.
        </p>
      </PageShell>
    </>
  );
}
