import LocaleSwitcher from './LocaleSwitcher';
import CurrencySwitcher from './CurrencySwitcherSelect';
import Image from 'next/image';

export default function Header() {  
  return (
    <header className="px-6 pt-8 pb-4">
      <div className="flex items-center justify-between mb-4">
      <Image
          src="/logo1.png" // Reemplaza con la ruta correcta a tu logo en la carpeta 'public'
          alt="Logo de Iguazu Guru"
          width={50} // Ajusta el ancho según necesites
          height={50}  // Ajusta la altura según necesites
          //className="h-8 w-auto"  Opcional: ajusta el tamaño con clases de Tailwind (h-8 es un ejemplo)
        />
        <div className="flex items-center space-x-4"> 
          <CurrencySwitcher />
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}