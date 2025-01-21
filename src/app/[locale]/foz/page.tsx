import {useTranslations} from 'next-intl';
import React from 'react';

const FozPage: React.FC = () => {
  const t = useTranslations('foz')
  return (
    <div>
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
    </div>
  );
};

export default FozPage;