"use client";

import { useState } from "react";
import Aviso from "./AvisoLegal";
import Cookies from "./Cookies";
import Privacidad from "./Privacidad";
import {Link} from '../../../i18n/routing';

import { useTranslations } from 'next-intl';

interface CollapsibleSectionProps {
  title: string;
  preview: string;
  children: React.ReactNode;
}

const CollapsibleSection = ({ title, preview, children }: CollapsibleSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-sm">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {isExpanded ? (
        <>
          <div className="mt-3">{children}</div>
          <button 
            onClick={() => setIsExpanded(false)}
            className="mt-4 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 flex items-center"
          >
            <span>Mostrar menos</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </>
      ) : (
        <>
          <p className="text-gray-600">{preview}</p>
          <button 
            onClick={() => setIsExpanded(true)}
            className="mt-3 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 flex items-center"
          >
            <span>Leer más</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default function Legal() {
    const t = useTranslations('PaginaLegal');
  return (
    <div>
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">{t('title')}</h1>
      
      <CollapsibleSection 
        title={t('subtitle')}
        preview={t('preview1')}
      >
        <Privacidad />
      </CollapsibleSection>
      
      <CollapsibleSection 
        title={t('subtitle2')}
        preview={t('preview2')}
      >
        <Cookies />
      </CollapsibleSection>
      
      <CollapsibleSection 
        title={t('subtitle3')}
        preview={t('preview3')}
      >
        <Aviso />
      </CollapsibleSection>
    </div>
    <div className="flex justify-center mt-8">
      <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {t('botonHome')}
      </Link>
    </div>
    </div>
  );
}