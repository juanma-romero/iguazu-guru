'use client'
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import {useTranslations} from 'next-intl';
import Image from 'next/image';

interface CategoryData {
  dondeIr: string[];
  alojamiento: string[];
  gastronomia: string[];
}

interface CityData {
  foz: CategoryData;
  puerto: CategoryData;
  cde: CategoryData;
}

export default function Main() {
    const t = useTranslations();    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentSection, setCurrentSection] = useState<'dondeIr' | 'alojamiento' | 'gastronomia'>('dondeIr');
    const cards = [
      {
      title: t('cards.foz.title'),
      location: t('cards.foz.location'),
      key: 'foz' as const ,
      country: 'br'
      },
      {
      title: t('cards.puerto.title'),
      location: t('cards.puerto.location'),
      key: 'puerto' as const,
      country: 'ar'
      },
      {
      title: t('cards.cde.title'),
      location: t('cards.cde.location'),
      key: 'cde' as const,
      country: 'py'
      },
  ];

  const citySectionsContent = {
    foz: {
        dondeIr: ['Cataratas do Iguaçu', 'Parque das Aves'],
        alojamiento: ['Hotel Belmond Das Cataratas'],
        gastronomia: ['Restaurante Porto Canoas'] 
    },
    puerto: {
        dondeIr: ['Cataratas del Iguazu', 'Hito Tres Fronteras'],
        alojamiento: ['Hotel Casino Acaray'],
        gastronomia: ['Restaurant El Rodizio']
    },
    cde: {
        dondeIr: ['Saltos del Monday', 'Shopping China'],
        alojamiento: ['Gran Nobile Hotel'],
        gastronomia: ['Voraz']
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleDondeIrClick = () => setCurrentSection('dondeIr');
  const handleAlojamientoClick = () => setCurrentSection('alojamiento');
  const handleGastronomiaClick = () => setCurrentSection('gastronomia');
  return (
    <>
      <h1 className='text-yellow-600 px-4'>{t('Main.title')}</h1>
      <div className="flex flex-grow">
       
      {/* Categories */}
      <aside className="w-[15%] flex flex-col justify-evenly ">
        <button
            onClick={handleDondeIrClick} // Asigna el handler al botón
            className={`pt-8 transform -rotate-90 text-sm  hover:underline hover:text-[#D6A266] ${currentSection === 'dondeIr' ? 'text-[#D6A266]' : 'text-gray-400'}`} // Resalta el botón activo
        >
          {t('Main.side1')} {/* Donde ir */}
        </button>
        <button
            onClick={handleAlojamientoClick} // Asigna el handler al botón
            className={`pt-8 transform -rotate-90 text-sm  hover:underline hover:text-[#D6A266] ${currentSection === 'alojamiento' ? 'text-[#D6A266]' : 'text-gray-400'}`} // Resalta el botón activo
        >
        {t('Main.side2')} {/* Alojamiento */}
        </button>
        <button
            onClick={handleGastronomiaClick} // Asigna el handler al botón
            className={`pt-8 transform -rotate-90 text-sm  hover:underline hover:text-[#D6A266] ${currentSection === 'gastronomia' ? 'text-[#D6A266]' : 'text-gray-400'}`} // Resalta el botón activo
        >
        {t('Main.side3')} {/* Gastronomía (ejemplo, puedes cambiar este texto) */}
        </button>

      </aside>

      {/* Ciudades */}
      <main className="flex-grow overflow-x-auto py-4">
          <div className="w-[20rem] h-[40rem] bg-gray-700 rounded-2xl relative overflow-hidden p-4 grid grid-rows-[auto auto 1fr ...]">                  
            <Image 
              src={'/costadoDerecho.jpg'}
              width={320}
              height={280}
              alt="Cataratas do Iguaçu, Brasil"
            />
      {/* Contenido dinámico basado en la sección activa */}
                <div className="mt-6 text-white">
                    <h3 className="font-bold mb-2">{t(`Main.sections.${currentSection}`)}</h3> {/* Título de la sección */}
                    <ul>
                        {citySectionsContent[cards[currentIndex].key]?.[currentSection as keyof typeof citySectionsContent['foz']]?.map((item: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => ( // Renderiza la lista de contenido
                            <li key={index} className="mb-1">{item}</li>
                        ))}
                        {!citySectionsContent[cards[currentIndex].key]?.[currentSection as keyof typeof citySectionsContent['foz']] && ( // Mensaje si no hay contenido para la sección
                            <li>Sin contenido</li> 
                        )}
                    </ul>
                </div>
                <button className="mt-4 bg-yellow-600 text-white py-2 px-4 rounded-full">
                  {t('Main.Button-More')}
                </button>   

          <div className='flex flex-row justify-between items-center'>
            <button onClick={handlePrev} className=" bg-gray-800 rounded-full p-2">
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
            
            <div>
            <h2 className="text-xl font-bold text-white mb-1">
              {cards[currentIndex].title}
            </h2>
            <div className="flex space-x-1 text-xs text-gray-400">
            <img
              src={`/paises/${cards[currentIndex].country}.svg`}
              alt={`Bandera de ${cards[currentIndex].country}`}
              className="w-4 h-4 rounded-full"
              style={{
                width: '1rem',
                height: '1rem',
              }}
            />
              <p>{cards[currentIndex].location}</p>
            </div>
            </div>
            <button onClick={handleNext} className=" bg-gray-800 rounded-full p-2">
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
    </>
        
  )
}

