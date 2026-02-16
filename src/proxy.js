import { NextResponse } from "next/server";

export default function proxy(request) {
  const cookie = request.cookies.get("user")?.value || null;
  console.log(cookie);
  if (cookie === null) return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/dashboard",
};
