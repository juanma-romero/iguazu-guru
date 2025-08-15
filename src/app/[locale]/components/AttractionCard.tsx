'use client'
import Image from 'next/image'
import { FaStar, FaClock, FaMapMarkerAlt } from 'react-icons/fa'

interface AttractionCardProps {
  name: string
  image: string
  description: string
  price: {
    value: number
    residents?: number
    Mercosur?: number
    currency: string
    notes?: string
  }
  openingHours?: string
  location: string
  rating: number
  cityColor: string
}

export default function AttractionCard({
  name,
  image,
  description,
  price,
  openingHours,
  location,
  rating,
  cityColor
}: AttractionCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
      {/* Header de la tarjeta */}
      <div className={`bg-gradient-to-r ${cityColor} p-4 text-white`}>
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`}
            />
          ))}
          <span className="text-sm ml-2">({rating}/5)</span>
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

        {/* Información adicional */}
        <div className="space-y-2 mb-4">
          {openingHours && (
            <div className="flex items-center text-gray-400 text-sm">
              <FaClock className="w-4 h-4 mr-2 text-yellow-600" />
              <span>{openingHours}</span>
            </div>
          )}
          <div className="flex items-center text-gray-400 text-sm">
            <FaMapMarkerAlt className="w-4 h-4 mr-2 text-yellow-600" />
            <span>{location}</span>
          </div>
        </div>

        {/* Precio */}
        <div className="bg-gray-700 rounded-lg p-3 mb-4">
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-bold text-yellow-600">
              {price.currency} {price.value.toLocaleString()}
            </span>
            {price.residents && (
              <span className="text-sm text-gray-400">
                Residentes: {price.currency} {price.residents.toLocaleString()}
              </span>
            )}
            {price.Mercosur && (
              <span className="text-sm text-gray-400">
                Mercosur: {price.currency} {price.Mercosur.toLocaleString()}
              </span>
            )}
          </div>
          {price.notes && (
            <p className="text-xs text-gray-400 mt-1">{price.notes}</p>
          )}
        </div>

        {/* Botón */}
        <button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-2.5 px-4 rounded-lg text-sm font-semibold hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 transform hover:scale-105">
          Ver más detalles
        </button>
      </div>
    </div>
  )
}
