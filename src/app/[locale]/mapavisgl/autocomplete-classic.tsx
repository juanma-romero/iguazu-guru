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
}

/*
The provided code is a React component written in TypeScript that implements a classic "Place Autocomplete" widget using the Google Maps API.
 The component, named PlaceAutocompleteClassic, allows users to search for places and select one from the autocomplete suggestions.

### Key Points:

1. **Imports and Interface**:
   - The component imports necessary hooks (
useRef, useEffect, useState) from React.
   - It also imports useMapsLibrary
 from `@vis.gl/react-google-maps` to access the Google Maps Places library.
   - An interface Props
 is defined to type the 

onPlaceSelect
 prop, which is a function that takes a 
google.maps.places.PlaceResult
 or `null`.

2. **Component Definition**:
   - The component accepts a single prop, 
onPlaceSelect, which is a callback function to handle the selected place.

3. **State and Refs**:
   - 
placeAutocomplete: A state variable to store the google.maps.places.Autocomplete
 instance.
   - 

inputRef
: A ref to reference the input element where users will type their search queries.
   - 
places

: A variable to access the Google Maps Places library using 

useMapsLibrary.

4. **useEffect Hooks**:
   - The first 

useEffect

 initializes the 

Autocomplete

 instance when the component mounts. It checks if the window object, 

places

 library, and 

inputRef

 are available.
     - It sets up the 

Autocomplete

 with specific options, including fields to retrieve (`geometry`, `name`, `formatted_address`) 
 and bounds to restrict suggestions to a specific geographical area.
   - The second 

useEffect

 adds a listener to the 

placeAutocomplete

 instance to handle the `place_changed` event. When a place is selected, it calls the 

onPlaceSelect

 callback with the selected place.

5. **Render**:
   - The component renders a 

div

 containing an 

input

 element. The 

inputRef

 is attached to this input element to reference it in the 

useEffect

 hooks.

### Summary:
The 

PlaceAutocompleteClassic

 component sets up a Google Maps Places Autocomplete widget. It initializes the widget with specific options,
  listens for place selection events, and calls the 

onPlaceSelect

 callback with the selected place. This component can be used to provide place search functionality in a React application.
 */
