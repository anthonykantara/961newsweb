import React from 'react';
import { formatTimeAgo } from '../../utils/dateUtils';

interface TopArticle {
  id: string;
  headline: string;
  imageUrl: string;
  outlet: {
    name: string;
    icon: string;
  };
  timestamp: Date;
}

const topArticles: TopArticle[] = [
  {
    id: '1',
    headline: 'Major Economic Reform Package Announced',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2070',
    outlet: {
      name: 'The Daily Star',
      icon: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop'
    },
    timestamp: new Date(Date.now() - 3600000)
  },
  // Add more articles...
];

export default function TopNewsSidebar() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h2 className="text-lg font-bold mb-4">Top News by Outlet</h2>
      <div className="space-y-2">
        {topArticles.map(article => (
          <div key={article.id} className="flex gap-3 p-2 hover:bg-gray-50 transition-colors rounded-lg cursor-pointer">
            <img
              src={article.imageUrl}
              alt={article.headline}
              className="w-[60px] h-[60px] rounded object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1 hover:text-[#FF0000] transition-colors">
                {article.headline}
              </h3>
              <div className="flex items-center gap-2">
                <img
                  src={article.outlet.icon}
                  alt={article.outlet.name}
                  className="w-4 h-4 rounded-full"
                />
                <span className="text-xs text-gray-500">{formatTimeAgo(article.timestamp)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <AdPlacement />
      </div>
    </div>
  );
}