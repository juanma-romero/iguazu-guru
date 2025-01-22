'use client'
import { useState, useEffect, useRef } from "react";
import { APIProvider, Map, useMap, useMapsLibrary, AdvancedMarker } from '@vis.gl/react-google-maps';

const FuncionalidadMapa: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const map = useMap('a45c5d99fdebb247');
    const placesLib = useMapsLibrary('places');
    
    const handleButtonClick = () => {
        if (inputRef.current) {          
          inputRef.current.focus();
        }
      };

    useEffect(() => {

        if (placesLib) {
            
            const autocomplete = new placesLib.Autocomplete(inputRef.current as HTMLInputElement, {
                bounds: new google.maps.LatLngBounds(
                    new google.maps.LatLng(-25.591374, -54.591418), // Suroeste
                    new google.maps.LatLng(-25.407983, -54.522989)  // Noreste
                ),
                strictBounds: true // Restringe las sugerencias a los límites especificados
            })
        
           /*if ( map) {
                const service = new placesLib.PlacesService(map);
            }*/            
            
            // Listener para cuando el usuario selecciona un lugar
            autocomplete.addListener('place_changed', () => {
                const place = autocomplete.getPlace();
                console.log(place);

                if (!place.geometry || !place.geometry.location) {
                    console.log('No details available for input: ' + place.name);
                    return;
                }
                if (map) {
                    map.setCenter(place.geometry.location);
                    map.setZoom(15)
                }
                /*const request = {
                    location: place.geometry.location,
                    radius: 500,
                    type: 'All', // Puedes cambiar el tipo de lugar según tus necesidades
                }*/
                // no imprime el marker pero es por aca y falta el place service
                /*if(map) {
                    const service = new placesLib.PlacesService(map)
                    service.nearbySearch(request, (results, status) => {
                        if (status === placesLib.PlacesServiceStatus.OK) {
                            results?.forEach((result) => {
                                if (result.geometry) {
                                    new google.maps.marker.AdvancedMarkerElement({
                                        map,
                                        
                                        position: result.geometry.location,
                                    });
                                    console.log(result)
                                }
                            });
                        }
                });
                }*/
                
            }
        );
    }

        
    }, [placesLib, map]);

    return (
        <div>
            <div>
                <input ref={inputRef} type="text" />
                <button onClick={handleButtonClick}>Focus Input</button>
            </div>
            <Map
                        style={{width: '100vw', height: '70vh'}}
                        defaultCenter={{lat: -25.534374, lng: -54.576133}}
                        defaultZoom={14}
                        gestureHandling={'greedy'}
                        disableDefaultUI={false}
            />
        </div>
    );
}


const ModalMapa = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    

    return (
        <>
            <button
                onClick={handleOpenModal}
                className="rounded-full p-2 bg-[#1f3838] border-[1px] hover:bg-gray-200"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
            </button>

            {isModalOpen && (
                <div 
                    className="modal" style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100vw',
                    height: 'auto',
                    backgroundColor: '#1A3131',
                    zIndex: 1000,
                    padding: '20px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}>
                    <div className="modal-content" >                        
                        <div className="modal-body" style={{ height: 'calc(100% - 40px)' }}>
                        <span className="close" onClick={handleCloseModal} style={{ cursor: 'pointer' }}>&times;</span>
                            <APIProvider 
                                apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
                                    <FuncionalidadMapa />
                            </APIProvider>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalMapa;