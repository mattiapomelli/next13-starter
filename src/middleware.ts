import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { type NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const isAuthPage =
    req.nextUrl.pathname.startsWith("/login") || req.nextUrl.pathname.startsWith("/signup");

  // If user is signed in and the current path is an auth page, redirect the user to /account
  if (session && isAuthPage) {
    return NextResponse.redirect(new URL("/account", req.url));
  }

  return res;
}
