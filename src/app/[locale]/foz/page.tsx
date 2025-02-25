import {useTranslations} from 'next-intl'
//import AdondeIr from './AdondeIr'
//import Gastro from './Gastro'
//import Transporte from './Transporte'

import DefaultHotelList from './HotelList'

const FozPage: React.FC = () => {
  const t = useTranslations()
  return (
    <div>
      <h2>{t('cards.foz.title')}</h2>
      <p>{t('cards.foz.description')}</p>

      <DefaultHotelList />
      {/*
      <AdondeIr />
      <Gastro />
      <Transporte />
      */}
    </div>
  );
};

export default FozPage;