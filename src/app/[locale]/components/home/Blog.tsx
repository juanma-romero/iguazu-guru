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
                        <h3 className="text-xl font-bold text-iguazu-dark mb-2">{t('consejos-seguridad-titulo')}</h3>
                        <p className="text-iguazu-teal mb-4">{t('consejos-seguridad-descripcion')}</p>
                        <a href="#" className="inline-block bg-iguazu-teal hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-md transition">{t('leer-mas')}</a>
                    </div>
                </div>
            </div>
            <div id="FAQ" className="faq-section bg-white py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-iguazu-dark mb-2">{t('faq-titulo')}</h2>
                    <p className="text-center text-iguazu-teal mb-8 max-w-2xl mx-auto">{t('faq-descripcion')}</p>
                    <div className="space-y-6">
                        <div className="faq-item bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                            <h3 className="text-lg font-semibold text-iguazu-dark mb-2">{t('faq-visa-pregunta')}</h3>
                            <p className="text-gray-700">{t('faq-visa-respuesta')}</p>
                        </div>
                        <div className="faq-item bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                            <h3 className="text-lg font-semibold text-iguazu-dark mb-2">{t('faq-epoca-pregunta')}</h3>
                            <p className="text-gray-700">{t('faq-epoca-respuesta')}</p>
                        </div>
                        <div className="faq-item bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                            <h3 className="text-lg font-semibold text-iguazu-dark mb-2">{t('faq-actividades-pregunta')}</h3>
                            <p className="text-gray-700">{t('faq-actividades-respuesta')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
