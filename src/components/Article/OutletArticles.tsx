import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  imageUrl: string;
  author: {
    name: string;
  };
}

const articles: Article[] = [
  {
    id: '1',
    title: 'Lebanon Announces Major Infrastructure Development Plan for 2024',
    category: 'Economy',
    excerpt: 'The Lebanese government unveiled a comprehensive infrastructure development plan aimed at modernizing key sectors of the economy.',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2070',
    author: { name: 'Sarah Thompson' }
  },
  {
    id: '2',
    title: 'New Environmental Protection Laws Take Effect',
    category: 'Environment',
    excerpt: 'A series of new environmental protection laws have come into effect, marking a significant step towards sustainability.',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1740',
    author: { name: 'Michel Aoun' }
  },
  {
    id: '3',
    title: 'Tech Innovation Hub Opens in Beirut Digital District',
    category: 'Technology',
    excerpt: 'A new technology innovation hub has opened its doors in the Beirut Digital District, aiming to foster local startups.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
    author: { name: 'Nadia Hassan' }
  },
  {
    id: '4',
    title: 'Central Bank Announces New Monetary Policy Framework',
    category: 'Finance',
    excerpt: 'The Central Bank of Lebanon has introduced a new monetary policy framework to enhance financial stability.',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2070',
    author: { name: 'Alex Mansour' }
  },
  {
    id: '5',
    title: 'International Investors Show Growing Interest',
    category: 'Business',
    excerpt: 'Foreign investors are showing renewed interest in Lebanese markets following recent economic reforms.',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1740',
    author: { name: 'Sarah Thompson' }
  },
  {
    id: '6',
    title: 'Healthcare Sector Receives Major Investment',
    category: 'Healthcare',
    excerpt: 'A significant investment package has been announced for the modernization of healthcare facilities.',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2070',
    author: { name: 'Michel Aoun' }
  }
];

export default function OutletArticles() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    scrollRef.current?.addEventListener('scroll', checkScroll);
    return () => scrollRef.current?.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <div className="bg-white border border-gray-200">
      <div className="p-4">
        <h2 className="text-[18px] font-bold mb-4">More from The Daily Star</h2>
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex gap-3 overflow-x-hidden scroll-smooth relative"
          >
            {articles.map((article, index) => (
              <Link
                href={`/article/${article.id}`}
                key={article.id}
                className="flex-none w-[400px] hover:bg-gray-50 transition-colors p-3 border border-gray-200 rounded-lg group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-xs font-medium text-[#FF0000] bg-red-50 rounded">
                      {article.category}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#FF0000] transition-colors" />
                </div>
                <h3 className="font-medium text-[15px] leading-snug truncate mb-2 group-hover:text-[#FF0000] transition-colors">
                  {article.title}
                </h3>
                <div className="text-xs text-gray-500 mb-2">
                  By {article.author.name}
                </div>
                <div className="flex gap-3">
                  <p className="text-gray-600 text-xs leading-[1.35] line-clamp-2 flex-1 h-[2.7em] overflow-hidden">
                    {article.excerpt}
                  </p>
                  <div className="w-10 h-10 flex-shrink-0">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          )}
          {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          )}
        </div>
      </div>
    </div>
  );
}