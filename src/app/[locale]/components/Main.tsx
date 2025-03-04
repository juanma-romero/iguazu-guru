'use client'
import { useState, useEffect } from 'react'
import {useTranslations} from 'next-intl'
import AttractionPreview from './AttractionPreview'
import Image from 'next/image'

export default function Main() {
    const t = useTranslations();    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentSection, setCurrentSection] = useState<'dondeIr' | 'alojamiento' | 'gastronomia'>('dondeIr');
    const [showWelcome, setShowWelcome] = useState(false)
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
  ]

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
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  }

  const toggleWelcome = () => {
    setShowWelcome(!showWelcome)
    // If closing the welcome, save this preference to localStorage
    if (showWelcome) {
      localStorage.setItem('hasSeenWelcome', 'true')
    }
  }

  const handleDondeIrClick = () => setCurrentSection('dondeIr');
  const handleAlojamientoClick = () => setCurrentSection('alojamiento');
  const handleGastronomiaClick = () => setCurrentSection('gastronomia');

  // Handle welcome section visibility based on localStorage and events
  useEffect(() => {
    // Check localStorage for previous visits
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    
    // If user hasn't seen the welcome before, show it
    if (!hasSeenWelcome) {
      setShowWelcome(true);
      
      // Set a timeout to auto-close after 8 seconds
      const timeoutId = setTimeout(() => {
        setShowWelcome(false);
        localStorage.setItem('hasSeenWelcome', 'true');
      }, 8000);
      
      // Add scroll listener to close welcome when scrolling
      const handleScroll = () => {
        setShowWelcome(false);
        localStorage.setItem('hasSeenWelcome', 'true');
        
        // Remove the scroll listener once triggered
        window.removeEventListener('scroll', handleScroll);
      };
      
      window.addEventListener('scroll', handleScroll);
      
      // Cleanup function to remove listeners and clear timeout
      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [])

  useEffect(() => {
    // When welcome modal is shown, trap focus inside
    if (showWelcome) {
      // Get all focusable elements in the modal
      const modal = document.getElementById('welcome-modal');
      if (modal) {
        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        // Focus the first element
        firstElement?.focus();
        
        // Handle keyboard navigation
        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstElement) {
              e.preventDefault();
              lastElement?.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
              e.preventDefault();
              firstElement?.focus();
            }
          } else if (e.key === 'Escape') {
            toggleWelcome();
          }
        };
        
        document.addEventListener('keydown', handleTabKey);
        return () => {
          document.removeEventListener('keydown', handleTabKey);
        };
      }
    }
  }, [showWelcome]);

  return (
    <div className="max-w-7xl mx-auto">
      {showWelcome ? (
        <div className='mx-2 px-4 py-4 bg-gray-100 rounded-lg mb-3 relative'
          id="welcome-modal"
          role="dialog"
          aria-labelledby="welcome-title"
          aria-modal="true">
          <button 
            onClick={toggleWelcome}
            className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'
            aria-label='Close welcome message'
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <h1 className='text-yellow-600 text-2xl'
              id="welcome-title"
          >{t('Main.title')}</h1>
          <br />
          <p>{t('Main.Text')}</p>
        </div>
      ) : (
        <button 
          onClick={toggleWelcome}
          className='ml-4 mb-3 text-yellow-600 hover:text-yellow-700 flex items-center'
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
          {t('Main.Show welcome')}
        </button>
      )}
      <div className="flex flex-grow">       
      {/* Categories */}
      <aside className="w-[15%] md:w-[10%] lg:w-[8%] flex flex-col justify-evenly mr-2">
        <button
            onClick={handleDondeIrClick} // Asigna el handler al botón
            className={`pt-8 transform -rotate-90 text-sm md:text-base md:no-transform md:rotate-0 md:pt-0 md:pl-2 md:py-3 hover:underline hover:text-[#D6A266] ${currentSection === 'dondeIr' ? 'text-[#D6A266]' : 'text-gray-400'}`}// Resalta el botón activo
        >
          {t('Main.side1')} {/* Donde ir */}
        </button>
        <button
            onClick={handleAlojamientoClick} // Asigna el handler al botón
            className={`pt-8 transform -rotate-90 text-sm md:text-base md:no-transform md:rotate-0 md:pt-0 md:pl-2 md:py-3 hover:underline hover:text-[#D6A266] ${currentSection === 'alojamiento' ? 'text-[#D6A266]' : 'text-gray-400'}`} // Resalta el botón activo
        >
        {t('Main.side2')} {/* Alojamiento */}
        </button>
        <button
            onClick={handleGastronomiaClick} // Asigna el handler al botón
            className={`pt-8 transform -rotate-90 text-sm md:text-base md:no-transform md:rotate-0 md:pt-0 md:pl-2 md:py-3 hover:underline hover:text-[#D6A266] ${currentSection === 'gastronomia' ? 'text-[#D6A266]' : 'text-gray-400'}`} // Resalta el botón activo
        >
        {t('Main.side3')} {/* Gastronomía (ejemplo, puedes cambiar este texto) */}
        </button>

      </aside>

      {/* Ciudades */}
      <main role="main" className="flex-grow overflow-x-auto py-4 md:flex md:justify-center">
    <div className="w-[20rem] md:w-[28rem] lg:w-[32rem] h-[40rem] md:h-[42rem] bg-gray-700 rounded-2xl relative overflow-hidden p-4 md:p-6 flex flex-col">                                   
             
      <AttractionPreview 
        cityKey={cards[currentIndex].key} 
        currentSection={currentSection}
      />  

      <div className='flex flex-row justify-between items-center mt-4'>
            <button 
              onClick={handlePrev} 
              className=" bg-gray-800 rounded-full p-2 md:p-3 hover:bg-gray-700"
              aria-label={t('Navigation.previous')}
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            
            <div className="md:flex-grow md:text-center">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
              {cards[currentIndex].title}
            </h2>
            <div className="flex space-x-1 text-xs md:text-sm text-gray-400 md:justify-center">
            <Image
              src={`/paises/${cards[currentIndex].country}.svg`}
              alt={`Bandera de ${cards[currentIndex].country}`}
              className="w-4 h-4 md:w-5 md:h-5 rounded-full"
              width={16}
              height={16}              
            />
              <p>{cards[currentIndex].location}</p>
            </div>
            </div>
            <button 
              onClick={handleNext} 
              className=" bg-gray-800 rounded-full p-2 md:p-3 hover:bg-gray-700"
              aria-label={t('Navigation.next')}
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4  md:h-5 md:w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
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
    </div>
        
  )
}

