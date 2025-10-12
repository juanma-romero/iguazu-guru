import { useTranslations } from 'next-intl';

export default function GuiaEmergencias() {
    const t = useTranslations('');
    const countries = ['argentina', 'brasil', 'paraguay'] as const;

    return (
        <main className="container mx-auto px-4 py-8 md:py-12">
            <article className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold text-iguazu-dark mb-6">
                    {t('titulo-emergencias')}
                </h1>

                <section id="introduccion" className="mb-10">
                    <h2 className="text-3xl font-bold text-iguazu-dark mb-4">
                        {t('intro-titulo-emergencias')}
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">
                        {t('intro-parrafo1-emergencias')}
                    </p>
                    <p className="text-lg text-gray-700">
                        {t('intro-parrafo2-emergencias')}
                    </p>
                    <hr className="border-t border-gray-300 my-8" />
                </section>

                <section id="argentina" className="mb-10">
                    <h2 className="text-2xl font-bold text-iguazu-dark mb-4 flex items-center">
                        <span className="text-3xl mr-3">🇦🇷</span> {t('argentina-titulo-emergencias')}
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                            <thead>
                                <tr className="bg-iguazu-light text-iguazu-dark">
                                    <th className="py-3 px-4 text-left font-semibold border-b">{t('tabla-th-servicio-emergencias')}</th>
                                    <th className="py-3 px-4 text-left font-semibold border-b">{t('tabla-th-contacto-emergencias')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {countries.includes('argentina') &&
                                // @ts-ignore
                                t.raw('contactos-emergencias.argentina').map((contact: { 'servicio-emergencias': string; 'numero-emergencias': string }, index: number) => (
                                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="py-3 px-4 font-semibold">{contact['servicio-emergencias']}</td>
                                        <td className="py-3 px-4">
                                            <a href={`tel:${contact['numero-emergencias'].replace(/\s/g, '')}`} className="text-iguazu-teal hover:underline">
                                                {contact['numero-emergencias']}
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section id="brasil" className="mb-10">
                    <h2 className="text-2xl font-bold text-iguazu-dark mb-4 flex items-center">
                        <span className="text-3xl mr-3">🇧🇷</span> {t('brasil-titulo-emergencias')}
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                            <thead>
                                <tr className="bg-iguazu-light text-iguazu-dark">
                                    <th className="py-3 px-4 text-left font-semibold border-b">{t('tabla-th-servico-br-emergencias')}</th>
                                    <th className="py-3 px-4 text-left font-semibold border-b">{t('tabla-th-contato-br-emergencias')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {t.raw('contactos-emergencias.brasil').map((contact: { 'servicio-emergencias': string; 'numero-emergencias': string }, index: number) => (
                                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="py-3 px-4 font-semibold">{contact['servicio-emergencias']}</td>
                                        <td className="py-3 px-4">
                                            <a href={`tel:${contact['numero-emergencias'].replace(/\s/g, '')}`} className="text-iguazu-teal hover:underline">
                                                {contact['numero-emergencias']}
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section id="paraguay" className="mb-10">
                    <h2 className="text-2xl font-bold text-iguazu-dark mb-4 flex items-center">
                        <span className="text-3xl mr-3">🇵🇾</span> {t('paraguay-titulo-emergencias')}
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                            <thead>
                                <tr className="bg-iguazu-light text-iguazu-dark">
                                    <th className="py-3 px-4 text-left font-semibold border-b">{t('tabla-th-servicio-emergencias')}</th>
                                    <th className="py-3 px-4 text-left font-semibold border-b">{t('tabla-th-contacto-emergencias')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {t.raw('contactos-emergencias.paraguay').map((contact: { 'servicio-emergencias': string; 'numero-emergencias': string }, index: number) => (
                                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="py-3 px-4 font-semibold">{contact['servicio-emergencias']}</td>
                                        <td className="py-3 px-4">
                                            <a href={`tel:${contact['numero-emergencias'].replace(/\s/g, '')}`} className="text-iguazu-teal hover:underline">
                                                {contact['numero-emergencias']}
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section id="recomendaciones">
                    <h2 className="text-2xl font-bold text-iguazu-dark mb-4">{t('recomendaciones-titulo-emergencias')}</h2>
                    <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
                        <li>
                            <strong>{t('recomendaciones-consulados-strong-emergencias')}</strong> {t('recomendaciones-consulados-p-emergencias')}
                        </li>
                        <li>
                            <strong>{t('recomendaciones-seguro-strong-emergencias')}</strong> {t('recomendaciones-seguro-p-emergencias')}
                        </li>
                        <li>
                            <strong>{t('recomendaciones-contactos-strong-emergencias')}</strong> {t('recomendaciones-contactos-p-emergencias')}
                        </li>
                    </ul>
                </section>

            </article>
        </main>
    );
}