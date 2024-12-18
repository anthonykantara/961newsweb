import React from 'react';
import { Clock } from 'lucide-react';
import { formatTimeAgo } from '../../utils/dateUtils';

const sportsNews = [
  {
    id: '1',
    title: 'Lebanese National Basketball Team Announces Squad for Asian Cup',
    category: 'Basketball',
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=890',
    timestamp: new Date(Date.now() - 3600000),
    outlet: {
      name: 'The Daily Star',
      logo: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop'
    }
  },
  {
    id: '2',
    title: 'Historic Win for Lebanese Football Club in AFC Champions League',
    category: 'Football',
    imageUrl: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=735',
    timestamp: new Date(Date.now() - 7200000),
    outlet: {
      name: "L'Orient Today",
      logo: 'https://images.unsplash.com/photo-1679678691170-7781f11f9d86?w=32&h=32&q=80&fit=crop'
    }
  },
  {
    id: '3',
    title: 'Rising Tennis Star Makes Waves in International Tournament',
    category: 'Tennis',
    imageUrl: 'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?auto=format&fit=crop&q=80&w=870',
    timestamp: new Date(Date.now() - 10800000),
    outlet: {
      name: 'Executive',
      logo: 'https://images.unsplash.com/photo-1679678691250-a14e09c004c7?w=32&h=32&q=80&fit=crop'
    }
  }
];

export default function SportsNews() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-4">Latest Sports News</h2>
      <div className="space-y-6">
        {sportsNews.map(article => (
          <article key={article.id} className="flex gap-6">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-48 h-32 object-cover rounded-lg flex-shrink-0"
            />
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
              <h3 className="font-medium text-xl text-gray-900 leading-snug hover:text-[#FF0000] transition-colors mb-3">
                {article.title}
              </h3>
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
    </div>
  );
}