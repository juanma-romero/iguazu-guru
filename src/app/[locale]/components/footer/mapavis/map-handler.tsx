'use client'
import {useMap} from '@vis.gl/react-google-maps';
import React, {useEffect} from 'react';

interface Props {
  place: google.maps.places.PlaceResult | null;
}

const MapHandler = ({place}: Props) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !place) return;

    if (place.geometry?.viewport) {
      map.fitBounds(place.geometry?.viewport);
    }
  }, [map, place]);

  return null;
};

export default React.memo(MapHandler);

/*
El archivo map-handler.tsx define un componente React llamado MapHandler. Este componente se encarga de ajustar la vista del mapa según 
la ubicación seleccionada. Aquí hay un desglose de lo que hace cada parte del código:

Importaciones:
useMap de @vis.gl/react-google-maps: Un hook que proporciona acceso al objeto del mapa de Google Maps.
React y useEffect de react: Para crear el componente y manejar efectos secundarios.

Interfaz Props:
Define la estructura de las propiedades que el componente espera recibir. En este caso, una propiedad place que puede ser un objeto 
google.maps.places.PlaceResult o null.

Componente MapHandler:
Hook useMap: Obtiene el objeto del mapa.
Hook useEffect: Ejecuta un efecto secundario cuando el componente se monta o cuando cambian las dependencias (map y place).
Si map o place no están definidos, el efecto no hace nada.
Si place.geometry?.viewport está definido, ajusta la vista del mapa para que se ajuste a los límites de la geometría del lugar seleccionado
 usando map.fitBounds.
Retorno:
El componente no renderiza nada en la interfaz de usuario (return null).
Exportación:

El componente se exporta usando React.memo para optimizar el rendimiento, evitando renderizaciones innecesarias si las propiedades no cambian.
*/