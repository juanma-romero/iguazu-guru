'use client'
import { useState } from "react";
import MapaVis from "./mapavis/page";

const ModalMapa = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }    

    return (
        <>
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
            <div 
                className="modal" 
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
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'                  
                    }}>

                <div className="modal-content">                        
                    <div className="modal-body" style={{ height: 'calc(100% - 40px)' }}>
                        <span className="close text-[#D6A266] font-bold text-xl" onClick={handleCloseModal}>
                            ✕
                        </span>
                        <div style={{ height: '80vh', width: '100%' }}>
                            <MapaVis />
                        </div>
                    </div>
                </div>
            </div>
)}
        </>
    )
}

export default ModalMapa
