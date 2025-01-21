'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

const ExchangeRateContext = createContext(null);

import { ReactNode } from 'react';

interface ExchangeRateProviderProps {
  children: ReactNode;
}

export const ExchangeRateProvider = ({ children }: ExchangeRateProviderProps) => {
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.NEXT_PUBLIC_API_EXCHANGE_RATE_KEY}/latest/BRL`);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
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