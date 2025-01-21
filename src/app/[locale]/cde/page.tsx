import {useTranslations} from 'next-intl';
import React from 'react';

const CdePage: React.FC = () => {
  const t = useTranslations('cde')
  return (
    <div>
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
    </div>
  );
};

export default CdePage;