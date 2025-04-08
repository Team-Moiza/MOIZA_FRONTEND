import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = ["/login", "/google"];
const PROTECTED_PATHS = ["/my", "/write", "/register"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("accessToken")?.value;

  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    if (accessToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  if (PROTECTED_PATHS.some((path) => pathname.startsWith(path))) {
    if (!accessToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/google",
    "/my/:path*",
    "/write/:path*",
    "/register/:path*",
  ],
};