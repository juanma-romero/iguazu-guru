'use client'
import { useTranslations } from 'next-intl';

export default function Infaltables() {
    const t = useTranslations('MainNewHome');

    return (
        <section id="Infaltables" className="quick-info py-12 md:py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-iguazu-dark mb-8">{t('titulo-infaltables')}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    <div className="card bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="text-4xl mb-2">☀️</div><h3 className="font-bold text-lg text-iguazu-dark">{t('clima-titulo')}</h3><p className="text-iguazu-teal text-sm">{t('clima-descripcion')}</p>
                    </div>
                    <div className="card bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="text-4xl mb-2">💲</div><h3 className="font-bold text-lg text-iguazu-dark">{t('moneda-titulo')}</h3><p className="text-iguazu-teal text-sm">{t('moneda-descripcion')}</p>
                    </div>
                    <div className="card bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="text-4xl mb-2">🗺️</div><h3 className="font-bold text-lg text-iguazu-dark">{t('mapas-titulo')}</h3><p className="text-iguazu-teal text-sm">{t('mapas-descripcion')}</p>
                    </div>
                    <div className="card bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="text-4xl mb-2">🎟️</div><h3 className="font-bold text-lg text-iguazu-dark">{t('entradas-titulo')}</h3><p className="text-iguazu-teal text-sm">{t('entradas-descripcion')}</p>
                    </div>
                    <div className="card bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="text-4xl mb-2">🚌</div><h3 className="font-bold text-lg text-iguazu-dark">{t('transporte-titulo')}</h3><p className="text-iguazu-teal text-sm">{t('transporte-descripcion')}</p>
                    </div>
                    <div className="card bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="text-4xl mb-2">👮🏽</div><h3 className="font-bold text-lg text-iguazu-dark">{t('seguridad-titulo')}</h3><p className="text-iguazu-teal text-sm">{t('seguridad-descripcion')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
