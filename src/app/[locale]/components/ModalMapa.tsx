'use client'
import { useState } from "react";
import { APIProvider, Map} from '@vis.gl/react-google-maps';

const ModalMapa = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <button onClick={handleOpenModal}>
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
            </button>

            {isModalOpen && (
                <div className="modal" style={{ position: 'fixed', top: '75vh', left: 0, width: '100%', height: '25vh', backgroundColor: 'white', zIndex: 1000 }}>
                    <div className="modal-content" style={{ padding: '20px' }}>                        
                        <div className="modal-body" style={{ height: 'calc(100% - 40px)' }}>
                        <span className="close" onClick={handleCloseModal} style={{ cursor: 'pointer' }}>&times;</span>
                            <APIProvider 
                                apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
                                    <Map
                                    style={{width: '100vw', height: '100vh'}}
                                    defaultCenter={{lat: 22.54992, lng: 0}}
                                    defaultZoom={3}
                                    gestureHandling={'greedy'}
                                    disableDefaultUI={true}
                                    />
                            </APIProvider>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalMapa;