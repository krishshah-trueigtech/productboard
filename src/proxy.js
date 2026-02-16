import { NextResponse } from "next/server";

export function proxy(request) {
  const cookie = request.cookies.get("user")?.value || null;

  if (!cookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/products/:path*"],
};