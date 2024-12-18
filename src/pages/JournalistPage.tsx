import React from 'react';
import { useParams } from 'react-router-dom';
import JournalistProfile from '../components/Journalist/JournalistProfile';
import JournalistStats from '../components/Journalist/JournalistStats';
import JournalistArticles from '../components/Journalist/JournalistArticles';
import JournalistSidebar from '../components/Journalist/JournalistSidebar';
import AdPlacement from '../components/Ads/AdPlacement';

export default function JournalistPage() {
  const { id } = useParams();

  const journalist = {
    id: '1',
    name: 'Sarah Thompson',
    role: 'Senior Economic Affairs Correspondent',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1740',
    bio: 'Sarah Thompson is a veteran journalist with over 15 years of experience covering economic affairs in the Middle East. Her work focuses on banking sector reforms, monetary policy, and regional economic development.',
    followers: '125k',
    articles: 1240,
    videos: 82,
    views: '2.5m',
    outlets: [
      {
        name: 'The Daily Star',
        logo: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop'
      },
      {
        name: "L'Orient Today",
        logo: 'https://images.unsplash.com/photo-1679678691170-7781f11f9d86?w=32&h=32&q=80&fit=crop'
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
                <JournalistProfile journalist={journalist} />
                <JournalistStats journalist={journalist} />
                <JournalistArticles journalist={journalist} />
              </div>
            </main>
            <aside className="w-full lg:w-[340px]">
              <JournalistSidebar journalist={journalist} />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}