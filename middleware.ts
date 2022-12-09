import { NextRequest, NextResponse } from "next/server"

const PUBLIC_FILE = /\.(.*)$/

export function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return
  }

  // NextJS hides the default locale but we want to show it, so this is a workaround to achieve this
  // https://nextjs.org/docs/advanced-features/i18n-routing#prefixing-the-default-locale
  if (req.nextUrl.locale === "default") {
    return NextResponse.redirect(new URL(`/sv${req.nextUrl.pathname}`, req.url))
  }

  if (req.nextUrl.locale === "nb" || req.nextUrl.locale === "fi") {
    if (req.nextUrl.pathname.startsWith("/kundservice")) {
      return NextResponse.rewrite(new URL(`/${req.nextUrl.locale}/404`, req.url))
    }
  }

  if (req.nextUrl.locale === "fi") {
    if (req.nextUrl.pathname.startsWith("/tips")) {
      return NextResponse.rewrite(new URL(`/${req.nextUrl.locale}/404`, req.url))
    }
  }

  if (req.nextUrl.locale === "nb" || req.nextUrl.locale === "fi") {
    if (req.nextUrl.pathname.startsWith("/artiklar")) {
      return NextResponse.rewrite(new URL(`/${req.nextUrl.locale}/404`, req.url))
    }
  }
}
