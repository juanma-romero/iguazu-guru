'use client'
import Hero from './home/Hero';
import Infaltables from './home/Infaltables';
import Atracciones from './home/Atracciones';
import Ciudades from './home/Ciudades';
import Blog from './home/Blog';

export default function NewHome() {
    return (
        <main>
            <Hero />
            <Infaltables />
            <Atracciones />
            <section id='ciudades' className='cities-section bg-iguazu-light py-12 md:py-16'>
                <Ciudades />
            </section>
            <Blog />
        </main>
    );
}
