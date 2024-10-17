import React from 'react';

const UserProfile: React.FC = () => {
  const user = {
    name: 'Hydraulix',
    level: 255,
    country: '🇧🇪 Belgium',
    status: 'No information given.',
    badge: 'Sun of the Retrowave',
    currentGame: 'Battlefield 4™',
    stats: {
      badges: 678,
      games: 762,
      inventory: 1290,
      screenshots: 1290,
      videos: 1,
      workshopItems: 9,
      reviews: 14,
      artwork: 4,
      groups: 249,
    },
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg p-6 text-white">
      <div className="flex items-center space-x-4 mb-6">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
          alt={user.name}
          className="w-24 h-24 rounded-full border-4 border-pink-500"
        />
        <div>
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <p className="text-xl">Level {user.level}</p>
          <p>{user.country}</p>
          <p className="text-gray-300">{user.status}</p>
        </div>
      </div>
      <div className="bg-black bg-opacity-50 rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Currently In-Game</h2>
        <p>{user.currentGame}</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded mt-2">Join Game</button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-black bg-opacity-50 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Badges</h2>
          <p className="text-2xl">{user.stats.badges}</p>
        </div>
        <div className="bg-black bg-opacity-50 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Games</h2>
          <p className="text-2xl">{user.stats.games}</p>
        </div>
        <div className="bg-black bg-opacity-50 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Inventory</h2>
          <p className="text-2xl">{user.stats.inventory}</p>
        </div>
        <div className="bg-black bg-opacity-50 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Screenshots</h2>
          <p className="text-2xl">{user.stats.screenshots}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;