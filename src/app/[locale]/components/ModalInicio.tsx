'use client'
import React, { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import {Link} from '../../../i18n/routing';

export default function ModalInicio() {
    const t = useTranslations('ModalInicio');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const hasAccepted = localStorage.getItem('cookiesAccepted');
        if (!hasAccepted) {
            setIsOpen(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setIsOpen(false);
    };

    const handleReject = () => {
        // You could implement custom behavior for rejection
        // For now, just close the modal
        localStorage.setItem('cookiesRejected', 'true');
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full">
                <div className="p-6">
                    <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                        {t('title') || 'Políticas de Privacidad y Cookies'}
                    </h2>
                    
                    <p className="mb-6 text-gray-700 dark:text-gray-300">
                        {t('description') || 
                        'Este sitio utiliza cookies para mejorar su experiencia. Al continuar navegando, acepta nuestra política de privacidad y el uso de cookies.'}
                    </p>
                    
                    <div className="mb-4">
                        <Link href="/legal" className="text-yellow-600 hover:text-yellow-700 hover:underline">
                            {t('legalInfo') || 'Ver información legal completa'}
                        </Link>
                    </div>
                     
                    <div className="flex justify-end space-x-4">
                        <button
                            onClick={handleReject}
                            className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
                        >
                            {t('reject') || 'Rechazar'}
                        </button>
                        
                        <button
                            onClick={handleAccept}
                            className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
                        >
                            {t('accept') || 'Aceptar'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}