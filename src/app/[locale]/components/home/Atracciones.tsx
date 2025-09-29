
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import Link from 'next/link'

export default function Atracciones() {
    const t = useTranslations('MainNewHome');

    return (
        <section id="atracciones" className="main-attraction bg-white py-12 md:py-16">
             <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-iguazu-dark mb-2">{t('atracciones-titulo')}</h2>
                <p className="text-center text-iguazu-teal mb-8 max-w-2xl mx-auto">{t('atracciones-descripcion')}</p>
                <p className="text-center text-iguazu-teal mb-8 max-w-2xl mx-auto">{t('atracciones-descripcion2')}</p>
                
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div className="card bg-white p-6 rounded-lg shadow-lg overflow-hidden">
                        <Image
                            src='/Gemini_Generated_delanteCascada.png'
                            alt='Cataratas del lado argentino'
                            width={300}
                            height={300}
                            className="cataArgentas"
                                    />
                        <h3 className="text-2xl font-bold text-iguazu-dark mb-2">{t('lado-argentino-titulo')}</h3><p className="text-iguazu-teal mb-4">{t('lado-argentino-descripcion')}</p><Link href="/atracoes/cataratas-argentina" className="inline-block bg-iguazu-teal hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-md transition">{t('ver-mas')}</Link>
                    </div>
                    <div className="card bg-white p-6 rounded-lg shadow-lg overflow-hidden">
                        <Image
                            src='/douglas-lopez-brasil-panoramica.jpg'
                            alt='Cataratas del lado argentino'
                            width={300}
                            height={300}
                            className="cataBrasileas"
                            />
                        <h3 className="text-2xl font-bold text-iguazu-dark mb-2">{t('lado-brasileno-titulo')}</h3><p className="text-iguazu-teal mb-4">{t('lado-brasileno-descripcion')}</p><Link href="/atracoes/cataratas-brasil" className="inline-block bg-iguazu-teal hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-md transition">{t('ver-mas')}</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
