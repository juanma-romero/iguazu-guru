import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'es', 'pt'],
 
  // A list of all pathnames that are supported
  pathnames: {
    '/': '/',
    '/pathnames': {
      en: '/pathnames',
      es: '/rutas',
      pt: '/caminhos'
    }
  },
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number]

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);