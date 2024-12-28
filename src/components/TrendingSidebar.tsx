import { TrendingUp } from 'lucide-react';

const trendingTopics = [
  {
    id: 1,
    title: "Stock Markets Hit New Record High as Tech Sector Leads Rally",
    outlet: "Reuters",
    logo: "https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop"
  },
  {
    id: 2,
    title: "Healthcare Reform Bill Passes Senate with Overwhelming Support",
    outlet: "Associated Press",
    logo: "https://images.unsplash.com/photo-1679678691170-7781f11f9d86?w=32&h=32&q=80&fit=crop"
  },
  {
    id: 3,
    title: "Breakthrough in Renewable Energy Storage Technology Announced",
    outlet: "Bloomberg",
    logo: "https://images.unsplash.com/photo-1679678691250-a14e09c004c7?w=32&h=32&q=80&fit=crop"
  },
  {
    id: 4,
    title: "Major Sports League Announces Expansion to International Markets",
    outlet: "Financial Times",
    logo: "https://images.unsplash.com/photo-1679678691270-a14e09c004c7?w=32&h=32&q=80&fit=crop"
  },
  {
    id: 5,
    title: "Entertainment Industry Awards Ceremony Breaks Viewing Records",
    outlet: "CNBC",
    logo: "https://images.unsplash.com/photo-1679678691290-a14e09c004c7?w=32&h=32&q=80&fit=crop"
  },
  {
    id: 6,
    title: "Space Agency Reveals Plans for Next-Generation Telescope",
    outlet: "The Guardian",
    logo: "https://images.unsplash.com/photo-1679678691310-a14e09c004c7?w=32&h=32&q=80&fit=crop"
  },
  {
    id: 7,
    title: "Global Climate Summit Reaches Historic Agreement on Emissions",
    outlet: "BBC News",
    logo: "https://images.unsplash.com/photo-1679678691330-a14e09c004c7?w=32&h=32&q=80&fit=crop"
  }
];

export default function TrendingSidebar() {
  return (
    <aside className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-2 mb-6">
        <TrendingUp className="w-5 h-5 text-[#FF0000]" />
        <h2 className="text-[18px] font-bold">Trending Now</h2>
      </div>
      <div className="space-y-4">
        {trendingTopics.map((topic, index) => (
          <div 
            key={topic.id} 
            className="group flex items-start space-x-4 p-2 -mx-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <span className="text-[24px] font-bold text-[#FF0000] opacity-50 w-8">
              {(index + 1)}
            </span>
            <div className="flex-1">
              <h3 className="font-medium group-hover:text-[#FF0000] transition-colors text-[15px] leading-snug">
                {topic.title}
              </h3>
              <div className="flex items-center mt-2">
                <img
                  src={topic.logo}
                  alt={topic.outlet}
                  className="w-5 h-5 rounded-full object-cover"
                />
                <span className="text-[11px] text-gray-500 ml-2">{topic.outlet}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}