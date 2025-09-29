import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

export default function GuiaCruzaFrontera() {
    const t = useTranslations('');

    return (
        <main className="container mx-auto px-4 py-8 md:py-12">
            <article className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold text-iguazu-dark mb-6">
                    {t('guia_cruza_frontera_h1')}
                </h1>

                <section id="introduccion" className="mb-10">
                    <h2 className="text-3xl font-bold text-iguazu-dark mb-4">
                        {t('guia_cruza_frontera_intro_titulo')}
                    </h2>
                    <h2 className="text-2xl font-bold text-iguazu-dark mb-4">
                        {t('guia_cruza_frontera_intro_subtitulo')}
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">
                        {t('guia_cruza_frontera_intro_parrafo1')}
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        {t('guia_cruza_frontera_intro_parrafo2')}
                    </p>
                    <hr className="border-t border-gray-300 my-8" />
                </section>

                <section id="lista-verificacion-rapida" className="mb-10">
                    <h2 className="text-2xl font-bold text-iguazu-dark mb-4">
                        {t('guia_cruza_frontera_lista_verificacion_titulo')}
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        {t('guia_cruza_frontera_lista_verificacion_descripcion')}
                    </p>
                    <div className="overflow-x-auto mb-8">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                            <thead>
                                <tr className="bg-iguazu-light text-iguazu-dark">
                                    <th className="py-3 px-4 text-left font-semibold border-b">{t('guia_cruza_frontera_tabla_nacionalidad')}</th>
                                    <th className="py-3 px-4 text-left font-semibold border-b">{t('guia_cruza_frontera_tabla_argentina')}</th>
                                    <th className="py-3 px-4 text-left font-semibold border-b">{t('guia_cruza_frontera_tabla_brasil')}</th>
                                    <th className="py-3 px-4 text-left font-semibold border-b">{t('guia_cruza_frontera_tabla_paraguay')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 font-semibold">{t('guia_cruza_frontera_mercosur_asociados')}</td>
                                    <td className="py-3 px-4">{t('guia_cruza_frontera_documento_identidad')}</td>
                                    <td className="py-3 px-4">{t('guia_cruza_frontera_documento_identidad')}</td>
                                    <td className="py-3 px-4">{t('guia_cruza_frontera_documento_identidad')}</td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <td className="py-3 px-4 font-semibold">{t('guia_cruza_frontera_eeuu_canada_australia')}</td>
                                    <td className="py-3 px-4">{t('guia_cruza_frontera_pasaporte_valido')}</td>
                                    <td className="py-3 px-4">{t('guia_cruza_frontera_pasaporte_valido_visa_brasil')}</td>
                                    <td className="py-3 px-4">{t('guia_cruza_frontera_pasaporte_valido_fiebre')}</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 font-semibold">{t('guia_cruza_frontera_union_europea')}</td>
                                    <td className="py-3 px-4">{t('guia_cruza_frontera_pasaporte_valido')}</td>
                                    <td className="py-3 px-4">{t('guia_cruza_frontera_pasaporte_valido')}</td>
                                    <td className="py-3 px-4">{t('guia_cruza_frontera_pasaporte_valido_fiebre')}</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="py-3 px-4 font-semibold">{t('guia_cruza_frontera_mexico')}</td>
                                    <td className="py-3 px-4">{t('guia_cruza_frontera_pasaporte_valido')}</td>
                                    <td className="py-3 px-4">{t('guia_cruza_frontera_pasaporte_valido')}</td>
                                    <td className="py-3 px-4">{t('guia_cruza_frontera_pasaporte_valido_fiebre')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr className="border-t border-gray-300 my-8" />
                </section>

                <section id="niveles-viajeros" className="mb-10">
                    <h2 className="text-2xl font-bold text-iguazu-dark mb-4">
                        {t('guia_cruza_frontera_niveles_viajeros_titulo')}
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">
                        {t('guia_cruza_frontera_niveles_viajeros_descripcion')}
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        {t('guia_cruza_frontera_niveles_viajeros_distincion')}
                    </p>
                    <ol className="list-decimal list-inside text-lg text-gray-700 mb-6 space-y-2">
                        <li>{t('guia_cruza_frontera_ciudadanos_mercosur')}</li>
                        <p className="ml-6 text-base text-gray-600">
                            {t('guia_cruza_frontera_mercosur_detalle')}
                        </p>
                        <li>{t('guia_cruza_frontera_viajeros_resto')}</li>
                    </ol>

                    <h3 className="text-xl font-bold text-iguazu-dark mb-3">
                        {t('guia_cruza_frontera_ventaja_mercosur_titulo')}
                    </h3>
                    <p className="text-lg text-gray-700 mb-4">
                        {t('guia_cruza_frontera_ventaja_mercosur_parrafo1')}
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        {t('guia_cruza_frontera_ventaja_mercosur_parrafo2')}
                    </p>
                    <div className="overflow-x-auto mb-8">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                            <thead>
                                <tr className="bg-iguazu-light text-iguazu-dark">
                                    <th className="py-3 px-4 text-left font-semibold border-b">{t('guia_cruza_frontera_tabla_pais')}</th>
                                    <th className="py-3 px-4 text-left font-semibold border-b">{t('guia_cruza_frontera_tabla_documentos')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 font-semibold">{t('guia_cruza_frontera_argentina')}</td>
                                    <td className="py-3 px-4">{t('guia_cruza_frontera_dni_argentina')}</td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <td className="py-3 px-4 font-semibold">{t('guia_cruza_frontera_bolivia')}</td>
                                    <td className="py-3 px-4">{t('guia_cruza_frontera_cedula_bolivia')}</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 font-semibold">{t('guia_cruza_frontera_brasil')}</td>
                                    <td className="py-3 px-4">{t('guia_cruza_frontera_registro_brasil')}</td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <td className="py-3 px-4 font-semibold">{t('guia_cruza_frontera_chile')}</td>
                                    <td className="py-3 px-4">{t('guia_cruza_frontera_cedula_chile')}</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 font-semibold">{t('guia_cruza_frontera_colombia')}</td>
                                    <td className="py-3 px-4">{t('guia_cruza_frontera_cedula_colombia')}</td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <td className="py-3 px-4 font-semibold">{t('guia_cruza_frontera_ecuador')}</td>
                                    <td className="py-3 px-4">{t('guia_cruza_frontera_cedula_ecuador')}</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 font-semibold">{t('guia_cruza_frontera_paraguay')}</td>
                                    <td className="py-3 px-4">{t('guia_cruza_frontera_cedula_paraguay')}</td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <td className="py-3 px-4 font-semibold">{t('guia_cruza_frontera_peru')}</td>
                                    <td className="py-3 px-4">{t('guia_cruza_frontera_dni_peru')}</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 font-semibold">{t('guia_cruza_frontera_uruguay')}</td>
                                    <td className="py-3 px-4">{t('guia_cruza_frontera_cedula_uruguay')}</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="py-3 px-4 font-semibold">{t('guia_cruza_frontera_venezuela')}</td>
                                    <td className="py-3 px-4">{t('guia_cruza_frontera_cedula_venezuela')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-xl font-bold text-iguazu-dark mb-3">
                        {t('guia_cruza_frontera_ventaja_mercosur_titulo')}
                    </h3>
                    <p className="text-lg text-gray-700 mb-4">
                        {t('guia_cruza_frontera_ventaja_mercosur_parrafo1')}
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        {t('guia_cruza_frontera_ventaja_mercosur_parrafo2')}
                    </p>
                    <h3 className="text-xl font-bold text-iguazu-dark mb-3">
                        {t('guia_cruza_frontera_viajeros_extra_mercosur_titulo')}
                    </h3>
                    <p className="text-lg text-gray-700 mb-4">
                        {t('guia_cruza_frontera_viajeros_extra_mercosur_parrafo1')}
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        {t('guia_cruza_frontera_viajeros_extra_mercosur_parrafo2')}
                    </p>
                    <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
                        <li>
                            <strong>{t('guia_cruza_frontera_validez_pasaporte')}</strong>: {t('guia_cruza_frontera_validez_pasaporte_descripcion')}
                        </li>
                        <li>
                            <strong>{t('guia_cruza_frontera_espacio_sellos')}</strong>: {t('guia_cruza_frontera_espacio_sellos_descripcion')}
                        </li>
                    </ul>
                    <hr className="border-t border-gray-300 my-8" />
                </section>

                <section id="requisitos-ingreso" className="mb-10">
                    <h2 className="text-2xl font-bold text-iguazu-dark mb-4">
                        {t('guia_cruza_frontera_desglose_requisitos_titulo')}
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        {t('guia_cruza_frontera_desglose_requisitos_descripcion')}
                    </p>

                    <h3 className="text-xl font-bold text-iguazu-dark mb-3">
                        {t('guia_cruza_frontera_ingresar_argentina_titulo')}
                    </h3>
                    <p className="text-lg text-gray-700 mb-4">
                        {t('guia_cruza_frontera_ingresar_argentina_descripcion')}
                    </p>
                    <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
                        <li>
                            <strong>{t('guia_cruza_frontera_ciudadanos_eeuu_ue_mexico')}:</strong> {t('guia_cruza_frontera_argentina_exencion_visa')}
                        </li>
                        <li>
                            <strong>{t('guia_cruza_frontera_requisitos_generales_argentina')}:</strong> {t('guia_cruza_frontera_requisitos_generales_argentina_descripcion')}
                        </li>
                        <li>
                            <strong>{t('guia_cruza_frontera_fuentes_oficiales')}:</strong>
                            <ul className="list-disc list-inside ml-6 text-base text-gray-600 mt-2 space-y-1">
                                <li>
                                    {t('guia_cruza_frontera_direccion_migraciones_argentina')}: <a href="https://www.argentina.gob.ar/interior/migraciones/documentos-de-viaje-del-mercosur" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://www.argentina.gob.ar/interior/migraciones/documentos-de-viaje-del-mercosur</a>
                                </li>
                                <li>
                                    {t('guia_cruza_frontera_gobierno_argentina_centro_frontera')}: <a href="https://www.argentina.gob.ar/interior/centros-de-frontera/iguazu" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://www.argentina.gob.ar/interior/centros-de-frontera/iguazu</a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <h3 className="text-xl font-bold text-iguazu-dark mb-3">
                        {t('guia_cruza_frontera_ingresar_brasil_titulo')}
                    </h3>
                    <p className="text-lg text-gray-700 mb-4">
                        {t('guia_cruza_frontera_ingresar_brasil_descripcion')}
                    </p>
                    <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
                        <li>
                            {t('guia_cruza_frontera_ciudadanos_ue_mexico')}: {t('guia_cruza_frontera_brasil_exencion_visa')}
                        </li>
                        <li>
                            {t('guia_cruza_frontera_ciudadanos_eeuu_canada_australia')}:
                            <ul className="list-disc list-inside ml-6 text-base text-gray-600 mt-2 space-y-1">
                                <li>
                                    <strong>{t('guia_cruza_frontera_brasil_visa_2025')}</strong>
                                </li>
                                <li>
                                    <strong>{t('guia_cruza_frontera_portal_evisa_brasil')}</strong>: <a href="https://brazil.vfsevisa.com/" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://brazil.vfsevisa.com/</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t('guia_cruza_frontera_fuentes_oficiales')}:</strong>
                            <ul className="list-disc list-inside ml-6 text-base text-gray-600 mt-2 space-y-1">
                                <li>
                                    {t('guia_cruza_frontera_ministerio_relaciones_exteriores_brasil')}: <a href="https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/quadro-geral-de-regime-de-vistos-para-entrada-de-estrangeiros-no-brasil" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/quadro-geral-de-regime-de-vistos-para-entrada-de-estrangeiros-no-brasil</a>
                                </li>
                                <li>
                                    {t('guia_cruza_frontera_consulado_brasil_miami')}: <a href="https://www.gov.br/mre/pt-br/consulado-miami/information-about-visas-in-english" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://www.gov.br/mre/pt-br/consulado-miami/information-about-visas-in-english</a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <h3 className="text-xl font-bold text-iguazu-dark mb-3">
                        {t('guia_cruza_frontera_ingresar_paraguay_titulo')}
                    </h3>
                    <p className="text-lg text-gray-700 mb-4">
                        {t('guia_cruza_frontera_ingresar_paraguay_descripcion')}
                    </p>
                    <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
                        <li>
                            <strong>{t('guia_cruza_frontera_ciudadanos_eeuu_ue_mexico')}:</strong> {t('guia_cruza_frontera_paraguay_exencion_visa')}
                        </li>
                        <li>
                            {t('guia_cruza_frontera_requisito_sanitario_critico')}
                            <p className="ml-6 text-lg text-gray-700 mt-2">
                                {t('guia_cruza_frontera_fiebre_amarilla_parrafo1')}
                            </p>
                            <p className="ml-6 text-lg text-gray-700 mt-2">
                                {t('guia_cruza_frontera_fiebre_amarilla_parrafo2')}
                            </p>
                            <p className="ml-6 text-lg text-gray-700 mt-2">
                                {t('guia_cruza_frontera_fiebre_amarilla_parrafo3')}
                            </p>
                        </li>
                        <li>
                            <strong>{t('guia_cruza_frontera_comprobante_entrada_obligatorio')}:</strong> {t('guia_cruza_frontera_comprobante_entrada_descripcion')}
                        </li>
                        <li>
                            <strong>{t('guia_cruza_frontera_fuentes_oficiales')}:</strong>
                            <ul className="list-disc list-inside ml-6 text-base text-gray-600 mt-2 space-y-1">
                                <li>
                                    {t('guia_cruza_frontera_direccion_migraciones_paraguay')}: <a href="https://migraciones.gov.py/entrada-y-salida-del-pais/requerimientos-migratorios-de-ingreso-y-salida-del-paraguay/" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://migraciones.gov.py/entrada-y-salida-del-pais/requerimientos-migratorios-de-ingreso-y-salida-del-paraguay/</a>
                                </li>
                                <li>
                                    {t('guia_cruza_frontera_ministerio_salud_paraguay')}: <a href="https://dgvs.mspbs.gov.py/salud-del-viajero/requisitos-para-ingresar-a-paraguay/" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://dgvs.mspbs.gov.py/salud-del-viajero/requisitos-para-ingresar-a-paraguay/</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <hr className="border-t border-gray-300 my-8" />
                </section>

                <section id="cruce-brasil-argentina" className="mb-10">
                    <h2 className="text-2xl font-bold text-iguazu-dark mb-4">
                        {t('guia_cruza_frontera_cruce_brasil_argentina_titulo')}
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">
                        {t('guia_cruza_frontera_cruce_brasil_argentina_descripcion')}
                    </p>

                    <h3 className="text-xl font-bold text-iguazu-dark mb-3">
                        {t('guia_cruza_frontera_viaje_puente_tancredo')}
                    </h3>
                    <p className="text-lg text-gray-700 mb-6">
                        {t('guia_cruza_frontera_viaje_puente_descripcion')}
                    </p>

                    <h3 className="text-xl font-bold text-iguazu-dark mb-3">
                        {t('guia_cruza_frontera_proceso_dos_pasos')}
                    </h3>
                    <p className="text-lg text-gray-700 mb-4">
                        {t('guia_cruza_frontera_proceso_dos_pasos_descripcion')}
                    </p>
                    <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
                        <li>
                            <strong>{t('guia_cruza_frontera_paso1_brasil')}</strong> {t('guia_cruza_frontera_paso1_brasil_descripcion')}
                        </li>
                        <li>
                            <strong>{t('guia_cruza_frontera_paso2_argentina')}</strong> {t('guia_cruza_frontera_paso2_argentina_descripcion')}
                        </li>
                    </ul>
                    <p className="text-lg text-gray-700 mb-6">
                        {t('guia_cruza_frontera_causa_problemas')}
                    </p>

                    <h3 className="text-xl font-bold text-iguazu-dark mb-3">
                        {t('guia_cruza_frontera_opciones_logisticas')}
                    </h3>
                    <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
                        <li>
                            <strong>{t('guia_cruza_frontera_autobus_publico')}</strong>: {t('guia_cruza_frontera_autobus_publico_descripcion')}
                        </li>
                        <li>
                            <strong>{t('guia_cruza_frontera_taxi_transfer_privado')}</strong>: {t('guia_cruza_frontera_taxi_transfer_privado_descripcion')}
                        </li>
                        <li>
                            <strong>{t('guia_cruza_frontera_estimacion_tiempo')}</strong>: {t('guia_cruza_frontera_estimacion_tiempo_descripcion')}
                        </li>
                    </ul>
                    <hr className="border-t border-gray-300 my-8" />
                </section>

                <section id="excursion-ciudad-del-este" className="mb-10">
                    <h2 className="text-2xl font-bold text-iguazu-dark mb-4">
                        {t('guia_cruza_frontera_excursion_ciudad_del_este_titulo')}
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">
                        {t('guia_cruza_frontera_excursion_ciudad_del_este_descripcion')}
                    </p>

                    <h3 className="text-xl font-bold text-iguazu-dark mb-3">
                        {t('guia_cruza_frontera_ley_vs_realidad')}
                    </h3>
                    <p className="text-lg text-gray-700 mb-6">
                        {t('guia_cruza_frontera_ley_vs_realidad_descripcion')}
                    </p>

                    <h3 className="text-xl font-bold text-iguazu-dark mb-3">
                        {t('guia_cruza_frontera_transito_vecinal_fronterizo')}
                    </h3>
                    <p className="text-lg text-gray-700 mb-4">
                        {t('guia_cruza_frontera_transito_vecinal_descripcion')}
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        {t('guia_cruza_frontera_tvf_no_turistas')}
                    </p>

                    <h3 className="text-xl font-bold text-iguazu-dark mb-3">
                        {t('guia_cruza_frontera_obligacion_legal_turista')}
                    </h3>
                    <p className="text-lg text-gray-700 mb-4">
                        {t('guia_cruza_frontera_obligacion_legal_descripcion')}
                    </p>
                    <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
                        <li>
                            <strong>{t('guia_cruza_frontera_ley')}</strong> {t('guia_cruza_frontera_ley_descripcion')}
                        </li>
                        <li>
                            <strong>{t('guia_cruza_frontera_riesgo')}</strong> {t('guia_cruza_frontera_riesgo_descripcion')}
                            <ol className="list-decimal list-inside ml-6 text-base text-gray-600 mt-2 space-y-1">
                                <li>
                                    <strong>{t('guia_cruza_frontera_salida_otro_punto')}</strong> {t('guia_cruza_frontera_salida_otro_punto_descripcion')}
                                </li>
                                <li>
                                    <strong>{t('guia_cruza_frontera_interaccion_autoridades')}</strong> {t('guia_cruza_frontera_interaccion_autoridades_descripcion')}
                                </li>
                            </ol>
                        </li>
                    </ul>
                    <p className="text-lg text-gray-700 mb-6">
                        {t('guia_cruza_frontera_asimetria_riesgo')}
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        {t('guia_cruza_frontera_consejo_experto')}
                    </p>
                    <hr className="border-t border-gray-300 my-8" />
                </section>

                <section id="links">
                    <h3 className="text-xl font-bold text-iguazu-dark mb-4">{t('guia_cruza_frontera_links_titulo')}</h3>
                    <ol className="list-decimal list-inside text-lg text-gray-700 space-y-2">
                        <li>
                            Circulación de Personas - MERCOSUR, accessed September 10, 2025, <a href="https://www.mercosur.int/ciudadania/estatuto-ciudadania-mercosur/1-circulacion-de-personas/" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://www.mercosur.int/ciudadania/estatuto-ciudadania-mercosur/1-circulacion-de-personas/</a>
                        </li>
                        <li>
                            MERCOSUR/CMC/DEC. Nº 18/08 DOCUMENTOS DE VIAJE DE LOS ESTADOS PARTES DEL MERCOSUR Y ESTADOS ASOCIADOS VISTO - SICE - OAS, accessed September 10, 2025, <a href="http://www.sice.oas.org/trade/mrcsrs/decisions/dec1808s.pdf" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">http://www.sice.oas.org/trade/mrcsrs/decisions/dec1808s.pdf</a>
                        </li>
                        <li>
                            Documentos de viaje del MERCOSUR - Argentina.gob.ar, accessed September 10, 2025, <a href="https://www.argentina.gob.ar/interior/migraciones/documentos-de-viaje-del-mercosur" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://www.argentina.gob.ar/interior/migraciones/documentos-de-viaje-del-mercosur</a>
                        </li>
                        <li>
                            Documentos de Viaje Válidos del Mercosur - Migraciones, accessed September 10, 2025, <a href="https://migraciones.gov.py/documentos-de-viaje-validos-del-mercosur/" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://migraciones.gov.py/documentos-de-viaje-validos-del-mercosur/</a>
                        </li>
                        <li>
                            acuerdo sobre documentos de viaje y de retorno - de los estados partes del mercosur y estados asociados - Normas, accessed September 10, 2025, <a href="https://normas.mercosur.int/simfiles/normativas/60320_DEC_046-2015_ES_AcuerdoDocumentoViajeRetorno.pdf" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://normas.mercosur.int/simfiles/normativas/60320_DEC_046-2015_ES_AcuerdoDocumentoViajeRetorno.pdf</a>
                        </li>
                        <li>
                            segundo acuerdo modificatorio del anexo del acuerdo sobre documentos de viaje de los estados partes del mercosur y - SICE - OAS, accessed September 10, 2025, <a href="http://www.sice.oas.org/trade/mrcsrs/decisions/DEC_037-2014_s.pdf" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">http://www.sice.oas.org/trade/mrcsrs/decisions/DEC_037-2014_s.pdf</a>
                        </li>
                        <li>
                            Documentación para ingresar a Argentina | Pasaporte y Visa - Buenos Aires Hostels, accessed September 10, 2025, <a href="https://ba-h.com.ar/documentacion-para-ingresar-a-argentina-pasaporte-y-visa/" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://ba-h.com.ar/documentacion-para-ingresar-a-argentina-pasaporte-y-visa/</a>
                        </li>
                        <li>
                            Argentina International Travel Information, accessed September 10, 2025, <a href="https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Argentina.html" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Argentina.html</a>
                        </li>
                        <li>
                            Brazil International Travel Information, accessed September 10, 2025, <a href="https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Brazil.html" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Brazil.html</a>
                        </li>
                        <li>
                            Información Trámites en Frontera - Argentina.gob.ar, accessed September 10, 2025, <a href="https://www.argentina.gob.ar/interior/asuntos-tecnicos-de-fronteras/informacion-tramites-en-frontera" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://www.argentina.gob.ar/interior/asuntos-tecnicos-de-fronteras/informacion-tramites-en-frontera</a>
                        </li>
                        <li>
                            Visa policy of Argentina - Wikipedia, accessed September 10, 2025, <a href="https://en.wikipedia.org/wiki/Visa_policy_of_Argentina" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://en.wikipedia.org/wiki/Visa_policy_of_Argentina</a>
                        </li>
                        <li>
                            News - Argentina Visa: Who Needs to Apply for ... - Visit Argentina, accessed September 10, 2025, <a href="https://www.argentina.travel/en/news/argentina-visa-who-needs-to-apply-for-tourism-travel-what-are-the-requirements-and-how-to-apply" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://www.argentina.travel/en/news/argentina-visa-who-needs-to-apply-for-tourism-travel-what-are-the-requirements-and-how-to-apply</a>
                        </li>
                        <li>
                            Iguazú - Argentina.gob.ar, accessed September 10, 2025, <a href="https://www.argentina.gob.ar/interior/centros-de-frontera/iguazu" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://www.argentina.gob.ar/interior/centros-de-frontera/iguazu</a>
                        </li>
                        <li>
                            Quadro Geral de Regime de Vistos para o Brasil - COP30, accessed September 10, 2025, <a href="https://cop30.br/pt-br/servicos-da-cop30/visto/2025-04_quadrogeral-regime-de-vistos_pt.pdf/@@download/file" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://cop30.br/pt-br/servicos-da-cop30/visto/2025-04_quadrogeral-regime-de-vistos_pt.pdf/@@download/file</a>
                        </li>
                        <li>
                            Visto Brasileiro para Estrangeiros - Gazeta Brazilian News, accessed September 10, 2025, <a href="https://www.gazetanews.com/imigracao/duvidas-frequentes/visto-brasileiro-para-estrangeiros" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://www.gazetanews.com/imigracao/duvidas-frequentes/visto-brasileiro-para-estrangeiros</a>
                        </li>
                        <li>
                            VISAS — Ministério das Relações Exteriores - Portal Gov.br, accessed September 10, 2025, <a href="https://www.gov.br/mre/pt-br/consulado-miami/information-about-visas-in-english" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://www.gov.br/mre/pt-br/consulado-miami/information-about-visas-in-english</a>
                        </li>
                        <li>
                            Brazil Visa - Price, Requirements and Application - VisaHQ, accessed September 10, 2025, <a href="https://www.visahq.com/brazil/" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://www.visahq.com/brazil/</a>
                        </li>
                        <li>
                            Quadro Geral de Regime de Vistos para entrada de estrangeiros no Brasil - Portal Gov.br, accessed September 10, 2025, <a href="https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/quadro-geral-de-regime-de-vistos-para-entrada-de-estrangeiros-no-brasil" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/quadro-geral-de-regime-de-vistos-para-entrada-de-estrangeiros-no-brasil</a>
                        </li>
                        <li>
                            REQUISITOS SANITARIOS DE INGRESO AL PARAGUAY, accessed September 10, 2025, <a href="https://jji2023.una.py/wp-content/uploads/2023/05/Requisitos_Pais_AUGM.pdf" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://jji2023.una.py/wp-content/uploads/2023/05/Requisitos_Pais_AUGM.pdf</a>
                        </li>
                        <li>
                            Requerimientos Migratorios de Ingreso y Salida del Paraguay ..., accessed September 10, 2025, <a href="https://migraciones.gov.py/entrada-y-salida-del-pais/requerimientos-migratorios-de-ingreso-y-salida-del-paraguay/" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://migraciones.gov.py/entrada-y-salida-del-pais/requerimientos-migratorios-de-ingreso-y-salida-del-paraguay/</a>
                        </li>
                        <li>
                            Requisitos sanitarios de entrada y salida del Paraguay - Migraciones, accessed September 10, 2025, <a href="https://migraciones.gov.py/requisitos-sanitarios-de-entrada-y-salida-del-paraguay/" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://migraciones.gov.py/requisitos-sanitarios-de-entrada-y-salida-del-paraguay/</a>
                        </li>
                        <li>
                            Requisitos para ingresar a Paraguay - DGVS, accessed September 10, 2025, <a href="https://dgvs.mspbs.gov.py/salud-del-viajero/requisitos-para-ingresar-a-paraguay/" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://dgvs.mspbs.gov.py/salud-del-viajero/requisitos-para-ingresar-a-paraguay/</a>
                        </li>
                        <li>
                            Iguazú - Foz de Iguazú | Detalle del paso de frontera | Argentina.gob.ar, accessed September 10, 2025, <a href="https://www.argentina.gob.ar/seguridad/pasosinternacionales/detalle/ruta/2/Iguaz%C3%BA-Foz-de-Iguaz%C3%BA" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://www.argentina.gob.ar/seguridad/pasosinternacionales/detalle/ruta/2/Iguaz%C3%BA-Foz-de-Iguaz%C3%BA</a>
                        </li>
                        <li>
                            Border crossing from Brazil to Argentina | IguazuFalls.Travel, accessed September 10, 2025, <a href="https://iguazufalls.travel/crossing-borders/brazil-to-argentina/" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://iguazufalls.travel/crossing-borders/brazil-to-argentina/</a>
                        </li>
                        <li>
                            Crossing the borders at Iguazu - The Barefoot Backpacker, accessed September 10, 2025, <a href="https://barefoot-backpacker.com/crossing-the-borders-at-iguazu/" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://barefoot-backpacker.com/crossing-the-borders-at-iguazu/</a>
                        </li>
                        <li>
                            Iguazu Border Crossings | IguazuFalls.Travel, accessed September 10, 2025, <a href="https://iguazufalls.travel/crossing-borders/" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://iguazufalls.travel/crossing-borders/</a>
                        </li>
                        <li>
                            Can I walk between the Argentine and Brazilian sides? | iguazufalls.com, accessed September 10, 2025, <a href="https://iguazufalls.com/travel-guide/can-i-walk-between-the-argentine-and-brazilian-sides/" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://iguazufalls.com/travel-guide/can-i-walk-between-the-argentine-and-brazilian-sides/</a>
                        </li>
                        <li>
                            Crossing the Border from Paraguay to Brazil - LaidBack Trip, accessed September 10, 2025, <a href="https://www.laidbacktrip.com/posts/how-to-cross-borders-paraguay-to-brazil" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://www.laidbacktrip.com/posts/how-to-cross-borders-paraguay-to-brazil</a>
                        </li>
                        <li>
                            Ley Nº 6709 / APRUEBA EL ACUERDO ENTRE LA REPÚBLICA ..., accessed September 10, 2025, <a href="https://www.bacn.gov.py/leyes-paraguayas/9516/ley-n-6709-aprueba-el-acuerdo-entre-la-republica-del-paraguay-y-la-republica-federativa-del-brasil-sobre-localidades-fronterizas-vinculadas" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://www.bacn.gov.py/leyes-paraguayas/9516/ley-n-6709-aprueba-el-acuerdo-entre-la-republica-del-paraguay-y-la-republica-federativa-del-brasil-sobre-localidades-fronterizas-vinculadas</a>
                        </li>
                        <li>
                            Acuerdo Operativo sobre Tránsito Vecinal Fronterizo - Migraciones, accessed September 10, 2025, <a href="http://www.migraciones.gov.ar/lib/consultas_infomig/verPdf.php?pk=AAArnsAAAAAAXrDAAH&o=infomig&n=Acta&f=01/07/2010" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">http://www.migraciones.gov.ar/lib/consultas_infomig/verPdf.php?pk=AAArnsAAAAAAXrDAAH&o=infomig&n=Acta&f=01/07/2010</a>
                        </li>
                        <li>
                            Ley Nº 6984 / DE MIGRACIONES - Biblioteca y Archivo del Congreso Nacional, accessed September 10, 2025, <a href="https://www.bacn.gov.py/leyes-paraguayas/10973/ley-n-6984-de-migraciones" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://www.bacn.gov.py/leyes-paraguayas/10973/ley-n-6984-de-migraciones</a>
                        </li>
                        <li>
                            Resolución DNM N° 656.. - Migraciones, accessed September 10, 2025, <a href="https://migraciones.gov.py/uplmoo9eib8eefou3ooze4y/2024/10/19_RESOLUCION_Ndeg656.pdf" target="_blank" rel="noopener noreferrer" className="text-iguazu-teal hover:underline">https://migraciones.gov.py/uplmoo9eib8eefou3ooze4y/2024/10/19_RESOLUCION_Ndeg656.pdf</a>
                        </li>
                    </ol>
                </section>
            </article>
        </main>
    );
}
