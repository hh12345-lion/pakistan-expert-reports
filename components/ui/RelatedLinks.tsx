import Link from "next/link";
import type { RelatedLink } from "@/data/related-links";

export function RelatedLinks({
  title = "Related pages",
  links,
}: {
  title?: string;
  links: RelatedLink[];
}) {
  if (links.length === 0) return null;
  return (
    <aside className="mt-12 min-w-0 border-t border-[#C4CDD6] pt-8">
      <h2 className="font-display text-base font-semibold text-[#1A2740] sm:text-lg">{title}</h2>
      <ul className="mt-4 grid grid-cols-1 gap-1 md:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex min-h-[44px] items-center text-sm font-medium text-[#5A8FA8] hover:text-[#C45E2D] hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
