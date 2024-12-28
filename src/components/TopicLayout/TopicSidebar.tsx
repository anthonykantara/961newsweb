import React from 'react';
import { TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { formatTimeAgo } from '../../utils/dateUtils';

interface Article {
  id: string;
  headline: string;
  imageUrl: string;
  outlet: {
    name: string;
    icon: string;
  };
  timestamp: Date;
  metrics: {
    reactions: number;
    comments: number;
    shares: number;
  };
}

const trendingArticles: Article[] = [
  {
    id: '1',
    headline: 'Major Economic Reform Package Announced by Central Bank',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2070',
    outlet: {
      name: 'The Daily Star',
      icon: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop'
    },
    timestamp: new Date(Date.now() - 3600000),
    metrics: {
      reactions: 245,
      comments: 89,
      shares: 123
    }
  },
  {
    id: '2',
    headline: 'Tech Innovation Hub Opens in Beirut Digital District',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
    outlet: {
      name: 'Executive',
      icon: 'https://images.unsplash.com/photo-1679678691250-a14e09c004c7?w=32&h=32&q=80&fit=crop'
    },
    timestamp: new Date(Date.now() - 7200000),
    metrics: {
      reactions: 189,
      comments: 67,
      shares: 98
    }
  },
  {
    id: '3',
    headline: 'New Environmental Protection Laws Take Effect',
    imageUrl: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&q=80&w=1740',
    outlet: {
      name: "L'Orient Today",
      icon: 'https://images.unsplash.com/photo-1679678691170-7781f11f9d86?w=32&h=32&q=80&fit=crop'
    },
    timestamp: new Date(Date.now() - 10800000),
    metrics: {
      reactions: 156,
      comments: 45,
      shares: 78
    }
  }
];

const topicContent = {
  Economy: {
    relatedTopics: ['Banking', 'Markets', 'Trade', 'Industry', 'Finance'],
    articles: [
      {
        id: '1',
        headline: 'Central Bank Announces New Economic Measures',
        timestamp: new Date(Date.now() - 3600000)
      }
    ]
  },
  Banking: {
    relatedTopics: ['Economy', 'Finance', 'Markets', 'Currency', 'Loans'],
    articles: [
      {
        id: '1',
        headline: 'Banking Sector Shows Signs of Recovery',
        timestamp: new Date(Date.now() - 3600000)
      }
    ]
  },
  Technology: {
    relatedTopics: ['Innovation', 'Startups', 'Digital', 'Fintech', 'AI'],
    articles: [
      {
        id: '1',
        headline: 'Tech Innovation Hub Opens in Beirut',
        timestamp: new Date(Date.now() - 3600000)
      }
    ]
  }
};

interface TopicSidebarProps {
  topic: string;
}

export default function TopicSidebar({ topic }: TopicSidebarProps) {
  const content = topicContent[topic as keyof typeof topicContent] || topicContent.Economy;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-[#FF0000]" />
          <h2 className="text-[18px] font-bold text-gray-900">Trending in {topic}</h2>
        </div>
        <div className="space-y-6">
          {trendingArticles.slice(0, 10).map((article, index) => (
            <Link
              key={article.id}
              href={`/article/${article.id}`} 
              className="block group py-2"
            >
              <h3 className="font-medium text-gray-900 group-hover:text-[#FF0000] transition-colors line-clamp-2 mb-2">
                {article.headline}
              </h3>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="text-xs text-gray-500">{article.outlet.name}</span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-500">{formatTimeAgo(article.timestamp)}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 h-[280px] w-[336px] flex items-center justify-center relative">
        <div className="absolute top-2 right-2 bg-white/80 px-2 py-0.5 rounded text-xs text-gray-500">
          AD
        </div>
        <span className="text-gray-400">Ad Space</span>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-[#FF0000]" />
          <h2 className="text-[18px] font-bold text-gray-900">Related Topics</h2>
        </div>
        <div className="space-y-4">
          {content.relatedTopics.map((relatedTopic) => (
            <Link
              key={relatedTopic}
              href={`/topic/${relatedTopic.toLowerCase()}`} 
              className="block group py-2"
            >
              <h3 className="font-medium text-gray-900 group-hover:text-[#FF0000] transition-colors">
                {relatedTopic}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}