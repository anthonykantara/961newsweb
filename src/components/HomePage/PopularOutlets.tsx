import React, { useState } from 'react';
import { UserPlus, Users, Eye, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const outlets = [
  {
    id: '1',
    name: 'The Daily Star',
    imageUrl: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=80&h=80&q=80&fit=crop',
    followers: '250k',
    views: '2.5m'
  },
  {
    id: '2',
    name: "L'Orient Today",
    imageUrl: 'https://images.unsplash.com/photo-1679678691170-7781f11f9d86?w=80&h=80&q=80&fit=crop',
    followers: '180k',
    views: '1.8m'
  },
  {
    id: '3',
    name: 'Executive',
    imageUrl: 'https://images.unsplash.com/photo-1679678691250-a14e09c004c7?w=80&h=80&q=80&fit=crop',
    followers: '145k',
    views: '2.2m'
  },
  {
    id: '4',
    name: 'Annahar',
    imageUrl: 'https://images.unsplash.com/photo-1679678691270-a14e09c004c7?w=80&h=80&q=80&fit=crop',
    followers: '120k',
    views: '1.5m'
  },
  {
    id: '5',
    name: 'Al Akhbar',
    imageUrl: 'https://images.unsplash.com/photo-1679678691290-a14e09c004c7?w=80&h=80&q=80&fit=crop',
    followers: '95k',
    views: '1.2m'
  }
];

export default function PopularOutlets() {
  const [sortBy, setSortBy] = useState<'followers' | 'views'>('views');

  const sortedOutlets = [...outlets].sort((a, b) => b[sortBy] - a[sortBy]);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-6 mb-6">
        <h2 className="text-[18px] font-bold">Outlets</h2>
        <div className="flexbg-white rounded-lg p-1">
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
          href="/outlets"
          className="flex items-center gap-2 px-4 py-2 bg-[#FF0000]/5 text-[#FF0000] hover:bg-[#FF0000]/10 transition-colors rounded-lg ml-auto font-medium"
        >
          View All
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-6">
        {sortedOutlets.map((outlet) => (
          <div key={outlet.id} className="flex flex-col items-center text-center">
            <div className="relative mb-3">
              <Link 
                href={`/outlet/${outlet.id}`}
                className="block group"
              >
                <img
                  src={outlet.imageUrl}
                  alt={outlet.name}
                  className="w-20 h-20 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#FF0000] text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
                #{sortedOutlets.findIndex(o => o.id === outlet.id) + 1}
              </div>
            </div>
            <Link
              href={`/outlet/${outlet.id}`}
              className="font-medium text-gray-900 mb-1 hover:text-[#FF0000] transition-colors"
            >
              {outlet.name}
            </Link>
            <button className="flex items-center gap-1.5 px-4 py-1.5 bg-[#FF0000] text-white rounded-full text-sm font-medium hover:bg-red-600 transition-colors">
              <span>Follow</span>
            </button>
            <p className="text-sm text-gray-500 mt-2">
              {sortBy === 'followers'
                ? `${outlet.followers.toLocaleString()} followers`
                : `${outlet.views.toLocaleString()} views`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}