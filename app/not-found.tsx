import Link from "next/link";
import { BRIEF_LABEL, BRIEF_PATH } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="px-4 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-xl">
        <p className="font-display text-6xl font-semibold text-[#8B1E3F]">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-[#1B1F18]">Page not found</h1>
        <p className="mt-4 leading-relaxed text-[#3E4538]">
          That address is no longer a separate page. Country evidence, profiles, and process now live on the landing
          folio.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn-brief">
            Home
          </Link>
          <Link href={BRIEF_PATH} className="btn-ghost text-[#1B1F18]">
            {BRIEF_LABEL}
          </Link>
          <Link href="/faq" className="btn-ghost text-[#1B1F18]">
            Questions
          </Link>
        </div>
      </div>
    </section>
  );
}
