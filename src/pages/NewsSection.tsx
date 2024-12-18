import React from 'react';
import ArticleList from '../components/NewsSection/ArticleList';
import TopNewsSidebar from '../components/NewsSection/TopNewsSidebar';
import AdPlacement from '../components/Ads/AdPlacement';

export default function NewsSection() {
  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="container mx-auto px-4">
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
  );
}