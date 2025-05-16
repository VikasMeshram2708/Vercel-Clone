import { auth } from "@/auth";
import { NextResponse } from "next/server";

const publicRoutes = ["/", "/login"];
const privateRoutes = ["/dashboard", "/dashboard/profile"];

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isAuthenticated = !!req.auth;

  // If the route is public, allow access
  if (publicRoutes.includes(pathname)) {
    // If authenticated and on login, redirect to home
    if (isAuthenticated && pathname === "/login") {
      return NextResponse.redirect(new URL("/", req.nextUrl.origin));
    }
    return NextResponse.next();
  }

  // If the route is private and not authenticated, redirect to login
  if (privateRoutes.includes(pathname) && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", req.nextUrl.origin));
  }

  // For all other routes, proceed as normal
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
