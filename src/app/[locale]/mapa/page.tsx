'use client'
import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    initMap: () => void;
  }
}

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadScript = (url: string) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    const initMap = () => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
      }
    };

    if (!window.google) {
      loadScript(`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`);
      window.initMap = initMap;
    } else {
      initMap();
    }
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default Map;