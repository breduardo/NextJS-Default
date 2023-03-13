import { withAuth } from "next-auth/middleware";

import { NextResponse, NextRequest } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.

  function middleware(req) {
    console.log("middle");
    // console.log(req.nextauth.token);
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === "admin",
    },
  }
);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|favicon.ico).*)",
  ],
};

export function middleware(request) {
  // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
  // Getting cookies from the request using the `RequestCookies` API
  var cookie = request.cookies.get("nextjs")?.value;
  // console.log(cookie); // => 'fast'
  const allCookies = request.cookies.getAll();
  // console.log(allCookies); // => [{ name: 'vercel', value: 'fast' }]

  request.cookies.has("nextjs"); // => true
  request.cookies.delete("nextjs");
  request.cookies.has("nextjs"); // => false

  // Setting cookies on the response using the `ResponseCookies` API
  const response = NextResponse.next();
  response.cookies.set("vercel", "fast");
  response.cookies.set({
    name: "vercel",
    value: "fast",
    path: "/test",
  });
  cookie = response.cookies.get("vercel");
  // console.log(cookie); // => { name: 'vercel', value: 'fast', Path: '/test' }
  // The outgoing response will have a `Set-Cookie:vercel=fast;path=/test` header.

  return response;
}
