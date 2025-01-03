import React from 'react';
import ArticleList from './ArticleList';
import TopNewsSidebar from './TopNewsSidebar';
import AdPlacement from '../Ads/AdPlacement';

interface CategoryLayoutProps {
  title: string;
  description?: string;
}

export default function CategoryLayout({ title, description }: CategoryLayoutProps) {
  return (
    <div className="min-h-screenbg-white py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            {description && (
              <p className="mt-2 text-gray-600">{description}</p>
            )}
          </div>

          <div className="mb-6">
            <AdPlacement />
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <main className="flex-1">
              <ArticleList />
            </main>
            <aside className="w-full md:w-[340px]">
              <TopNewsSidebar />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}