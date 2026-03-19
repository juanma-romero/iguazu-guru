import { useTranslations } from 'next-intl';

export default function Cookies() {
    const t = useTranslations('cookies');
    
    return (
        <div>
            <h1>{t('h1')}</h1>
            <br></br>
            <div className="cookies-policy">
                <p>{t('intro')}</p>
                <br></br>
                <h2>{t('h2-1')}</h2>
                <p>{t('h2-1-p1')}</p>
                <br></br>
                <h2>{t('h2-2')}</h2>
                <p>{t('h2-2-p1')}</p>
                <ul>
                    <li><strong>{t('h2-2-li-1-strong')}</strong> {t('h2-2-li-1')}</li>
                    <li><strong>{t('h2-2-li-2-strong')}</strong> {t('h2-2-li-2')}</li>
                    <li><strong>{t('h2-2-li-3-strong')}</strong> {t('h2-2-li-3')}</li>
                    <li><strong>{t('h2-2-li-4-strong')}</strong> {t('h2-2-li-4')}</li>
                </ul>
                <br></br>
                <h2>{t('h2-3')}</h2>
                <p>{t('h2-3-p1')}</p>
                <div className="table-container">
                    <table className="cookies-table">
                        <thead>
                            <tr>
                                <th>{t('table-header-1')}</th>
                                <th>{t('table-header-2')}</th>
                                <th>{t('table-header-3')}</th>
                                <th>{t('table-header-4')}</th>
                                <th>{t('table-header-5')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>_ga</td>
                                <td>Google Analytics</td>
                                <td>{t('cookie-1-purpose')}</td>
                                <td>{t('cookie-1-duration')}</td>
                                <td>{t('cookie-1-type')}</td>
                            </tr>
                            <tr>
                                <td>_gid</td>
                                <td>Google Analytics</td>
                                <td>{t('cookie-2-purpose')}</td>
                                <td>{t('cookie-2-duration')}</td>
                                <td>{t('cookie-2-type')}</td>
                            </tr>
                            <tr>
                                <td>_gat</td>
                                <td>Google Analytics</td>
                                <td>{t('cookie-3-purpose')}</td>
                                <td>{t('cookie-3-duration')}</td>
                                <td>{t('cookie-3-type')}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br></br>
                <h2>{t('h2-4')}</h2>
                <p>{t('h2-4-p1')}</p>
                <br></br>
                <h2>{t('h2-5')}</h2>
                <p>{t('h2-5-p1')}</p>
                <ul>
                    <li>
                        <strong>{t('h2-5-li-1-strong')}</strong> {t('h2-5-li-1')}
                        <ul>
                            <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
                            <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64e" target="_blank" rel="noopener noreferrer">Internet Explorer</a></li>
                        </ul>
                    </li>
                    <li><strong>{t('h2-5-li-2-strong')}</strong> {t('h2-5-li-2')}</li>
                    <li>
                        <strong>{t('h2-5-li-3-strong')}</strong> {t('h2-5-li-3')} 
                        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a>.
                    </li>
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
            </div>
        </div>
    );
}