'use client'
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import {Link} from '../../../../i18n/routing'
import paisesData from '../../../../../public/paises/paises.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import custom styles
import styles from './Ciudades.module.css';

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

// Helper function to get emoji from flag path
const getFlagEmoji = (flagPath: string) => {
  // Extract country code from path like '/paises/br.svg' -> 'br'
  const countryCode = flagPath.split('/').pop()?.split('.')[0] || '';
  return paisesData[countryCode as keyof typeof paisesData] || '🏳️';
};

export default function Ciudades() {
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
      route: 'foz-do-iguacu',
      title: t('cards.foz.title'),
      location: t('cards.foz.location'),
      flag: '/paises/br.svg',
      image: '/attractions/Cataratas-do-Iguacu-1024x683.jpeg',
      color: 'from-green-600 to-green-800'
    },
    {
      key: 'puerto' as const,
      route: 'puerto-iguazu',
      title: t('cards.puerto.title'),
      location: t('cards.puerto.location'),
      flag: '/paises/ar.svg',
      image: '/attractions/garganta.jpg',
      color: 'from-blue-600 to-blue-800'
    },
    {
      key: 'cde' as const,
      route: 'cidade-de-leste',
      title: t('cards.cde.title'),
      location: t('cards.cde.location'),
      flag: '/paises/py.svg',
      image: '/attractions/ShoParis.jpg',
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
    <section id='ciudades' className='cities-section px-2'>    
      {/* Sección adicional con información general */}
          <h2 className="text-4xl pt-8 md:text-5xl font-extrabold mb-4 text-center">
            {t('Main.copyFootH2')}
          </h2>
          <p className="text-center text-gray-800 leading-relaxed max-w-3xl mx-auto mb-8">
            {t('Main.copyFootP')}
          </p>
          {/* Carrusel de ciudades */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 relative">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={16}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          className={styles.citiesSwiper}
        >
          {cities.map((city) => (
            <SwiperSlide key={city.key}>
              <div className="bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl hover:transform hover:scale-105 transition-all duration-300 mx-auto w-full max-w-sm md:max-w-none">
            {/* Header de la tarjeta */}
            <div className={`bg-gradient-to-r ${city.color} p-4 sm:p-5 lg:p-6 text-white`}>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{city.title}</h2>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 sm:w-5 sm:h-5 text-lg flex items-center justify-center rounded-full border-2 border-white">
                  {getFlagEmoji(city.flag)}
                </span>
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
              <Link href={city.route === 'foz-do-iguacu' ? '/cidades/foz-do-iguacu' :
                        city.route === 'puerto-iguazu' ? '/cidades/puerto-iguazu' :
                        '/cidades/cidade-de-leste'}>
                <button className="w-full mt-4 sm:mt-6 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base font-semibold hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 transform hover:scale-105">
                  {t('Main.Button-More')} {city.title}
                </button>
              </Link>
              
            </div>
          </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controles de navegación */}
        <div className="swiper-button-prev after:!text-lg"></div>
        <div className="swiper-button-next after:!text-lg"></div>
        <div className="swiper-pagination !bottom-0 mt-6"></div>
      </div>
    </section>
  );
}
