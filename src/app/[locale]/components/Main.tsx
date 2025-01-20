'use client'
import { useState } from 'react';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function Main() {
    const t = useTranslations('HomePage');    
    const [currentIndex, setCurrentIndex] = useState(0);
    const cards = [
        {
        title: "Foz do Iguaçu",
        location: "Paraná, Brasil"        
        },
        {
        title: "Puerto Iguazú",
        location: "Misiones, Argentina"        
        },
        {
        title: "Ciudad del Este",
        location: "Alto Paraná, Paraguay"        
        },
    ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="flex flex-grow">
      {/* Categories */}
      <aside className="w-[15%] flex flex-col justify-evenly ">
        <button className="pt-8 transform -rotate-90 text-sm text-gray-400 hover:underline hover:text-[#D6A266]">
          Atracciones
        </button>
        <button className="pt-8 transform -rotate-90 text-sm text-gray-400 hover:underline hover:text-[#D6A266]">
          Alojamiento
        </button>
        <button className="pt-8 transform -rotate-90 text-sm text-gray-400 hover:underline hover:text-[#D6A266]">
          Restaurantes
        </button>
        
      </aside>

      {/* Recommendations */}
      <main className="flex-grow overflow-x-auto py-4">
        <div className="flex space-x-4 pr-6">
          <div className="w-[20rem] h-[40rem] bg-gray-700 rounded-2xl relative overflow-hidden p-4">       
            
            <h1 className='text-yellow-600'>{t('title')}</h1>
              <p className="text-xs text-gray-400 mb-1">Recommended</p>
              <h2 className="text-xl font-bold text-white mb-1">
                {cards[currentIndex].title}
              </h2>
              <div className="flex items-center space-x-1 text-xs text-gray-400">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <p>{cards[currentIndex].location}</p>
              </div>
            
            <button onClick={handlePrev} className="absolute bottom-4 left-4 bg-gray-800 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button onClick={handleNext} className="absolute bottom-4 right-4 bg-gray-800 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </main>
    
      
            
            
    </div>
    
  );
}

