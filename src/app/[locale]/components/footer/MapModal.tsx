'use client'
import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow
} from '@vis.gl/react-google-maps';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Place {
  id: string;
  displayName: string;
  location: google.maps.LatLngLiteral;
  address: string;
  rating?: number;
  priceLevel?: string;
  types?: string[];
  photos?: any[];
  businessStatus?: string;
  openingHours?: any;
}

export default function MapModal({ isOpen, onClose }: MapModalProps) {
  const t = useTranslations('MapModal');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [mapCenter, setMapCenter] = useState<google.maps.LatLngLiteral>({
    lat: -25.5167, // Centro aproximado entre Foz y Puerto Iguazú
    lng: -54.5833
  });
  const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral | null>(null);
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  const [showDirections, setShowDirections] = useState(false);

  const mapRef = useRef<google.maps.Map | null>(null);
  const directionsServiceRef = useRef<google.maps.DirectionsService | null>(null);
  const directionsRendererRef = useRef<google.maps.DirectionsRenderer | null>(null);

  // Lugares de interés predefinidos en la zona
  const predefinedPlaces: Place[] = [
    {
      id: 'cataratas-arg',
      displayName: 'Cataratas del Iguazú (Argentina)',
      location: { lat: -25.6953, lng: -54.4367 },
      address: 'Puerto Iguazú, Misiones, Argentina',
      rating: 4.8,
      types: ['tourist_attraction', 'natural_feature']
    },
    {
      id: 'cataratas-bra',
      displayName: 'Cataratas do Iguaçu (Brasil)',
      location: { lat: -25.6867, lng: -54.4444 },
      address: 'Foz do Iguaçu, Paraná, Brasil',
      rating: 4.8,
      types: ['tourist_attraction', 'natural_feature']
    },
    {
      id: 'centro-foz',
      displayName: 'Centro de Foz do Iguaçu',
      location: { lat: -25.5167, lng: -54.5833 },
      address: 'Centro, Foz do Iguaçu, Paraná, Brasil',
      types: ['locality', 'political']
    },
    {
      id: 'centro-puerto',
      displayName: 'Centro de Puerto Iguazú',
      location: { lat: -25.5991, lng: -54.5735 },
      address: 'Centro, Puerto Iguazú, Misiones, Argentina',
      types: ['locality', 'political']
    }
  ];

  const handlePlaceSelect = useCallback(async (place: google.maps.places.PlaceResult) => {
    if (!place.geometry?.location) return;

    const location = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng()
    };

    // Obtener detalles completos del lugar
    const placesService = new google.maps.places.PlacesService(document.createElement('div'));
    const request = {
      placeId: place.place_id!,
      fields: ['name', 'formatted_address', 'rating', 'price_level', 'types', 'photos', 'business_status', 'opening_hours']
    };

    placesService.getDetails(request, (result, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && result) {
        const placeDetails: Place = {
          id: place.place_id!,
          displayName: result.name || place.name!,
          location,
          address: result.formatted_address || place.formatted_address!,
          rating: result.rating,
          priceLevel: result.price_level ? '$'.repeat(result.price_level) : undefined,
          types: result.types,
          photos: result.photos,
          businessStatus: result.business_status,
          openingHours: result.opening_hours
        };

        setSelectedPlace(placeDetails);
        setMapCenter(location);
        setShowDirections(false);
      }
    });
  }, []);

  const getDirections = useCallback(async (destination: google.maps.LatLngLiteral) => {
    if (!userLocation) {
      // Intentar obtener ubicación del usuario
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userPos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            setUserLocation(userPos);
            calculateDirections(userPos, destination);
          },
          () => {
            alert(t('location-error'));
          }
        );
      } else {
        alert(t('geolocation-not-supported'));
      }
      return;
    }

    calculateDirections(userLocation, destination);
  }, [userLocation, t]);

  const calculateDirections = (origin: google.maps.LatLngLiteral, destination: google.maps.LatLngLiteral) => {
    if (!directionsServiceRef.current) {
      directionsServiceRef.current = new google.maps.DirectionsService();
    }
    if (!directionsRendererRef.current) {
      directionsRendererRef.current = new google.maps.DirectionsRenderer();
      if (mapRef.current) {
        directionsRendererRef.current.setMap(mapRef.current);
      }
    }

    const request: google.maps.DirectionsRequest = {
      origin,
      destination,
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC
    };

    directionsServiceRef.current.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK && result) {
        directionsRendererRef.current?.setDirections(result);
        setDirections(result);
        setShowDirections(true);
      } else {
        alert(t('directions-error'));
      }
    });
  };

  const clearDirections = () => {
    if (directionsRendererRef.current) {
      directionsRendererRef.current.setDirections(null);
    }
    setDirections(null);
    setShowDirections(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-6xl h-[90vh] overflow-hidden">
        <div className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {t('title')}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Cerrar"
            >
              <svg className='stroke-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              placeholder={t('search-placeholder')}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iguazu-teal focus:border-transparent"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  // Simple search implementation - in a real app you'd want proper autocomplete
                  const query = (e.target as HTMLInputElement).value;
                  if (query.trim()) {
                    // For now, just search for predefined places or show alert
                    const foundPlace = predefinedPlaces.find(place =>
                      place.displayName.toLowerCase().includes(query.toLowerCase())
                    );
                    if (foundPlace) {
                      setSelectedPlace(foundPlace);
                      setMapCenter(foundPlace.location);
                    } else {
                      alert(t('place-not-found'));
                    }
                  }
                }
              }}
            />
          </div>

          {/* Map Container */}
          <div className="flex-1 relative rounded-lg overflow-hidden">
            <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
              <Map
                mapId="iguazu-map"
                defaultCenter={mapCenter}
                defaultZoom={12}
                gestureHandling="greedy"
                disableDefaultUI={false}
                className="w-full h-full"
              >
                {/* Predefined Places Markers */}
                {predefinedPlaces.map((place) => (
                  <AdvancedMarker
                    key={place.id}
                    position={place.location}
                    onClick={() => setSelectedPlace(place)}
                  >
                    <Pin
                      background="#0ea5e9"
                      borderColor="#0284c7"
                      glyphColor="#ffffff"
                    />
                  </AdvancedMarker>
                ))}

                {/* Selected Place Marker */}
                {selectedPlace && (
                  <AdvancedMarker
                    position={selectedPlace.location}
                    onClick={() => setSelectedPlace(selectedPlace)}
                  >
                    <Pin
                      background="#ef4444"
                      borderColor="#dc2626"
                      glyphColor="#ffffff"
                    />
                  </AdvancedMarker>
                )}

                {/* Info Window for Selected Place */}
                {selectedPlace && (
                  <InfoWindow
                    position={selectedPlace.location}
                    onCloseClick={() => setSelectedPlace(null)}
                  >
                    <div className="p-4 max-w-sm">
                      <h3 className="font-bold text-lg mb-2">{selectedPlace.displayName}</h3>
                      <p className="text-sm text-gray-600 mb-2">{selectedPlace.address}</p>

                      {selectedPlace.rating && (
                        <div className="flex items-center mb-2">
                          <span className="text-yellow-500 mr-1">⭐</span>
                          <span className="text-sm">{selectedPlace.rating}/5</span>
                          {selectedPlace.priceLevel && (
                            <span className="text-sm text-gray-500 ml-2">{selectedPlace.priceLevel}</span>
                          )}
                        </div>
                      )}

                      {selectedPlace.businessStatus && (
                        <p className="text-sm text-gray-600 mb-2">
                          {selectedPlace.businessStatus === 'OPERATIONAL' ? t('open') : t('closed')}
                        </p>
                      )}

                      <div className="flex gap-2 mt-3">
                        <button
                          onClick={() => getDirections(selectedPlace.location)}
                          className="px-3 py-1 bg-iguazu-teal text-white text-sm rounded hover:bg-iguazu-dark transition-colors"
                        >
                          {t('get-directions')}
                        </button>
                        {showDirections && (
                          <button
                            onClick={clearDirections}
                            className="px-3 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600 transition-colors"
                          >
                            {t('clear-directions')}
                          </button>
                        )}
                      </div>
                    </div>
                  </InfoWindow>
                )}
              </Map>
            </APIProvider>
          </div>

          {/* Directions Panel */}
          {showDirections && directions && (
            <div className="mt-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg max-h-40 overflow-y-auto">
              <h4 className="font-semibold mb-2">{t('directions')}</h4>
              <div className="text-sm space-y-1">
                {directions.routes[0]?.legs[0]?.steps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <span className="font-mono text-xs bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded mr-2 mt-0.5">
                      {index + 1}
                    </span>
                    <div dangerouslySetInnerHTML={{ __html: step.instructions }} />
                    <span className="text-gray-500 ml-2">({step.distance?.text})</span>
                  </div>
                ))}
              </div>
              <div className="mt-2 pt-2 border-t border-gray-300 dark:border-gray-600">
                <p className="text-sm font-semibold">
                  {t('total-distance')}: {directions.routes[0]?.legs[0]?.distance?.text}
                </p>
                <p className="text-sm font-semibold">
                  {t('estimated-time')}: {directions.routes[0]?.legs[0]?.duration?.text}
                </p>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-500 text-center">
              {t('powered-by-google')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
