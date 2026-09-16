import Image from "next/image";
import { BRAND } from "@/lib/brand";

type LogoVariant = "primary" | "inverse" | "mono" | "mono-white";
type LogoSize = "sm" | "md" | "lg";

interface BrandLogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
}

const LOCKUP = {
  sm: { width: 140, height: 117 },
  md: { width: 180, height: 150 },
  lg: { width: 220, height: 184 },
} as const;

const MONO = {
  sm: { width: 36, height: 46 },
  md: { width: 48, height: 62 },
  lg: { width: 64, height: 82 },
} as const;

/** Official Pakistan Expert Reports lockup / monogram. */
export function BrandLogo({
  variant = "primary",
  size = "md",
  className = "",
}: BrandLogoProps) {
  if (variant === "mono" || variant === "mono-white") {
    const m = MONO[size];
    const src = variant === "mono-white" ? BRAND.assets.monogramWhite : BRAND.assets.monogram;
    return (
      <span className={`inline-flex ${className}`} aria-label={BRAND.name}>
        <Image
          src={src}
          alt=""
          width={m.width}
          height={m.height}
          className="h-auto w-auto"
          priority
        />
      </span>
    );
  }

  const s = LOCKUP[size];
  const src = variant === "inverse" ? BRAND.assets.lockupInverse : BRAND.assets.lockup;

  return (
    <span className={`inline-flex ${className}`}>
      <Image
        src={src}
        alt={BRAND.name}
        width={s.width}
        height={s.height}
        className="h-auto max-w-full w-auto"
        priority
      />
    </span>
  );
}
