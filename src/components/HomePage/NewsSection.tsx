import React from 'react';
import { Clock } from 'lucide-react';
import Link from 'next/link';
import { formatTimeAgo } from '../../utils/dateUtils';

interface Article {
  id: string;
  title: string;
  imageUrl?: string;
  category: string;
  timestamp: Date;
  outlet: {
    name: string;
    logo: string;
  };
}

interface NewsSectionProps {
  title: string;
  articles: Article[];
  layout?: 'image' | 'compact';
}

export default function NewsSection({ title, articles, layout = 'image' }: NewsSectionProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="space-y-4">
        {articles.map(article => (
          <article key={article.id} className={`flex ${layout === 'image' ? 'gap-6' : 'gap-4'} items-start`}>
            {layout === 'image' && article.imageUrl && (
              <Link href={`/article/${article.id}`}>
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-48 h-32 object-cover rounded-lg flex-shrink-0"
                />
              </Link>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-0.5 text-xs font-medium text-[#FF0000] bg-red-50 rounded">
                  {article.category}
                </span>
                <div className="flex items-center text-gray-400 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{formatTimeAgo(article.timestamp)}</span>
                </div>
              </div>
              <Link 
                href={`/article/${article.id}`}
                className="block font-medium text-xl text-gray-900 leading-snug hover:text-[#FF0000] transition-colors"
              >
                {article.title}
              </Link>
              <div className="flex items-center mt-3">
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
    </div>
  );
}