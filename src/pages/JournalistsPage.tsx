import React, { useState } from 'react';
import { UserPlus, Users, Search, Newspaper, Video } from 'lucide-react';
import AdPlacement from '../components/Ads/AdPlacement';
import { formatTimeAgo, formatNumber } from '../utils/dateUtils';

interface Journalist {
  id: string;
  name: string;
  imageUrl: string;
  followers: number;
  isFollowing: boolean;
  articlesCount: number;
  videosCount: number;
  latestArticle: {
    title: string;
    timestamp: Date;
    outlet: string;
  };
}

const journalists: Journalist[] = [
  {
    id: '1',
    name: 'Sarah Thompson',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1740',
    followers: 125000,
    isFollowing: true,
    articlesCount: 1240,
    videosCount: 82,
    latestArticle: {
      title: 'Economic Reforms Show Early Signs of Success',
      timestamp: new Date(Date.now() - 3600000),
      outlet: 'The Daily Star'
    }
  },
  {
    id: '2',
    name: 'Michel Aoun',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1740',
    followers: 98000,
    isFollowing: false,
    articlesCount: 980,
    videosCount: 0,
    latestArticle: {
      title: 'New Environmental Protection Laws Take Effect',
      timestamp: new Date(Date.now() - 7200000),
      outlet: "L'Orient Today",
    }
  },
  {
    id: '3',
    name: 'Nadia Hassan',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1740',
    outlet: 'Executive',
    followers: 75000,
    isFollowing: false,
    articlesCount: 0,
    videosCount: 156,
    views: 850000,
    latestArticle: {
      title: 'Tech Innovation Hub Opens in Beirut Digital District',
      timestamp: new Date(Date.now() - 10800000),
      outlet: 'Executive'
    }
  },
  {
    id: '4',
    name: 'Alex Mansour',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1740',
    outlet: 'The Daily Star',
    followers: 62000,
    isFollowing: true,
    articlesCount: 845,
    videosCount: 24,
    views: 920000,
    latestArticle: {
      title: 'Infrastructure Development Plans Gain Momentum',
      timestamp: new Date(Date.now() - 14400000),
      outlet: 'The Daily Star'
    }
  },
  {
    id: '5',
    name: 'Rania Khalil',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1740',
    outlet: 'Executive',
    followers: 45000,
    isFollowing: false,
    articlesCount: 234,
    videosCount: 0,
    views: 750000,
    latestArticle: {
      title: 'Renewable Energy Projects Attract Investment',
      timestamp: new Date(Date.now() - 18000000),
      outlet: 'Executive'
    }
  },
  {
    id: '6',
    name: 'Hassan Nasrallah',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1740',
    outlet: 'Annahar',
    followers: 88000,
    isFollowing: true,
    articlesCount: 0,
    videosCount: 92,
    views: 980000,
    latestArticle: {
      title: 'Regional Trade Agreements Show Promise',
      timestamp: new Date(Date.now() - 21600000),
      outlet: 'Annahar'
    }
  },
  {
    id: '7',
    name: 'Zeina Khoury',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1740',
    outlet: 'Al Akhbar',
    followers: 52000,
    isFollowing: false,
    articlesCount: 0,
    videosCount: 0,
    views: 680000,
    latestArticle: {
      title: 'Healthcare Sector Receives Major Investment',
      timestamp: new Date(Date.now() - 25200000),
      outlet: 'Al Akhbar'
    }
  },
  {
    id: '8',
    name: 'Karim Saad',
    imageUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1740',
    outlet: 'The Daily Star',
    followers: 71000,
    isFollowing: true,
    articlesCount: 567,
    videosCount: 45,
    views: 890000,
    latestArticle: {
      title: 'Digital Transformation in Banking Sector',
      timestamp: new Date(Date.now() - 28800000),
      outlet: 'The Daily Star'
    }
  },
  {
    id: '9',
    name: 'Maya Ibrahim',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1740',
    outlet: "L'Orient Today",
    followers: 59000,
    isFollowing: false,
    articlesCount: 678,
    videosCount: 0,
    views: 720000,
    latestArticle: {
      title: 'Education Reform Initiative Launches',
      timestamp: new Date(Date.now() - 32400000),
      outlet: "L'Orient Today"
    }
  },
  {
    id: '10',
    name: 'Omar Kabbani',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1740',
    outlet: 'Annahar',
    followers: 43000,
    isFollowing: false,
    articlesCount: 0,
    videosCount: 178,
    views: 550000,
    latestArticle: {
      title: 'Tourism Sector Shows Signs of Recovery',
      timestamp: new Date(Date.now() - 36000000),
      outlet: 'Annahar'
    }
  },
  // Add more journalists with similar pattern...
  // Continue with journalists 11-20 following same format
  {
    id: '20',
    name: 'Layla Haddad',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1740',
    outlet: 'The Daily Star',
    followers: 38000,
    isFollowing: true,
    articlesCount: 0,
    videosCount: 0,
    views: 480000,
    latestArticle: {
      title: 'Cultural Heritage Preservation Efforts',
      timestamp: new Date(Date.now() - 72000000),
      outlet: 'The Daily Star'
    }
  }
];

export default function JournalistsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredJournalists = journalists
    .filter(journalist => 
      journalist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      journalist.latestArticle.outlet.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => b.latestArticle.timestamp.getTime() - a.latestArticle.timestamp.getTime());

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto mb-6">
          <AdPlacement />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Journalists</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search journalists..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF0000] w-64"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-6">
            {filteredJournalists.map((journalist, index) => (
              <React.Fragment key={journalist.id}>
              <div key={journalist.id} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <img
                    src={journalist.imageUrl}
                    alt={journalist.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900 truncate text-lg">{journalist.name}</h3>
                      <button className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        journalist.isFollowing
                          ? 'text-gray-600 hover:text-gray-900 bg-gray-50'
                          : 'bg-[#FF0000] text-white hover:bg-red-600'
                      }`}>
                        {journalist.isFollowing ? 'Following' : 'Follow'}
                      </button>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                      <div className="flex items-center gap-4">
                        {journalist.articlesCount > 0 && (
                          <div className="flex items-center gap-1">
                            <Newspaper className="w-4 h-4" />
                            <span>{formatNumber(journalist.articlesCount)}</span>
                          </div>
                        )}
                        {journalist.videosCount > 0 && (
                          <div className="flex items-center gap-1">
                            <Video className="w-4 h-4" />
                            <span>{formatNumber(journalist.videosCount)}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{formatNumber(journalist.followers)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4 mt-5">
                  <h4 className="font-medium text-gray-900 mb-1 line-clamp-2 hover:text-[#FF0000] transition-colors cursor-pointer h-[48px]">
                    {journalist.latestArticle.title}
                  </h4>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                    <span>{journalist.latestArticle.outlet}</span>
                    <span>{formatTimeAgo(journalist.latestArticle.timestamp)}</span>
                  </div>
                </div>
              </div>
              {(index + 1) % 6 === 0 && index !== filteredJournalists.length - 1 && (
                <div className="col-span-3 my-8">
                  <AdPlacement />
                </div>
              )}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-8">
            <AdPlacement />
          </div>
        </div>
      </div>
    </div>
  );
}