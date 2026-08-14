import Link from "next/link";

export function CardGrid({ items }: { items: { title: string; description: string; href: string }[] }) {
  return (
    <ul className="divide-y divide-[#C4CDD6] border-y border-[#C4CDD6]">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="group grid min-h-[44px] min-w-0 gap-2 py-5 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)_auto] sm:items-baseline sm:gap-8"
          >
            <span className="font-display text-base font-semibold text-[#1A2740] transition group-hover:text-[#C45E2D] sm:text-lg">
              {item.title}
            </span>
            <span className="text-sm leading-relaxed text-[#3D4654]">{item.description}</span>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5A8FA8] group-hover:text-[#C45E2D]">
              Open →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
