const PriceDisplay = ({ precios }) => {
  if (!precios || precios.length === 0) return null;

  const formatCurrency = (value, currency) => {
    if (!value || !currency) return 'N/A';
    if (currency === 'ARS') {
      return `$${value.toLocaleString('es-AR')}`;
    } else if (currency === 'BRL') {
      return `R$ ${value.toLocaleString('pt-BR')}`;
    }
    return `${currency} ${value}`;
  };

  return (
    <div className="mb-4">
      <h3 className="font-semibold text-gray-700 mb-2">💰 Precios</h3>
      <div className="bg-gray-50 p-3 rounded">
        {precios.map((precio, index) => (
          <div key={index} className="flex justify-between items-center py-1">
            <span className="text-sm text-gray-600">{precio.tipo_ticket}</span>
            <span className="font-medium text-gray-800">
              {formatCurrency(precio.valor, precio.moneda)}
            </span>
          </div>
        ))}
      </div>
      {precios.some(p => p.nota) && (
        <div className="mt-2">
          {precios.filter(p => p.nota).map((precio, index) => (
            <p key={index} className="text-xs text-gray-500 italic">
              * {precio.nota}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default PriceDisplay;
