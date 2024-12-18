import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatTimeAgo } from '../../utils/dateUtils';

interface Article {
  id: string;
  headline: string;
  imageUrl: string;
  outlet: {
    name: string;
    icon: string;
  };
  timestamp: Date;
  metrics: {
    reactions: number;
    comments: number;
    shares: number;
  };
}

const trendingArticles: Article[] = [
  {
    id: '1',
    headline: 'Major Economic Reform Package Announced by Central Bank',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2070',
    outlet: {
      name: 'The Daily Star',
      icon: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop'
    },
    timestamp: new Date(Date.now() - 3600000),
    metrics: {
      reactions: 245,
      comments: 89,
      shares: 123
    }
  },
  // Add more trending articles...
];

interface CollectionSidebarProps {
  collectionId: string;
}

const CollectionSidebar = ({ collectionId }: CollectionSidebarProps) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-[#FF0000]" />
          <h2 className="text-[18px] font-bold text-gray-900">Most Read in Collection</h2>
        </div>
        <div className="space-y-6">
          {trendingArticles.slice(0, 10).map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`} 
              className="block group py-2"
            >
              <h3 className="font-medium text-gray-900 group-hover:text-[#FF0000] transition-colors line-clamp-2 mb-2">
                {article.headline}
              </h3>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="text-xs text-gray-500">{article.outlet.name}</span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-500">{formatTimeAgo(article.timestamp)}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 h-[280px] w-[336px] flex items-center justify-center relative">
        <div className="absolute top-2 right-2 bg-white/80 px-2 py-0.5 rounded text-xs text-gray-500">
          AD
        </div>
        <span className="text-gray-400">Ad Space</span>
      </div>
    </div>
  );
};

export default CollectionSidebar;