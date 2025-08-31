import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Raleway   } from "next/font/google"
import './globals.css'
import Header from './components/header/Header'
import { GoogleTagManager } from '@next/third-parties/google'
import Footer from './components/footer/Footer';

type Params = Promise<{ locale: string }>;

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
})
 
export async function generateMetadata({ params }: { params: Params }) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function LocaleLayout({
  children,
  params
  
}: {
  children: React.ReactNode;
  params: Params;
  
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
      <link
          rel="icon"
          href="/oldYaguarSinBackground.png"
          type="image/png"
          sizes="32"
        />
      </head>
      <GoogleTagManager gtmId="GTM-MF9ZBXB2" />
      <body
        className={`${raleway.className}  "bg-iguazu-light text-iguazu-dark"`}
      >
        <NextIntlClientProvider
         messages={messages}
        >
          
            
              <Header />
              {children}
              <Footer />
            
           
        </NextIntlClientProvider>
      </body>      
    </html>
  )
}
