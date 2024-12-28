import { ArticleList, CollectionHeader, CollectionSidebar } from './';
import AdPlacement from '../Ads/AdPlacement';

interface CollectionLayoutProps {
  title: string;
  description?: string;
  collectionId: string;
  collectionCount: number;
}

export default function CollectionLayout({ title, description, collectionId, collectionCount }: CollectionLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <AdPlacement />
          </div>

          <CollectionHeader 
            title={title}
            description={description}
            collectionCount={collectionCount}
          />

          <div className="flex flex-col lg:flex-row gap-8 mt-6">
            <main className="flex-1">
              <ArticleList collectionId={collectionId} />
            </main>
            <aside className="w-full lg:w-[340px]">
              <CollectionSidebar collectionId={collectionId} />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}