import { PageHero } from "@/components/ui/PageHero";
import type { Crumb } from "@/components/ui/Breadcrumbs";
import Link from "next/link";
import { BRIEF_LABEL, BRIEF_PATH } from "@/lib/constants";

export function PageShell({
  title,
  subtitle,
  breadcrumbs,
  children,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} />
      <main className="prose-folio mx-auto min-w-0 max-w-3xl overflow-x-hidden px-4 py-10 sm:px-8">
        {children}
        <p className="mt-12">
          <Link href={BRIEF_PATH} className="btn-brief">
            {BRIEF_LABEL}
          </Link>
        </p>
      </main>
    </>
  );
}
