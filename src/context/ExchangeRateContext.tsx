'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ReactNode } from 'react';

// Definir la interfaz para los datos de tasas de cambio
interface ExchangeRateData {
  result: string;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: string;
  conversion_rates: {
    [currencyCode: string]: number;
  };
}

// Crear el contexto con un tipo apropiado (ExchangeRateData o null)
const ExchangeRateContext = createContext<ExchangeRateData | null>(null);

interface ExchangeRateProviderProps {
  children: ReactNode;
}

export const ExchangeRateProvider = ({ children }: ExchangeRateProviderProps) => {
  const [exchangeRate, setExchangeRate] = useState<ExchangeRateData | null>(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.NEXT_PUBLIC_API_EXCHANGE_RATE_KEY}/latest/BRL`);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json: ExchangeRateData = await response.json();
        setExchangeRate(json);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };

    fetchExchangeRate();
  }, []);

  return (
    <ExchangeRateContext.Provider value={exchangeRate}>
      {children}
    </ExchangeRateContext.Provider>
  );
};

export const useExchangeRate = () => useContext(ExchangeRateContext);