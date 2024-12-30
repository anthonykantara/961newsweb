"use client"

import React, { useState } from 'react';
import { Play, Clock, MessageCircle } from 'lucide-react';
import { formatTimeAgo } from '@/utils/dateUtils';
import AdPlacement from '@/components/Ads/AdPlacement';
import EngagementBar from '@/components/LiveFeed/EngagementBar';
import ShareDialog from '@/components/LiveFeed/ShareDialog';
import AuthDialog from '@/components/Auth/AuthDialog';
import Comments from '@/components/Comments/Comments';

const video = {
  id: '1',
  title: "Behind the Scenes: Lebanon's Economic Recovery",
  description: "An in-depth look at the implementation of recent economic reforms and their impact on various sectors of the Lebanese economy. This special report features exclusive interviews with key stakeholders and expert analysis of the ongoing changes.",
  type: 'horizontal', // or 'vertical'
  thumbnailUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2070',
  duration: '15:45',
  views: 45200,
  timestamp: new Date(Date.now() - 3600000),
  outlet: {
    name: '961 News',
    logo: '/961-logo.png',
    isFollowing: false
  },
  author: {
    name: 'Sarah Thompson',
    role: 'Senior Economic Affairs Correspondent',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1740',
    bio: 'Sarah Thompson is a veteran journalist with over 15 years of experience covering economic affairs in the Middle East.',
    followers: 12500,
    isFollowing: false
  }
};

const relatedVideos = [
  {
    id: '2',
    title: 'Expert Analysis: Future of Lebanese Banking',
    thumbnailUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2070',
    duration: '8:15',
    views: 32100,
    outlet: {
      name: '961 News',
      logo: '/961-logo.png'
    }
  },
  // ... more related videos
];

export default function VideoPage({
    params,
}: {
    params: { id: string }
}) {
    const id = params.id;
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const isLoggedIn = false; // Replace with actual auth state

  const handleBookmarkClick = () => {
    if (!isLoggedIn) {
      setShowAuthDialog(true);
      return;
    }
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-[300px,850px,340px] max-w-[1550px] mx-auto justify-center divide-x divide-gray-200">
          {/* Left Sidebar */}
          <div className="pr-6">
            <div className="sticky top-6 space-y-6">
              {/* Video Info */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={video.outlet.logo}
                    alt={video.outlet.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{video.outlet.name}</h3>
                    <p className="text-sm text-gray-500">125K followers</p>
                  </div>
                </div>
                <button className="w-full bg-[#FF0000] text-white py-2.5 rounded-lg font-medium hover:bg-red-600 transition-colors">
                  Follow
                </button>
              </div>

              {/* Video Stats */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-4">Video Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Views</span>
                    <span className="font-medium">{video.views.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">{video.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Published</span>
                    <span className="font-medium">{formatTimeAgo(video.timestamp)}</span>
                  </div>
                </div>
              </div>

              <AdPlacement />
            </div>
          </div>

          {/* Main Content */}
          <div className="px-6">
            <div className="space-y-6">
              {/* Video Player */}
              <div className={`relative ${
                video.type === 'vertical' ? 'aspect-[9/16] max-w-[480px] mx-auto' : 'aspect-video'
              } bg-black rounded-lg overflow-hidden group cursor-pointer`}>
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-gray-900" fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">{video.title}</h1>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={video.author.imageUrl}
                      alt={video.author.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">{video.author.name}</h3>
                      <p className="text-sm text-gray-500">{video.author.role}</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-[#FF0000] text-white rounded-full font-medium hover:bg-red-600 transition-colors">
                    Follow
                  </button>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {video.description}
                </p>
                <EngagementBar 
                  likes={0}
                  shares={0}
                  onLike={() => {}}
                  onShare={() => setShowShareDialog(true)}
                />
              </div>

              <AdPlacement />

              {/* Comments */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <Comments comments={[]} />
              </div>

              <AdPlacement />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="pl-6">
            <div className="sticky top-6 space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-bold mb-4">Related Videos</h2>
                <div className="space-y-4">
                  {relatedVideos.map(video => (
                    <div key={video.id} className="group cursor-pointer">
                      <div className="relative aspect-video rounded-lg overflow-hidden mb-2">
                        <img
                          src={video.thumbnailUrl}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded">
                          {video.duration}
                        </div>
                      </div>
                      <h3 className="font-medium text-gray-900 group-hover:text-[#FF0000] transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-gray-500">{video.views.toLocaleString()} views</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <AdPlacement />
            </div>
          </div>
        </div>
      </div>

      <ShareDialog
        isOpen={showShareDialog}
        onClose={() => setShowShareDialog(false)}
        url={`https://news.961.co/video/${id}`}
      />

      <AuthDialog
        isOpen={showAuthDialog}
        onClose={() => setShowAuthDialog(false)}
      />
    </div>
  );
}