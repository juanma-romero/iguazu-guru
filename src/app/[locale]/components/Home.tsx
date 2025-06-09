'use client'
import { useState } from 'react';
import { useTranslations } from 'next-intl';
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

export default function Home() {
  const t = useTranslations();
  
  // Estado para controlar qué pestaña está activa en cada ciudad
  const [activeTab, setActiveTab] = useState<{[key: string]: 'dondeIr' | 'alojamiento' | 'gastronomia'}>({
    foz: 'dondeIr',
    puerto: 'dondeIr',
    cde: 'dondeIr'
  });

  const cities = [
    {
      key: 'foz' as const,
      title: t('cards.foz.title'),
      location: t('cards.foz.location'),
      image: '/costadoDerecho.jpg',
      color: 'from-green-600 to-green-800'
    },
    {
      key: 'puerto' as const,
      title: t('cards.puerto.title'),
      location: t('cards.puerto.location'),
      image: '/costadoDerecho.jpg',
      color: 'from-blue-600 to-blue-800'
    },
    {
      key: 'cde' as const,
      title: t('cards.cde.title'),
      location: t('cards.cde.location'),
      image: '/costadoDerecho.jpg',
      color: 'from-red-600 to-red-800'
    }
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

  const handleTabChange = (cityKey: string, tab: 'dondeIr' | 'alojamiento' | 'gastronomia') => {
    setActiveTab(prev => ({
      ...prev,
      [cityKey]: tab
    }));
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-2 sm:p-4 lg:p-6">
      {/* Título principal */}
      <div className="text-center mb-6 sm:mb-8 lg:mb-12 px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
          {t('Main.title')}
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto px-2">
          {t('Main.subTitle')}
        </p>
      </div>

      {/* Grid de ciudades */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-2 sm:px-4">
        {cities.map((city) => (
          <div key={city.key} className="bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl hover:transform hover:scale-105 transition-all duration-300 mx-auto w-full max-w-sm md:max-w-none">
            {/* Header de la tarjeta */}
            <div className={`bg-gradient-to-r ${city.color} p-4 sm:p-5 lg:p-6 text-white`}>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{city.title}</h2>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <p className="text-xs sm:text-sm opacity-90">{city.location}</p>
              </div>
            </div>

            {/* Imagen */}
            <div className="relative h-40 sm:h-44 lg:h-48 overflow-hidden">
              <Image 
                src={city.image}
                fill
                alt={city.title}
                className="object-cover hover:scale-110 transition-transform duration-500"
                priority
              />
            </div>

            {/* Pestañas */}
            <div className="p-4 sm:p-5 lg:p-6">
              <div className="flex space-x-0.5 sm:space-x-1 mb-3 sm:mb-4 bg-gray-700 rounded-lg p-0.5 sm:p-1">
                <button
                  onClick={() => handleTabChange(city.key, 'dondeIr')}
                  className={`flex-1 py-1.5 sm:py-2 px-1 sm:px-2 lg:px-3 rounded-md text-xs sm:text-sm font-medium transition-all ${
                    activeTab[city.key] === 'dondeIr' 
                      ? 'bg-yellow-600 text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-600'
                  }`}
                >
                  {t('Main.side1')}
                </button>
                <button
                  onClick={() => handleTabChange(city.key, 'alojamiento')}
                  className={`flex-1 py-1.5 sm:py-2 px-1 sm:px-2 lg:px-3 rounded-md text-xs sm:text-sm font-medium transition-all ${
                    activeTab[city.key] === 'alojamiento' 
                      ? 'bg-yellow-600 text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-600'
                  }`}
                >
                  {t('Main.side2')}
                </button>
                <button
                  onClick={() => handleTabChange(city.key, 'gastronomia')}
                  className={`flex-1 py-1.5 sm:py-2 px-1 sm:px-2 lg:px-3 rounded-md text-xs sm:text-sm font-medium transition-all ${
                    activeTab[city.key] === 'gastronomia' 
                      ? 'bg-yellow-600 text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-600'
                  }`}
                >
                  {t('Main.side3')}
                </button>
              </div>

              {/* Contenido de la pestaña activa */}
              <div className="min-h-[100px] sm:min-h-[120px]">
                <h3 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                  {t(`Main.sections.${activeTab[city.key]}`)}
                </h3>
                <ul className="space-y-1.5 sm:space-y-2">
                  {citySectionsContent[city.key]?.[activeTab[city.key]]?.map((item, index) => (
                    <li key={index} className="text-gray-300 text-xs sm:text-sm flex items-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-600 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botón de explorar */}
              <button className="w-full mt-4 sm:mt-6 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base font-semibold hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 transform hover:scale-105">
                {t('Main.Button-More')} {city.title}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Sección adicional con información general */}
      <div className="mt-8 sm:mt-12 lg:mt-16 text-center px-2 sm:px-4">
        <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            {t('Main.copyFootH2')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {t('Main.copyFootP')}
          </p>
        </div>
      </div>
    </div>
  );
}
