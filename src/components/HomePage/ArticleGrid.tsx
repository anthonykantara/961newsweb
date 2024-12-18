import React from 'react';
import { Clock } from 'lucide-react';
import { formatTimeAgo } from '../../utils/dateUtils';

interface Article {
  id: string;
  title: string;
  excerpt?: string;
  imageUrl?: string;
  category: string;
  timestamp: Date;
  outlet: {
    name: string;
    logo: string;
  };
}

interface ArticleGridProps {
  articles: Article[];
  layout?: 'compact' | 'standard';
}

export default function ArticleGrid({ articles, layout = 'standard' }: ArticleGridProps) {
  if (layout === 'compact') {
    return (
      <div className="grid gap-4">
        {articles.map(article => (
          <article key={article.id} className="flex items-start gap-4 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors">
            {article.imageUrl && (
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
              />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 text-xs font-medium text-[#FF0000] bg-red-50 rounded">
                  {article.category}
                </span>
                <div className="flex items-center text-gray-400 text-xs">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>{formatTimeAgo(article.timestamp)}</span>
                </div>
              </div>
              <h3 className="font-medium text-gray-900 line-clamp-2 mb-2 hover:text-[#FF0000] transition-colors">
                {article.title}
              </h3>
              <div className="flex items-center">
                <img
                  src={article.outlet.logo}
                  alt={article.outlet.name}
                  className="w-4 h-4 rounded-full object-cover mr-1.5"
                />
                <span className="text-xs text-gray-500">{article.outlet.name}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {articles.map(article => (
        <article key={article.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
          {article.imageUrl && (
            <div className="aspect-video overflow-hidden">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="px-2 py-1 text-xs font-medium text-[#FF0000] bg-red-50 rounded">
                {article.category}
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                <span>{formatTimeAgo(article.timestamp)}</span>
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2 hover:text-[#FF0000] transition-colors">
              {article.title}
            </h3>
            {article.excerpt && (
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {article.excerpt}
              </p>
            )}
            <div className="flex items-center">
              <img
                src={article.outlet.logo}
                alt={article.outlet.name}
                className="w-5 h-5 rounded-full object-cover mr-2"
              />
              <span className="text-sm text-gray-500">{article.outlet.name}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}