'use client'
import { useState } from 'react';
import LocaleSwitcher from './LocaleSwitcher';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('Language');

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language: string): void => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <header className="px-6 pt-8 pb-4">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xl text-gray-300">Iguazu Guru</p>
        <div className="flex items-center space-x-4">
  {/* 
          <div className="relative inline-block">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between px-4 outline outline-[1px] py-2 text-white rounded-full w-[164px] hover:bg-gray-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                stroke='#bbb'
                fill='#bbb'
              >
                <g id="language">
                  <g>
                    <path d="M12,24C5.4,24,0,18.6,0,12S5.4,0,12,0s12,5.4,12,12S18.6,24,12,24z M9.5,17c0.6,3.1,1.7,5,2.5,5s1.9-1.9,2.5-5H9.5z M16.6,17c-0.3,1.7-0.8,3.3-1.4,4.5c2.3-0.8,4.3-2.4,5.5-4.5H16.6z M3.3,17c1.2,2.1,3.2,3.7,5.5,4.5c-0.6-1.2-1.1-2.8-1.4-4.5H3.3z M16.9,15h4.7c0.2-0.9,0.4-2,0.4-3s-0.2-2.1-0.5-3h-4.7c0.2,1,0.2,2,0.2,3S17,14,16.9,15z M9.2,15h5.7c0.1-0.9,0.2-1.9,0.2-3S15,9.9,14.9,9H9.2C9.1,9.9,9,10.9,9,12C9,13.1,9.1,14.1,9.2,15z M2.5,15h4.7c-0.1-1-0.1-2-0.1-3s0-2,0.1-3H2.5C2.2,9.9,2,11,2,12S2.2,14.1,2.5,15z M16.6,7h4.1c-1.2-2.1-3.2-3.7-5.5-4.5C15.8,3.7,16.3,5.3,16.6,7z M9.5,7h5.1c-0.6-3.1-1.7-5-2.5-5C11.3,2,10.1,3.9,9.5,7z M3.3,7h4.1c0.3-1.7,0.8-3.3,1.4-4.5C6.5,3.3,4.6,4.9,3.3,7z"/>
                  </g>
                </g>
              </svg>
              <span className="ml-2 text-sm font-medium ">{selectedLanguage}</span>
              <svg
                className={`h-4 w-4 ml-2 ${isOpen ? 'transform rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg w-48 z-10">
                <button
                  onClick={() => handleLanguageSelect('English')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageSelect('Español')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
                >
                  Español
                </button>
                <button
                  onClick={() => handleLanguageSelect('Português')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
                >
                  Português
                </button>
              </div>
            )}
          </div>
 */}

      <LocaleSwitcher />
        </div>
      </div>
      
    </header>
  );
}