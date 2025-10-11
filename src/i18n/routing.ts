import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'es', 'pt'],
 
  // A list of all pathnames that are supported
  pathnames: {
    '/': '/',
    '/legal': '/legal',
    '/cidades/foz-do-iguacu': '/cidades/foz-do-iguacu',
    '/cidades/puerto-iguazu': '/cidades/puerto-iguazu',
    '/cidades/cidade-de-leste': '/cidades/cidade-de-leste',
    '/atracoes':'/atracoes',
    '/atracoes/cataratas-argentina':'/atracoes/cataratas-argentina',
    '/atracoes/cataratas-brasil':'/atracoes/cataratas-brasil',
    '/atracoes/marco-tres-fronteiras':'/atracoes/marco-tres-fronteiras',
    '/atracoes/parque-das-aves':'/atracoes/parque-das-aves',
    '/atracoes/iguazu-jungle':'/atracoes/iguazu-jungle',
    '/blog':'/blog',
    '/blog/[slug]':'/blog/[slug]',
    '/guias':'/guias',
    '/guias/documentacao':'/guias/documentacao',
  },
  // Used when no locale matches
  defaultLocale: 'pt'
}) 

export type Locale = (typeof routing.locales)[number]

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
