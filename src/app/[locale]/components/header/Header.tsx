import LocaleSwitcher from './LocaleSwitcher';

export default function Header() {  
  
  return (
    <header className="px-6 pt-8 pb-4">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xl text-gray-300">Iguazu Guru</p>
        <div className="flex items-center space-x-4"> 
          <LocaleSwitcher />
        </div>
      </div>
      
    </header>
  );
}