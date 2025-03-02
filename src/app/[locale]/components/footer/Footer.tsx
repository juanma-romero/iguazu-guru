import ModalClima from "./ModalClima";
import ModalExchange from "./ModalExchange";
import ModalMapa from "./ModalMapa"
import {useTranslations} from 'next-intl'


function Footer() {
    const t = useTranslations('footer');
    return (
        <footer>
            <nav className="py-4">
                <div className="flex justify-around text-sm text-gray-400">
                {/* clima */}
                <div>
                    <ModalClima />
                    <p>{t('boton1')}</p>
                </div>
                {/* cotizacion */}
                <div>
                <ModalExchange />
                <p>{t('boton2')}</p>
                </div>
                {/* ubicacion */}
                <div>
                <ModalMapa />
                <p>{t('boton3')}</p>
                </div>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;