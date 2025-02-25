'use client'
import {useTranslations} from 'next-intl'
import AdondeIr from './AdondeIr'
import Gastro from './Gastro'
import Transporte from './Transporte'

import DefaultHotelList from './HotelList'


const PuertoPage: React.FC = () => { 

  const t = useTranslations('cards')
 const p = useTranslations('name1')
  return (
    <div>
      <h2>{t('puerto.title')}</h2>
      <p>{t('puerto.description')}</p>
      <p>{p('cosas')}</p>
      
      <DefaultHotelList />
      {/*
      //<p>{t(name1)}</p>
      <AdondeIr/>      
      <Gastro />
      <Transporte />
      */}
     
    </div>
  )
}

export default PuertoPage;