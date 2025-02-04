'use client'
import React from 'react';
import {ControlPosition, MapControl} from '@vis.gl/react-google-maps'
import {PlaceAutocompleteClassic} from './autocomplete-classic'

type CustomAutocompleteControlProps = {
  controlPosition: ControlPosition;  
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
};

export const CustomMapControl = ({
  controlPosition,  
  onPlaceSelect
}: CustomAutocompleteControlProps) => {  

  return (
    <MapControl position={controlPosition}>
      <div className="autocomplete-control">        
          <PlaceAutocompleteClassic onPlaceSelect={onPlaceSelect} />      
      </div>
    </MapControl>
  )
}

/*El archivo map-control.tsx define un componente React llamado CustomMapControl. Este componente se encarga de agregar un control 
personalizado al mapa de Google Maps, específicamente un control de autocompletado de lugares. Aquí hay un desglose de lo que hace 
cada parte del código:

Importaciones:
React de react: Para crear el componente.
ControlPosition y MapControl de @vis.gl/react-google-maps: Para definir la posición del control en el mapa y el componente del control del mapa.
PlaceAutocompleteClassic del archivo autocomplete-classic: Un componente de autocompletado de lugares.

Tipo CustomAutocompleteControlProps:
Define la estructura de las propiedades que el componente espera recibir:
controlPosition: La posición del control en el mapa.
onPlaceSelect: Una función que se llama cuando se selecciona un lugar.

Componente CustomMapControl:
Desestructura las propiedades recibidas (controlPosition, onPlaceSelect).
Renderiza un componente MapControl en la posición especificada (controlPosition).
Dentro de MapControl, renderiza un div con la clase autocomplete-control.
*/
