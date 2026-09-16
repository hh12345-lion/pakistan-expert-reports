import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsentProvider } from "@/components/cookies";
import { ConsentDefaultsScript } from "@/components/cookies/ConsentDefaultsScript";
import { SITE_URL } from "@/lib/constants";
import { isProductionSite } from "@/lib/seo/is-production";
import "./globals.css";

/** Brand body: Source Sans 3. Headings use Georgia via CSS (system). */
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
    default: "Pakistan Expert Reports | Country Expert Witness & Asylum Tribunal Evidence",
    template: "%s | Pakistan Expert Reports",
  },
  description:
    "Commission qualified Pakistan expert reports for immigration tribunals and asylum appeals. Serving solicitors and Legal Aid practitioners. Ahmadis, blasphemy, Shia Muslims, honour-based violence, LGBTQ+, and political persecution.",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-96.png", type: "image/png", sizes: "96x96" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  other: {
    "theme-color": "#801F37",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${sourceSans.variable} h-full`}>
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
