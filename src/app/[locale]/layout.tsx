
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { ExchangeRateProvider } from '@/context/ExchangeRateContext'
import { Raleway   } from "next/font/google"
import './globals.css'
import Footer from './components/footer/Footer';
import Header from './components/header/Header'



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
      <body
        className={`${raleway.className}  bg-[#1A3131] flex flex-col justify-between min-h-screen`}
      >
        <NextIntlClientProvider
         messages={messages}
        >
          
            <ExchangeRateProvider>
              <Header />
              {children}
              <Footer />
            </ExchangeRateProvider>
          
        </NextIntlClientProvider>
      </body>
    </html>
  );
}