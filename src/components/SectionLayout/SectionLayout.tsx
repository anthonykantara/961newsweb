import React from 'react';
import ArticleList from './ArticleList';
import SectionSidebar from './SectionSidebar';
import AdPlacement from '../Ads/AdPlacement';

interface SectionLayoutProps {
  title: string;
  description?: string;
  section: string;
}

export default function SectionLayout({ title, description, section }: SectionLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <AdPlacement />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <main className="flex-1">
              <ArticleList section={section} />
            </main>
            <aside className="w-full lg:w-[340px]">
              <SectionSidebar section={section} />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}