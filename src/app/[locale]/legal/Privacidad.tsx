import { useTranslations } from 'next-intl';


export default function Privacidad () {
    const t = useTranslations('legal');
    return (
        <div>
            <h1>{t('h1')}</h1>
            <br></br>
            <div className="privacy-policy">
                <h2>{t('h2-1')}</h2>
                <p>
                    <strong>{t('h2-1-p1')}</strong> Iguazu Guru<br/>
                    <strong>{t('h2-1-p2')}</strong> manager@iguazu.guru
                </p>
                <p>{t('h2-1-p3')}</p>
                <br></br>
                <h2>{t('h2-2')}</h2>
                <p>{t('h2-2-p1')}</p>
                <ul>
                    <li>{t('h2-2-li-1')}</li>
                </ul>
                <br></br>
                <h2>{t('h2-3')}</h2>
                <p>{t('h2-3-p1')}</p>
                <ul>
                    <li><strong>{t('h2-3-li-1-strong')}</strong> {t('h2-3-li-1')}</li>
                    <li><strong>{t('h2-3-li-2-strong')}</strong> {t('h2-3-li-2')}</li>
                    <li><strong>{t('h2-3-li-3-strong')}</strong> {t('h2-3-li-3')}</li>
                    <li><strong>{t('h2-3-li-4-strong')}</strong> {t('h2-3-li-4')}</li>
                </ul>
                <br></br>
                <h2>{t('h2-4')}</h2>
                <p>{t('h2-4-p1')}</p>
                <br></br>
                <h2>{t('h2-5')}</h2>
                <p>{t('h2-5-p1')}</p>
                <ul>
                    <li><strong>{t('h2-5-li-1-strong')}</strong> {t('h2-5-li-1')}</li>
                </ul>
                <br></br>
                <h2>{t('h2-6')}</h2>
                <p>{t('h2-6-p1')}</p>
                <br></br>
                <h2>{t('h2-7')}</h2>
                <p>{t('h2-7-p1')}</p>
                <br></br>
                <h2>{t('h2-8')}</h2>
                <p>{t('h2-8-p1')}</p>
                <ul>
                    <li><strong>{t('h2-8-li-1-strong')}</strong> {t('h2-8-li-1')}</li>
                    <li><strong>{t('h2-8-li-2-strong')}</strong> {t('h2-8-li-2')}</li>
                    <li><strong>{t('h2-8-li-3-strong')}</strong> {t('h2-8-li-3')}</li>
                    <li><strong>{t('h2-8-li-4-strong')}</strong> {t('h2-8-li-4')}</li>
                    <li><strong>{t('h2-8-li-5-strong')}</strong> {t('h2-8-li-5')}</li>
                    <li><strong>{t('h2-8-li-6-strong')}</strong> {t('h2-8-li-6')}</li>
                </ul>
                <p>{t('h2-8-p2')}</p>
                <p>{t('h2-8-p3')}</p>
                <br></br>
                <h2>{t('h2-9')}</h2>
                <p>{t('h2-9-p1')}</p>
                <br></br>
                <h2>{t('h2-10')}</h2>
                <p>{t('h2-10-p1')}</p>
            </div>
        </div>
    );
}