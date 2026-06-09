import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { JsonLd } from "@/components/ui/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { servicesPageGraph } from "@/lib/schema";
import { services } from "@/data/services";

export const metadata = createMetadata({
  title: "Pakistan Expert Report Services | Asylum & Immigration Tribunals",
  description:
    "Pakistan expert report services: country condition reports, Ahmadi asylum, blasphemy, honour-based violence, LGBTQ+, political persecution, CPIN challenge, and oral evidence.",
  path: "/services",
});

export default function ServicesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Services" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <JsonLd
        data={servicesPageGraph(
          services.map((s) => ({ id: s.id, name: s.title, description: s.description }))
        )}
      />
      <PageShell
        title="Pakistan Expert Report Services"
        subtitle="CPR Part 35 and Immigration Tribunal Practice Direction compliant reports for all major Pakistani asylum profiles."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-[#374151] leading-relaxed">
          Pakistan Expert Reports provides eight specialist expert report services for UK immigration solicitors, law
          firms, and Legal Aid practitioners. All reports are prepared by qualified Pakistan country experts with
          current CPIN knowledge and field research experience.
        </p>
        <CardGrid
          items={services.map((s) => ({
            title: s.title,
            description: s.description,
            href: `/services/${s.id}`,
          }))}
        />
        <p className="mt-8 text-[#374151]">
          Questions about instructing an expert? See{" "}
          <Link href="/how-to-instruct" className="font-semibold text-[#C8922A] hover:underline">
            how to instruct
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-semibold text-[#C8922A] hover:underline">
            contact us
          </Link>
          .
        </p>
      </PageShell>
    </>
  );
}
