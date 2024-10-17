import React, { useState } from 'react';
import Feed from './components/Feed';
import Navigation from './components/Navigation';
import UserProfile from './components/UserProfile';

type NavPosition = 'left' | 'top' | 'right' | 'bottom';

function App() {
  const [navPosition, setNavPosition] = useState<NavPosition>('left');
  const [currentView, setCurrentView] = useState<'feed' | 'profile'>('feed');

  const getLayoutClasses = () => {
    switch (navPosition) {
      case 'left':
        return 'flex flex-row';
      case 'right':
        return 'flex flex-row-reverse';
      case 'top':
        return 'flex flex-col';
      case 'bottom':
        return 'flex flex-col-reverse';
      default:
        return 'flex flex-row';
    }
  };

  return (
    <div className={`min-h-screen bg-black text-white ${getLayoutClasses()}`}>
      <Navigation 
        position={navPosition} 
        onPositionChange={setNavPosition} 
        onViewChange={setCurrentView}
      />
      <main className="flex-1 flex justify-center overflow-y-auto">
        <div className="w-full max-w-xl py-4 px-4">
          {currentView === 'feed' ? <Feed /> : <UserProfile />}
        </div>
      </main>
    </div>
  );
}

export default App;