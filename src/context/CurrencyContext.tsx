'use client'

import { createContext, useContext, useReducer } from 'react'

// Definir tipos
type CurrencyContextType = {
  selectedCurrency: string;
  setSelectedCurrency: (currency: string) => void  
}

type CurrencyAction = {
  type: 'CHANGE_CURRENCY';
  payload: string;
}

// Estado inicial
const initialState: string = 'BRL'

// Reducer
const currencyReducer = (state: string, action: CurrencyAction) => {
  switch (action.type) {
    case 'CHANGE_CURRENCY':
      return action.payload;
    default:
      return state;
  }
}

// Crear contexto
const CurrencyContext = createContext<CurrencyContextType>({} as CurrencyContextType)

// Proveedor del contexto
export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [selectedCurrency, dispatch] = useReducer(currencyReducer, initialState)

  const setSelectedCurrency = (currency: string) => {
    dispatch({ type: 'CHANGE_CURRENCY', payload: currency })
  }

  return (
    <CurrencyContext.Provider
      value={{
        selectedCurrency,
        setSelectedCurrency,
        
      }}
    >
      {children}
    </CurrencyContext.Provider>
  )
}

// Custom hook para usar el contexto
export function useCurrencyContext() {
  return useContext(CurrencyContext)
}