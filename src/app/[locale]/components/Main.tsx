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
        location: "Parana, Brasil",
        rating: 4.9,
        },
        {
        title: "Puerto Iguazu",
        location: "Misiones, Argentina",
        rating: 4.9,
        },
        {
        title: "Ciudad del Este",
        location: "Paraguay",
        rating: 4.9,
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
        <button className="pt-8 transform -rotate-90 text-sm underline text-[#D6A266]">
          Atracciones
        </button>
        <button className="pt-8 transform -rotate-90 text-sm text-gray-400">
          Alojamiento
        </button>
        <button className="pt-8 transform -rotate-90 text-sm text-gray-400">
          Restaurantes
        </button>
      </aside>

      {/* Recommendations */}
      <main className="flex-grow overflow-x-auto py-4">
        <div className="flex space-x-4 pr-6">
          <div className="w-72 h-[36rem] bg-gray-700 rounded-2xl relative overflow-hidden">
            <div className="absolute top-2 left-2 bg-gray-800 bg-opacity-50 px-2 py-1 rounded-md text-xs text-white flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 mr-1 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {cards[currentIndex].rating}
            </div>
            <div className="absolute top-2 right-2 bg-gray-800 bg-opacity-50 p-1 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#E0AB47]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm12 2H5v8l5-3 5 3V7z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="h-1/2 bg-gray-400 w-full"></div>
            <div className="absolute bottom-4 left-4">
              <p className="text-xs text-gray-400 mb-1">Recommended</p>
              <h2 className="text-xl font-bold text-white mb-1">
                {cards[currentIndex].title}
              </h2>
              <div className="flex items-center space-x-1 text-xs text-gray-400">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <p>{cards[currentIndex].location}</p>
              </div>
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
    
      <h1 className='text-yellow-600'>{t('title')}</h1>
            <Link href="/about">{t('about')}</Link>
            
    </div>
    
  );
}

