'use client'

import monedas from '../header/monedas.json'
import { useCurrencyContext } from '../../../../context/CurrencyContext'

export default function CurrencySwitcher() {
  const { selectedCurrency, setSelectedCurrency } = useCurrencyContext()

  // Convertimos el objeto JSON en un array de opciones
  const opciones = Object.entries(monedas).map(([pais, data]) => {
    const key = Object.keys(data)[0] as keyof typeof data
    return {
      nombre: key,
      valor: data[key],
      codPais: data['cod_pais']
    }
  })
  
  return (
    <div className="relative">
      <label>
        <select 
          className="w-full appearance-none bg-transparent py-2 px-4 text-gray-400"
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
        >
          {opciones.map((opcion, index) => (
            <option 
              key={index}
              value={opcion.valor}
            >
              {opcion.codPais} {opcion.nombre} 
            </option>
          ))}
        </select>
        <span className="absolute right-2 top-2.5 text-gray-400">▼</span>
      </label>
    </div>
  )
}