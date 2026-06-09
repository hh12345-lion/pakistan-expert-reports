import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/constants";

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
        <p className="text-[#374151] leading-relaxed">
          Pakistan Expert Reports is operated to connect UK solicitors with qualified Pakistan country experts. We
          collect personal data submitted through our contact form (name, law firm, email, phone, and case details)
          solely to respond to instruction requests and match appropriate experts.
        </p>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Contact form submissions are stored in our secure Google Sheet lead log and may trigger webhook notifications
          to our team. We retain data only as long as necessary to fulfil your request. We do not sell personal data.
          You may request deletion by emailing {SITE_EMAIL}. We use cookies as described in our Cookie Policy.
          Non-essential tracking scripts load only after you grant consent.
        </p>
        <h2 className="mt-8 text-lg font-bold text-[#0C3547]">Your Rights (GDPR)</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          You have the right to access, rectify, erase, restrict processing, and port your personal data. You may
          withdraw consent for non-essential cookies at any time via Cookie Settings in the footer. To exercise your
          rights, contact {SITE_EMAIL}.
        </p>
      </PageShell>
    </>
  );
}
