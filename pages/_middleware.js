 import { getToken } from "next-auth/jwt";
 import { NextResponse } from "next/server";

export async function middleware(req) {
    //Token will exist if user is logged in
const token = await getToken({req, secret: process.env.JWT_SECRET});

const { pathname } = req.nextUrl

//Allow if following is true
//  1) Request for next-auth session and provider fetching
//  2) the token exist

if (pathname.includes('/api/auth') || token) {
    return NextResponse.next();
}

// Redirect them to login if they dont have token and are requesting a protected route
if (!token && pathname !== '/login') {
    return NextResponse.redirect('/login');
}
}