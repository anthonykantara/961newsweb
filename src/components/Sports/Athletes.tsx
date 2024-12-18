import React from 'react';
import { UserPlus } from 'lucide-react';

const athletes = [
  {
    id: '1',
    name: 'Hassan Maatouk',
    sport: 'Football',
    imageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=80&h=80&q=80&fit=crop',
    followers: 125000,
    teams: ['Al Ahed', 'Lebanon National Team']
  },
  {
    id: '2',
    name: 'Fadi El Khatib',
    sport: 'Basketball',
    imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&q=80&fit=crop',
    followers: 98000,
    teams: ['Sagesse', 'Lebanon National Team']
  },
  {
    id: '3',
    name: 'Nadia Fawaz',
    sport: 'Tennis',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&q=80&fit=crop',
    followers: 75000,
    teams: ['Lebanon Tennis Federation']
  }
];

export default function Athletes() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-4">Athletes to Follow</h2>
      <div className="space-y-4">
        {athletes.map(athlete => (
          <div key={athlete.id} className="flex items-center gap-4">
            <img
              src={athlete.imageUrl}
              alt={athlete.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900 truncate">{athlete.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">{athlete.sport}</span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-sm text-gray-500">{athlete.followers.toLocaleString()} followers</span>
              </div>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-[#FF0000] text-white hover:bg-red-700 transition-colors">
              <UserPlus className="w-4 h-4" />
              <span>Follow</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}