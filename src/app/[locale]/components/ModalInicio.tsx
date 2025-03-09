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
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-[95%] sm:max-w-md max-h-[90vh] overflow-y-auto">
                <div className="p-3 sm:p-5">
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white pr-2">
                            {t('title') || 'Políticas de Privacidad y Cookies'}
                        </h2>
                        <button 
                            onClick={handleReject}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            aria-label="Cerrar"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    
                    <p className="mb-6 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                        {t('description') || 
                        'Este sitio utiliza cookies para mejorar su experiencia. Al continuar navegando, acepta nuestra política de privacidad y el uso de cookies.'}
                    </p>
                    
                    <div className="mb-4">
                        <Link href="/legal" className="text-yellow-600 hover:text-yellow-700 hover:underline text-sm sm:text-base">
                            {t('legalInfo') || 'Ver información legal completa'}
                        </Link>
                    </div>
                     
                    <div className="flex justify-end space-x-2 sm:space-x-4">
                        <button
                            onClick={handleReject}
                            className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base text-gray-700 border border-gray-300 rounded hover:bg-gray-100 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
                        >
                            {t('reject') || 'Rechazar'}
                        </button>
                        
                        <button
                            onClick={handleAccept}
                            className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-yellow-600 text-white rounded hover:bg-yellow-700"
                        >
                            {t('accept') || 'Aceptar'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}