'use client'

import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Import the data
import attractionData from './dataPreview.json';

type SectionType = 'dondeIr' | 'alojamiento' | 'gastronomia';
type CityKey = 'foz' | 'puerto' | 'cde';

interface AttractionItem {
  name: string;
  image: string;
  description: string;
  price: {
    value?: number;
    currency: string;
    notes: string;
  };
  openingHours?: string;
  location: string;
  rating: number;
  amenities?: string[];
  cuisine?: string;
}

interface AttractionPreviewProps {
  cityKey: CityKey;
  currentSection: SectionType;
}

export default function AttractionPreview({ 
  cityKey, 
  currentSection
}: AttractionPreviewProps) {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split('/')[1]; // Extract locale from pathname
  const [attractions, setAttractions] = useState<AttractionItem[]>([]);
  
  // Load attractions data when component mounts or dependencies change
  useEffect(() => {
    try {
      const cityData = attractionData[cityKey as keyof typeof attractionData];
      if (cityData) {
        const sectionData = cityData[currentSection as keyof typeof cityData];
        if (Array.isArray(sectionData)) {
          setAttractions(sectionData as AttractionItem[]);
        } else {
          setAttractions([]);
        }
      } else {
        setAttractions([]);
      }
    } catch (error) {
      console.error('Error loading attraction data:', error);
      setAttractions([]);
    }
  }, [cityKey, currentSection]);
  
  // Handle "More" button click to navigate to the detailed page
  const handleMoreClick = () => {
    router.push(`/${locale}/${cityKey}`);
  };
  
  // Render star rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i}
            className={`w-4 h-4 ${i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-500'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };
  
  // Format price with currency
  const formatPrice = (price: { value?: number, currency: string, notes: string }) => {
    if (!price.value) return price.notes;
    
    // Format based on currency
    let formattedPrice = '';
    switch(price.currency) {
      case 'USD':
        formattedPrice = `$${price.value}`;
        break;
      case 'BRL':
        formattedPrice = `R$${price.value}`;
        break;
      case 'ARS':
        formattedPrice = `AR$${price.value}`;
        break;
      case 'PYG':
        formattedPrice = `₲${price.value.toLocaleString()}`;
        break;
      default:
        formattedPrice = `${price.value} ${price.currency}`;
    }
    
    return formattedPrice;
  };
  
  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Main content - now with max height to prevent pushing down navigation */}
      <div className="text-white flex-grow overflow-y-auto max-h-[calc(100%-4rem)]">
        <h3 className="font-bold mb-4 text-xl">{t(`Main.sections.${currentSection}`)}</h3>
        
        {attractions.length > 0 ? (
          <div className="space-y-6">
            {attractions.map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3">
                <Image 
                  src={item.image || '/placeholder.jpg'}
                  width={280}
                  height={160}
                  alt={item.name}
                  className="mb-2 rounded-md w-full h-40 object-cover"
                />
                
                <h4 className="font-semibold text-lg mb-1">{item.name}</h4>
                {renderStars(item.rating)}
                
                <p className="text-gray-300 text-sm my-2">{item.description}</p>
                
                <div className="mt-2 text-xs text-gray-400">
                  <div className="flex items-center mb-1">
                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {item.location}
                  </div>
                  
                  {item.openingHours && (
                    <div className="flex items-center mb-1">
                      <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item.openingHours}
                    </div>
                  )}
                  
                  <div className="flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {formatPrice(item.price)}
                  </div>
                </div>
                
                {/* Conditional section for amenities or cuisine */}
                {item.amenities && item.amenities.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {item.amenities.slice(0, 3).map((amenity, i) => (
                      <span key={i} className="bg-gray-700 text-xs px-2 py-1 rounded-full">
                        {amenity}
                      </span>
                    ))}
                    {item.amenities.length > 3 && (
                      <span className="bg-gray-700 text-xs px-2 py-1 rounded-full">
                        +{item.amenities.length - 3}
                      </span>
                    )}
                  </div>
                )}
                
                {item.cuisine && (
                  <div className="mt-2 bg-gray-700 text-xs px-2 py-1 rounded-full inline-block">
                    {item.cuisine}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-gray-400 text-center py-12">
            <svg className="mx-auto h-12 w-12 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>Sin contenido para esta sección</p>
          </div>
        )}
      </div>
      
      <div className="flex justify-end mt-auto h-16 items-center">
        {attractions.length > 0 && (
          <button 
            onClick={handleMoreClick}
            className="bg-yellow-600 text-white h-12 w-20 rounded-full hover:bg-yellow-700 flex items-center justify-center"
          >
            {t('Main.Button-More')}
          </button>
        )}
      </div>
    </div>
  );
}