import React from 'react';
import { Clock } from 'lucide-react';
import { formatTimeAgo } from '../../utils/dateUtils';

interface FeaturedArticleProps {
  article: {
    title: string;
    excerpt: string;
    imageUrl: string;
    category: string;
    timestamp: Date;
    outlet: {
      name: string;
      logo: string;
    };
  };
}

export default function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <article className="relative overflow-hidden rounded-xl bg-white shadow-sm">
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 text-xs font-semibold text-white bg-[#FF0000] rounded-full">
            {article.category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            <span>{formatTimeAgo(article.timestamp)}</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold leading-tight mb-3 hover:text-[#FF0000] transition-colors">
          {article.title}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {article.excerpt}
        </p>
        <div className="flex items-center">
          <img
            src={article.outlet.logo}
            alt={article.outlet.name}
            className="w-6 h-6 rounded-full object-cover mr-2"
          />
          <span className="text-sm text-gray-500">{article.outlet.name}</span>
        </div>
      </div>
    </article>
  );
}