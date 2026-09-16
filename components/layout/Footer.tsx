import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { CookieSettingsButton } from "@/components/cookies";
import { BRIEF_LABEL, BRIEF_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[#CCD1C5] bg-[#E2E6DB]">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <BrandLogo variant="primary" size="sm" />
        </div>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-1 text-sm text-[#3F433E]">
          <Link href={BRIEF_PATH} className="inline-flex min-h-[44px] items-center px-2 hover:text-[#801F37]">
            {BRIEF_LABEL}
          </Link>
          <span className="text-[#CCD1C5]" aria-hidden>
            /
          </span>
          <Link href="/faq" className="inline-flex min-h-[44px] items-center px-2 hover:text-[#801F37]">
            Questions
          </Link>
          <span className="text-[#CCD1C5]" aria-hidden>
            /
          </span>
          <Link href="/privacy" className="inline-flex min-h-[44px] items-center px-2 hover:text-[#801F37]">
            Privacy
          </Link>
          <span className="text-[#CCD1C5]" aria-hidden>
            /
          </span>
          <Link href="/terms" className="inline-flex min-h-[44px] items-center px-2 hover:text-[#801F37]">
            Terms
          </Link>
          <span className="text-[#CCD1C5]" aria-hidden>
            /
          </span>
          <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center px-2 hover:text-[#801F37]">
            Cookies
          </Link>
          <span className="text-[#CCD1C5]" aria-hidden>
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
