import {getRequestConfig} from 'next-intl/server'
import {routing} from './routing'

export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
 
   // Load and merge messages from multiple files
   const messages = {
    ...(await import(`../../messages/${locale}/main.json`)).default,
    ...(await import(`../../messages/${locale}/foz.json`)).default,
    ...(await import(`../../messages/${locale}/puerto.json`)).default,
    ...(await import(`../../messages/${locale}/cde.json`)).default,
    ...(await import(`../../messages/${locale}/data/resultado_cataratas_brasil.json`)).default,
    ...(await import(`../../messages/${locale}/data/resultado_iguazu_argentina.json`)).default,
    ...(await import(`../../messages/${locale}/data/resultado_marco_tres_fronteiras.json`)).default,
    ...(await import(`../../messages/${locale}/data/resultado_parque_das_aves.json`)).default,
  }

  
  return {
    locale,
    messages
  }
})
