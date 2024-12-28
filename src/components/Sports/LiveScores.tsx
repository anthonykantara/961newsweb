"use client"

import { useState } from 'react';
import { Search, Radio } from 'lucide-react';

const sports = [
  { id: 'all', name: 'All Sports' },
  { id: 'football', name: 'Football', hasLive: true },
  { id: 'basketball', name: 'Basketball', hasLive: true },
  { id: 'tennis', name: 'Tennis' },
  { id: 'volleyball', name: 'Volleyball' },
  { id: 'rugby', name: 'Rugby' }
];

const liveScores = [
  {
    id: '1',
    sport: 'Football',
    competition: 'Lebanese Premier League',
    homeTeam: { 
      name: 'Al Ahed', 
      score: 2,
      logo: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop'
    },
    awayTeam: { 
      name: 'Nejmeh', 
      score: 1,
      logo: 'https://images.unsplash.com/photo-1679678691170-7781f11f9d86?w=32&h=32&q=80&fit=crop'
    },
    time: "75'",
    isLive: true
  },
  {
    id: '2',
    sport: 'Basketball',
    competition: 'Lebanese Basketball League',
    homeTeam: { 
      name: 'Riyadi', 
      score: 82,
      logo: 'https://images.unsplash.com/photo-1679678691250-a14e09c004c7?w=32&h=32&q=80&fit=crop'
    },
    awayTeam: { 
      name: 'Sagesse', 
      score: 78,
      logo: 'https://images.unsplash.com/photo-1679678691270-a14e09c004c7?w=32&h=32&q=80&fit=crop'
    },
    time: "Q4 2:45",
    isLive: true
  }
];

export default function LiveScores() {
  const [selectedSport, setSelectedSport] = useState('all');

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Radio className="w-5 h-5 text-[#FF0000]" />
            <h2 className="text-xl font-bold">Live Scores</h2>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search games..."
              className="pl-9 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF0000] text-sm w-64"
            />
          </div>
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {sports.map(sport => (
            <button
              key={sport.id}
              onClick={() => setSelectedSport(sport.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedSport === sport.id
                  ? 'bg-[#FF0000] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{sport.name}</span>
                {sport.hasLive && (
                  <span className="flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#FF0000] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF0000]"></span>
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="divide-y divide-gray-100">
        {liveScores.map(game => (
          <div key={game.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-900">{game.competition}</span>
                <span className="text-xs text-gray-500">• {game.sport}</span>
              </div>
              <div className="flex items-center gap-2">
                {game.isLive && (
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-[#FF0000] rounded-full animate-pulse" />
                    <span className="text-[#FF0000] text-sm font-medium">LIVE</span>
                  </span>
                )}
                <span className="text-sm font-medium">{game.time}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={game.homeTeam.logo}
                  alt={game.homeTeam.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="font-medium">{game.homeTeam.name}</span>
                <span className="text-xl font-bold">{game.homeTeam.score}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold">{game.awayTeam.score}</span>
                <span className="font-medium">{game.awayTeam.name}</span>
                <img
                  src={game.awayTeam.logo}
                  alt={game.awayTeam.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}