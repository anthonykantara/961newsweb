import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatTimeAgo } from '../../utils/dateUtils';

interface OutletSidebarProps {
  outlet: {
    name: string;
  };
}

export default function OutletSidebar({ outlet }: OutletSidebarProps) {
  const weeklyPopular = [
    {
      id: '1',
      title: 'Economic Reforms Show Early Signs of Success',
      timestamp: new Date(Date.now() - 86400000),
      views: '125k'
    },
    {
      id: '2',
      title: 'Banking Sector Transformation Accelerates',
      timestamp: new Date(Date.now() - 172800000),
      views: '98k'
    },
    {
      id: '3',
      title: 'International Investors React to New Policies',
      timestamp: new Date(Date.now() - 259200000),
      views: '76k'
    }
  ];

  const popularArticles = [
    {
      id: '1',
      title: 'Economic Reforms Show Early Signs of Success',
      timestamp: new Date(Date.now() - 86400000),
      views: '125k'
    },
    {
      id: '2',
      title: 'Banking Sector Transformation Accelerates',
      timestamp: new Date(Date.now() - 172800000),
      views: '98k'
    },
    {
      id: '3',
      title: 'International Investors React to New Policies',
      timestamp: new Date(Date.now() - 259200000),
      views: '76k'
    },
    {
      id: '4',
      title: 'Currency Stabilization Efforts Show Results',
      timestamp: new Date(Date.now() - 345600000),
      views: '65k'
    },
    {
      id: '5',
      title: 'Digital Banking Initiative Launches',
      timestamp: new Date(Date.now() - 432000000),
      views: '52k'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-[#FF0000]" />
          <h2 className="text-[18px] font-bold text-gray-900">Most Viewed This Week</h2>
        </div>
        <div className="space-y-6">
          {weeklyPopular.map((article, index) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="block group"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-gray-300">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-medium text-gray-900 group-hover:text-[#FF0000] transition-colors line-clamp-2 mb-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{formatTimeAgo(article.timestamp)}</span>
                    <span>•</span>
                    <span>{article.views} views</span>
                  </div>
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
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-[#FF0000]" />
          <h2 className="text-[18px] font-bold text-gray-900">Most Read All Time</h2>
        </div>
        <div className="space-y-6">
          {popularArticles.map((article, index) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="block group"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-gray-300">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-medium text-gray-900 group-hover:text-[#FF0000] transition-colors line-clamp-2 mb-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{formatTimeAgo(article.timestamp)}</span>
                    <span>•</span>
                    <span>{article.views} views</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}