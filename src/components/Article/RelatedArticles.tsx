import { Clock } from 'lucide-react';
import Link from 'next/link';
import { formatTimeAgo } from '../../utils/dateUtils';

interface Article {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  timestamp: Date;
  outlet: {
    name: string;
    logo: string;
  };
}

const relatedArticles: Article[] = [
  {
    id: '1',
    title: 'Impact of Economic Reforms on Small Businesses in Lebanon',
    category: 'Economy',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1740',
    timestamp: new Date(Date.now() - 86400000),
    outlet: {
      name: 'The Daily Star',
      logo: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop'
    }
  },
  {
    id: '2',
    title: 'Central Bank Announces New Digital Banking Framework',
    category: 'Finance',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2070',
    timestamp: new Date(Date.now() - 172800000),
    outlet: {
      name: "L'Orient Today",
      logo: 'https://images.unsplash.com/photo-1679678691170-7781f11f9d86?w=32&h=32&q=80&fit=crop'
    }
  },
  {
    id: '3',
    title: 'International Investors Show Growing Interest in Lebanese Markets',
    category: 'Investment',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2070',
    timestamp: new Date(Date.now() - 259200000),
    outlet: {
      name: 'Executive',
      logo: 'https://images.unsplash.com/photo-1679678691250-a14e09c004c7?w=32&h=32&q=80&fit=crop'
    }
  },
  {
    id: '4',
    title: 'Tech Sector Growth Accelerates Following Economic Reforms',
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
    timestamp: new Date(Date.now() - 345600000),
    outlet: {
      name: 'The Daily Star',
      logo: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop'
    }
  },
  {
    id: '5',
    title: 'Regional Impact of Lebanese Banking Sector Transformation',
    category: 'Banking',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1740',
    timestamp: new Date(Date.now() - 432000000),
    outlet: {
      name: "L'Orient Today",
      logo: 'https://images.unsplash.com/photo-1679678691170-7781f11f9d86?w=32&h=32&q=80&fit=crop'
    }
  },
  {
    id: '6',
    title: 'Infrastructure Development Plans Gain Momentum',
    category: 'Infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2070',
    timestamp: new Date(Date.now() - 518400000),
    outlet: {
      name: 'Executive',
      logo: 'https://images.unsplash.com/photo-1679678691250-a14e09c004c7?w=32&h=32&q=80&fit=crop'
    }
  }
];

export default function RelatedArticles() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold mb-6">Related Articles</h2>
      <div className="grid grid-cols-3 gap-6">
        {relatedArticles.map(article => (
          <Link
            key={article.id}
            href={`/article/${article.id}`}
            className="group"
          >
            <div className="aspect-[1.5/1] overflow-hidden rounded-lg mb-3">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-xs font-medium text-[#FF0000] bg-red-50 rounded">
                  {article.category}
                </span>
                <div className="flex items-center text-gray-400 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{formatTimeAgo(article.timestamp)}</span>
                </div>
              </div>
              <h3 className="font-medium text-gray-900 group-hover:text-[#FF0000] transition-colors line-clamp-2">
                {article.title}
              </h3>
              <div className="flex items-center gap-2">
                <img
                  src={article.outlet.logo}
                  alt={article.outlet.name}
                  className="w-5 h-5 rounded-full object-cover"
                />
                <span className="text-sm text-gray-500">{article.outlet.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}