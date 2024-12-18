import React from 'react';
import { useParams } from 'react-router-dom';
import { OutletProfile, OutletStats, OutletArticles, OutletSidebar } from '../components/Outlet';
import AdPlacement from '../components/Ads/AdPlacement';

export default function OutletPage() {
  const { id } = useParams();

  const outlet = {
    id: '1',
    name: 'The Daily Star',
    description: 'The Daily Star is Lebanon\'s leading English-language newspaper, delivering comprehensive coverage of local and international news since 1952.',
    imageUrl: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=80&h=80&q=80&fit=crop',
    followers: '12,500',
    articles: 12500,
    videos: 850,
    views: '2.5m',
    journalists: [
      {
        id: '1',
        name: 'Sarah Thompson',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1740',
        role: 'Senior Economic Affairs Correspondent'
      },
      {
        id: '2',
        name: 'Michel Aoun',
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1740',
        role: 'Political Editor'
      },
      {
        id: '3',
        name: 'Nadia Hassan',
        imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1740',
        role: 'Business Reporter'
      }
    ],
    isFollowing: false
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <AdPlacement />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <main className="flex-1">
              <div className="space-y-6">
                <OutletProfile outlet={outlet} />
                <OutletStats outlet={outlet} />
                <OutletArticles outlet={outlet} />
              </div>
            </main>
            <aside className="w-full lg:w-[340px]">
              <OutletSidebar outlet={outlet} />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}