import { useTranslations } from 'next-intl';

export default function FAQ() {
    const t = useTranslations('MainNewHome');
    return (
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
    )
}