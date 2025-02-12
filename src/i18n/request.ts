/*import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
 
export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
 
  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any) ) {
    locale = routing.defaultLocale;
  }
 
  return {    
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});

*/
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  // Derive the pathname from the request URL
  const url = new URL(process.env.NEXT_PUBLIC_BASE_PATH || 'http://localhost:3000');
  let pathname = url.pathname;

  // Remove the locale segment from the pathname
  const localeSegment = `/${locale}`;
  if (pathname.startsWith(localeSegment)) {
    pathname = pathname.substring(localeSegment.length);
  }

  // Determine the page name from the pathname
  const pageName = pathname === '/' ? 'main' : pathname.replace('/', '');

   // Load and merge messages from multiple files
   const messages = {
    ...(await import(`../../messages/${locale}/main.json`)).default,
    ...(await import(`../../messages/${locale}/${pageName}.json`)).default
  };

  return {
    locale,
    messages
  };
});