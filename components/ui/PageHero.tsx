import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="border-b border-[#CCD1C5] bg-[#E2E6DB] py-10 sm:py-12">
      <div className="mx-auto max-w-3xl min-w-0 px-4 sm:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        <h1 className="font-display break-words text-3xl font-semibold tracking-tight text-[#191D18] sm:text-4xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#3F433E]">{subtitle}</p>}
      </div>
    </section>
  );
}
