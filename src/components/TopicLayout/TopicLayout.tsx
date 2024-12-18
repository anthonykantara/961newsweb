import React from 'react';
import ArticleList from '../SectionLayout/ArticleList';
import TopicSidebar from './TopicSidebar';
import AdPlacement from '../Ads/AdPlacement';

interface TopicLayoutProps {
  title: string;
  description?: string;
  topic: string;
}

export default function TopicLayout({ title, description, topic }: TopicLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <AdPlacement />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <main className="flex-1">
              <ArticleList />
            </main>
            <aside className="w-full lg:w-[340px]">
              <TopicSidebar topic={topic} />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}