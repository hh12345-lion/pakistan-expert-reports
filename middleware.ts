import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { resolveLegacyRedirect } from "@/lib/seo/slug-redirects";

const PRIMARY_HOST = "www.pakistanexpertreports.com";
const PRIMARY_ORIGIN = `https://${PRIMARY_HOST}`;

/** Alternate domains that should 301 to the canonical primary site */
const REDIRECT_HOSTS = new Set([
  "pakistancountryexpert.com",
  "www.pakistancountryexpert.com",
]);

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";

  if (REDIRECT_HOSTS.has(host)) {
    const url = new URL(request.nextUrl.pathname + request.nextUrl.search, PRIMARY_ORIGIN);
    return NextResponse.redirect(url, 301);
  }

  const pathname = request.nextUrl.pathname.replace(/\/$/, "") || "/";
  const redirectPath = resolveLegacyRedirect(pathname);
  if (redirectPath) {
    const url = new URL(redirectPath + request.nextUrl.search, request.url);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
