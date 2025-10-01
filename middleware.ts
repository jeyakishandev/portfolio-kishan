import createMiddleware from 'next-intl/middleware';
import {NextRequest, NextResponse} from 'next/server';

const intl = createMiddleware({
  locales: ['fr', 'en'],
  defaultLocale: 'fr'
});

export default function middleware(req: NextRequest) {
  const {pathname} = req.nextUrl;
  if (pathname === '/') {
    const url = req.nextUrl.clone();
    url.pathname = '/fr';
    return NextResponse.redirect(url);
  }
  return intl(req);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
