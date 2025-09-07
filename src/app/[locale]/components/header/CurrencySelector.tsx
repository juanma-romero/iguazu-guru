'use client'

import { useState } from 'react'
import { useCurrency } from '../../../../context/CurrencyContext'
import paisesData from '../../../../../public/paises/paises.json'

interface Currency {
  name: string
  code: string
  countryCode: string
}

export default function CurrencySelector() {
  const { currentCurrency, setCurrentCurrency, currencies, loading, error } = useCurrency()
  const [isOpen, setIsOpen] = useState(false)

  const currentCurrencyData = currencies.find((c: Currency) => c.code === currentCurrency)

  const handleCurrencyChange = (currencyCode: string) => {
    setCurrentCurrency(currencyCode)
    setIsOpen(false)
  }

  if (loading) {
    return (
      <div className="flex items-center space-x-2 px-3 py-2 bg-gray-50 rounded-md border border-iguazu-teal">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-iguazu-teal"></div>
        <span className="text-sm text-gray-600">Cargando...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center space-x-2 px-3 py-2 bg-gray-50 rounded-md border border-red-200">
        <span className="text-sm text-red-600">Error de monedas</span>
      </div>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-gray-50 rounded-md border border-iguazu-teal transition-colors duration-200 min-w-[120px] cursor-pointer"
        aria-label="Seleccionar moneda"
      >
        {/* Flag icon */}
        {currentCurrencyData && (
          <span className="text-lg">
            {paisesData[currentCurrencyData.countryCode as keyof typeof paisesData] || '🏳️'}
          </span>
        )}

        {/* Currency code */}
        <span className="text-sm font-medium text-gray-700">
          {currentCurrency}
        </span>

        {/* Dropdown arrow */}
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown content */}
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 md:w-56 md:right-0 md:left-auto md:transform-none bg-white rounded-md shadow-lg border border-gray-200 z-20 max-h-64 overflow-y-auto">
            {currencies.map((currency) => (
              <button
                key={currency.code}
                onClick={() => handleCurrencyChange(currency.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-iguazu-light transition-colors duration-150 ${
                  currentCurrency === currency.code
                    ? 'bg-iguazu-teal bg-opacity-10 text-iguazu-teal'
                    : 'text-gray-700'
                }`}
              >
                {/* Flag icon */}
                <span className="text-lg">
                  {paisesData[currency.countryCode as keyof typeof paisesData] || '🏳️'}
                </span>

                {/* Currency info */}
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">
                    {currency.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {currency.code}
                  </div>
                </div>

                {/* Check mark for selected currency */}
                {currentCurrency === currency.code && (
                  <svg
                    className="w-5 h-5 text-iguazu-teal"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
