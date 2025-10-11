import { useTranslations } from 'next-intl';

interface EntradasModalProps {
  onClose: () => void;
}

const EntradasModal: React.FC<EntradasModalProps> = ({ onClose }) => {
  const t = useTranslations('');

  // Define the attractions data with their corresponding translation keys
  const attractions = [
    {
      titleKey: 'valores.ent-titulo-parque-nacional-iguazu',
      priceExtKey: 'valores.ent-precio-ext-parque-nacional-iguazu',
      priceNatKey: 'valores.ent-precio-mercosur-parque-nacional-iguazu',
      webKey: 'valores.ent-web-parque-nacional-iguazu',
    },
    {
      titleKey: 'valores.ent-titulo-guira-oga',
      priceExtKey: 'valores.ent-precio-ext-guira-oga',
      priceNatKey: 'valores.ent-precio-mercosur-guira-oga',
      webKey: 'valores.ent-web-guira-oga',
    },
    {
      titleKey: 'valores.ent-titulo-la-aripuca',
      priceExtKey: 'valores.ent-precio-ext-la-aripuca',
      priceNatKey: 'valores.ent-precio-mercosur-la-aripuca',
      webKey: 'valores.ent-web-la-aripuca',
    },
    {
      titleKey: 'valores.ent-titulo-icebar-iguazu',
      priceExtKey: 'valores.ent-precio-ext-icebar-iguazu',
      priceNatKey: 'valores.ent-precio-mercosur-icebar-iguazu',
      webKey: 'valores.ent-web-icebar-iguazu',
    },
    {
      titleKey: 'valores.ent-titulo-parque-nacional-do-iguacu',
      priceExtKey: 'valores.ent-precio-ext-parque-nacional-do-iguacu',
      priceNatKey: 'valores.ent-precio-mercosur-parque-nacional-do-iguacu',
      webKey: 'valores.ent-web-parque-nacional-do-iguacu',
    },
    {
      titleKey: 'valores.ent-titulo-parque-das-aves',
      priceExtKey: 'valores.ent-precio-ext-parque-das-aves',
      priceNatKey: 'valores.ent-precio-mercosur-parque-das-aves',
      webKey: 'valores.ent-web-parque-das-aves',
    },
    {
      titleKey: 'valores.ent-titulo-templo-budista-chen-tien',
      priceExtKey: 'valores.ent-precio-ext-templo-budista-chen-tien',
      priceNatKey: 'valores.ent-precio-mercosur-templo-budista-chen-tien',
      webKey: 'valores.ent-web-templo-budista-chen-tien',
    },
    {
      titleKey: 'valores.ent-titulo-marco-das-tres-fronteiras',
      priceExtKey: 'valores.ent-precio-ext-marco-das-tres-fronteiras',
      priceNatKey: 'valores.ent-precio-mercosur-marco-das-tres-fronteiras',
      webKey: 'valores.ent-web-marco-das-tres-fronteiras',
    },
     {
      titleKey: 'valores.ent-titulo-represa-de-itaipu',
      priceExtKey: 'valores.ent-precio-ext-represa-de-itaipu',
      priceNatKey: 'valores.ent-precio-mercosur-represa-de-itaipu',
      webKey: 'valores.ent-web-represa-de-itaipu',
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{t('titulo-modal-entradas')}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 dark:hover:text-white text-2xl">&times;</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {attractions.map((attraction, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                  <a href={`http://${t(attraction.webKey)}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
                    {t(attraction.titleKey)}
                    {/* Simple text indicator for link */}
                    <span className="text-xs ml-1 text-gray-500 dark:text-gray-400">(link)</span>
                  </a>
                </h3>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                  <span className='font-bold'>{t('campos.ent-precio-ext')}:</span> {t(attraction.priceExtKey)}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className='font-bold'>{t('campos.ent-precio-mercosur')}:</span> {t(attraction.priceNatKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntradasModal;
