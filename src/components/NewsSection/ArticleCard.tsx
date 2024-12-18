import React from 'react';
import { MessageCircle } from 'lucide-react';
import { formatTimeAgo } from '../../utils/dateUtils';
import { Article } from '../../types/news';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 h-[160px] flex gap-4">
        <div className="flex-1">
          {article.collectionCount > 1 && (
            <div className="text-xs text-gray-500 mb-2">
              Part of {article.collectionCount} related articles
            </div>
          )}
          <h2 className="text-xl font-medium text-gray-900 line-clamp-2 mb-3 hover:text-[#FF0000] transition-colors">
            {article.headline}
          </h2>
          
          <div className="flex items-center gap-3 mb-4">
            <img
              src={article.outlet.icon}
              alt={article.outlet.name}
              className="w-5 h-5 rounded-full"
            />
            <span className="text-sm text-gray-600">{article.outlet.name}</span>
            <span className="text-sm text-gray-400">•</span>
            <span className="text-sm text-gray-500">{formatTimeAgo(article.timestamp)}</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 text-gray-500 hover:text-[#FF0000] transition-colors">
                <span className="text-2xl leading-none">👍</span>
                <span className="text-sm">{article.metrics.reactions}</span>
              </button>
              <button className="flex items-center gap-1.5 text-gray-500 hover:text-[#FF0000] transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">{article.metrics.comments}</span>
              </button>
              <button className="flex items-center gap-1.5 text-gray-500 hover:text-[#FF0000] transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
                <span className="text-sm">{article.metrics.shares}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="w-[240px] aspect-[16/9] overflow-hidden rounded-lg">
          <img
            src={article.imageUrl}
            alt={article.headline}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}