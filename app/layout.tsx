import type { Metadata } from "next";
import { Alegreya, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsentProvider } from "@/components/cookies";
import { ConsentDefaultsScript } from "@/components/cookies/ConsentDefaultsScript";
import { SITE_URL } from "@/lib/constants";
import { isProductionSite } from "@/lib/seo/is-production";
import "./globals.css";

const alegreya = Alegreya({
  subsets: ["latin"],
  variable: "--font-alegreya",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pakistan Expert Reports UK | Country Expert Witness & Asylum Tribunal Evidence",
    template: "%s | Pakistan Expert Reports",
  },
  description:
    "Commission qualified Pakistan expert reports for UK immigration tribunals and asylum appeals. Serving UK solicitors and Legal Aid practitioners. Ahmadis, blasphemy, Shia Muslims, honour-based violence, LGBTQ+, and political persecution.",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  alternates: {
    languages: {
      "en-GB": SITE_URL,
      "en-US": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  robots: isProductionSite() ? { index: true, follow: true } : { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${alegreya.variable} ${sourceSans.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased lg:flex-row">
        <ConsentDefaultsScript />
        <CookieConsentProvider>
          <Header />
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
