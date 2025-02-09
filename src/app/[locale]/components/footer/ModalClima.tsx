'use client'
import React, { useEffect, useState } from 'react';

declare global {
    interface Window {
        __TOMORROW__?: {
            renderWidget: () => void;
        };
    }
}

const ModalClima = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (isModalOpen) {
            const script = document.createElement('script');
            script.id = 'tomorrow-sdk';
            script.src = 'https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js';
            script.async = true;
            script.onload = () => {
                if (window.__TOMORROW__) {
                    window.__TOMORROW__.renderWidget();
                }
            };
            document.body.appendChild(script);
        }
    }, [isModalOpen]);

    return (
        <div>
            <button 
                onClick={handleOpenModal}
                className="rounded-full p-2 bg-[#1f3838] border-[1px] hover:bg-gray-200"
            >
                
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                    </svg>
            </button>

            {isModalOpen && (
                <div className="modal">
                    <div
                        className="modal-content"
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '100vw',
                            height: 'auto',
                            backgroundColor: '#1A3131',
                            zIndex: 1000,
                            padding: '20px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <span className="close text-[#D6A266] font-bold text-xl" onClick={handleCloseModal}>
                        ✕
                        </span>
                        <div
                            className="tomorrow"
                            data-location-id="011871"
                            data-language="ES"
                            data-unit-system="METRIC"
                            data-skin="dark"
                            data-widget-type="upcoming"
                            style={{ paddingBottom: '22px', position: 'relative' }}
                        >
                            <a
                                href="https://www.tomorrow.io/weather-api/"
                                rel="nofollow noopener noreferrer"
                                target="_blank"
                                style={{ position: 'absolute', bottom: 0, transform: 'translateX(-50%)', left: '50%' }}
                            >
                                
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalClima;


