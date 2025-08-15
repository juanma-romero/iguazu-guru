'use client'
import Image from 'next/image'
import { FaStar, FaMapMarkerAlt, FaWifi, FaSwimmingPool, FaDumbbell, FaSpa, FaUtensils, FaParking } from 'react-icons/fa'

interface HotelCardProps {
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
  cityColor: string
}

const amenityIcons: { [key: string]: React.ReactNode } = {
  'Gym': <FaDumbbell className="w-4 h-4" />,
  'Pool': <FaSwimmingPool className="w-4 h-4" />,
  'Spa': <FaSpa className="w-4 h-4" />,
  'Wi-Fi': <FaWifi className="w-4 h-4" />,
  'Restaurant': <FaUtensils className="w-4 h-4" />,
  'Parking': <FaParking className="w-4 h-4" />,
  'Infinity pool': <FaSwimmingPool className="w-4 h-4" />,
  'Gourmet restaurant': <FaUtensils className="w-4 h-4" />,
  'Buffet Breakfast': <FaUtensils className="w-4 h-4" />,
  'VIP access to the falls': <FaStar className="w-4 h-4" />
}

export default function HotelCard({
  name,
  image,
  description,
  price,
  amenities,
  location,
  rating,
  cityColor
}: HotelCardProps) {
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

        {/* Ubicación */}
        <div className="flex items-start text-gray-400 text-sm mb-4">
          <FaMapMarkerAlt className="w-4 h-4 mr-2 text-yellow-600 flex-shrink-0 mt-0.5" />
          <span className="line-clamp-2">{location}</span>
        </div>

        {/* Amenidades */}
        <div className="mb-4">
          <h4 className="text-white text-sm font-semibold mb-2">Amenidades:</h4>
          <div className="flex flex-wrap gap-2">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-full px-3 py-1 text-xs text-gray-300 flex items-center gap-1"
              >
                {amenityIcons[amenity] || <FaStar className="w-3 h-3" />}
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Precio */}
        <div className="bg-gray-700 rounded-lg p-3 mb-4">
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-bold text-yellow-600">
              {price.currency} {price.value.toLocaleString()}
            </span>
          </div>
          {price.notes && (
            <p className="text-xs text-gray-400 mt-1">{price.notes}</p>
          )}
        </div>

        {/* Botón */}
        <button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-2.5 px-4 rounded-lg text-sm font-semibold hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 transform hover:scale-105">
          Reservar ahora
        </button>
      </div>
    </div>
  )
}
