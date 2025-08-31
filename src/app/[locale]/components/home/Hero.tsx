'use client'
import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('MainNewHome');

    return (
        <section className="hero-section bg-iguazu-dark text-white text-center py-16 md:py-24 px-4" >
            <div className="container mx-auto bg-black bg-opacity-50 p-8 rounded-lg">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{t('h1')}</h1>
                <p className="pregunta-a-ia' text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">{t('pregunta-a-ia')}</p>
                <div className="search-bar max-w-xl mx-auto flex flex-col sm:flex-row gap-2">
                    <input id="ai-search-input" type="search" placeholder={t('ai-search-input')} className="w-full p-3 rounded-md text-slate-900 border-2 border-transparent focus:outline-none focus:border-iguazu-green transition" />
                    <button id="ai-search-button" className="bg-iguazu-green hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md transition-transform duration-200 hover:scale-105">✨ {t('ai-search-button')}</button>
                </div>
            </div>
        </section>
    );
}
