import React, { useState } from 'react';
import { UserPlus, Users, Eye, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const journalists = [
  {
    id: '1',
    name: 'Sarah Thompson',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1740',
    outlet: 'The Daily Star',
    followers: '125k',
    views: '980k'
  },
  {
    id: '2',
    name: 'Michel Aoun',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1740',
    outlet: "L'Orient Today",
    followers: '98k',
    views: '1.2m'
  },
  {
    id: '3',
    name: 'Nadia Hassan',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1740',
    outlet: 'Executive',
    followers: '75k',
    views: '850k'
  },
  {
    id: '4',
    name: 'Alex Mansour',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1740',
    outlet: 'The Daily Star',
    followers: '62k',
    views: '920k'
  },
  {
    id: '5',
    name: 'Rania Khalil',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1740',
    outlet: 'Executive',
    followers: '45k',
    views: '750k'
  }
];

export default function PopularJournalists() {
  const [sortBy, setSortBy] = useState<'followers' | 'views'>('views');

  const sortedJournalists = [...journalists].sort((a, b) => b[sortBy] - a[sortBy]);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-6 mb-6">
        <h2 className="text-[18px] font-bold">Journalists</h2>
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setSortBy('views')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              sortBy === 'views'
                ? 'bg-white text-[#FF0000] shadow-sm'
                : 'text-gray-600 hover:text-[#FF0000]'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>Views</span>
          </button>
          <button
            onClick={() => setSortBy('followers')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              sortBy === 'followers'
                ? 'bg-white text-[#FF0000] shadow-sm'
                : 'text-gray-600 hover:text-[#FF0000]'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Followers</span>
          </button>
        </div>
        <Link
          href="/journalists"
          className="flex items-center gap-2 px-4 py-2 bg-[#FF0000]/5 text-[#FF0000] hover:bg-[#FF0000]/10 transition-colors rounded-lg ml-auto font-medium"
        >
          View All
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-6">
        {sortedJournalists.map((journalist) => (
          <div key={journalist.id} className="flex flex-col items-center text-center">
            <Link
              href={`/journalist/${journalist.id}`}
              className="relative mb-3 group"
            >
              <img
                src={journalist.imageUrl}
                alt={journalist.name}
                className="w-20 h-20 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#FF0000] text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
                #{sortedJournalists.findIndex(j => j.id === journalist.id) + 1}
              </div>
            </Link>
            <Link
              href={`/journalist/${journalist.id}`}
              className="font-medium text-gray-900 mb-1 hover:text-[#FF0000] transition-colors"
            >
              {journalist.name}
            </Link>
            <p className="text-sm text-gray-600 mb-2">{journalist.outlet}</p>
            <button className="flex items-center gap-1.5 px-4 py-1.5 bg-[#FF0000] text-white rounded-full text-sm font-medium hover:bg-red-600 transition-colors">
              <span>Follow</span>
            </button>
            <p className="text-sm text-gray-500 mt-2">
              {sortBy === 'followers'
                ? `${journalist.followers.toLocaleString()} followers`
                : `${journalist.views.toLocaleString()} views`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}