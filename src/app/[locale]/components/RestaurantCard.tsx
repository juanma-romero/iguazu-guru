'use client'
import Image from 'next/image'
import { FaStar, FaMapMarkerAlt, FaUtensils, FaDollarSign } from 'react-icons/fa'

interface RestaurantCardProps {
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
  cityColor: string
}

export default function RestaurantCard({
  name,
  image,
  description,
  price,
  cuisine,
  location,
  rating,
  cityColor
}: RestaurantCardProps) {
  const locations = Array.isArray(location) ? location : [location]
  
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
      {/* Header de la tarjeta */}
      <div className={`bg-gradient-to-r ${cityColor} p-4 text-white`}>
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-400'}`}
            />
          ))}
          <span className="text-sm ml-2">({rating})</span>
        </div>
      </div>

      {/* Imagen */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          fill
          alt={name}
          className="object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Contenido */}
      <div className="p-5">
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">{description}</p>

        {/* Tipo de cocina */}
        <div className="flex items-center text-gray-400 text-sm mb-3">
          <FaUtensils className="w-4 h-4 mr-2 text-yellow-600" />
          <span className="font-medium">{cuisine}</span>
        </div>

        {/* Ubicación */}
        <div className="mb-4">
          {locations.map((loc, index) => (
            <div key={index} className="flex items-start text-gray-400 text-sm mb-1">
              <FaMapMarkerAlt className="w-4 h-4 mr-2 text-yellow-600 flex-shrink-0 mt-0.5" />
              <span className="line-clamp-2">{loc}</span>
            </div>
          ))}
        </div>

        {/* Precio */}
        <div className="bg-gray-700 rounded-lg p-3 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-yellow-600">
                {price.currency} {price.value.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center text-gray-400">
              {[...Array(4)].map((_, i) => (
                <FaDollarSign
                  key={i}
                  className={`w-3 h-3 ${i < Math.ceil(price.value / 50000) ? 'text-yellow-600' : 'text-gray-600'}`}
                />
              ))}
            </div>
          </div>
          {price.notes && (
            <p className="text-xs text-gray-400 mt-1">{price.notes}</p>
          )}
        </div>

        {/* Botón */}
        <button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-2.5 px-4 rounded-lg text-sm font-semibold hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 transform hover:scale-105">
          Ver menú y reservar
        </button>
      </div>
    </div>
  )
}
