import { useTranslations } from 'next-intl';

function App() {
  // Importa messages de next-intl
  const t = useTranslations('principalAtracciones');

  return (
    <h1>{t('h1')}</h1>
  )
}

export default App
