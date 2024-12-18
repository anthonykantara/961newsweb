import React from 'react';
import { UserPlus } from 'lucide-react';

interface Journalist {
  id: string;
  name: string;
  imageUrl: string;
  outlets: Array<{
    name: string;
    logo: string;
  }>;
  followers: number;
  isFollowing?: boolean;
}

const journalists: Journalist[] = [
  {
    id: '1',
    name: 'Sarah Thompson',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1740',
    outlets: [
      { name: 'The Daily Star', logo: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop' },
      { name: "L'Orient Today", logo: 'https://images.unsplash.com/photo-1679678691170-7781f11f9d86?w=32&h=32&q=80&fit=crop' },
      { name: 'Executive', logo: 'https://images.unsplash.com/photo-1679678691250-a14e09c004c7?w=32&h=32&q=80&fit=crop' }
    ],
    followers: 12500
  },
  {
    id: '2',
    name: 'Michel Aoun',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1740',
    outlets: [
      { name: "L'Orient Today", logo: 'https://images.unsplash.com/photo-1679678691170-7781f11f9d86?w=32&h=32&q=80&fit=crop' },
      { name: 'The Daily Star', logo: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop' }
    ],
    followers: 8900
  },
  {
    id: '3',
    name: 'Nadia Hassan',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1740',
    outlets: [
      { name: 'Executive', logo: 'https://images.unsplash.com/photo-1679678691250-a14e09c004c7?w=32&h=32&q=80&fit=crop' }
    ],
    followers: 15200
  },
  {
    id: '4',
    name: 'Alex Mansour',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1740',
    outlets: [
      { name: 'The Daily Star', logo: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop' },
      { name: 'Executive', logo: 'https://images.unsplash.com/photo-1679678691250-a14e09c004c7?w=32&h=32&q=80&fit=crop' }
    ],
    followers: 9800
  }
];

export default function JournalistSection() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {journalists.map(journalist => (
        <div key={journalist.id} className="flex items-center gap-4 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors">
          <img
            src={journalist.imageUrl}
            alt={journalist.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 truncate">{journalist.name}</h3>
            <div className="flex items-center gap-1 mt-1">
              {journalist.outlets.slice(0, 3).map((outlet, index) => (
                <img
                  key={outlet.name}
                  src={outlet.logo}
                  alt={outlet.name}
                  className="w-4 h-4 rounded-full object-cover"
                  title={outlet.name}
                />
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-1">{journalist.followers.toLocaleString()} followers</p>
          </div>
          <button
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-[#FF0000] text-white hover:bg-red-700 transition-colors"
          >
            <UserPlus className="w-4 h-4" />
            <span>Follow</span>
          </button>
        </div>
      ))}
    </div>
  );
}