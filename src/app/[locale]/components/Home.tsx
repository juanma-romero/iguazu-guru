//import Hero from './home/Hero';
import Atracciones from './home/Atracciones';
import Ciudades from './home/Ciudades';
import Blog from './home/Blog';
import FAQ from './home/FAQ';
import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations('MainNewHome');
    return (
        <>
            <main className="pb-24">
                <h1 className="text-4xl pt-8 md:text-5xl font-extrabold mb-4 text-center">{t('h1')}</h1>
                {/*<Hero />*/}
                <Atracciones />
                <Ciudades />
                <FAQ />
                <Blog />
            </main>
        </>
    );
}
