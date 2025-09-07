'use client'
import { useState } from 'react';
import PriceDisplay from './PriceDisplay';
import ContactInfo from './ContactInfo';
import ScheduleDisplay from './ScheduleDisplay';


const TrailCard = ({ trail, onClose }) => {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 rounded">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-800">{trail.nombre_atraccion}</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 text-xl"
        >
          ×
        </button>
      </div>
      <p className="text-gray-600 mb-3">{trail.descripcion_corta}</p>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">📍 Ubicación</h4>
          <p className="text-sm text-gray-600">{trail.ubicacion}</p>
          <p className="text-xs text-gray-500">
            Lat: {trail.latitud}, Lon: {trail.longitud}
          </p>
        </div>

        <ScheduleDisplay horarios={trail.horarios} />
      </div>

      <PriceDisplay precios={trail.precios} />

      {trail.tips && (
        <div className="mt-4">
          <h4 className="font-semibold text-gray-700 mb-2">💡 Consejos</h4>
          <p className="text-sm text-gray-600 bg-white p-3 rounded">{trail.tips}</p>
        </div>
      )}
    </div>
  );
};

const AttractionCard = ({ attraction }) => {
  const [expandedTrail, setExpandedTrail] = useState(null);

  const formatCurrency = (value, currency) => {
    if (!value || !currency) return 'N/A';
    if (currency === 'ARS') {
      return `$${value.toLocaleString('es-AR')}`;
    } else if (currency === 'BRL') {
      return `R$ ${value.toLocaleString('pt-BR')}`;
    }
    return `${currency} ${value}`;
  };

  const getDaysText = (days) => {
    const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    if (days.length === 7) return 'Todos los días';
    return days.map(day => dayNames[day]).join(', ');
  };

  return (
    <div className="attraction-card-container">
      
      <div className="bg-blue-200 rounded-lg shadow-lg p-6 mb-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">{attraction.nombre_atraccion}</h2>
        <p className="text-gray-600 mb-4">{attraction.descripcion_corta}</p>
    
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">📍 Ubicación</h3>
          <p className="text-sm text-gray-600">{attraction.ubicacion}</p>
          <p className="text-xs text-gray-500">
            Lat: {attraction.latitud}, Lon: {attraction.longitud}
          </p>
        </div>

        <ScheduleDisplay horarios={attraction.horarios} />
      </div>

      <PriceDisplay precios={attraction.precios} />

      <ContactInfo contacto={attraction.contacto} />

      {attraction.tips && (
        <div className="mt-4">
          <h3 className="font-semibold text-gray-700 mb-2">💡 Consejos</h3>
          <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded">{attraction.tips}</p>
        </div>
      )}

      {attraction.como_llegar && (
        <div className="mt-4">
          <h3 className="font-semibold text-gray-700 mb-2">🚗 Cómo Llegar</h3>
          <p className="text-sm text-gray-600 bg-green-50 p-3 rounded">{attraction.como_llegar}</p>
        </div>
      )}

      {attraction.web_oficial_tickets && (
        <div className="mt-4">
          <a
            href={attraction.web_oficial_tickets}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200"
          >
            🏷️ Comprar Tickets
          </a>
        </div>
      )}

      {attraction.paseos && attraction.paseos.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">🚶 Paseos Disponibles</h3>
          <div className="space-y-2">
            {attraction.paseos.map((paseo, index) => (
              <button
                key={index}
                onClick={() => setExpandedTrail(expandedTrail === index ? null : index)}
                className="w-full text-left bg-gray-50 hover:bg-gray-100 p-3 rounded border border-gray-200 transition-colors duration-200"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">{paseo.nombre_atraccion}</span>
                  <span className="text-gray-500">
                    {expandedTrail === index ? '−' : '+'}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {expandedTrail !== null && (
            <TrailCard
              trail={attraction.paseos[expandedTrail]}
              onClose={() => setExpandedTrail(null)}
            />
          )}
        </div>
      )}
      </div>
    </div> )
};

export default AttractionCard;
