import {useTranslations} from 'next-intl'

function Footer() {
    const t = useTranslations('footer');
    return (
        <footer className="bg-iguazu-dark text-iguazu-light">
        <div className="container mx-auto px-4 py-8 text-center">
            <p>&copy; 2025 Iguazu.guru - Todos los derechos reservados.</p>
            <div className="mt-4">
                <a href="#" className="px-2 hover:text-white">Sobre Nosotros</a> |
                <a href="#" className="px-2 hover:text-white">Contacto</a> |
                <a href="#" className="px-2 hover:text-white">Política de Privacidad</a>
            </div>
        </div>
    </footer>
    );
}

export default Footer;