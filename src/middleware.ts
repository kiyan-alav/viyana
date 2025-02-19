import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { USER_PANEL_PATH } from "@/routes/path";
import { authMiddleware } from "./middlewares/authMiddleware";

export function middleware(request: NextRequest) {

  authMiddleware(request)

  if (request.nextUrl.pathname === "/my-account") {
    const url = request.nextUrl.clone();
    url.pathname = USER_PANEL_PATH.detailsAccount;
    return NextResponse.redirect(url);
  } else if (request.nextUrl.pathname === "/admin") {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/dashboard";
    return NextResponse.redirect(url);
  } else if (request.nextUrl.pathname === "/auth") {
    const url = request.nextUrl.clone();
    url.pathname = "/auth/email";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/my-account", "/admin", "/auth"],
};
