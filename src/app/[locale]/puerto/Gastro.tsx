'use client'
import RestaurantCard from '../components/RestaurantCard'
import dataPreview from '../../../../messages/en/dataPreview.json'

interface Restaurant {
  name: string
  image: string
  description: string
  price: {
    value: number
    currency: string
    notes?: string
  }
  cuisine: string
  location: string | string[]
  rating: number
}

export default function Gastro() {
  const restaurants = Object.values(dataPreview.puerto.gastronomia) as Restaurant[]
  const cityColor = 'from-blue-600 to-blue-800'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 lg:p-6">
      {/* Título de la sección */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Gastronomía en Puerto Iguazú
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Disfruta de la exquisita cocina argentina y sus sabores únicos
        </p>
      </div>

      {/* Grid de restaurantes */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            name={restaurant.name}
            image={restaurant.image}
            description={restaurant.description}
            price={restaurant.price}
            cuisine={restaurant.cuisine}
            location={restaurant.location}
            rating={restaurant.rating}
            cityColor={cityColor}
          />
        ))}
      </div>
    </div>
  )
}
