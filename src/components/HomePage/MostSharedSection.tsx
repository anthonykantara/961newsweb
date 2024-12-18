import React from 'react';
import { Share2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatTimeAgo } from '../../utils/dateUtils';

const mostSharedArticles = [
  {
    id: '1',
    title: 'Lebanon Announces Major Infrastructure Development Plan for 2024',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2070',
    category: 'Economy',
    timestamp: new Date(Date.now() - 3600000),
    shares: 1250,
    outlet: {
      name: 'The Daily Star',
      logo: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop'
    }
  },
  {
    id: '2',
    title: 'Tech Innovation Hub Opens in Beirut Digital District',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
    category: 'Technology',
    timestamp: new Date(Date.now() - 7200000),
    shares: 980,
    outlet: {
      name: 'Executive',
      logo: 'https://images.unsplash.com/photo-1679678691250-a14e09c004c7?w=32&h=32&q=80&fit=crop'
    }
  },
  {
    id: '3',
    title: 'Environmental Protection Laws Take Effect Across the Country',
    imageUrl: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&q=80&w=1740',
    category: 'Environment',
    timestamp: new Date(Date.now() - 10800000),
    shares: 845,
    outlet: {
      name: "L'Orient Today",
      logo: 'https://images.unsplash.com/photo-1679678691170-7781f11f9d86?w=32&h=32&q=80&fit=crop'
    }
  },
  {
    id: '4',
    title: 'Central Bank Announces New Monetary Policy Framework',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2070',
    category: 'Finance',
    timestamp: new Date(Date.now() - 14400000),
    shares: 720,
    outlet: {
      name: 'The Daily Star',
      logo: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop'
    }
  }
];

export default function MostSharedSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#FF0000]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 2L11 13" />
          <path d="M22 2L15 22L11 13L2 9L22 2Z" />
        </svg>
        <h2 className="text-[18px] font-bold">Most Shared</h2>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {mostSharedArticles.map(article => (
          <Link
            key={article.id}
            to={`/article/${article.id}`}
            className="group"
          >
            <div className="aspect-[1.5/1] overflow-hidden rounded-lg mb-3">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h3 className="text-[20px] font-medium text-gray-900 group-hover:text-[#FF0000] transition-colors line-clamp-2">
                {article.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}