import {useTranslations} from 'next-intl';
import React from 'react';
import AdondeIr from './AdondeIr';
import Alojamiento from './Alojamiento';
import Gastro from './Gastro';
import Transporte from './Transporte';

const FozPage: React.FC = () => {
  const t = useTranslations()
  return (
    <div>
      <h2>{t('cards.foz.title')}</h2>
      <p>{t('cards.foz.description')}</p>
      <AdondeIr />
      <Alojamiento />
      <Gastro />
      <Transporte />
    </div>
  );
};

export default FozPage;