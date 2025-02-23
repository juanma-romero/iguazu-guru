import hotelesData from './dataAlojaFoz.json';
import HotelItem from './HotelItem';
import { HotelType } from './HotelItem';

interface HotelListProps {
  hotelesData: HotelType[];
}

const HotelList: React.FC<HotelListProps> = ({ hotelesData }) => {
  return (
    <div>
      <h2>Hoteles</h2>
      {hotelesData.length > 0 ? (
        hotelesData.map((hotel) => (
          <HotelItem key={hotel.name} hotel={hotel} />
        ))
      ) : (
        <p>No hay hoteles disponibles.</p>
      )}
    </div>
  )
}

const hoteles: HotelType[] = hotelesData;

const DefaultHotelList: React.FC = () => {
  return <HotelList hotelesData={hoteles} />;
};

export default DefaultHotelList;
