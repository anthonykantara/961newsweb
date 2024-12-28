import { TrendingUp } from 'lucide-react';

interface TrendingTopic {
  id: string;
  title: string;
  category: string;
  views: number;
}

const trendingTopics: TrendingTopic[] = [
  {
    id: '1',
    title: 'Economic Reforms Show Early Signs of Success',
    category: 'Economy',
    views: 125000
  },
  {
    id: '2',
    title: 'Tech Innovation Hub Opens in Beirut',
    category: 'Technology',
    views: 98000
  },
  {
    id: '3',
    title: 'New Environmental Protection Laws',
    category: 'Environment',
    views: 85000
  },
  {
    id: '4',
    title: 'Central Bank Policy Changes',
    category: 'Finance',
    views: 76000
  },
  {
    id: '5',
    title: 'Infrastructure Development Plans',
    category: 'Development',
    views: 72000
  },
  {
    id: '6',
    title: 'Digital Banking Transformation',
    category: 'Banking',
    views: 68000
  },
  {
    id: '7',
    title: 'Healthcare Sector Investment',
    category: 'Healthcare',
    views: 65000
  },
  {
    id: '8',
    title: 'Education Reform Initiative',
    category: 'Education',
    views: 61000
  },
  {
    id: '9',
    title: 'Tourism Recovery Signs',
    category: 'Tourism',
    views: 58000
  },
  {
    id: '10',
    title: 'Regional Trade Agreements',
    category: 'Trade',
    views: 55000
  }
];

export default function ForYouSidebar() {
  return (
    <aside className="w-[340px]">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-[#FF0000]" />
          <h2 className="text-lg font-bold">Trending</h2>
        </div>
        <div className="space-y-4">
          {trendingTopics.map((topic, index) => (
            <div key={topic.id} className="group cursor-pointer">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-gray-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 group-hover:text-[#FF0000] transition-colors line-clamp-2">
                    {topic.title}
                  </h3>
                  <span className="text-sm text-gray-500 mt-1 block">
                    {topic.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}