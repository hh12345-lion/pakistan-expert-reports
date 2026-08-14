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
    <section className="border-b border-[#D0D4C8] bg-[#E6E9DF] py-10 sm:py-12">
      <div className="mx-auto max-w-3xl min-w-0 px-4 sm:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        <h1 className="font-display break-words text-3xl font-semibold tracking-tight text-[#1B1F18] sm:text-4xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#3E4538]">{subtitle}</p>}
      </div>
    </section>
  );
}
