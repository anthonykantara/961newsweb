import React from 'react';
import ArticleCard from './ArticleCard';
import AdPlacement from '../Ads/AdPlacement';
import { Article } from '../../types/news';

// Helper function to calculate article priority score
const getArticlePriority = (article: Article, section?: string): number => {
  const baseScore = article.timestamp.getTime();
  if (section === 'Opinions' || section === 'Explained') {
    return baseScore;
  }
  const collectionBonus = article.collectionCount ? article.collectionCount * 3600000 : 0; // 1 hour bonus per collection item
  return baseScore + collectionBonus;
};

interface ArticleListProps {
  section?: string;
}

export default function ArticleList({ section }: ArticleListProps) {
  const articles: Article[] = Array.from({ length: 30 }, (_, i) => ({
    // Generate 30 dummy articles
    id: (i + 1).toString(),
    headline: i === 0 ? 
      'Breaking: Lebanese Central Bank Announces Comprehensive Economic Reform Package with Major Policy Changes and New Banking Regulations that Will Transform the Financial Sector and Impact Regional Markets' :
      [
      'Tech Innovation Hub Opens in Beirut Digital District as Part of Development Plan',
      'New Environmental Protection Laws Take Effect Across Lebanese Territory',
      'Central Bank Announces Comprehensive Policy Changes for Banking Sector',
      'Infrastructure Development Plans Gain Momentum with International Support',
      'Digital Banking Transformation Accelerates in Lebanese Financial Sector',
      'Healthcare Sector Receives Major Investment for Modernization Efforts',
      'Education Reform Initiative Launches with Focus on Digital Learning',
      'Tourism Sector Shows Signs of Recovery as International Travel Resumes',
      'Regional Trade Agreements Show Promise for Economic Growth'
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
    collectionCount: section !== 'Opinions' && section !== 'Explained' && i % 3 === 0 ? Math.floor(Math.random() * 8) + 8 : undefined,
    metrics: {
      reactions: Math.floor(Math.random() * 500) + 100,
      comments: Math.floor(Math.random() * 200) + 50,
      shares: Math.floor(Math.random() * 100) + 20
    }
  })).sort((a, b) => getArticlePriority(b, section) - getArticlePriority(a, section)); // Sort by priority score

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
}