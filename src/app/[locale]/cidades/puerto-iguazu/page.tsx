
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Puerto() {
    const t = useTranslations();
    // Helper function to convert translation objects to arrays
    const getItemsArray = (section: any) => {
        if (!section) return [];
        return Object.values(section);
    };

    // Get translated data
    const dondeIrItems = getItemsArray(t.raw('dondeIrPuerto'));
    const alojamientoItems = getItemsArray(t.raw('alojamientoPuerto'));
    const gastronomiaItems = getItemsArray(t.raw('gastronomiaPuerto'));

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`text-lg ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                ★
            </span>
        ));
    };

    const formatPrice = (price: any) => {
        if (price.value === 0) return 'Gratuito';
        return `${price.currency} ${price.value.toLocaleString()}`;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-iguazu-teal to-iguazu-dark text-white py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('NombrePuerto')}</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                        {t('subTitlePuerto')}
                    </p>
                </div>
            </section>

            {/* Dónde Ir Section */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-iguazu-dark mb-2">{t('seccionesPuerto.dondeIr.titulo')}</h2>
                    <p className="text-center text-iguazu-teal mb-8 max-w-2xl mx-auto">
                        {t('seccionesPuerto.dondeIr.descripcion')}
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {dondeIrItems.map((item: any, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative h-48">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-iguazu-dark mb-2">{item.name}</h3>
                                    <p className="text-iguazu-teal mb-3 text-sm">{item.description}</p>
                                    <div className="flex items-center mb-2">
                                        {renderStars(item.rating)}
                                        <span className="ml-2 text-sm text-gray-600">({item.rating})</span>
                                    </div>
                                    <div className="text-sm text-gray-600 mb-2">
                                        <strong>{t('etiquetasPuerto.precio')}</strong> {formatPrice(item.price)}
                                    </div>
                                    <div className="text-sm text-gray-600 mb-2">
                                        <strong>{t('etiquetasPuerto.horarios')}</strong> {item.openingHours}
                                    </div>
                                    <div className="text-sm text-gray-600 mb-4">
                                        <strong>{t('etiquetasPuerto.ubicacion')}</strong> {item.location}
                                    </div>
                                    <button className="w-full bg-iguazu-teal hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-md transition">
                                        {t('botonesPuerto.verMas')}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Alojamiento Section */}
            <section className="py-12 md:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-iguazu-dark mb-2">{t('seccionesPuerto.alojamiento.titulo')}</h2>
                    <p className="text-center text-iguazu-teal mb-8 max-w-2xl mx-auto">
                        {t('seccionesPuerto.alojamiento.descripcion')}
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {alojamientoItems.map((item: any, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative h-48">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-iguazu-dark mb-2">{item.name}</h3>
                                    <p className="text-iguazu-teal mb-3 text-sm">{item.description}</p>
                                    <div className="flex items-center mb-2">
                                        {renderStars(item.rating)}
                                        <span className="ml-2 text-sm text-gray-600">({item.rating})</span>
                                    </div>
                                    <div className="text-sm text-gray-600 mb-2">
                                        <strong>{t('etiquetasPuerto.precio')}</strong> {formatPrice(item.price)}
                                    </div>
                                    <div className="text-sm text-gray-600 mb-3">
                                        <strong>{t('etiquetasPuerto.ubicacion')}</strong> {item.location}
                                    </div>
                                    <div className="mb-4">
                                        <strong className="text-sm text-gray-700">{t('etiquetasPuerto.servicios')}</strong>
                                        <div className="flex flex-wrap gap-1 mt-1">
                                            {item.amenities.map((amenity: string, amenityIndex: number) => (
                                                <span key={amenityIndex} className="bg-iguazu-teal bg-opacity-10 text-iguazu-teal text-xs px-2 py-1 rounded">
                                                    {amenity}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <button className="w-full bg-iguazu-teal hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-md transition">
                                        {t('botonesPuerto.reservar')}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gastronomía Section */}
            <section className="py-12 mb-6 md:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-iguazu-dark mb-2">{t('seccionesPuerto.gastronomia.titulo')}</h2>
                    <p className="text-center text-iguazu-teal mb-8 max-w-2xl mx-auto">
                        {t('seccionesPuerto.gastronomia.descripcion')}
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {gastronomiaItems.map((item: any, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative h-48">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-iguazu-dark mb-2">{item.name}</h3>
                                    <p className="text-iguazu-teal mb-3 text-sm">{item.description}</p>
                                    <div className="flex items-center mb-2">
                                        {renderStars(item.rating)}
                                        <span className="ml-2 text-sm text-gray-600">({item.rating})</span>
                                    </div>
                                    <div className="text-sm text-gray-600 mb-2">
                                        <strong>{t('etiquetasPuerto.precio')}</strong> {formatPrice(item.price)}
                                    </div>
                                    <div className="text-sm text-gray-600 mb-2">
                                        <strong>{t('etiquetasPuerto.cocina')}</strong> {item.cuisine}
                                    </div>
                                    <div className="text-sm text-gray-600 mb-4">
                                        <strong>{t('etiquetasPuerto.ubicacion')}</strong> {item.location}
                                    </div>
                                    <button className="w-full bg-iguazu-teal hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-md transition">
                                        {t('botonesPuerto.verMenu')}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
