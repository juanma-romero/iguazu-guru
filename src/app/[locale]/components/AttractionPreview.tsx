'use client'

import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useCurrencyContext } from '../../../context/CurrencyContext';
import { useExchangeRate } from '../../../context/ExchangeRateContext';

// Import the base data
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
  location: string | string[];
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
  
  // Get currency and exchange rate contexts
  const { selectedCurrency } = useCurrencyContext();
  const exchangeRateData = useExchangeRate();
  
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
  
  // Helper function to get translated content safely, without throwing errors
  const getTranslatedContent = (itemIndex: number, field: string) => {
    try {
      // Skip translation attempts for fields that don't apply to the current section
      if ((currentSection === 'gastronomia' && field.startsWith('amenities')) ||
          (currentSection === 'alojamiento' && field === 'cuisine') ||
          (currentSection === 'dondeIr' && (field === 'cuisine' || field.startsWith('amenities')))) {
        return null;
      }
      
      const translationKey = `${cityKey}.${currentSection}.${itemIndex}.${field}`;
      
      // First check if the translation exists to avoid throwing errors
      try {
        const translation = t(translationKey);
        return translation !== translationKey ? translation : null;
      } catch (error) {
        return null;
      }
    } catch (error) {
      return null;
    }
  };
  
  // Convert currency based on exchange rates
  const convertCurrency = (amount: number, fromCurrency: string, toCurrency: string): number | null => {
    if (!exchangeRateData || !exchangeRateData.conversion_rates) {
      return null; // Exchange rates not loaded yet
    }

    try {
      const rates = exchangeRateData.conversion_rates;
      
      // If currencies are the same, no conversion needed
      if (fromCurrency === toCurrency) {
        return amount;
      }
      
      // First convert to the base currency (BRL in this case)
      let amountInBaseCurrency;
      
      if (fromCurrency === exchangeRateData.base_code) {
        amountInBaseCurrency = amount; // Already in base currency
      } else {
        // Convert from source currency to base currency
        const rateFromSourceToBase = 1 / rates[fromCurrency];
        amountInBaseCurrency = amount * rateFromSourceToBase;
      }
      
      // Then convert from base to target currency
      if (toCurrency === exchangeRateData.base_code) {
        return amountInBaseCurrency; // Already converted to base
      } else {
        const rateFromBaseToTarget = rates[toCurrency];
        return amountInBaseCurrency * rateFromBaseToTarget;
      }
    } catch (error) {
      console.error('Error converting currency:', error);
      return null;
    }
  };
  
  // Format price with currency symbol and notation
  const formatCurrencyDisplay = (amount: number, currencyCode: string): string => {
    try {
      // Define formatting for different currencies
      const formatOptions: { [key: string]: Intl.NumberFormatOptions } = {
        USD: { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 },
        BRL: { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: 0 },
        ARS: { style: 'currency', currency: 'ARS', minimumFractionDigits: 0, maximumFractionDigits: 0 },
        PYG: { style: 'currency', currency: 'PYG', minimumFractionDigits: 0, maximumFractionDigits: 0 },
        EUR: { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 0 },
        UYU: { style: 'currency', currency: 'UYU', minimumFractionDigits: 0, maximumFractionDigits: 0 },
        CLP: { style: 'currency', currency: 'CLP', minimumFractionDigits: 0, maximumFractionDigits: 0 },
        PEN: { style: 'currency', currency: 'PEN', minimumFractionDigits: 0, maximumFractionDigits: 0 },
        COP: { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 }
      };
      
      // Get appropriate locale for the currency
      const localeMap: { [key: string]: string } = {
        USD: 'en-US',
        BRL: 'pt-BR',
        ARS: 'es-AR',
        PYG: 'es-PY',
        EUR: 'de-DE',
        UYU: 'es-UY',
        CLP: 'es-CL',
        PEN: 'es-PE',
        COP: 'es-CO'
      };
      
      // Use the locale and options to format the amount
      const locale = localeMap[currencyCode] || 'en-US';
      const options = formatOptions[currencyCode] || { style: 'currency', currency: currencyCode };
      
      return new Intl.NumberFormat(locale, options).format(amount);
    } catch (error) {
      console.error('Error formatting currency:', error);
      return `${amount} ${currencyCode}`; // Fallback format
    }
  };
  
  // Format price with all necessary logic
  const formatPrice = (price: { value?: number, currency: string, notes: string }, itemIndex: number) => {
    if (!price) {
      return 'Price not available';
    }
    
    // If no value, show notes
    if (!price.value) {
      // Try to get translated notes if they exist
      const translatedNotes = price.notes ? getTranslatedContent(itemIndex, 'price.notes') : null;
      return translatedNotes || price.notes || 'Price not available';
    }
    
    // If we have a value, try to convert and format it
    const sourceCurrency = price.currency || 'USD';
    const targetCurrency = selectedCurrency;
    
    // Try to convert the currency
    const convertedAmount = convertCurrency(price.value, sourceCurrency, targetCurrency);
    
    if (convertedAmount === null) {
      // Conversion failed, show original price
      return formatCurrencyDisplay(price.value, sourceCurrency);
    }
    
    // Format the converted price with the target currency
    return formatCurrencyDisplay(convertedAmount, targetCurrency);
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
  
  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Main content - now with max height to prevent pushing down navigation */}
      <div className="text-white flex-grow overflow-y-auto max-h-[calc(100%-4rem)]">
        <h3 className="font-bold mb-4 text-xl">{t(`Main.sections.${currentSection}`)}</h3>
        
        {attractions.length > 0 ? (
          <div className="space-y-6">
            {attractions.map((item, index) => {
              // Try to get translated values for key fields
              const translatedDescription = getTranslatedContent(index, 'description');
              const translatedName = getTranslatedContent(index, 'name');
              
              // Determine which section-specific content to show
              const showCuisine = currentSection === 'gastronomia' && item.cuisine;
              const showAmenities = currentSection === 'alojamiento' && item.amenities && item.amenities.length > 0;
              
              // Only get translations for section-specific fields
              let translatedCuisine = null;
              let translatedAmenities: string[] | undefined;
              
              if (showCuisine) {
                translatedCuisine = getTranslatedContent(index, 'cuisine');
              }
              
              if (showAmenities && item.amenities) {
                translatedAmenities = [...item.amenities]; // Start with a copy of original amenities
                
                // Only try to translate amenities for alojamiento section
                for (let i = 0; i < item.amenities.length; i++) {
                  const translated = getTranslatedContent(index, `amenities.${i}`);
                  if (translated) {
                    translatedAmenities[i] = translated;
                  }
                }
              }
              
              return (
                <div key={index} className="bg-gray-800 rounded-lg p-3 md:p-4">
                  <div className="mb-2 rounded-md w-full h-40 md:h-48 relative">
                    <Image 
                      src={item.image || '/placeholder.jpg'}
                      alt={translatedName || item.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-md"
                    />
                  </div>
                  
                  <div className="md:flex md:justify-between md:items-start">
          <div>
            <h4 className="font-semibold text-lg mb-1">{translatedName || item.name}</h4>
            {renderStars(item.rating)}
          </div>
          <div className="md:text-right mt-1 md:mt-0">
            <div className="flex items-center md:justify-end">
              <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {formatPrice(item.price, index)}
            </div>
          </div>
        </div>
        
        <p className="text-gray-300 text-sm my-2 md:my-3">{translatedDescription || item.description}</p>
                  
                  <div className="mt-2 text-xs text-gray-400">
                    <div className="flex items-center mb-1">
                      <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {Array.isArray(item.location) ? item.location.join(', ') : item.location}
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
                      {formatPrice(item.price, index)}
                    </div>
                  </div>
                  
                  {/* Only show amenities in alojamiento section */}
                  {showAmenities && translatedAmenities && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {translatedAmenities.slice(0, 3).map((amenity, i) => (
                        <span key={i} className="bg-gray-700 text-xs px-2 py-1 rounded-full">
                          {amenity}
                        </span>
                      ))}
                      {translatedAmenities.length > 3 && (
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded-full">
                          +{translatedAmenities.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                  
                  {/* Only show cuisine in gastronomia section */}
                  {showCuisine && (
                    <div className="mt-2 bg-gray-700 text-xs px-2 py-1 rounded-full inline-block">
                      {translatedCuisine || item.cuisine}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-gray-400 text-center py-12">
            <svg className="mx-auto h-12 w-12 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>{t('Common.noContent')}</p>
          </div>
        )}
      </div>
      
      <div className="flex justify-end mt-auto h-16 items-center">
        {attractions.length > 0 && (
          <button 
            onClick={handleMoreClick}
            aria-label={t('Main.Button-More')} 
            className="bg-yellow-600 text-white h-12 w-20 rounded-full hover:bg-yellow-700 flex items-center justify-center"
          >
            {t('Main.Button-More')}
          </button>
        )}
      </div>
    </div>
  );
}