import {useTranslations} from 'next-intl';
import React from 'react';

const PuertoPage: React.FC = () => {
  const t = useTranslations('puerto')
  return (
    <div>
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
    </div>
  );
};

export default PuertoPage;