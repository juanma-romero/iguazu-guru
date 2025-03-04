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
                <div className="flex flex-col items-center">
                    <ModalClima />
                    <p>{t('boton1')}</p>
                </div>
                {/* cotizacion */}
                <div className="flex flex-col items-center">
                <ModalExchange />
                <p>{t('boton2')}</p>
                </div>
                {/* ubicacion */}
                <div className="flex flex-col items-center">
                <ModalMapa />
                <p>{t('boton3')}</p>
                </div>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;