import LocaleSwitcher from './LocaleSwitcher';
import CurrencySwitcher from './CurrencySwitcherSelect';
import Image from 'next/image';

export default function Header() {  
  return (
    <header className="px-6 pt-8 pb-4">
      <div className="flex items-center justify-between mb-4">
      <Image
          src="/favicon.png"
          alt="Logo de Iguazu Guru"
          width={50} 
          height={50}           
        />
        <div className="flex items-center space-x-4"> 
          <CurrencySwitcher />
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}