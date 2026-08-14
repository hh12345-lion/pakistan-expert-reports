"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { BRIEF_LABEL, BRIEF_PATH, SITE_NAME } from "@/lib/constants";

const railLinks = [
  { href: "/#evidence", label: "Evidence" },
  { href: "/#profiles", label: "Profiles" },
  { href: "/#reports", label: "Reports" },
  { href: "/#process", label: "Process" },
  { href: "/#cpin", label: "CPIN" },
  { href: "/faq", label: "Questions" },
] as const;

export function Header() {
  const toggleRef = useRef<HTMLInputElement>(null);

  const closeMobileMenu = () => {
    if (toggleRef.current) toggleRef.current.checked = false;
  };

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        closeMobileMenu();
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="folio-rail z-50 text-[#F4F6F1] lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-56 lg:shrink-0 lg:flex-col lg:justify-between lg:self-start">
      <input
        ref={toggleRef}
        id="mobile-nav-toggle"
        type="checkbox"
        className="peer sr-only"
        aria-hidden
      />

      <div className="header-bar flex items-center justify-between gap-3 px-4 py-3 lg:flex-col lg:items-stretch lg:px-5 lg:py-8">
        <Link href="/" className="min-w-0" onClick={closeMobileMenu}>
          <span className="block font-display text-lg font-semibold leading-tight tracking-tight lg:text-xl">
            {SITE_NAME}
          </span>
          <span className="mt-1 hidden text-[10px] uppercase tracking-[0.18em] text-[#A8B39A] lg:block">
            UK tribunal folio
          </span>
        </Link>

        <nav className="hidden flex-col gap-1 lg:flex" aria-label="Main">
          {railLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-[40px] items-center border-l border-transparent pl-3 text-sm text-[#F4F6F1]/70 transition hover:border-[#8B1E3F] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href={BRIEF_PATH} className="btn-brief hidden w-full lg:inline-flex">
          {BRIEF_LABEL}
        </Link>

        <div className="flex items-center gap-2 lg:hidden">
          <Link href={BRIEF_PATH} className="btn-brief px-3 py-2 text-[11px]">
            {BRIEF_LABEL}
          </Link>
          <label
            htmlFor="mobile-nav-toggle"
            className="inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center border border-white/20"
          >
            <span className="sr-only">Toggle menu</span>
            <svg className="icon-open h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
            </svg>
            <svg className="icon-close hidden h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className="hidden border-t border-white/10 px-4 py-4 peer-checked:block lg:hidden"
        aria-label="Mobile"
      >
        <ul className="space-y-1">
          {railLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMobileMenu}
                className="inline-flex min-h-[44px] w-full items-center text-sm text-[#F4F6F1]/80"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
