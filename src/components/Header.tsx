import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-16 bg-black border-b border-gray-700 z-10">
      <div className="max-w-2xl mx-auto px-4 py-2 flex justify-between items-center">
        <img src="https://socialler.net/static/media/logo.5b3f15ea8d32c5f08b38adb7f88be55a.svg" alt="Logo" className="h-8" />
      </div>
    </header>
  );
};

export default Header;