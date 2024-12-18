import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';

interface Category {
  name: string;
  path?: string;
}

const categories: Category[] = [
  { name: 'Home', path: '/' },
  { name: 'Following', path: '/following' },
  { name: 'For You', path: '/for-you' },
  { name: 'Lebanon', path: '/lebanon' },
  { name: 'Politics', path: '/politics' },
  { name: 'Business', path: '/business' },
  { name: 'Technology', path: '/technology' },
  { name: 'Middle East', path: '/middle-east' },
  { name: 'World News', path: '/world' },
  { name: 'Explained', path: '/explained' },
  { name: 'Fact Check', path: '/fact-check' },
  { name: 'Opinions', path: '/opinions' }
];

export default function Navigation() {
  const location = useLocation();
  const isLiveActive = location.pathname === '/live';
  const isHome = location.pathname === '/';

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-6 overflow-x-auto no-scrollbar">
            {!isHome && (
              <Link 
                to="/live"
                className={`flex items-center space-x-2 transition-colors ${
                  isLiveActive ? 'text-[#FF0000]' : 'text-gray-600 hover:text-[#FF0000]'
                }`}
              >
                <span className="animate-pulse flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF0000]">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF0000] opacity-75"></span>
                  </span>
                </span>
                <span className="whitespace-nowrap text-[18px] font-medium">
                  Live Updates
                </span>
              </Link>
            )}
          {categories.map((category) => (
            <Link
              to={category.path || '#'}
              key={category.name}
              className={`whitespace-nowrap text-[18px] font-medium transition-colors ${
                (!isLiveActive && ((isHome && category.path === '/') || category.path === location.pathname))
                  ? 'text-[#FF0000]' 
                  : 'text-gray-600 hover:text-[#FF0000]'
              }`}
            >
              {category.name}
            </Link>
          ))}
          </div>
          <button className="hover:text-gray-600 transition-colors ml-6">
            <Search className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}