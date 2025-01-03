"use client"

import React, { useState } from 'react';
import { Users, Search, Newspaper, Video } from 'lucide-react';
import AdPlacement from '@/components/Ads/AdPlacement';
import { formatTimeAgo, formatNumber } from '@/utils/dateUtils';

interface Outlet {
  id: string;
  name: string;
  imageUrl: string;
  followers: number;
  isFollowing: boolean;
  articlesCount: number;
  videosCount: number;
}

const outlets: Outlet[] = [
  {
    id: '1',
    name: 'The Daily Star',
    imageUrl: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=80&h=80&q=80&fit=crop',
    followers: 250000,
    isFollowing: true,
    articlesCount: 12500,
    videosCount: 850
  },
  {
    id: '2',
    name: "L'Orient Today",
    imageUrl: 'https://images.unsplash.com/photo-1679678691170-7781f11f9d86?w=80&h=80&q=80&fit=crop',
    followers: 180000,
    isFollowing: false,
    articlesCount: 8900,
    videosCount: 420
  },
  {
    id: '3',
    name: 'Executive',
    imageUrl: 'https://images.unsplash.com/photo-1679678691250-a14e09c004c7?w=80&h=80&q=80&fit=crop',
    followers: 145000,
    isFollowing: true,
    articlesCount: 15200,
    videosCount: 980
  },
  {
    id: '4',
    name: 'Annahar',
    imageUrl: 'https://images.unsplash.com/photo-1679678691270-a14e09c004c7?w=80&h=80&q=80&fit=crop',
    followers: 120000,
    isFollowing: false,
    articlesCount: 7600,
    videosCount: 350
  },
  {
    id: '5',
    name: 'Al Akhbar',
    imageUrl: 'https://images.unsplash.com/photo-1679678691290-a14e09c004c7?w=80&h=80&q=80&fit=crop',
    followers: 95000,
    isFollowing: true,
    articlesCount: 10300,
    videosCount: 620
  },
  {
    id: '6',
    name: 'Lebanon News Network',
    imageUrl: 'https://images.unsplash.com/photo-1679678691310-a14e09c004c7?w=80&h=80&q=80&fit=crop',
    followers: 88000,
    isFollowing: false,
    articlesCount: 6800,
    videosCount: 290
  },
  {
    id: '7',
    name: 'Beirut Times',
    imageUrl: 'https://images.unsplash.com/photo-1679678691330-a14e09c004c7?w=80&h=80&q=80&fit=crop',
    followers: 82000,
    isFollowing: true,
    articlesCount: 9200,
    videosCount: 510
  },
  {
    id: '8',
    name: 'The Lebanese Observer',
    imageUrl: 'https://images.unsplash.com/photo-1679678691350-a14e09c004c7?w=80&h=80&q=80&fit=crop',
    followers: 75000,
    isFollowing: false,
    articlesCount: 5900,
    videosCount: 240
  },
  {
    id: '9',
    name: 'Middle East Monitor',
    imageUrl: 'https://images.unsplash.com/photo-1679678691370-a14e09c004c7?w=80&h=80&q=80&fit=crop',
    followers: 70000,
    isFollowing: true,
    articlesCount: 8100,
    videosCount: 380
  },
  {
    id: '10',
    name: 'Lebanon Business Review',
    imageUrl: 'https://images.unsplash.com/photo-1679678691390-a14e09c004c7?w=80&h=80&q=80&fit=crop',
    followers: 65000,
    isFollowing: false,
    articlesCount: 7300,
    videosCount: 310
  },
  {
    id: '20',
    name: 'Mediterranean Post',
    imageUrl: 'https://images.unsplash.com/photo-1679678691490-a14e09c004c7?w=80&h=80&q=80&fit=crop',
    followers: 38000,
    isFollowing: true,
    articlesCount: 4500,
    videosCount: 180
  }
];

export default function OutletsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOutlets = outlets
    .filter(outlet => outlet.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => b.followers - a.followers);

  return (
    <div className="min-h-screenbg-white py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto mb-6">
          <AdPlacement />
        </div>
        <div className="max-w-7xl mx-auto mb-6">
          <AdPlacement />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Outlets</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search outlets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF0000] w-64"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-6">
            {filteredOutlets.map((outlet, index) => {
              const isSecondRow = index >= 3 && index < 6;
              return (
              <React.Fragment key={outlet.id}>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <img
                      src={outlet.imageUrl}
                      alt={outlet.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900 truncate text-lg">{outlet.name}</h3>
                        <button className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                          outlet.isFollowing
                            ? 'text-gray-600 hover:text-gray-900 bg-gray-50'
                            : 'bg-[#FF0000] text-white hover:bg-red-600'
                        }`}>
                          {outlet.isFollowing ? 'Following' : 'Follow'}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-6">
                      {outlet.articlesCount > 0 && (
                        <div className="flex items-center gap-1">
                          <Newspaper className="w-4 h-4" />
                          <span>{formatNumber(outlet.articlesCount)}</span>
                        </div>
                      )}
                      {outlet.videosCount > 0 && (
                        <div className="flex items-center gap-1">
                          <Video className="w-4 h-4" />
                          <span>{formatNumber(outlet.videosCount)}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{formatNumber(outlet.followers)}</span>
                    </div>
                  </div>
                </div>
                {isSecondRow && index === 5 && (
                  <div className="col-span-3 my-8">
                    <AdPlacement />
                  </div>
                )}
              </React.Fragment>
            );
            })}
          </div>

          <div className="mt-8">
            <AdPlacement />
          </div>
        </div>
      </div>
    </div>
  );
}