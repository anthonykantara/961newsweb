import React from 'react';
import ArticleCard from './ArticleCard';
import AdPlacement from '../Ads/AdPlacement';
import { Article } from '../../types/news';

const articles: Article[] = [
  {
    id: '1',
    headline: 'Economic Reforms Show Early Signs of Success',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2070',
    outlet: {
      name: 'The Daily Star',
      icon: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop'
    },
    timestamp: new Date(Date.now() - 3600000),
    collectionCount: 5,
    metrics: {
      reactions: 245,
      comments: 89,
      shares: 123
    }
  },
  // Add more articles with similar pattern
];

export default function ArticleList() {
  return (
    <div className="space-y-4">
      {articles.map((article, index) => (
        <React.Fragment key={article.id}>
          <ArticleCard article={article} />
          {(index + 1) % 5 === 0 && <AdPlacement />}
        </React.Fragment>
      ))}
    </div>
  );
}