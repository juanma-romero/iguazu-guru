'use client'
import HotelCard from '../components/HotelCard'
import dataPreview from '../../../../messages/en/dataPreview.json'

interface Hotel {
  name: string
  image: string
  description: string
  price: {
    value: number
    currency: string
    notes?: string
  }
  amenities: string[]
  location: string
  rating: number
}

export default function Alojamiento() {
  const hotels = Object.values(dataPreview.foz.alojamiento) as Hotel[]
  const cityColor = 'from-green-600 to-green-800'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 lg:p-6">
      {/* Título de la sección */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Hoteles en Foz do Iguaçu
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Los mejores alojamientos para tu estadía en el lado brasileño
        </p>
      </div>

      {/* Grid de hoteles */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {hotels.map((hotel, index) => (
          <HotelCard
            key={index}
            name={hotel.name}
            image={hotel.image}
            description={hotel.description}
            price={hotel.price}
            amenities={hotel.amenities}
            location={hotel.location}
            rating={hotel.rating}
            cityColor={cityColor}
          />
        ))}
      </div>
    </div>
  )
}
