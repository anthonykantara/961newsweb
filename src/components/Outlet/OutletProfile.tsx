"use client"

import { Users, Newspaper, Video, Eye } from 'lucide-react';
import ShareDialog from '../LiveFeed/ShareDialog';
import { useState } from 'react';

interface OutletProfileProps {
  outlet: {
    name: string;
    description: string;
    imageUrl: string;
    followers: string;
    articles: number;
    videos: number;
    views: string;
    journalists: Array<{
      id: string;
      name: string;
      imageUrl: string;
      role: string;
    }>;
    isFollowing: boolean;
  };
}

export default function OutletProfile({ outlet }: OutletProfileProps) {
  const [showShareDialog, setShowShareDialog] = useState(false);

  return (
    <>
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-6">
        <img
          src={outlet.imageUrl}
          alt={outlet.name}
          className="w-32 h-32 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{outlet.name}</h1>
              <p className="text-gray-600 mt-2 leading-relaxed">{outlet.description}</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowShareDialog(true)}
                className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
                <span>Share</span>
              </button>
              <button className="flex items-center gap-1.5 px-6 py-2.5 bg-[#FF0000] text-white rounded-full text-sm font-medium hover:bg-red-600 transition-colors">
                <span>Follow</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ShareDialog
      isOpen={showShareDialog}
      onClose={() => setShowShareDialog(false)}
      url={`https://news.961.co/outlet/${outlet.id}`}
    />
    </>
  );
}