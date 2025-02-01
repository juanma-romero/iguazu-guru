'use client'

export default function CurrencySwitcher({ label, selectedCurrency }: {
  label: string;
  selectedCurrency: string;
}) {
  return (
    <div className="relative">
      <select 
        className="w-full appearance-none bg-transparent py-2 px-4 text-gray-400"
        disabled
      >
        <option value="ARS" selected={selectedCurrency === 'ARS'}>Peso</option>
        <option value="BRL" selected={selectedCurrency === 'BRL'}>Real</option>
        <option value="PYG" selected={selectedCurrency === 'PYG'}>Guaraní</option>
      </select>
      <span className="absolute right-2 top-2.5 text-gray-400">▼</span>
    </div>
  )
}