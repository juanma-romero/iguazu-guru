'use client'
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import AdondeIr from './AdondeIr'
import Alojamiento from './Alojamiento'
import Transporte from './Transporte'
import Compras from './Compras'
import Gastro from './Gastro'
import { FaMapMarkedAlt, FaBed, FaBus, FaShoppingBag, FaUtensils, FaPlane } from 'react-icons/fa';

const VerticalTabItem = ({
  icon,
  isSelected,
  onClick,
}: {
  icon: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-center p-4 border-b border-gray-200 cursor-pointer transition-all duration-300 ease-in-out relative
        ${isSelected ? 'bg-slate-700 z-10' : 'bg-white'}
        ${isSelected ? 'border-r-0' : 'border-r border-gray-200'}
      `}
    >
      {/* When selected, we add an extra div that extends into the content area to create the seamless effect */}
      {isSelected && (
        <div className="absolute top-0 bottom-0 right-0 w-1 bg-slate-700 translate-x-full z-10"></div>
      )}
      <div className={`w-8 h-8 flex items-center justify-center text-xl ${
        isSelected ? 'text-[#D6A266]' : 'text-gray-500'
      }`}>
        {icon}
      </div>
    </div>
  )
};

const CdePage = () => {
  
  const [activeTab, setActiveTab] = useState<string>('adondeir');

  const tabItems = [
    { id: 'adondeir', icon: <FaMapMarkedAlt />, component: <AdondeIr />, title: 'atraccion' },
    { id: 'alojamiento', icon: <FaBed />, component: <Alojamiento />, title: 'hotel' },
    { id: 'transporte', icon: <FaBus />, component: <Transporte />, title: 'bondi' },
    { id: 'compras', icon: <FaShoppingBag />, component: <Compras />, title: 'shoping' },
    { id: 'gastro', icon: <FaUtensils />, component: <Gastro />, title: 'gastro' },
    {id: 'vuelos', icon: <FaPlane />, component: <Gastro />, title: 'vuelos'}
  ];

  const handleTabClick = (id: string) => {
    setActiveTab(id);
  };

  const activeComponent = tabItems.find(item => item.id === activeTab)?.component;
  const activeTitle = tabItems.find(item => item.id === activeTab)?.title;

  return (
    <>
      <div className="w-11/12 mx-auto pt-4">
        <button 
          onClick={() => window.location.href = '/'}
          className="bg-yellow-600 text-white h-12 w-40 rounded-full hover:bg-yellow-700 flex items-center justify-center transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Volver a inicio
        </button>
      </div>
      <div className="flex w-11/12 mx-auto my-5 bg-white  rounded-lg shadow-md overflow-hidden min-h-[600px]">
      {/* Vertical tabs sidebar - icons only */}
      <div className="w-16 border-r border-gray-200">
        
        <div>
          {tabItems.map((item) => (
            <VerticalTabItem
              key={item.id}
              icon={item.icon}
              isSelected={item.id === activeTab}
              onClick={() => handleTabClick(item.id)}
            />
          ))}
        </div>
      </div>
      
      {/* Content area */}
      <div className="flex-1 p-6 bg-slate-700">
        <h2 className="text-2xl font-bold mb-6 text-[#D6A266]">
          {activeTitle}
        </h2>
        <div className="w-full">
          {activeComponent}
        </div>
      </div>
    </div>
    </>
    
  );
};

export default CdePage;