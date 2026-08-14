"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export type NavDropdownItem = { label: string; href: string };

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavDropdownItem[];
  blurb?: string;
  scrollable?: boolean;
};

export function NavDropdown({
  label,
  href,
  items,
  blurb = "Open the hub, or jump straight to a focused page.",
  scrollable,
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const scheduleClose = () => {
    clearClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => clearClose(), []);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        clearClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <Link
        href={href}
        className={`inline-flex min-h-[44px] items-center gap-1.5 px-2.5 py-2 text-[13px] tracking-wide transition ${
          open ? "text-white" : "text-white/75 hover:text-white"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span className="border-b border-transparent pb-0.5 group-hover:border-[#5A8FA8]">
          {label}
        </span>
        <span
          className={`h-1.5 w-1.5 rotate-45 border-r border-b border-current opacity-70 transition-transform duration-200 ${
            open ? "translate-y-0.5" : "-translate-y-0.5 rotate-[225deg]"
          }`}
          aria-hidden
        />
      </Link>

      {open && (
        <div
          className="atlas-panel absolute left-1/2 top-full z-[60] w-[min(28rem,calc(100vw-2rem))] -translate-x-1/2 pt-3"
          onMouseEnter={clearClose}
          onMouseLeave={scheduleClose}
        >
          <div className="nav-frost overflow-hidden rounded-[2px]">
            <div className="grid grid-cols-[7.5rem_1fr] sm:grid-cols-[9rem_1fr]">
              <div className="bg-[#1A2740] px-4 py-5 text-white">
                <p className="font-display text-sm font-semibold leading-snug">{label}</p>
                <p className="mt-2 text-[11px] leading-relaxed text-white/65">{blurb}</p>
                <Link
                  href={href}
                  className="mt-4 inline-flex min-h-[44px] items-center text-xs font-semibold uppercase tracking-[0.12em] text-[#5A8FA8] hover:text-white"
                >
                  View all →
                </Link>
              </div>
              <ul
                className={`bg-transparent py-2 ${scrollable ? "max-h-[min(60vh,18rem)] overflow-y-auto" : ""}`}
              >
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex min-h-[44px] items-center gap-3 border-l-2 border-transparent px-4 py-2 text-sm text-[#1A2740] transition hover:border-[#C45E2D] hover:bg-white/60"
                    >
                      <span className="h-px w-3 bg-[#5A8FA8]/60 transition group-hover:w-5 group-hover:bg-[#C45E2D]" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
