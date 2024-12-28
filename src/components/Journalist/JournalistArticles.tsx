"use client"

import React, { useState } from 'react';
import { Newspaper, Video, Play } from 'lucide-react';
import ArticleCard from '../SectionLayout/ArticleCard';
import { formatTimeAgo } from '../../utils/dateUtils';
import AdPlacement from '../Ads/AdPlacement';
import { Article } from '../../types/news';

interface JournalistArticlesProps {
  journalist: {
    name: string;
  };
}

const videos = Array.from({ length: 20 }, (_, i) => ({
  id: `v${i + 1}`,
  title: [
    'Economic Impact: Analyzing the Reform Package',
    'Public Response to New Economic Measures',
    'Expert Analysis: Future of Lebanese Banking',
    'International Response to Economic Reforms',
    'Market Reactions to Policy Changes'
  ][i % 5],
  thumbnailUrl: [
    'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2070',
    'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1740',
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2070'
  ][i % 4],
  duration: ['3:45', '2:30', '4:15', '3:20', '2:55'][i % 5],
  views: Math.floor(Math.random() * 50000) + 10000,
  timestamp: new Date(Date.now() - (i * 3600000))
}));

const clips = Array.from({ length: 20 }, (_, i) => ({
  id: `c${i + 1}`,
  title: [
    'Quick Take: Economic Reform Impact',
    'Market Update: Banking Sector',
    'Analysis: Policy Changes',
    'Breaking: Financial News',
    'Insight: Economic Trends'
  ][i % 5],
  thumbnailUrl: [
    'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2070',
    'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1740',
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2070'
  ][i % 4],
  duration: ['0:45', '1:00', '0:30', '0:55', '1:15'][i % 5],
  views: Math.floor(Math.random() * 100000) + 50000,
  timestamp: new Date(Date.now() - (i * 3600000))
}));

export default function JournalistArticles({ journalist }: JournalistArticlesProps) {
  const [activeTab, setActiveTab] = useState<'articles' | 'videos' | 'clips'>('articles');

  const articles: Article[] = Array.from({ length: 30 }, (_, i) => ({
    id: (i + 1).toString(),
    headline: [
      'Economic Reforms Show Early Signs of Success',
      'Banking Sector Transformation Accelerates',
      'International Investors React to New Policies',
      'Currency Stabilization Efforts Show Results',
      'Digital Banking Initiative Launches'
    ][i % 5],
    imageUrl: [
      'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2070',
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1740',
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2070'
    ][i % 4],
    outlet: {
      name: 'The Daily Star',
      icon: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop'
    },
    timestamp: new Date(Date.now() - (i * 3600000)),
    metrics: {
      reactions: Math.floor(Math.random() * 500) + 100,
      comments: Math.floor(Math.random() * 200) + 50,
      shares: Math.floor(Math.random() * 100) + 20
    }
  }));

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="border-b border-gray-200">
        <div className="flex gap-6 px-6">
          <button
            onClick={() => setActiveTab('articles')}
            className={`flex items-center gap-2 py-4 border-b-2 transition-colors ${
              activeTab === 'articles'
                ? 'border-[#FF0000] text-[#FF0000]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Newspaper className="w-5 h-5" />
            <span className="font-medium">Articles</span>
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex items-center gap-2 py-4 border-b-2 transition-colors ${
              activeTab === 'videos'
                ? 'border-[#FF0000] text-[#FF0000]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Video className="w-5 h-5" />
            <span className="font-medium">Videos</span>
          </button>
          <button
            onClick={() => setActiveTab('clips')}
            className={`flex items-center gap-2 py-4 border-b-2 transition-colors ${
              activeTab === 'clips'
                ? 'border-[#FF0000] text-[#FF0000]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Play className="w-5 h-5" />
            <span className="font-medium">Clips</span>
          </button>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {activeTab === 'articles' && (
          <>
            {articles.map((article, index) => (
              <React.Fragment key={article.id}>
                <ArticleCard article={article} />
                {(index + 1) % 3 === 0 && index !== articles.length - 1 && (
                  <div className="py-4">
                    <AdPlacement />
                  </div>
                )}
              </React.Fragment>
            ))}
          </>
        )}

        {activeTab === 'videos' && (
          <div className="p-6 grid grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <React.Fragment key={video.id}>
                <div className="group cursor-pointer">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="w-6 h-6 text-gray-900" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded">
                    {video.duration}
                  </div>
                </div>
                <h3 className="font-medium text-gray-900 line-clamp-2 group-hover:text-[#FF0000] transition-colors mb-2">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{(video.views / 1000).toFixed(1)}k views</span>
                  <span className="text-gray-400">{formatTimeAgo(video.timestamp)}</span>
                </div>
                </div>
                {(index + 1) % 6 === 0 && index !== videos.length - 1 && (
                  <div className="col-span-3 my-6">
                    <div className="bg-gray-100 h-[280px] w-full flex items-center justify-center relative">
                      <div className="absolute top-2 right-2 bg-white/80 px-2 py-0.5 rounded text-xs text-gray-500">
                        AD
                      </div>
                      <span className="text-gray-400">Ad Space</span>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        {activeTab === 'clips' && (
          <div className="p-6 grid grid-cols-4 gap-4">
            {clips.map((clip, index) => (
              <React.Fragment key={clip.id}>
                <div className="group cursor-pointer">
                <div className="relative aspect-[9/16] rounded-lg overflow-hidden mb-2">
                  <img
                    src={clip.thumbnailUrl}
                    alt={clip.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/40 text-white text-xs rounded">
                    {clip.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="w-6 h-6 text-gray-900" />
                    </div>
                  </div>
                </div>
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-[#FF0000] transition-colors">
                  {clip.title}
                </h3>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-gray-500">{(clip.views / 1000).toFixed(1)}k views</span>
                  <span className="text-xs text-gray-400">{formatTimeAgo(clip.timestamp)}</span>
                </div>
                </div>
                {(index + 1) % 8 === 0 && index !== clips.length - 1 && (
                  <div className="col-span-4 my-6">
                    <div className="bg-gray-100 h-[280px] w-full flex items-center justify-center relative">
                      <div className="absolute top-2 right-2 bg-white/80 px-2 py-0.5 rounded text-xs text-gray-500">
                        AD
                      </div>
                      <span className="text-gray-400">Ad Space</span>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}