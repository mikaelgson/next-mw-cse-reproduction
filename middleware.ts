import { NextRequest, NextResponse } from "next/server"

export function middleware() {}

/**
 * This middlware must exist and match the page where the bug appears
 */
export const config = {
  matcher: "/users/:path*",
}
