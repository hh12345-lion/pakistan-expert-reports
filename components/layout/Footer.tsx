import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { BRIEF_LABEL, BRIEF_PATH, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[#D0D4C8] bg-[#E6E9DF]">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-display text-base font-semibold text-[#1B1F18]">{SITE_NAME}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-1 text-sm text-[#3E4538]">
          <Link href={BRIEF_PATH} className="inline-flex min-h-[44px] items-center px-2 hover:text-[#8B1E3F]">
            {BRIEF_LABEL}
          </Link>
          <span className="text-[#D0D4C8]" aria-hidden>
            /
          </span>
          <Link href="/faq" className="inline-flex min-h-[44px] items-center px-2 hover:text-[#8B1E3F]">
            Questions
          </Link>
          <span className="text-[#D0D4C8]" aria-hidden>
            /
          </span>
          <Link href="/privacy" className="inline-flex min-h-[44px] items-center px-2 hover:text-[#8B1E3F]">
            Privacy
          </Link>
          <span className="text-[#D0D4C8]" aria-hidden>
            /
          </span>
          <Link href="/terms" className="inline-flex min-h-[44px] items-center px-2 hover:text-[#8B1E3F]">
            Terms
          </Link>
          <span className="text-[#D0D4C8]" aria-hidden>
            /
          </span>
          <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center px-2 hover:text-[#8B1E3F]">
            Cookies
          </Link>
          <span className="text-[#D0D4C8]" aria-hidden>
            /
          </span>
          <span className="inline-flex min-h-[44px] items-center px-2">
            <CookieSettingsButton variant="footer" />
          </span>
        </nav>
      </div>
    </footer>
  );
}
