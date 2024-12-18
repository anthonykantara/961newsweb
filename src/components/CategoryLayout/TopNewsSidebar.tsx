import React from 'react';
import { formatTimeAgo } from '../../utils/dateUtils';
import { Link } from 'react-router-dom';
import AdPlacement from '../Ads/AdPlacement';

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

interface OutletArticles {
  outlet: {
    name: string;
    icon: string;
  };
  articles: TopArticle[];
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
  }
];

const outletArticles: OutletArticles[] = [
  {
    outlet: {
      name: 'The Daily Star',
      icon: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop'
    },
    articles: [
      {
        id: '1',
        headline: 'Economic Reforms Show Early Signs of Success',
        imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2070',
        outlet: {
          name: 'The Daily Star',
          icon: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop'
        },
        timestamp: new Date(Date.now() - 3600000)
      }
    ]
  },
  {
    outlet: {
      name: "L'Orient Today",
      icon: 'https://images.unsplash.com/photo-1679678691170-7781f11f9d86?w=32&h=32&q=80&fit=crop'
    },
    articles: [
      {
        id: '2',
        headline: 'New Environmental Protection Laws Take Effect',
        imageUrl: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&q=80&w=1740',
        outlet: {
          name: "L'Orient Today",
          icon: 'https://images.unsplash.com/photo-1679678691170-7781f11f9d86?w=32&h=32&q=80&fit=crop'
        },
        timestamp: new Date(Date.now() - 7200000)
      }
    ]
  }
];

export default function TopNewsSidebar() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h2 className="text-lg font-bold mb-4">Most Read</h2>
        <div className="space-y-4">
          {topArticles.map(article => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="flex gap-4 p-2 hover:bg-gray-50 transition-colors rounded-lg group"
            >
              <img
                src={article.imageUrl}
                alt={article.headline}
                className="w-[60px] h-[60px] rounded object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1 group-hover:text-[#FF0000] transition-colors">
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

      <div className="bg-white rounded-lg shadow-sm p-4">
        <h2 className="text-lg font-bold mb-4">Trending</h2>
        <div className="space-y-4">
          {topArticles.slice(0, 5).map((article, index) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="flex items-start gap-4 group"
            >
              <span className="text-2xl font-bold text-gray-300">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-sm font-medium text-gray-900 group-hover:text-[#FF0000] transition-colors line-clamp-2">
                {article.headline}
              </h3>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h2 className="text-lg font-bold mb-4">Most Read by Outlet</h2>
        {outletArticles.map(({ outlet, articles }) => (
          <div key={outlet.name} className="mb-6 last:mb-0">
            <div className="flex items-center gap-2 mb-3">
              <img
                src={outlet.icon}
                alt={outlet.name}
                className="w-5 h-5 rounded-full"
              />
              <h3 className="font-medium text-gray-900">{outlet.name}</h3>
            </div>
            <div className="space-y-4">
              {articles.map((article, index) => (
                <Link
                  key={article.id}
                  to={`/article/${article.id}`}
                  className="flex items-start gap-3 group"
                >
                  <span className="text-lg font-bold text-gray-400 w-4">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-[15px] leading-snug line-clamp-2 mb-1 text-gray-900 group-hover:text-[#FF0000] transition-colors">
                      {article.headline}
                    </h4>
                    <span className="text-xs text-gray-400">
                      {formatTimeAgo(article.timestamp)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}