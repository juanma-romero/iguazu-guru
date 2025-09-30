'use client'

import LocaleSwitcher from './LocaleSwitcher'
import CurrencySelector from './CurrencySelector'
import Image from 'next/image'
import {Link} from '../../../../i18n/routing'
import { useTranslations } from 'next-intl';
import { useState } from 'react'

export default function Header() {
  const [atraccionesOpen, setAtraccionesOpen] = useState(false)
  const [ciudadesOpen, setCiudadesOpen] = useState(false)
  const t = useTranslations('Header');

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
                    <li className="relative">
                        <div
                            onMouseEnter={() => setAtraccionesOpen(true)}
                            onMouseLeave={() => setAtraccionesOpen(false)}
                            className="relative"
                        >
                            <button className="text-iguazu-teal hover:text-iguazu-green font-medium transition-colors flex items-center">
                                {t('link-attractions')}
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {atraccionesOpen && (
                                <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                                    <div className="py-1">
                                        <Link href="/atracoes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-iguazu-teal">
                                            {t('link_atracc_1')}
                                        </Link>
                                        <Link href="/atracoes/cataratas-argentina" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-iguazu-teal">
                                            {t('link_atracc_2')}
                                        </Link>
                                        <Link href="/atracoes/cataratas-brasil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-iguazu-teal">
                                            {t('link_atracc_3')}
                                        </Link>
                                        <Link href="/atracoes/marco-tres-fronteiras" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-iguazu-teal">
                                            {t('link_atracc_4')}
                                        </Link>
                                        <Link href="/atracoes/parque-das-aves" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-iguazu-teal">
                                            {t('link_atracc_5')}
                                        </Link>
                                        <Link href="/atracoes/iguazu-jungle" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-iguazu-teal">
                                            {t('link_atracc_6')}
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </li>
                    <li className="relative">
                        <div
                            onMouseEnter={() => setCiudadesOpen(true)}
                            onMouseLeave={() => setCiudadesOpen(false)}
                            className="relative "
                        >
                            <button className="text-iguazu-teal hover:text-iguazu-green font-medium transition-colors flex items-center">
                                {t('link-cities')}
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {ciudadesOpen && (
                                <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                                    <div className="py-1">
                                        <Link href="/cidades/cidade-de-leste" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-iguazu-teal">
                                            {t('link_ciudad_1')}
                                        </Link>
                                        <Link href="/cidades/foz-do-iguacu" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-iguazu-teal">
                                            {t('link_ciudad_2')}
                                        </Link>
                                        <Link href="/cidades/puerto-iguazu" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-iguazu-teal">
                                            {t('link_ciudad_3')}
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </li>
                    <li><Link href="/blog" className="text-iguazu-teal hover:text-iguazu-green font-medium transition-colors">Blog</Link></li>
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
