interface Suggestion {
  id: string;
  name: string;
  imageUrl: string;
  type: 'journalist' | 'outlet';
  followers: number;
}

const suggestions: Suggestion[] = [
  {
    id: '1',
    name: 'Sarah Thompson',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1740',
    type: 'journalist',
    followers: 125000
  },
  {
    id: '2',
    name: 'The Daily Star',
    imageUrl: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=80&h=80&q=80&fit=crop',
    type: 'outlet',
    followers: 250000
  },
  {
    id: '3',
    name: 'Michel Aoun',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1740',
    type: 'journalist',
    followers: 98000
  },
  {
    id: '4',
    name: "L'Orient Today",
    imageUrl: 'https://images.unsplash.com/photo-1679678691170-7781f11f9d86?w=80&h=80&q=80&fit=crop',
    type: 'outlet',
    followers: 180000
  },
  {
    id: '5',
    name: 'Nadia Hassan',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1740',
    type: 'journalist',
    followers: 75000
  },
  {
    id: '6',
    name: 'Executive',
    imageUrl: 'https://images.unsplash.com/photo-1679678691250-a14e09c004c7?w=80&h=80&q=80&fit=crop',
    type: 'outlet',
    followers: 145000
  },
  {
    id: '7',
    name: 'Alex Mansour',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1740',
    type: 'journalist',
    followers: 62000
  },
  {
    id: '8',
    name: 'Annahar',
    imageUrl: 'https://images.unsplash.com/photo-1679678691270-a14e09c004c7?w=80&h=80&q=80&fit=crop',
    type: 'outlet',
    followers: 120000
  },
  {
    id: '9',
    name: 'Rania Khalil',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1740',
    type: 'journalist',
    followers: 45000
  },
  {
    id: '10',
    name: 'Al Akhbar',
    imageUrl: 'https://images.unsplash.com/photo-1679678691290-a14e09c004c7?w=80&h=80&q=80&fit=crop',
    type: 'outlet',
    followers: 95000
  }
];

export default function FollowingSidebar() {
  return (
    <aside className="w-[340px]">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-bold mb-6">Suggested</h2>
        <div className="space-y-4">
          {suggestions.map(suggestion => (
            <div key={suggestion.id} className="flex items-center gap-4">
              <img
                src={suggestion.imageUrl}
                alt={suggestion.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 truncate">{suggestion.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="capitalize">{suggestion.type}</span>
                  <span>•</span>
                  <span>{(suggestion.followers / 1000).toFixed(1)}K</span>
                </div>
              </div>
              <button className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#FF0000] text-white hover:bg-red-600 transition-colors">
                <span>Follow</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}