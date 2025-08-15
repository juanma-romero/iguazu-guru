'use client'
import AttractionCard from '../components/AttractionCard'
import dataPreview from '../../../../messages/en/dataPreview.json'

interface Attraction {
  name: string
  image: string
  description: string
  price: {
    value: number
    Mercosur?: number
    currency: string
    notes?: string
  }
  openingHours: string
  location: string
  rating: number
}

export default function AdondeIr() {
  const attractions = Object.values(dataPreview.cde.dondeIr) as Attraction[]
  const cityColor = 'from-red-600 to-red-800'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 lg:p-6">
      {/* Título de la sección */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Atracciones en Ciudad del Este
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Descubre las joyas del lado paraguayo
        </p>
      </div>

      {/* Grid de atracciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {attractions.map((attraction, index) => (
          <AttractionCard
            key={index}
            name={attraction.name}
            image={attraction.image}
            description={attraction.description}
            price={attraction.price}
            openingHours={attraction.openingHours}
            location={attraction.location}
            rating={attraction.rating}
            cityColor={cityColor}
          />
        ))}
      </div>
    </div>
  )
}
