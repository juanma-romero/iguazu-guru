'use client'
import React, {useRef, useEffect, useState} from 'react';
import {useMapsLibrary} from '@vis.gl/react-google-maps';

interface Props {
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}

// This is an example of the classic "Place Autocomplete" widget.
// https://developers.google.com/maps/documentation/javascript/place-autocomplete
// https://github.com/visgl/react-google-maps/blob/main/examples/autocomplete/src/autocomplete-classic.tsx
export const PlaceAutocompleteClassic = ({onPlaceSelect}: Props) => {
  const [placeAutocomplete, setPlaceAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const places = useMapsLibrary('places');

  useEffect(() => {
    
    if (typeof window === 'undefined' || !places || !inputRef.current) return;
    //if (!places || !inputRef.current) return;

    
    const options = {
      fields: ['geometry', 'name', 'formatted_address'],
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(-25.591374, -54.591418), // Suroeste
        new google.maps.LatLng(-25.407983, -54.522989)  // Noreste
    ),
    strictBounds: true // Restringe las sugerencias a los límites especificados
    };

    setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
  }, [places]);

  useEffect(() => {
    if (!placeAutocomplete) return;

    placeAutocomplete.addListener('place_changed', () => {
      onPlaceSelect(placeAutocomplete.getPlace());
    });
  }, [onPlaceSelect, placeAutocomplete]);

  return (
    <div className="autocomplete-container text-xl p-2">
      <input 
        
        ref={inputRef} />
    </div>
  );
};