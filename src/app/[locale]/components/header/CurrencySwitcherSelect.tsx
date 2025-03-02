'use client'

import monedas from '../header/monedas.json'
import { useCurrencyContext } from '../../../../context/CurrencyContext'

export default function CurrencySwitcher() {
  const { selectedCurrency, setSelectedCurrency } = useCurrencyContext()

  const opciones = Object.entries(monedas).map(([pais, data]) => {
    const key = Object.keys(data)[0] as keyof typeof data
    pais= pais
    return {
      nombre: key,
      valor: data[key],
      codPais: data['cod_pais']
    }
  })
  
  return (
    <div className="relative inline-block w-full">
      <style jsx global>{`
        .currency-select-wrapper {
          position: relative;
          cursor: pointer;
        }
        
        .currency-select {
          appearance: none;
          width: 100%;
          background-color: transparent;
          padding: 8px 24px 8px 8px;
          cursor: pointer;
          color: #9ca3af; /* text-gray-400 */
        }
        
        .dropdown-arrow {
          position: absolute;
          right: 7px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: #9ca3af; /* text-gray-400 */
        }
        
        /* Flag classes */
        .flag-br, .flag-py, .flag-ar, .flag-uy, .flag-co, .flag-cl, .flag-eu, .flag-pe, .flag-us {
          background-size: 1rem;
          background-repeat: no-repeat;
          background-position: left center;
          padding-left: 1.5rem;
        }
        
        .flag-br { background-image: url('/paises/br.svg'); }
        .flag-py { background-image: url('/paises/py.svg'); }
        .flag-ar { background-image: url('/paises/ar.svg'); }
        .flag-uy { background-image: url('/paises/uy.svg'); }
        .flag-co { background-image: url('/paises/co.svg'); }
        .flag-cl { background-image: url('/paises/cl.svg'); }
        .flag-eu { background-image: url('/paises/eu.svg'); }
        .flag-pe { background-image: url('/paises/pe.svg'); }
        .flag-us { background-image: url('/paises/us.svg'); }
      `}</style>
      
      <div className="currency-select-wrapper">
      <span className="dropdown-arrow">▼</span>
        <select 
          className="currency-select text-right" 
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
        >
          {opciones.map((opcion, index) => (
            <option 
              key={index}
              value={opcion.valor}
              className={`flag-${opcion.codPais}`}
            >
              {opcion.nombre} 
            </option>
          ))}
        </select>
        
      </div>
    </div>
  )
}