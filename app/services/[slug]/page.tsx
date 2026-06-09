import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { ResponsiveTableWrap } from "@/components/ui/ResponsiveTableWrap";
import { createMetadata } from "@/lib/metadata";
import { getServicePageFaqs } from "@/lib/service-faqs";
import { getService, services } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const pageFaqs = getServicePageFaqs(service);

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.navLabel },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={pageFaqs} />
      <PageShell title={service.title} subtitle={service.description} breadcrumbs={crumbs}>
        {service.content.map((p, i) => (
          <p key={i} className="mb-4 text-[#374151] leading-relaxed">
            {p}
          </p>
        ))}

        <div className="mt-6">
          <ResponsiveTableWrap>
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead>
                <tr className="border-b border-[#C8DDD6] bg-[#F4F8F7]">
                  <th className="p-3 font-semibold text-[#0C3547]">Phase</th>
                  <th className="p-3 font-semibold text-[#0C3547]">What We Do</th>
                  <th className="p-3 font-semibold text-[#0C3547]">Deliverable</th>
                </tr>
              </thead>
              <tbody>
                {service.methodology.map((row) => (
                  <tr key={row.phase} className="border-b border-[#C8DDD6]">
                    <td className="p-3 font-medium">{row.phase}</td>
                    <td className="p-3 text-[#374151]">{row.whatWeDo}</td>
                    <td className="p-3 text-[#374151]">{row.deliverable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ResponsiveTableWrap>
        </div>

        <Link
          href={service.relatedHref}
          className="mt-6 inline-block text-sm font-medium text-[#C8922A] hover:underline"
        >
          Related guidance and profiles
        </Link>

        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[44px] items-center rounded-[4px] bg-[#2E7D52] px-6 py-3 font-semibold text-white hover:bg-[#256b42]"
        >
          Instruct an Expert
        </Link>
      </PageShell>

      <section className="border-t border-[#C8DDD6] bg-[#F4F8F7]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FAQSection
            faqs={pageFaqs}
            title={`${service.navLabel}: Frequently Asked Questions`}
            id={`${service.id}-faqs`}
          />
        </div>
      </section>
    </>
  );
}
