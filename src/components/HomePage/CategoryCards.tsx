import React from 'react';
import Link from 'next/link';
import { TrendingUp, Briefcase, Globe2, Newspaper, Globe, BookOpen, ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 'trending',
    name: 'Trending',
    icon: TrendingUp,
    color: 'bg-red-50 text-[#FF0000]',
    link: '/trending',
    description: 'Most popular stories'
  },
  {
    id: 'politics',
    name: 'Politics',
    icon: Newspaper,
    color: 'bg-purple-50 text-purple-600',
    link: '/politics',
    description: 'Political updates'
  },
  {
    id: 'business',
    name: 'Business',
    icon: Briefcase,
    color: 'bg-blue-50 text-blue-600',
    link: '/business',
    description: 'Latest in business'
  },
  {
    id: 'middle-east',
    name: 'Middle East',
    icon: Globe,
    color: 'bg-orange-50 text-orange-600',
    link: '/middle-east',
    description: 'Regional news'
  },
  {
    id: 'world',
    name: 'World',
    icon: Globe2,
    color: 'bg-green-50 text-green-600',
    link: '/world',
    description: 'Global headlines'
  },
  {
    id: 'explained',
    name: 'Explained',
    icon: BookOpen,
    color: 'bg-indigo-50 text-indigo-600',
    link: '/explained',
    description: 'Making things Simpler'
  }
];

export default function CategoryCards() {
  return (
    <div className="grid grid-cols-6 gap-4">
      {categories.map(category => (
        <Link
          key={category.id}
          href={category.link}
          className="bg-white rounded-lg p-6 hover:shadow-md transition-all group relative"
        >
          <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
            <category.icon className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#FF0000] transition-colors">
            {category.name}
          </h3>
          <p className="text-sm text-gray-500">
            {category.description}
          </p>
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronRight className="w-5 h-5 text-[#FF0000]" />
          </div>
        </Link>
      ))}
    </div>
  );
}