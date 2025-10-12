'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import {Link} from '../../../../i18n/routing'
import { FaTimes, FaPhoneAlt } from 'react-icons/fa';

interface EmergenciasModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function EmergenciasModal({ isOpen, onClose }: EmergenciasModalProps) {
    const t = useTranslations('');

    const quickContacts = {
        argentina: [
            t.raw('contactos-emergencias.argentina')[0], // Policia
            t.raw('contactos-emergencias.argentina')[4], // Policia Turística
        ],
        brasil: [
            t.raw('contactos-emergencias.brasil')[0], // Policia Militar
            t.raw('contactos-emergencias.brasil')[4], // Policia Turística
        ],
        paraguay: [
            t.raw('contactos-emergencias.paraguay')[0], // Policia Nacional
            t.raw('contactos-emergencias.paraguay')[3], // SENATUR
        ],
    };

    const countryOrder = [
        { id: 'argentina', name: t('argentina-titulo-emergencias'), flag: '🇦🇷' },
        { id: 'brasil', name: t('brasil-titulo-emergencias'), flag: '🇧🇷' },
        { id: 'paraguay', name: t('paraguay-titulo-emergencias'), flag: '🇵🇾' },
    ] as const;

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
            onClick={onClose}
        >
            <div
                className="bg-white p-5 sm:p-6 rounded-xl shadow-2xl z-50 w-full max-w-md relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl">
                    <FaTimes />
                </button>
                <h2 className="text-2xl font-bold text-iguazu-dark mb-4">{t('modal-titulo-emergencias')}</h2>

                <div className="space-y-4">
                    {countryOrder.map((country) => (
                        <div key={country.id}>
                            <h3 className="text-lg font-semibold text-iguazu-dark mb-2 flex items-center">
                                <span className="text-2xl mr-2">{country.flag}</span>
                                {country.name}
                            </h3>
                            <ul className="space-y-2 pl-8">
                                {quickContacts[country.id].map((contact, index) => (
                                    <li key={index} className="flex items-center justify-between text-gray-700">
                                        <span>{contact['servicio-emergencias']}</span>
                                        <a
                                            href={`tel:${contact['numero-emergencias'].replace(/\s/g, '')}`}
                                            className="flex items-center font-semibold text-iguazu-teal hover:underline"
                                        >
                                            <FaPhoneAlt className="mr-2" />
                                            {contact['numero-emergencias']}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-6 text-center">
                    <Link href="/guias/emergencias" onClick={onClose} className="text-iguazu-dark-blue hover:text-iguazu-teal font-semibold hover:underline transition-colors">
                        {t('modal-link-guia-completa')}
                    </Link>
                </div>
            </div>
        </div>
    );
}