'use client'

import monedas from '../header/monedas.json'
import { useCurrencyContext } from '../../../../context/CurrencyContext'

export default function CurrencySwitcher() {
  const { selectedCurrency, setSelectedCurrency } = useCurrencyContext()

  // Convertimos el objeto JSON en un array de opciones
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
    <div className="relative">
      <style jsx global>{`
        .select-option {
          display: flex;
          align-items: center;
          padding: 8px;
        }
        .flag-br {
          background-image: url('/paises/br.svg');
          background-size: 1rem;
          background-repeat: no-repeat;
          background-position: left center;
          padding-left: 1.5rem;
        }
        .flag-py {
          background-image: url('/paises/py.svg');
          background-size: 1rem;
          background-repeat: no-repeat;
          background-position: left center;
          padding-left: 1.5rem;
        }
        .flag-ar {
          background-image: url('/paises/ar.svg');
          background-size: 1rem;
          background-repeat: no-repeat;
          background-position: left center;
          padding-left: 1.5rem;
        }
        .flag-uy {
          background-image: url('/paises/uy.svg');
          background-size: 1rem;
          background-repeat: no-repeat;
          background-position: left center;
          padding-left: 1.5rem;
        }
        .flag-co {
          background-image: url('/paises/co.svg');
          background-size: 1rem;
          background-repeat: no-repeat;
          background-position: left center;
          padding-left: 1.5rem;
        }
        .flag-cl {
          background-image: url('/paises/cl.svg');
          background-size: 1rem;
          background-repeat: no-repeat;
          background-position: left center;
          padding-left: 1.5rem;
        }
        .flag-eu {
          background-image: url('/paises/eu.svg');
          background-size: 1rem;
          background-repeat: no-repeat;
          background-position: left center;
          padding-left: 1.5rem;
        }
        .flag-pe {
          background-image: url('/paises/pe.svg');
          background-size: 1rem;
          background-repeat: no-repeat;
          background-position: left center;
          padding-left: 1.5rem;
        }
        .flag-us{
          background-image: url('/paises/us.svg');
          background-size: 1rem;
          background-repeat: no-repeat;
          background-position: left center;
          padding-left: 1.5rem;
        }
      `}</style>
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
              className={`select-option flag-${opcion.codPais}`}
            >
              {opcion.nombre} 
            </option>
          ))}
        </select>
        <span className="absolute right-2 top-2.5 text-gray-400">▼</span>
      </label>
    </div>
  )
}