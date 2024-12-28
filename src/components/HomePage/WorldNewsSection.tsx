import React from 'react';
import { Globe } from 'lucide-react';
import Link from 'next/link';
import { formatTimeAgo } from '../../utils/dateUtils';
import { ChevronRight } from 'lucide-react';

const worldNews = [
  {
    id: '1',
    title: 'Global Climate Summit Reaches Historic Agreement on Emissions',
    imageUrl: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80&w=2070',
    timestamp: new Date(Date.now() - 3600000),
    outlet: {
      name: 'Reuters',
      logo: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop'
    }
  },
  {
    id: '2',
    title: 'Tech Giants Announce Joint AI Ethics Initiative',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
    timestamp: new Date(Date.now() - 7200000),
    outlet: {
      name: 'Associated Press',
      logo: 'https://images.unsplash.com/photo-1679678691250-a14e09c004c7?w=32&h=32&q=80&fit=crop'
    }
  },
  {
    id: '3',
    title: 'Major Breakthrough in Renewable Energy Storage Technology',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2070',
    timestamp: new Date(Date.now() - 10800000),
    outlet: {
      name: 'Bloomberg',
      logo: 'https://images.unsplash.com/photo-1679678691170-7781f11f9d86?w=32&h=32&q=80&fit=crop'
    }
  }
];

const headlines = [
  'International Trade Agreement Signed Between Major Economies',
  'Space Agency Announces Plans for New Mars Mission',
  'Global Health Organization Reports Progress on Vaccine Distribution',
  'Diplomatic Relations Strengthen in Southeast Asian Summit',
  'New Study Reveals Impact of Climate Change on Ocean Currents'
];

export default function WorldNewsSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-[#FF0000]" />
          <h2 className="text-[18px] font-bold">World News</h2>
        </div>
        <Link 
          href="/world"
          className="text-[#FF0000] hover:text-red-700 transition-colors text-base font-medium"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-[340px,150px,340px] gap-6">
        <Link
          href={`/article/${worldNews[0].id}`}
          className="group"
        >
          <div className="aspect-[1.91/1] overflow-hidden rounded-lg relative mb-3">
            <img
              src={worldNews[0].imageUrl}
              alt={worldNews[0].title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <h3 className="font-medium text-[17px] leading-snug text-gray-900 group-hover:text-[#FF0000] transition-colors line-clamp-2 mb-2">
              {worldNews[0].title}
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">{worldNews[0].outlet.name}</span>
              <span className="text-xs text-gray-400">{formatTimeAgo(worldNews[0].timestamp)}</span>
            </div>
          </div>
        </Link>

        <div className="space-y-4">
          {worldNews.slice(1, 3).map((article, index) => (
            <Link
              key={article.id}
              href={`/article/${article.id}`}
              className="group block mb-4 last:mb-0"
            >
              <div className="h-[78px] overflow-hidden rounded-lg relative mb-2">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="font-medium text-[15px] leading-snug text-gray-900 group-hover:text-[#FF0000] transition-colors line-clamp-2 mb-1">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{article.outlet.name}</span>
                  <span className="text-xs text-gray-400">{formatTimeAgo(article.timestamp)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="space-y-4">
          {headlines.map((headline, index) => (
            <div key={index}>
              <Link href="/world" className="group block py-0.5 cursor-pointer">
                <h3 className="font-medium text-[15px] leading-snug line-clamp-2 text-gray-900 group-hover:text-[#FF0000] transition-colors">
                  {headline}
                </h3>
              </Link>
              {index < headlines.length - 1 && (
                <div className="h-px bg-gray-100 mt-0.5" />
              )}
            </div>
        ))}
        </div>
      </div>
    </div>
  );
}