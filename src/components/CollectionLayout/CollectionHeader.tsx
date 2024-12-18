import React from 'react';

interface CollectionHeaderProps {
  title: string;
  description?: string;
  collectionCount: number;
}

export default function CollectionHeader({ title, description, collectionCount }: CollectionHeaderProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <svg className="w-8 h-8 text-[#FF0000]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M16 2v4a2 2 0 002 2h4" />
            <path d="M21 6v13a2 2 0 01-2 2H9a2 2 0 01-2-2V4a2 2 0 012-2h8l4 4z" />
            <path d="M3 7v13a2 2 0 002 2h11" strokeOpacity="0.5" />
          </svg>
          <div className="absolute -top-2 -right-2 min-w-[20px] h-[20px] px-1 bg-[#FF0000] rounded-full flex items-center justify-center">
            <span className="text-[12px] font-bold text-white leading-none">{collectionCount}</span>
          </div>
        </div>
        <h1 className="text-2xl font-bold">Related to this Story</h1>
      </div>
      {description && (
        <p className="text-gray-600">{description}</p>
      )}
    </div>
  );
}