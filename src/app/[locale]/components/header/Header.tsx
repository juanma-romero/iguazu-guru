import LocaleSwitcher from './LocaleSwitcher'
import CurrencySelector from './CurrencySelector'
import Image from 'next/image'
import {Link} from '../../../../i18n/routing'

export default function Header() {
  return (
    <header className="sticky-header bg-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <div className="logo">
                <Link href="/">
                  <Image
                      src="/oldYaguarSinBackground.png"
                      alt="Logo de Iguazu Guru"
                      width={50}
                      height={50}
                    />
                </Link>
            </div>
            <nav className="hidden md:flex main-nav">
                <ul className="flex items-center space-x-6">
                    <li><a href="#atracciones" className="text-iguazu-teal hover:text-iguazu-green font-medium transition-colors">Atracciones</a></li>
                    <li><a href="#itinerario-ia" className="text-iguazu-teal hover:text-iguazu-green font-medium transition-colors">Ciudades</a></li>
                    <li><a href="#blog" className="text-iguazu-teal hover:text-iguazu-green font-medium transition-colors">Blog</a></li>
                </ul>
            </nav>
            <div className="flex items-center space-x-4">
                <CurrencySelector />
                <LocaleSwitcher />
            </div>
            {/*
            <div className="md:hidden">
                <button className="mobile-menu-icon text-iguazu-dark">
                    <svg className="w-6 h-6 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
            */}
        </div>
    </header>
  );
}
