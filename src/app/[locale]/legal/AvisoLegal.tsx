import { useTranslations } from 'next-intl';

export default function AvisoLegal() {
    const t = useTranslations('Aviso');
    
    return (
        <div>
            <h1>{t('h1')}</h1>
            <br></br>
            <div className="legal-notice">
                <p>{t('intro')}</p>
                <br></br>
                
                <h2>{t('h2-1')}</h2>
                <p>{t('h2-1-p1')}</p>
                <br></br>
                
                <h2>{t('h2-2')}</h2>
                <p>{t('h2-2-p1')}</p>
                <ul>
                    <li>{t('h2-2-li-1')}</li>
                    <li>{t('h2-2-li-2')}</li>
                    <li>{t('h2-2-li-3')}</li>
                </ul>
                <br></br>
                
                <h2>{t('h2-3')}</h2>
                <p>{t('h2-3-p1')}</p>
                <br></br>
                
                <h2>{t('h2-4')}</h2>
                <p>{t('h2-4-p1')}</p>
                <br></br>
                
                <h2>{t('h2-5')}</h2>
                <p>{t('h2-5-p1')}</p>
                <p>{t('h2-5-p2')}</p>
                <br></br>
                
                <h2>{t('h2-6')}</h2>
                <p>{t('h2-6-p1')}</p>
                <p>{t('h2-6-p2')}</p>
                <br></br>
                
                <h2>{t('h2-7')}</h2>
                <p>{t('h2-7-p1')}</p>
                <p><strong>{t('h2-7-contact')}</strong> <a href="mailto:manager@iguazu.guru">manager@iguazu.guru</a></p>
            </div>
        </div>
    );
}