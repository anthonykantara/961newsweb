import React from 'react';
import { UserPlus } from 'lucide-react';

interface JournalistProps {
  name: string;
  imageUrl: string;
  outlets: Array<{
    name: string;
    logo: string;
  }>;
  followers: number;
  isFollowing?: boolean;
}

export default function JournalistCard({ name, imageUrl, outlets, followers, isFollowing }: JournalistProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors">
      <img
        src={imageUrl}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-900 truncate">{name}</h3>
        <div className="flex items-center gap-2 mt-1">
          {outlets.slice(0, 3).map((outlet, index) => (
            <img
              key={outlet.name}
              src={outlet.logo}
              alt={outlet.name}
              className="w-4 h-4 rounded-full object-cover"
              title={outlet.name}
            />
          ))}
        </div>
        <p className="text-xs text-gray-400">{followers.toLocaleString()} followers</p>
      </div>
      <button
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
          isFollowing
            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            : 'bg-[#FF0000] text-white hover:bg-red-700'
        }`}
      >
        <UserPlus className="w-4 h-4" />
        <span>{isFollowing ? 'Following' : 'Follow'}</span>
      </button>
    </div>
  );
}