import Image from "next/image"

interface Photo {
  1: string;
  2: string;
  3: string;
  4?: string;  
}

export interface HotelType {
  name: string;
  formattedAddress: string;
  location: {
    latitude: number;
    longitude: number;
  };
  rating: number;
  link: string,
  displayName: {
    text: string;
    languageCode: string;
  };
  editorialSummary?: {
    text: string;
    languageCode: string;
  };
  reviews?: Array<{
    name: string;
    relativePublishTimeDescription: string;
    // Añade aquí otras propiedades según sea necesario
    googleMapsUri: string;
  }>;
  photos: Photo;

  [key: string]: any; // Esto permite propiedades adicionales si no estás seguro de todas
}

interface HotelProps {
  hotel: HotelType;
}

const HotelItem: React.FC<HotelProps> = ({ hotel }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4">
            <h3 className="text-xl font-semibold mb-2 underline">{hotel.displayName?.text}</h3>
            <p className="mb-2"><strong>Ubicación: </strong> {hotel.formattedAddress}</p>
            <p className="mb-2"><strong>Calificación Google: </strong> {hotel.rating}</p>
            <p className="mb-4"><strong>Resumen: </strong> {hotel.editorialSummary?.text ?? 'Sin resumen'}</p>
            <p className="mb-4"><strong>Link: </strong> 
            <a
              className='hover:underline hover:text-green-300'
              href={hotel.link}
              target="_blank"
            >
              {hotel.link}
            </a>
            </p>
            <div className="flex flex-wrap">
                {Object.entries(hotel.photos).map(([key, imgPath]) => {
                    return <Image
                        key={key}
                        src={imgPath}
                        alt={`Photo ${key}`}
                        className="w-72 h-auto object-cover m-2 rounded-lg"
                        width={200}
                        height={200}
                    />;
                })}
            </div>
        </div>
  );
};

export default HotelItem;