import { NextResponse } from "next/server";

const { match } = require("@formatjs/intl-localematcher");
const Negotiator = require("negotiator");


let locales = ['bn', 'en'];
let defaultLocal = 'en';

function getLocal(request) {
    const acceptedLanguage = request.headers.get('accept-language') ?? undefined;

    let headers = { 'accept-language': acceptedLanguage };

    let languages = new Negotiator({ headers }).language();

    return match(languages, locales, defaultLocal);
}

export function middleware(request) {
    const pathname = request.nextUrl.pathname;

    const pathnameIsMissingLocale = locales.every((locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);

    if (pathnameIsMissingLocale) {
        const locale = getLocal(request);
        return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
    };
}

export const config = {
    matcher: [
        '/((?!api|assets|.*\\..*|_next).*)',
    ]
}