import { useTranslations } from 'next-intl';

export default function AdondeIr () {
    const t = useTranslations('cards')
    const p = useTranslations('name1')
    return (
        <div>
        <h2>{t('puerto.title')}</h2>
        <p>{t('puerto.description')}</p>
        <p>{p('cosas')}</p>
        </div>
    );
}