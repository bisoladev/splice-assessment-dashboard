import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const cookie = (await cookies()).get("token")?.value;

  const isProtectedRoute = pathname.startsWith("/app");

  if (!cookie && isProtectedRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!isProtectedRoute && cookie) {
    return NextResponse.redirect(new URL("/app", request.nextUrl));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = { matcher: "/app/:path*" };
