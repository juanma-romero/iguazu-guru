import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function CataratasArgentinaPage() {
  const t = useTranslations('atraccionesCataArg.0');

  const formatPrice = (price) => {
    return `${price.moneda} ${price.valor.toLocaleString()}`;
  };

  const formatSchedule = (schedule) => {
    const days = schedule.dias.map(day => {
      const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
      return dayNames[day];
    }).join(', ');
    return `${days}: ${schedule.apertura} - ${schedule.cierre}${schedule.nota ? ` (${schedule.nota})` : ''}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-iguazu-teal to-iguazu-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('nombre_atraccion')}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            {t('descripcion_corta')}
          </p>
        </div>
      </section>

      {/* Horarios Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-iguazu-dark mb-8">{t('horariosTitulo')}</h2>
          <div className="max-w-4xl mx-auto">
            {t.raw('horarios').map((schedule, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-lg text-iguazu-dark">{formatSchedule(schedule)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precios Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-iguazu-dark mb-8">{t('preciosTitulo')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {t.raw('precios').map((price, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-bold text-iguazu-dark mb-2">{price.tipo_ticket}</h3>
                <p className="text-2xl font-bold text-iguazu-teal mb-2">{formatPrice(price)}</p>
                {price.nota && <p className="text-sm text-gray-600">{price.nota}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación y Cómo Llegar */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-iguazu-dark mb-8">{t('ubicacionComoLlegarTitulo')}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-iguazu-dark mb-2">{t('ubicacionSubtitulo')}</h3>
              <p className="text-lg text-gray-700">{t('ubicacion')}</p>
              <p className="text-sm text-gray-600 mt-2">
                {t('coordenadasLabel')}: -25.6953, -54.4367
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-iguazu-dark mb-2">{t('comoLlegarSubtitulo')}</h3>
              <p className="text-lg text-gray-700">{t('como_llegar')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips y Contacto */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-iguazu-dark mb-4">{t('tipsTitulo')}</h3>
              <p className="text-gray-700">{t('tips')}</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-iguazu-dark mb-4">{t('contactoTitulo')}</h3>
              {t.raw('contacto').email && (
                <p className="text-gray-700 mb-2">
                  <strong>{t('emailLabel')}</strong> {t.raw('contacto').email}
                </p>
              )}
              {t.raw('contacto').telefono && (
                <p className="text-gray-700 mb-2">
                  <strong>{t('telefonoLabel')}</strong> {t.raw('contacto').telefono}
                </p>
              )}
              {t.raw('contacto').whatsapp && (
                <p className="text-gray-700 mb-2">
                  <strong>{t('whatsappLabel')}</strong> {t.raw('contacto').whatsapp}
                </p>
              )}
              <a
                href={t('web_oficial_tickets')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-iguazu-teal hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-md transition"
              >
                {t('comprarTicketsBtn')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
