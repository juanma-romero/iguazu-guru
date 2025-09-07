import Hero from './home/Hero';
import Atracciones from './home/Atracciones';
import Ciudades from './home/Ciudades';
import Blog from './home/Blog';
import FAQ from './home/FAQ';

export default function Home() {
    return (
        <>
            <main className="pb-24">
                <Hero />
                <Atracciones />                
                <Ciudades />                
                <Blog />
                <FAQ />
                
            </main>

              </>
    );
}
