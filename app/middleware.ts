import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Redirige la racine vers la partie publique si nécessaire
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/(public)', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};