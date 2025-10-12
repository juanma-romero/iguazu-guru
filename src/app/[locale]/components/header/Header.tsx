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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const t = useTranslations('Header')

  return (
    <header className="sticky-header bg-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex flex-col">
            {/* Top row with logo and navigation */}
            <div className="flex justify-between items-center">
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

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="mobile-menu-icon text-iguazu-dark focus:outline-none">
                        <svg className="w-6 h-6 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {/* Desktop Navigation */}
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
            </div>

            {/* Bottom row with currency and locale selectors */}
            <div className="flex justify-center items-center mt-2">
                <div className="flex items-center space-x-4">
                    <CurrencySelector />
                    <LocaleSwitcher />
                </div>
            </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg p-4 overflow-y-auto">
                    {/* Close button for mobile menu */}
                    <div className="flex justify-end mb-4">
                        <button onClick={() => setIsMobileMenuOpen(false)} className="text-iguazu-dark focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    {/* Mobile Navigation Links */}
                    <ul className="space-y-4">
                        {/* Atracciones Dropdown */}
                        <li className="relative">
                            <div className="flex items-center justify-between cursor-pointer" onClick={(e) => { e.stopPropagation(); setAtraccionesOpen(!atraccionesOpen); }}>
                                <span className="text-iguazu-teal hover:text-iguazu-green font-medium transition-colors">{t('link-attractions')}</span>
                                <svg className={`w-4 h-4 ml-1 transition-transform ${atraccionesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            {atraccionesOpen && (
                                <div className="mt-2 pl-4 space-y-2">
                                    <Link href="/atracoes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-iguazu-teal" onClick={() => setIsMobileMenuOpen(false)}>
                                        {t('link_atracc_1')}
                                    </Link>
                                    <Link href="/atracoes/cataratas-argentina" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-iguazu-teal" onClick={() => setIsMobileMenuOpen(false)}>
                                        {t('link_atracc_2')}
                                    </Link>
                                    <Link href="/atracoes/cataratas-brasil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-iguazu-teal" onClick={() => setIsMobileMenuOpen(false)}>
                                        {t('link_atracc_3')}
                                    </Link>
                                    <Link href="/atracoes/marco-tres-fronteiras" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-iguazu-teal" onClick={() => setIsMobileMenuOpen(false)}>
                                        {t('link_atracc_4')}
                                    </Link>
                                    <Link href="/atracoes/parque-das-aves" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-iguazu-teal" onClick={() => setIsMobileMenuOpen(false)}>
                                        {t('link_atracc_5')}
                                    </Link>
                                    <Link href="/atracoes/iguazu-jungle" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-iguazu-teal" onClick={() => setIsMobileMenuOpen(false)}>
                                        {t('link_atracc_6')}
                                    </Link>
                                </div>
                            )}
                        </li>
                        {/* Ciudades Dropdown */}
                        <li className="relative">
                            <div className="flex items-center justify-between cursor-pointer" onClick={(e) => { e.stopPropagation(); setCiudadesOpen(!ciudadesOpen); }}>
                                <span className="text-iguazu-teal hover:text-iguazu-green font-medium transition-colors">{t('link-cities')}</span>
                                <svg className={`w-4 h-4 ml-1 transition-transform ${ciudadesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            {ciudadesOpen && (
                                <div className="mt-2 pl-4 space-y-2">
                                    <Link href="/cidades/cidade-de-leste" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-iguazu-teal" onClick={() => setIsMobileMenuOpen(false)}>
                                        {t('link_ciudad_1')}
                                    </Link>
                                    <Link href="/cidades/foz-do-iguacu" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-iguazu-teal" onClick={() => setIsMobileMenuOpen(false)}>
                                        {t('link_ciudad_2')}
                                    </Link>
                                    <Link href="/cidades/puerto-iguazu" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-iguazu-teal" onClick={() => setIsMobileMenuOpen(false)}>
                                        {t('link_ciudad_3')}
                                    </Link>
                                </div>
                            )}
                        </li>
                        {/* Blog Link */}
                        <li>
                            <Link href="/blog" className="text-iguazu-teal hover:text-iguazu-green font-medium transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
                        </li>
                    </ul>
                    {/* Currency and Locale Selectors removed from mobile menu */}
                </div>
            </div>
        )}
    </header>
  )}
