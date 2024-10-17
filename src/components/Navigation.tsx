import React, { useState } from 'react';
import { Home, Search, PenSquare, Bell, User, Settings } from 'lucide-react';

type NavPosition = 'left' | 'top' | 'right' | 'bottom';

interface NavItemProps {
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, isActive, onClick }) => (
  <button
    className={`p-3 relative group transition-all duration-300 ease-in-out ${
      isActive ? 'text-white' : 'text-gray-500 hover:text-white'
    }`}
    onClick={onClick}
  >
    <div className={`absolute rounded-xl inset-0 bg-gray-700 transition-all duration-300 ease-in-out ${
      isActive ? 'opacity-40' : 'opacity-0 group-hover:opacity-50'
    }`}></div>
    <div className="relative z-10 nav-icon">{icon}</div>
  </button>
);

interface NavigationProps {
  position: NavPosition;
  onPositionChange: (position: NavPosition) => void;
  onViewChange: (view: 'feed' | 'profile') => void;
}

const Navigation: React.FC<NavigationProps> = ({ position, onPositionChange, onViewChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { icon: <Home size={24} />, action: () => onViewChange('feed') },
    { icon: <Search size={24} />, action: () => {} },
    { icon: <PenSquare size={24} />, action: () => {} },
    { icon: <Bell size={24} />, action: () => {} },
    { icon: <User size={24} />, action: () => onViewChange('profile') },
  ];

  const getPositionClasses = () => {
    switch (position) {
      case 'left':
        return 'left-0 top-0 h-full w-20 flex-col';
      case 'right':
        return 'right-0 top-0 h-full w-20 flex-col';
      case 'top':
        return 'left-0 top-0 w-full h-20 flex-row';
      case 'bottom':
        return 'left-0 bottom-0 w-full h-20 flex-row';
      default:
        return 'left-0 top-0 h-full w-20 flex-col';
    }
  };

  return (
    <nav className={`fixed bg-black border-opacity-40 border-gray-900 flex items-center justify-between py-4 ${getPositionClasses()}`}>
      <img src="https://socialler.net/static/media/logo.5b3f15ea8d32c5f08b38adb7f88be55a.svg" alt="Logo" className="w-8 h-8 mx-auto my-4" />
      <div className={`flex ${position === 'left' || position === 'right' ? 'flex-col' : 'flex-row'} space-y-6 space-x-6`}>
        {navItems.map((item, index) => (
          <NavItem 
            key={index} 
            icon={item.icon} 
            isActive={index === activeIndex}
            onClick={() => {
              setActiveIndex(index);
              item.action();
            }}
          />
        ))}
      </div>
      <button onClick={() => {
        const positions: NavPosition[] = ['left', 'top', 'right', 'bottom'];
        const currentIndex = positions.indexOf(position);
        const nextPosition = positions[(currentIndex + 1) % positions.length];
        onPositionChange(nextPosition);
      }} className="text-gray-500 hover:text-white">
        <Settings size={24} />
      </button>
    </nav>
  );
};

export default Navigation;