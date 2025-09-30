'use client'
import { useTranslations } from 'next-intl';

export default function Blog() {
    const t = useTranslations('MainNewHome');

    return (
        <section id="blog" className="blog-section bg-iguazu-light py-12 md:py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-iguazu-dark mb-2">{t('blog-titulo')}</h2>
                <p className="text-center text-iguazu-teal mb-8 max-w-2xl mx-auto">{t('blog-descripcion')}</p>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="card bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-iguazu-dark mb-2">{t('como-llegar-titulo')}</h3>
                        <p className="text-iguazu-teal mb-4">{t('como-llegar-descripcion')}</p>
                        <a href="#" className="inline-block bg-iguazu-teal hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-md transition">{t('leer-mas')}</a>
                    </div>
                    <div className="card bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-iguazu-dark mb-2">{t('mejores-epocas-titulo')}</h3>
                        <p className="text-iguazu-teal mb-4">{t('mejores-epocas-descripcion')}</p>
                        <a href="#" className="inline-block bg-iguazu-teal hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-md transition">{t('leer-mas')}</a>
                    </div>
                    <div className="card bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-iguazu-dark mb-2">{t('docus-titulo')}</h3>
                        <p className="text-iguazu-teal mb-4">{t('docus-descripcion')}</p>
                        <a href="#" className="inline-block bg-iguazu-teal hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-md transition">{t('leer-mas')}</a>
                    </div>
                </div>
            </div>
            
        </section>
    );
}
