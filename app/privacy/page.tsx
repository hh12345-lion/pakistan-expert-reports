import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { BRIEF_PATH } from "@/lib/constants";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Privacy Policy | Pakistan Expert Reports",
  description: "Privacy policy for pakistanexpertreports.com",
  path: "/privacy",
  noindex: true,
  follow: true,
});

export default function PrivacyPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Privacy" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell title="Privacy Policy" breadcrumbs={crumbs}>
        <p className="text-[#3E4538] leading-relaxed">
          Pakistan Expert Reports is operated in the United Kingdom to connect UK immigration solicitors with qualified
          Pakistan country experts. We collect personal data submitted through the brief form (name, law firm, email,
          and case note) solely to respond to requests and match appropriate experts.
        </p>
        <p className="mt-4 text-[#3E4538] leading-relaxed">
          Brief submissions are stored in our secure Google Sheet lead log. We retain data only as long as necessary
          to fulfil your request. We do not sell personal data. You may request deletion through the{" "}
          <Link href={BRIEF_PATH} className="font-medium text-[#8B1E3F] underline-offset-2 hover:underline">
            brief form
          </Link>
          . We use cookies as described in our Cookie Policy. Non-essential tracking scripts load only after you grant
          consent.
        </p>
        <h2 className="mt-8 text-lg font-bold text-[#1B1F18]">Your Rights (GDPR)</h2>
        <p className="mt-4 text-[#3E4538] leading-relaxed">
          You have the right to access, rectify, erase, restrict processing, and port your personal data. You may
          withdraw consent for non-essential cookies at any time via Cookie Settings in the footer. To exercise your
          rights, use the brief form.
        </p>
      </PageShell>
    </>
  );
}
