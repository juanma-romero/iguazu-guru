'use client'
import { useState, useCallback, useRef, useEffect } from 'react';
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
  reviews?: any[];
  website?: string;
  phoneNumber?: string;
  userRatingsTotal?: number;
  vicinity?: string;
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
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchResults, setSearchResults] = useState<Place[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [autocompletePredictions, setAutocompletePredictions] = useState<google.maps.places.AutocompleteSuggestion[]>([]);
  const [showAutocomplete, setShowAutocomplete] = useState<boolean>(false);

  const mapRef = useRef<google.maps.Map | null>(null);
  const directionsServiceRef = useRef<google.maps.DirectionsService | null>(null);
  const directionsRendererRef = useRef<google.maps.DirectionsRenderer | null>(null);
  const autocompleteRef = useRef<HTMLInputElement>(null);

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
      fields: [
        'name',
        'formatted_address',
        'rating',
        'price_level',
        'types',
        'photos',
        'business_status',
        'opening_hours',
        'reviews',
        'website',
        'formatted_phone_number',
        'user_ratings_total'
      ]
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
          openingHours: result.opening_hours,
          reviews: result.reviews,
          website: result.website,
          phoneNumber: result.formatted_phone_number,
          userRatingsTotal: result.user_ratings_total
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



  // Handle search input changes
  const handleSearchInput = useCallback(async (value: string) => {
    setSearchQuery(value);

    if (value.length > 2) {
      try {
        const request: google.maps.places.AutocompleteRequest = {
          input: value,
          locationBias: {
            center: { lat: mapCenter.lat, lng: mapCenter.lng },
            radius: 30000 // 30km radius
          },
          includedPrimaryTypes: ['establishment'],
          includedRegionCodes: ['AR', 'BR', 'PY']
        };

        const response = await google.maps.places.AutocompleteSuggestion.fetchAutocompleteSuggestions(request);

        if (response.suggestions && response.suggestions.length > 0) {
          setAutocompletePredictions(response.suggestions);
          setShowAutocomplete(true);
        } else {
          setAutocompletePredictions([]);
          setShowAutocomplete(false);
        }
      } catch (error) {
        console.error('Error fetching autocomplete suggestions:', error);
        setAutocompletePredictions([]);
        setShowAutocomplete(false);
      }
    } else {
      setAutocompletePredictions([]);
      setShowAutocomplete(false);
    }
  }, [mapCenter]);

  // Handle place selection from autocomplete
  const handleAutocompleteSelect = useCallback(async (suggestion: google.maps.places.AutocompleteSuggestion) => {
    if (!suggestion.placePrediction) return;

    try {
      const place = await suggestion.placePrediction.toPlace();
      await place.fetchFields({
        fields: [
          'id',
          'displayName',
          'formattedAddress',
          'location',
          'rating',
          'priceLevel',
          'types',
          'photos',
          'businessStatus',
          'regularOpeningHours',
          'reviews',
          'websiteURI',
          'nationalPhoneNumber',
          'userRatingCount'
        ]
      });

      if (!place.location) return;

      const location = {
        lat: place.location.lat(),
        lng: place.location.lng()
      };

      const placeDetails: Place = {
        id: place.id || '',
        displayName: place.displayName || suggestion.placePrediction.text?.text || '',
        location,
        address: place.formattedAddress || suggestion.placePrediction.text?.text || '',
        rating: place.rating || undefined,
        priceLevel: place.priceLevel ? '$'.repeat(Number(place.priceLevel)) : undefined,
        types: place.types || undefined,
        photos: place.photos || undefined,
        businessStatus: place.businessStatus || undefined,
        openingHours: place.regularOpeningHours || undefined,
        reviews: place.reviews || undefined,
        website: place.websiteURI || undefined,
        phoneNumber: place.nationalPhoneNumber || undefined,
        userRatingsTotal: place.userRatingCount || undefined
      };



      setSelectedPlace(placeDetails);
      setMapCenter(location);
      setSearchQuery(place.displayName || suggestion.placePrediction.text?.text || '');
      setShowAutocomplete(false);
      setShowDirections(false);
    } catch (error) {
      console.error('Error fetching place details:', error);
    }
  }, []);

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

          {/* Search Bar with Autocomplete */}
          <div className="mb-4 relative">
            <input
              ref={autocompleteRef}
              type="text"
              value={searchQuery}
              placeholder={t('search-placeholder')}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iguazu-teal focus:border-transparent"
              onChange={(e) => handleSearchInput(e.target.value)}
              onFocus={() => {
                if (autocompletePredictions.length > 0) {
                  setShowAutocomplete(true);
                }
              }}
              onBlur={() => {
                // Delay hiding to allow click on suggestions
                setTimeout(() => setShowAutocomplete(false), 200);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && searchQuery.trim()) {
                  // If no autocomplete suggestions, search for predefined places
                  const foundPlace = predefinedPlaces.find(place =>
                    place.displayName.toLowerCase().includes(searchQuery.toLowerCase())
                  );
                  if (foundPlace) {
                    setSelectedPlace(foundPlace);
                    setMapCenter(foundPlace.location);
                    setShowAutocomplete(false);
                  } else {
                    alert(t('place-not-found'));
                  }
                } else if (e.key === 'Escape') {
                  setShowAutocomplete(false);
                }
              }}
            />

            {/* Autocomplete Dropdown */}
            {showAutocomplete && autocompletePredictions.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                {autocompletePredictions.map((suggestion, index) => (
                  <div
                    key={suggestion.placePrediction?.placeId || index}
                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                    onClick={() => handleAutocompleteSelect(suggestion)}
                  >
                    <div className="flex items-start">
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-sm">
                          {suggestion.placePrediction?.mainText?.text || suggestion.placePrediction?.text?.text || ''}
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          {suggestion.placePrediction?.secondaryText?.text || ''}
                        </div>
                      </div>
                      <div className="ml-2 text-xs text-gray-400">
                        📍
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Category Filters */}
          {/*
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  activeFilter === 'all'
                    ? 'bg-iguazu-teal text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setActiveFilter('restaurant')}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  activeFilter === 'restaurant'
                    ? 'bg-iguazu-teal text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                🍽️ Restaurantes
              </button>
              <button
                onClick={() => setActiveFilter('hotel')}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  activeFilter === 'hotel'
                    ? 'bg-iguazu-teal text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                🏨 Hoteles
              </button>
              <button
                onClick={() => setActiveFilter('tourist_attraction')}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  activeFilter === 'tourist_attraction'
                    ? 'bg-iguazu-teal text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                🎭 Atracciones
              </button>
              <button
                onClick={() => setActiveFilter('shopping')}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  activeFilter === 'shopping'
                    ? 'bg-iguazu-teal text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                🛍️ Compras
              </button>
              <button
                onClick={() => setActiveFilter('transport')}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  activeFilter === 'transport'
                    ? 'bg-iguazu-teal text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                🚗 Transporte
              </button>
            </div>
          </div>
            */}
          {/* Map Container */}
          <div className="flex-1 relative rounded-lg overflow-hidden">
            <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!} libraries={['places']}>
              <Map
                mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID}
                defaultCenter={mapCenter}
                zoom={14}
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

                {/* Enhanced Info Window for Selected Place */}
                {selectedPlace && (
                  <InfoWindow
                    position={selectedPlace.location}
                    onCloseClick={() => setSelectedPlace(null)}
                  >
                    <div className="p-4 max-w-sm bg-white rounded-lg shadow-lg">
                      {/* Photo Gallery */}
                      {selectedPlace.photos && selectedPlace.photos.length > 0 && selectedPlace.photos[0] && (
                        <div className="mb-3">
                          <img
                            src={`https://places.googleapis.com/v1/${selectedPlace.photos[0].name}/media?maxWidthPx=400&maxHeightPx=300&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
                            alt={selectedPlace.displayName}
                            className="w-full h-32 object-cover rounded-lg"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                      )}

                      {/* Place Name and Basic Info */}
                      <div className="mb-3">
                        <h3 className="font-bold text-lg text-gray-900 mb-1">{selectedPlace.displayName}</h3>
                        <p className="text-sm text-gray-600 mb-2">{selectedPlace.address}</p>

                        {/* Rating and Price */}
                        <div className="flex items-center justify-between mb-2">
                          {selectedPlace.rating && (
                            <div className="flex items-center">
                              <span className="text-yellow-500 mr-1">⭐</span>
                              <span className="text-sm font-medium">{selectedPlace.rating.toFixed(1)}</span>
                              {selectedPlace.userRatingsTotal && (
                                <span className="text-xs text-gray-500 ml-1">
                                  ({selectedPlace.userRatingsTotal})
                                </span>
                              )}
                            </div>
                          )}
                          {selectedPlace.priceLevel && (
                            <span className="text-sm text-gray-600">{selectedPlace.priceLevel}</span>
                          )}
                        </div>

                        {/* Business Status */}
                        {selectedPlace.businessStatus && (
                          <div className="mb-2">
                            <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                              selectedPlace.businessStatus === 'OPERATIONAL'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {selectedPlace.businessStatus === 'OPERATIONAL' ? 'Abierto' : 'Cerrado'}
                            </span>
                          </div>
                        )}

                        {/* Place Types */}
                        {selectedPlace.types && selectedPlace.types.length > 0 && (
                          <div className="mb-2">
                            <div className="flex flex-wrap gap-1">
                              {selectedPlace.types.slice(0, 3).map((type, index) => (
                                <span
                                  key={index}
                                  className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                                >
                                  {type.replace(/_/g, ' ')}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Contact Information */}
                      {(selectedPlace.phoneNumber || selectedPlace.website) && (
                        <div className="mb-3 space-y-1">
                          {selectedPlace.phoneNumber && (
                            <div className="flex items-center text-sm">
                              <span className="text-gray-500 mr-2">📞</span>
                              <a
                                href={`tel:${selectedPlace.phoneNumber}`}
                                className="text-iguazu-teal hover:underline"
                              >
                                {selectedPlace.phoneNumber}
                              </a>
                            </div>
                          )}
                          {selectedPlace.website && (
                            <div className="flex items-center text-sm">
                              <span className="text-gray-500 mr-2">🌐</span>
                              <a
                                href={selectedPlace.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-iguazu-teal hover:underline truncate"
                              >
                                {selectedPlace.website.replace(/^https?:\/\//, '')}
                              </a>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => getDirections(selectedPlace.location)}
                          className="flex-1 px-3 py-2 bg-iguazu-teal text-white text-sm rounded-lg hover:bg-iguazu-dark transition-colors flex items-center justify-center gap-1"
                        >
                          <span>🧭</span>
                          {t('get-directions')}
                        </button>
                        {showDirections && (
                          <button
                            onClick={clearDirections}
                            className="px-3 py-2 bg-gray-500 text-white text-sm rounded-lg hover:bg-gray-600 transition-colors"
                          >
                            {t('clear-directions')}
                          </button>
                        )}
                      </div>

                      {/* Reviews Preview */}
                      {selectedPlace.reviews && selectedPlace.reviews.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <div className="flex items-center mb-2">
                            <span className="text-sm font-medium text-gray-900">Reseñas recientes</span>
                          </div>
                          <div className="space-y-2">
                            {selectedPlace.reviews.slice(0, 2).map((review: any, index: number) => (
                              <div key={index} className="text-xs text-gray-600">
                                <div className="flex items-center mb-1">
                                  <span className="font-medium mr-2">{review.authorAttribution?.displayName || 'Usuario'}</span>
                                  <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                      <span
                                        key={i}
                                        className={`text-xs ${
                                          i < review.rating ? 'text-yellow-500' : 'text-gray-300'
                                        }`}
                                      >
                                        ★
                                      </span>
                                    ))}
                                  </div>
                                </div>
                                <p className="line-clamp-2">{review.text}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
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
