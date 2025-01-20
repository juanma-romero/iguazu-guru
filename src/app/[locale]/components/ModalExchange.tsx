'use client'
import { useState, useEffect } from "react";


function ModalExchange() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [exchangeRate, setExchangeRate] = useState(null);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const fetchExchangeRate = async () => {
          try {
            const response = await fetch('https://v6.exchangerate-api.com/v6/c2ab4d5b96925ef0b46ca794/latest/BRL');
            if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            setExchangeRate(json);
          } catch (error) {
            console.error('Error fetching exchange rate:', error);
          }
        };
    
        fetchExchangeRate();
      }, []);

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
                        <div className="modal-body">
                            <p>Exchange Rate: {JSON.stringify(exchangeRate)}</p>
                        </div>
                    </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ModalExchange;