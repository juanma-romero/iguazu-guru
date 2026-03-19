'use client'
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import CurrencyConverter from './CurrencyConverter';
import WeatherModal from './WeatherModal';
import MapModal from './MapModal';
import EntradasModal from './EntradasModal';
import EmergenciasModal from './EmergenciasModal';

interface FooterProps {
    isSticky?: boolean;
    showTitle?: boolean;
}

export default function Footer({ isSticky = true, showTitle = false }: FooterProps) {
    const t = useTranslations('MainNewHome');
    const [isWeatherModalOpen, setIsWeatherModalOpen] = useState(false);
    const [isMapModalOpen, setIsMapModalOpen] = useState(false);
    const [isEntradasModalOpen, setIsEntradasModalOpen] = useState(false);
    const [isEmergenciasModalOpen, setIsEmergenciasModalOpen] = useState(false);

    const containerClasses = isSticky
        ? "fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 py-4 mt-8"
        : "quick-info py-12 md:py-16";

    const gridClasses = isSticky
        ? "grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 max-w-6xl mx-auto"
        : "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6";

    const cardClasses = isSticky
        ? "card bg-iguazu-light p-3 rounded-lg shadow-sm text-center hover:shadow-md hover:bg-iguazu-teal hover:text-white transition-all duration-300 text-xs"
        : "card bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300";

    const emojiClasses = isSticky
        ? "text-2xl mb-1"
        : "text-4xl mb-2";

    const titleClasses = isSticky
        ? "font-semibold text-sm text-iguazu-dark hover:text-white"
        : "font-bold text-lg text-iguazu-dark";

    const descriptionClasses = isSticky
        ? "text-iguazu-teal text-xs hover:text-white hidden md:block"
        : "text-iguazu-teal text-sm";

    return (
        <footer id={isSticky ? "Infaltables-sticky" : "Infaltables"} className={containerClasses}>
            <div className="container mx-auto px-4 ">
                {showTitle && !isSticky && (
                    <h2 className="text-3xl font-bold text-center text-iguazu-dark mb-8">{t('titulo-infaltables')}</h2>
                )}
                <div className={gridClasses}>
                    <div
                        className={`${cardClasses} cursor-pointer`}
                        onClick={() => setIsWeatherModalOpen(true)}
                    >
                        <div className={emojiClasses}>☀️</div>
                        <h3 className={titleClasses}>{t('clima-titulo')}</h3>
                        {!isSticky && <p className={descriptionClasses}>{t('clima-descripcion')}</p>}
                    </div>
                    <CurrencyConverter isSticky={isSticky} />
                    <div
                        className={`${cardClasses} cursor-pointer`}
                        onClick={() => setIsMapModalOpen(true)}
                    >
                        <div className={emojiClasses}>🗺️</div>
                        <h3 className={titleClasses}>{t('mapas-titulo')}</h3>
                        {!isSticky && <p className={descriptionClasses}>{t('mapas-descripcion')}</p>}
                    </div>
                    <div
                        className={`${cardClasses} cursor-pointer`}
                        onClick={() => setIsEntradasModalOpen(true)}
                    >
                        <div className={emojiClasses}>🎟️</div>
                        <h3 className={titleClasses}>{t('entradas-titulo')}</h3>
                        {!isSticky && <p className={descriptionClasses}>{t('entradas-descripcion')}</p>}
                    </div>
                    <div className={cardClasses}>
                        <div className={emojiClasses}>🚌</div>
                        <h3 className={titleClasses}>{t('transporte-titulo')}</h3>
                        {!isSticky && <p className={descriptionClasses}>{t('transporte-descripcion')}</p>}
                    </div>

                    <div
                        className={`${cardClasses} cursor-pointer`}
                        onClick={() => setIsEmergenciasModalOpen(true)}
                    >
                        <div className={emojiClasses}>🚨</div>
                        <h3 className={titleClasses}>{t('seguridad-titulo')}</h3>
                        {!isSticky && <p className={descriptionClasses}>{t('seguridad-descripcion')}</p>}
                    </div>

                </div>
            </div>

            {/* Weather Modal */}
            <WeatherModal
                isOpen={isWeatherModalOpen}
                onClose={() => setIsWeatherModalOpen(false)}
            />

            {/* Map Modal */}
            <MapModal
                isOpen={isMapModalOpen}
                onClose={() => setIsMapModalOpen(false)}
            />

            {/* Entradas Modal */}
            {isEntradasModalOpen && <EntradasModal onClose={() => setIsEntradasModalOpen(false)} />}

            {/* Emergencias Modal */}
            <EmergenciasModal
                isOpen={isEmergenciasModalOpen}
                onClose={() => setIsEmergenciasModalOpen(false)}
            />
        </footer>
    );
}
