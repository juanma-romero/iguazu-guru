import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import Header from './Header';
import Main from './Main';


 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <Header />
      <Main />
      
      <h1 className='text-yellow-600'>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}