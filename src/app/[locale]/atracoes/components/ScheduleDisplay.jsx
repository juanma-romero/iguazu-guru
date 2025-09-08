import { useTranslations } from "next-intl";

const ScheduleDisplay = ({ horarios }) => {

  {/* Prueba next-intl */}
  const t = useTranslations();

  if (!horarios || horarios.length === 0) return null;

  const getDaysText = (days) => {
    const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    if (days.length === 7) return 'Todos los días';
    return days.map(day => dayNames[day]).join(', ');
  };

  return (
    <div>
      <h3 className="font-semibold text-gray-700 mb-2">🕒 Horarios</h3>
      {/* Prueba next-intl */}
        <p>{t('atraccionesBrasil.nombre_atraccion')}</p>
      <div className="space-y-2">

        

        {horarios.map((horario, index) => (
          <div key={index} className="text-sm">
            <p className="text-gray-600">{getDaysText(horario.dias)}</p>
            <p className="font-medium text-gray-800">
              {horario.apertura} - {horario.cierre}
            </p>
            {horario.nota && (
              <p className="text-xs text-gray-500 italic">{horario.nota}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleDisplay;
