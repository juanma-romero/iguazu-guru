import {useTranslations} from 'next-intl'


export default function AdondeIr () {
    const t = useTranslations('')
    return (
        <div>
        <h2>{t('cards.foz.title')}</h2>
        <p>{t('cards.foz.description')}</p>
        </div>
    );
}