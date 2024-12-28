import Link from 'next/link';

interface Article {
  id: string;
  title: string;
}

const topArticles: Article[] = [
  {
    id: '1',
    title: 'Lebanon Announces Major Infrastructure Development Plan for 2024'
  },
  {
    id: '2',
    title: 'New Environmental Protection Laws Take Effect Across the Country'
  },
  {
    id: '3',
    title: 'Tech Innovation Hub Opens in Beirut Digital District'
  },
  {
    id: '4',
    title: 'Central Bank Announces New Monetary Policy Framework'
  },
  {
    id: '5',
    title: 'International Investors Show Growing Interest in Lebanese Markets'
  }
];

export default function TopArticles() {
  return (
    <div className="border-t border-gray-200">
      <div className="p-6">
        <h2 className="text-[18px] font-bold mb-6">Top Articles</h2>
        <div className="space-y-3">
          {topArticles.map((article, index) => (
            <Link
              key={article.id}
              href={`/article/${article.id}`}
              className="group flex items-start gap-3 cursor-pointer"
            >
              <span className="text-[#FF0000] text-lg">•</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-[17px] leading-snug line-clamp-2 text-gray-900 group-hover:text-[#FF0000] transition-colors">
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}