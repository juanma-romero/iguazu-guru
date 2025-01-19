
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Raleway   } from "next/font/google"
import './globals.css'
import Footer from './Footer';

type Params = Promise<{ locale: string }>;

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
})

export const metadata = {
  title: "Iguazu Info",
  description: "Cataratas del Iguazu, Puerto Iguazu, Foz do Iguacu, Ciudad del Este",
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
         {children}
         <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}