import {useTranslations} from 'next-intl';
import React from 'react';
import AdondeIr from './AdondeIr'
import Alojamiento from './Alojamiento'
import Transporte from './Transporte'
import Compras from './Compras'
import Gastro from './Gastro'

const CdePage: React.FC = () => {
  const t = useTranslations('')
  return (
    <div>
      <h2>{t('cards.cde.title')}</h2>
      <p>{t('cards.cde.description')}</p>
      <AdondeIr />
      <Alojamiento />
      <Transporte />
      <Compras />
      <Gastro />
    </div>
  );
};

export default CdePage;