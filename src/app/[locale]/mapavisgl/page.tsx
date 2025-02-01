'use client'
import React, {useState} from 'react';
import {APIProvider, ControlPosition, Map} from '@vis.gl/react-google-maps';
import {CustomMapControl} from './map-control';
import MapHandler from './map-handler';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'default_api_key';

const MapaVis = () => {  

  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);

  return (
    <div className='w-full h-[100vh]'>
    <APIProvider apiKey={API_KEY}>
      <Map
        defaultZoom={14}
        defaultCenter={{lat: -25.534374, lng: -54.576133}}
        mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID}
        
      />
      <CustomMapControl
        controlPosition={ControlPosition.TOP}        
        onPlaceSelect={setSelectedPlace}
      />      
      <MapHandler place={selectedPlace} />
    </APIProvider>
    </div>
  );
};
export default MapaVis;
