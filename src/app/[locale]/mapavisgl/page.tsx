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

/*
The provided code is a React component written in TypeScript that integrates with the Google Maps API using the 
`@vis.gl/react-google-maps` library. The component, named 

MapaVis

, is designed to display a full-screen map and handle user interactions with it.

At the top of the file, the `use client` directive indicates that this component should be rendered on the client side.
 The necessary React hooks and components from the `@vis.gl/react-google-maps` library are imported, 
 along with two custom components: 

CustomMapControl

 and 

MapHandler

.

An API key for Google Maps is retrieved from the environment variables using 

process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

. If the environment variable is not set, a default API key (`'default_api_key'`) is used.

The 

MapaVis

 component uses the 

useState

 hook to manage the state of the selected place, which is initially set to `null`. The state is typed to 

google.maps.places.PlaceResult | null

, ensuring type safety.

The component returns a 

div

 that takes up the full viewport height (`h-[100vh]`). Inside this 

div

, the 

APIProvider

 component is used to provide the Google Maps API key to the map. The 

Map

 component is configured with a default zoom level of 14 and centered at specific latitude and longitude coordinates.
  The 

mapId

 is also retrieved from the environment variables.

The 

CustomMapControl

 component is placed at the top of the map (

ControlPosition.TOP

) and is responsible for handling place selection, updating the 

selectedPlace

 state when a place is selected. Finally, the 

MapHandler

 component is rendered, receiving the 

selectedPlace

 as a prop to handle any additional logic or display related to the selected place.

Overall, this code sets up a Google Map with custom controls and handlers, allowing for interactive map features 
within a React application.
*/
