import React from 'react';
import { Clock, TrendingUp, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatTimeAgo } from '../../utils/dateUtils';
import FollowButton from './FollowButton';
import NewsletterCTA from './NewsletterCTA';

interface Article {
  id: string;
  title: string;
  timestamp: Date;
  outlet?: {
    name: string;
    logo: string;
  };
}

interface ArticleSidebarProps {
  outlet: {
    name: string;
    logo: string;
  };
  author: {
    name: string;
    imageUrl: string;
  };
  popularArticles: Article[];
  outletArticles: Article[];
  isLoggedIn?: boolean;
}

export default function ArticleSidebar({ 
  outlet, 
  author, 
  popularArticles, 
  outletArticles,
  isLoggedIn = true 
}: ArticleSidebarProps) {
  return (
    <aside className="w-[340px]">
      <div className="bg-white">
        <NewsletterCTA />
        <div className="p-6 border-b border-gray-200">
          <div className="h-[280px] w-[336px] rounded flex items-center justify-center relative">
            <div className="absolute top-2 right-2 bg-white/80 px-2 py-0.5 rounded text-xs text-gray-500">
              AD
            </div>
            <Link to={`/outlet/${outlet.id}`} className="text-[18px] font-bold text-gray-900 hover:text-[#FF0000] transition-colors">
              {outlet.name}
            </Link>
          </div>
        </div>
        <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-[#FF0000]" />
          <h2 className="text-[18px] font-bold text-gray-900">Trending</h2>
        </div>
        <div className="space-y-4">
          {popularArticles.slice(0, 5).map((article, index) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="group flex items-start gap-3 cursor-pointer pb-4 border-b border-gray-100 last:border-0 last:pb-0"
            >
              <span className="text-lg font-bold text-gray-400 w-4">
                {index + 1}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-[15px] leading-snug line-clamp-2 mb-1 text-gray-900 group-hover:text-[#FF0000] transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">
                    {formatTimeAgo(article.timestamp)}
                  </span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-400">{article.outlet?.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        </div>

        <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-[#FF0000]" />
          <h2 className="text-[18px] font-bold text-gray-900">{outlet.name}</h2>
        </div>
        <div className="space-y-4">
          {outletArticles.slice(0, 5).map((article, index) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="group flex items-start gap-3 cursor-pointer pb-4 border-b border-gray-100 last:border-0 last:pb-0"
            >
              <span className="text-lg font-bold text-gray-400 w-4">
                {index + 1}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-[15px] leading-snug line-clamp-2 mb-1 text-gray-900 group-hover:text-[#FF0000] transition-colors">
                  {article.title}
                </h3>
                <span className="text-xs text-gray-400">
                  {formatTimeAgo(article.timestamp)}
                </span>
              </div>
            </Link>
          ))}
        </div> 
      </div>
      </div>
    </aside>
  );
}