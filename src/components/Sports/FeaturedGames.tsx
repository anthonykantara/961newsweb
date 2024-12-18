import React from 'react';
import { Calendar } from 'lucide-react';

const featuredGames = [
  {
    id: '1',
    competition: 'Lebanese Premier League',
    homeTeam: { 
      name: 'Al Ansar', 
      logo: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop',
      stats: { wins: 12, draws: 3, losses: 2 }
    },
    awayTeam: { 
      name: 'Safa', 
      logo: 'https://images.unsplash.com/photo-1679678691170-7781f11f9d86?w=32&h=32&q=80&fit=crop',
      stats: { wins: 10, draws: 4, losses: 3 }
    },
    date: '2024-03-15',
    time: '18:00',
    venue: 'Camille Chamoun Sports City Stadium',
    ticketsAvailable: true
  },
  {
    id: '2',
    competition: 'Lebanese Basketball League',
    homeTeam: { 
      name: 'Champville', 
      logo: 'https://images.unsplash.com/photo-1679678691250-a14e09c004c7?w=32&h=32&q=80&fit=crop',
      stats: { wins: 15, draws: 0, losses: 4 }
    },
    awayTeam: { 
      name: 'Homentmen', 
      logo: 'https://images.unsplash.com/photo-1679678691270-a14e09c004c7?w=32&h=32&q=80&fit=crop',
      stats: { wins: 13, draws: 0, losses: 6 }
    },
    date: '2024-03-16',
    time: '20:00',
    venue: 'Champville Stadium',
    ticketsAvailable: false
  }
];

export default function FeaturedGames() {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-bold">Featured Games</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {featuredGames.map(game => (
          <div key={game.id} className="p-6 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">{game.competition}</span>
                <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(game.date).toLocaleDateString('en-US', { 
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric'
                    })} • {game.time}
                  </span>
                </div>
              </div>
              {game.ticketsAvailable && (
                <button className="px-4 py-1.5 bg-[#FF0000] text-white text-sm font-medium rounded-full hover:bg-red-700 transition-colors">
                  Get Tickets
                </button>
              )}
            </div>
            <div className="flex items-center justify-between gap-8">
              <div className="flex items-center gap-4 flex-1">
                <img 
                  src={game.homeTeam.logo} 
                  alt={game.homeTeam.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-medium text-lg">{game.homeTeam.name}</span>
                  <span className="text-sm text-gray-500">
                    {game.homeTeam.stats.wins}W - {game.homeTeam.stats.draws}D - {game.homeTeam.stats.losses}L
                  </span>
                </div>
              </div>
              <span className="text-2xl font-bold text-gray-400">vs</span>
              <div className="flex items-center gap-4 flex-1 justify-end">
                <div className="flex flex-col items-end">
                  <span className="font-medium text-lg">{game.awayTeam.name}</span>
                  <span className="text-sm text-gray-500">
                    {game.awayTeam.stats.wins}W - {game.awayTeam.stats.draws}D - {game.awayTeam.stats.losses}L
                  </span>
                </div>
                <img 
                  src={game.awayTeam.logo} 
                  alt={game.awayTeam.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="mt-4 text-sm text-center text-gray-500">
              {game.venue}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}