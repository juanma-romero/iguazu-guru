'use client'
import {useTranslations} from 'next-intl'
import React from 'react'
import AdondeIr from './AdondeIr'
import Alojamiento from './Alojamiento'
import Gastro from './Gastro'
import Transporte from './Transporte'

import DefaultHotelList from './HotelList'


const PuertoPage: React.FC = () => {
  

  const t = useTranslations()

  return (
    <div>
      <h2>{t('cards.puerto.title')}</h2>
      <p>{t('cards.puerto.description')}</p>
      
      <DefaultHotelList />
      {/*
      <AdondeIr/>
      <Alojamiento />
      <Gastro />
      <Transporte />
      */}
     
    </div>
  )
}

export default PuertoPage;