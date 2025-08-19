'use client'
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import {Link} from '../../../i18n/routing'
import Home from './Ciudades'
import ModalInicio from './ModalInicio';

export default function NewHome () {
    const t = useTranslations();

    return (
        
            <main>        
                <section className="hero-section bg-iguazu-dark text-white text-center py-16 md:py-24 px-4" >
                    <div className="container mx-auto bg-black bg-opacity-50 p-8 rounded-lg">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Tu Guía Experta de las Cataratas del Iguazú</h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">Pregúntale a nuestro asistente de IA cualquier duda sobre tu viaje.</p>
                        <div className="search-bar max-w-xl mx-auto flex flex-col sm:flex-row gap-2">
                            <input id="ai-search-input" type="search" placeholder="Ej: ¿Necesito pasaporte para cruzar a Brasil?" className="w-full p-3 rounded-md text-slate-900 border-2 border-transparent focus:outline-none focus:border-iguazu-green transition" />
                            <button id="ai-search-button" className="bg-iguazu-green hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md transition-transform duration-200 hover:scale-105">✨ Preguntar</button>
                        </div>
                    </div>
                </section>
                
        <section id="clima" className="quick-info py-12 md:py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-iguazu-dark mb-8">Datos Clave para tu Viaje</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    <div className="card bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="text-4xl mb-2">☀️</div><h3 className="font-bold text-lg text-iguazu-dark">Clima</h3><p className="text-iguazu-teal text-sm">Ver pronóstico</p>
                    </div>
                    <div className="card bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="text-4xl mb-2">💲</div><h3 className="font-bold text-lg text-iguazu-dark">Moneda</h3><p className="text-iguazu-teal text-sm">Tipo de cambio</p>
                    </div>
                    <div className="card bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="text-4xl mb-2">🗺️</div><h3 className="font-bold text-lg text-iguazu-dark">Mapas</h3><p className="text-iguazu-teal text-sm">Mapas interactivos</p>
                    </div>
                    <div className="card bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="text-4xl mb-2">🎟️</div><h3 className="font-bold text-lg text-iguazu-dark">Entradas</h3><p className="text-iguazu-teal text-sm">Precios y compra</p>
                    </div>
                </div>
            </div>
        </section>
        <section id='ciudades' className='cities-section bg-iguazu-light py-12 md:py-16'>
        <Home />
            </section>
        <section id="atracciones" className="main-attraction bg-white py-12 md:py-16">
             <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-iguazu-dark mb-2">El Corazón de la Maravilla</h2>
                <p className="text-center text-iguazu-teal mb-8 max-w-2xl mx-auto">Descubre los dos parques nacionales que albergan esta joya. ¿Qué ver en cada lado?</p>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div className="card bg-white p-6 rounded-lg shadow-lg overflow-hidden">
                        <img src="https://placehold.co/600x400/3D9676/F5EADD?text=Lado+Argentino" alt="Cataratas del lado argentino" className="w-full h-48 object-cover mb-4 rounded" />
                        <h3 className="text-2xl font-bold text-iguazu-dark mb-2">Lado Argentino 🇦🇷</h3><p className="text-iguazu-teal mb-4">Circuitos, Garganta del Diablo y paseos en lancha. La experiencia inmersiva.</p><a href="#" className="inline-block bg-iguazu-teal hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-md transition">Ver más del lado argentino</a>
                    </div>
                    <div className="card bg-white p-6 rounded-lg shadow-lg overflow-hidden">
                        <img src="https://placehold.co/600x400/386565/F5EADD?text=Lado+Brasileño" alt="Cataratas del lado brasileño" className="w-full h-48 object-cover mb-4 rounded" />
                        <h3 className="text-2xl font-bold text-iguazu-dark mb-2">Lado Brasileño 🇧🇷</h3><p className="text-iguazu-teal mb-4">Las mejores vistas panorámicas y el contacto cercano con la naturaleza.</p><a href="#" className="inline-block bg-iguazu-teal hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-md transition">Ver más del lado brasileño</a>
                    </div>
                </div>
            </div>
        </section>
        <section id="blog" className="blog-section bg-iguazu-light py-12 md:py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-iguazu-dark mb-2">Blog y Consejos de Viaje</h2>
                <p className="text-center text-iguazu-teal mb-8 max-w-2xl mx-auto">Artículos, guías y tips para aprovechar al máximo tu visita.</p>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="card bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-iguazu-dark mb-2">Cómo llegar</h3>
                        <p className="text-iguazu-teal mb-4">Opciones de transporte desde Argentina, Brasil y Paraguay.</p>
                        <a href="#" className="inline-block bg-iguazu-teal hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-md transition">Leer más</a>
                    </div>
                    <div className="card bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-iguazu-dark mb-2">Mejores épocas</h3>
                        <p className="text-iguazu-teal mb-4">Clima, multitudes y precios según la temporada.</p>
                        <a href="#" className="inline-block bg-iguazu-teal hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-md transition">Leer más</a>
                    </div>
                    <div className="card bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-iguazu-dark mb-2">Consejos de seguridad</h3>
                        <p className="text-iguazu-teal mb-4">Recomendaciones para disfrutar sin preocupaciones.</p>
                        <a href="#" className="inline-block bg-iguazu-teal hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-md transition">Leer más</a>
                    </div>
                </div>
            </div>
            <div id="FAQ" className="faq-section bg-white py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-iguazu-dark mb-2">Preguntas Frecuentes</h2>
                    <p className="text-center text-iguazu-teal mb-8 max-w-2xl mx-auto">Respuestas a las dudas más comunes de los viajeros.</p>
                    <div className="space-y-6">
                        <div className="faq-item bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                            <h3 className="text-lg font-semibold text-iguazu-dark mb-2">¿Necesito visa para visitar las Cataratas del Iguazú?</h3>
                            <p className="text-gray-700">Depende de tu nacionalidad. Consulta los requisitos específicos para Argentina, Brasil y Paraguay.</p>
                        </div>
                        <div className="faq-item bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                            <h3 className="text-lg font-semibold text-iguazu-dark mb-2">¿Cuál es la mejor época para visitar?</h3>
                            <p className="text-gray-700">La primavera (septiembre a noviembre) y el otoño (marzo a mayo) ofrecen un clima agradable y menos multitudes.</p>
                        </div>
                        <div className="faq-item bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                            <h3 className="text-lg font-semibold text-iguazu-dark mb-2">¿Qué actividades no me puedo perder?</h3>
                            <p className="text-gray-700">El paseo en lancha cerca de la Garganta del Diablo, las caminatas por los senderos y las vistas panorámicas desde ambos lados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </main>
        
    )
}