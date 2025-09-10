// lib/strapi.js

export async function fetchApi(path, locale) {
  // Mapear locales de Next.js a Strapi
  const strapiLocale = locale === 'pt' ? 'pt-BR' : locale;

  // Construir la URL correctamente con query parameters
  let requestUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/${path}`;

  // Si el path no contiene query parameters, agregar ? para el locale
  if (!path.includes('?')) {
    requestUrl += `?locale=${strapiLocale}`;
  } else {
    // Si ya tiene query parameters, agregar & para el locale
    requestUrl += `&locale=${strapiLocale}`;
  }

  const response = await fetch(requestUrl, {
    headers: {
      'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    cache: 'no-store' // O configura la revalidación como prefieras
  });

  if (!response.ok) {
    console.error(await response.text());
    throw new Error('Failed to fetch API');
  }

  const responseData = await response.json();
  // Strapi returns { data: [...], meta: {...} }, we want just the data array
  return responseData.data || [];
}
