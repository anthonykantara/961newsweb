import React from 'react';
import ArticleCard from '../SectionLayout/ArticleCard';
import AdPlacement from '../Ads/AdPlacement';
import { Article } from '../../types/news';

interface ArticleListProps {
  collectionId: string;
}

const ArticleList = ({ collectionId }: ArticleListProps) => {
  const articles: Article[] = Array.from({ length: 30 }, (_, i) => ({
    id: (i + 1).toString(),
    headline: [
      'Breaking: Lebanese Central Bank Announces Comprehensive Economic Reform Package',
      'Market Response to New Banking Regulations Shows Positive Signs',
      'International Investors React to Economic Reform Measures',
      'Banking Sector Transformation Enters New Phase',
      'Currency Stabilization Efforts Show Early Results',
      'Regional Impact of Lebanese Economic Reforms',
      'Expert Analysis: Future of Lebanese Banking',
      'Timeline: The Road to Economic Recovery',
      'Global Financial Markets Respond to Lebanese Reforms'
    ][i % 9],
    imageUrl: [
      'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2070',
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1740',
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2070',
      'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&q=80&w=1740'
    ][i % 5],
    outlet: {
      name: ['The Daily Star', "L'Orient Today", 'Executive', 'Annahar', 'Al Akhbar'][i % 5],
      icon: [
        'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop',
        'https://images.unsplash.com/photo-1679678691170-7781f11f9d86?w=32&h=32&q=80&fit=crop',
        'https://images.unsplash.com/photo-1679678691250-a14e09c004c7?w=32&h=32&q=80&fit=crop',
        'https://images.unsplash.com/photo-1679678691270-a14e09c004c7?w=32&h=32&q=80&fit=crop',
        'https://images.unsplash.com/photo-1679678691290-a14e09c004c7?w=32&h=32&q=80&fit=crop'
      ][i % 5]
    },
    timestamp: new Date(Date.now() - (i * 3600000)),
    metrics: {
      reactions: Math.floor(Math.random() * 500) + 100,
      comments: Math.floor(Math.random() * 200) + 50,
      shares: Math.floor(Math.random() * 100) + 20
    }
  })).sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

  return (
    <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-100">
      {articles.map((article, index) => (
        <React.Fragment key={article.id}>
          <ArticleCard article={article} />
          {(index + 1) % 3 === 0 && index !== articles.length - 1 && (
            <div className="py-4">
              <AdPlacement />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ArticleList;