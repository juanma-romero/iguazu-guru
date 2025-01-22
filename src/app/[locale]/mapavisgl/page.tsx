'use client'
import React, {useState} from 'react';
import {APIProvider, ControlPosition, Map} from '@vis.gl/react-google-maps';

import {CustomMapControl} from './map-control';
import MapHandler from './map-handler';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'default_api_key';

export type AutocompleteMode = {id: string; label: string};

const autocompleteModes: Array<AutocompleteMode> = [
  {id: 'classic', label: 'Google Autocomplete Widget'},
  {id: 'custom', label: 'Custom Build'},
  {id: 'custom-hybrid', label: 'Custom w/ Select Widget'}
];

const MapaVis = () => {
  const [selectedAutocompleteMode, setSelectedAutocompleteMode] =
    useState<AutocompleteMode>(autocompleteModes[0]);

  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);

  return (
    <div className='w-full h-[100vh]'>
    <APIProvider apiKey={API_KEY}>
      <Map
        defaultZoom={14}
        defaultCenter={{lat: -25.534374, lng: -54.576133}}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      />

      <CustomMapControl
        controlPosition={ControlPosition.TOP}
        selectedAutocompleteMode={selectedAutocompleteMode}
        onPlaceSelect={setSelectedPlace}
      />      

      <MapHandler place={selectedPlace} />
    </APIProvider>
    </div>
  );
};
export default MapaVis;
