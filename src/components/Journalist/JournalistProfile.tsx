import React from 'react';
import { UserPlus, Users, Newspaper, Video, Eye, Share2 } from 'lucide-react';
import ShareDialog from '../LiveFeed/ShareDialog';

interface JournalistProfileProps {
  journalist: {
    name: string;
    role: string;
    imageUrl: string;
    bio: string;
    followers: string;
    articles: number;
    videos: number;
    views: string;
    outlets: Array<{
      name: string;
      logo: string;
    }>;
    isFollowing: boolean;
  };
}

export default function JournalistProfile({ journalist }: JournalistProfileProps) {
  const [showShareDialog, setShowShareDialog] = React.useState(false);

  return (
    <>
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-start gap-6">
        <img
          src={journalist.imageUrl}
          alt={journalist.name}
          className="w-32 h-32 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{journalist.name}</h1>
              <p className="text-gray-600 mt-1">{journalist.role}</p>
              <div className="flex items-center gap-3 mt-3">
                {journalist.outlets.map((outlet) => (
                  <img
                    key={outlet.name}
                    src={outlet.logo}
                    alt={outlet.name}
                    className="w-6 h-6 rounded-full"
                    title={outlet.name}
                  />
                ))}
              </div>
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
          <p className="text-gray-600 mt-4 leading-relaxed">{journalist.bio}</p>
        </div>
      </div>
    </div>
    <ShareDialog
      isOpen={showShareDialog}
      onClose={() => setShowShareDialog(false)}
      url={`https://news.961.co/journalist/${journalist.id}`}
    />
    </>
  );
}