import { Clock } from 'lucide-react';
import { formatTimeAgo } from '../utils/dateUtils';

interface NewsItem {
  id: number;
  title: string;
  category: string;
  timestamp: Date;
  imageUrl: string;
}

const featuredNews: NewsItem[] = [
  {
    id: 1,
    title: "Major Economic Reform Package Announced",
    category: "Economy",
    timestamp: new Date(Date.now() - 3600000),
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 2,
    title: "Tech Giants Announce Breakthrough in AI Development",
    category: "Technology",
    timestamp: new Date(Date.now() - 7200000),
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070"
  }
];

export default function MainNews() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {featuredNews.map((news) => (
        <article key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src={news.imageUrl} 
            alt={news.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-black rounded">
              {news.category}
            </span>
            <h2 className="mt-2 text-xl font-bold leading-tight hover:text-gray-600 cursor-pointer">
              {news.title}
            </h2>
            <div className="mt-3 flex items-center text-gray-500 text-sm">
              <Clock className="w-4 h-4 mr-1" />
              <span>{formatTimeAgo(news.timestamp)}</span>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}