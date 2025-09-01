'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// Types
interface Currency {
  name: string
  code: string
  countryCode: string
}

interface ExchangeRates {
  [key: string]: number
}

interface CurrencyContextType {
  currentCurrency: string
  setCurrentCurrency: (currency: string) => void
  currencies: Currency[]
  exchangeRates: ExchangeRates | null
  loading: boolean
  error: string | null
  convertPrice: (price: number, fromCurrency: string, toCurrency?: string) => number
  formatPrice: (price: number, currency?: string) => string
}

// Currency data from monedas.json
const CURRENCIES: Currency[] = [
  { name: 'Peso Uruguayo', code: 'UYU', countryCode: 'uy' },
  { name: 'Peso Chileno', code: 'CLP', countryCode: 'cl' },
  { name: 'Peso Argentino', code: 'ARS', countryCode: 'ar' },
  { name: 'Dólar', code: 'USD', countryCode: 'us' },
  { name: 'Real', code: 'BRL', countryCode: 'br' },
  { name: 'Guaraní', code: 'PYG', countryCode: 'py' },
  { name: 'Euro', code: 'EUR', countryCode: 'eu' },
  { name: 'Sol', code: 'PEN', countryCode: 'pe' },
  { name: 'Peso Colombiano', code: 'COP', countryCode: 'co' }
]

// Default currency
const DEFAULT_CURRENCY = 'USD'

// API configuration
const API_KEY = process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY
const API_BASE_URL = 'https://v6.exchangerate-api.com/v6'

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currentCurrency, setCurrentCurrency] = useState<string>(DEFAULT_CURRENCY)
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch exchange rates
  const fetchExchangeRates = async (baseCurrency: string = DEFAULT_CURRENCY) => {
    if (!API_KEY) {
      setError('Exchange rate API key not found')
      setLoading(false)
      return
    }

    try {
      setLoading(true)
      setError(null)

      const response = await fetch(`${API_BASE_URL}/${API_KEY}/latest/${baseCurrency}`)

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`)
      }

      const data = await response.json()

      if (data.result === 'success') {
        // Filter rates to only include our supported currencies
        const filteredRates: ExchangeRates = {}
        CURRENCIES.forEach(currency => {
          if (data.conversion_rates[currency.code] !== undefined) {
            filteredRates[currency.code] = data.conversion_rates[currency.code]
          }
        })

        setExchangeRates(filteredRates)
      } else {
        throw new Error(data.error || 'Failed to fetch exchange rates')
      }
    } catch (err) {
      console.error('Error fetching exchange rates:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch exchange rates')
    } finally {
      setLoading(false)
    }
  }

  // Convert price from one currency to another
  const convertPrice = (price: number, fromCurrency: string, toCurrency?: string): number => {
    if (!exchangeRates) return price

    const targetCurrency = toCurrency || currentCurrency

    if (fromCurrency === targetCurrency) return price

    // Convert to USD first (as base), then to target currency
    const priceInUSD = fromCurrency === 'USD' ? price : price / exchangeRates[fromCurrency]
    const convertedPrice = targetCurrency === 'USD' ? priceInUSD : priceInUSD * exchangeRates[targetCurrency]

    return convertedPrice
  }

  // Format price with currency symbol
  const formatPrice = (price: number, currency?: string): string => {
    const currencyCode = currency || currentCurrency
    const currencyObj = CURRENCIES.find(c => c.code === currencyCode)

    if (!currencyObj) return `${price.toFixed(2)} ${currencyCode}`

    // Format based on currency
    const formattedPrice = price.toLocaleString('es-AR', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: currencyCode === 'PYG' ? 0 : 2,
      maximumFractionDigits: currencyCode === 'PYG' ? 0 : 2
    })

    return formattedPrice
  }

  // Fetch rates on mount and when base currency changes
  useEffect(() => {
    fetchExchangeRates(DEFAULT_CURRENCY)
  }, [])

  // Update rates when current currency changes (optional - could be expensive)
  // useEffect(() => {
  //   if (currentCurrency !== DEFAULT_CURRENCY) {
  //     fetchExchangeRates(currentCurrency)
  //   }
  // }, [currentCurrency])

  const value: CurrencyContextType = {
    currentCurrency,
    setCurrentCurrency,
    currencies: CURRENCIES,
    exchangeRates,
    loading,
    error,
    convertPrice,
    formatPrice
  }

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider')
  }
  return context
}

export default CurrencyContext
