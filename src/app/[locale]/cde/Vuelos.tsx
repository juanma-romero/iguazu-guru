import { useTranslations } from 'next-intl';

export default function Vuelos () {
    const t = useTranslations('')
    return (
        <div>
        <h1>{t('AdondeIr.')}</h1>
        </div>
    );
}