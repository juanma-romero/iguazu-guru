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
      className={`flex items-center justify-center p-4 border-b border-gray-200 cursor-pointer transition-all duration-300 ease-in-out ${
        isSelected ? 'bg-gray-100' : 'bg-white'
      }`}
    >
      <div className={`w-8 h-8 flex items-center justify-center text-xl ${
        isSelected ? 'text-[#D6A266]' : 'text-gray-500'
      }`}>
        {icon}
      </div>
    </div>
  );
};

const CdePage = () => {
  
  const [activeTab, setActiveTab] = useState<string>('adondeir');

  // Tab configuration with icon and component (removing title from display)
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
    <div className="flex w-11/12 mx-auto my-5 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden min-h-[600px]">
      {/* Vertical tabs sidebar - icons only */}
      <div className="w-16 border-r border-gray-200">
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-sm font-bold text-gray-600 text-center">CDE</h2>
        </div>
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
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-6 text-[#D6A266]">
          {activeTitle}
        </h2>
        <div className="w-full">
          {activeComponent}
        </div>
      </div>
    </div>
  );
};

export default CdePage;