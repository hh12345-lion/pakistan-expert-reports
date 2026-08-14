"use client";

import { useCookieConsent } from "./CookieConsentContext";

type Props = {
  className?: string;
  variant?: "footer" | "inline";
};

export function CookieSettingsButton({ className = "", variant = "footer" }: Props) {
  const { openPreferences } = useCookieConsent();

  const base =
    variant === "footer"
      ? "inline-flex min-h-[44px] items-center text-sm text-[#3E4538] hover:text-[#8B1E3F] focus:outline-none focus-visible:underline"
      : "inline-flex min-h-[44px] items-center text-sm font-medium text-[#8B1E3F] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E3F]";

  return (
    <button type="button" onClick={openPreferences} className={`${base} ${className}`}>
      Cookie Settings
    </button>
  );
}
