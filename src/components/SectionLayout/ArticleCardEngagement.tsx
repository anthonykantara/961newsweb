import React from 'react';
import { MessageCircle, Bookmark } from 'lucide-react';

interface ArticleCardEngagementProps {
  metrics: {
    reactions: number;
    comments: number;
    shares: number;
  };
  isBookmarked: boolean;
  onReaction: (e: React.MouseEvent) => void;
  onShare: (e: React.MouseEvent) => void;
  onComment: (e: React.MouseEvent) => void;
  onBookmark: (e: React.MouseEvent) => void;
}

export default function ArticleCardEngagement({
  metrics,
  isBookmarked,
  onReaction,
  onShare,
  onComment,
  onBookmark
}: ArticleCardEngagementProps) {
  return (
    <div className="flex items-center gap-4 pr-2">
      <div 
        onClick={onReaction}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 hover:border-[#FF0000]/20 hover:bg-[#FF0000]/5 transition-colors text-gray-500 hover:text-[#FF0000]"
      >
        <div className="flex items-center gap-2">
          <span className="text-base leading-none">❤️</span>
          <span className="text-sm font-medium">{metrics.reactions}</span>
        </div>
      </div>
      <button 
        onClick={onShare}
        className="h-10 flex items-center gap-2 px-5 rounded-full border border-gray-200 hover:border-[#FF0000]/20 hover:bg-[#FF0000]/5 transition-colors text-gray-500 hover:text-[#FF0000]"
      >
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&q=80&fit=crop"
              alt=""
              className="w-6 h-6 rounded-full border-2 border-white relative z-10"
            />
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&q=80&fit=crop"
              alt=""
              className="w-6 h-6 rounded-full border-2 border-white"
            />
            <div className="h-6 min-w-[1.5rem] rounded-fullbg-white border-2 border-white flex items-center justify-center px-1.5">
              <span className="text-xs font-medium leading-none">+12</span>
            </div>
          </div>
        </div>
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 2L11 13" />
          <path d="M22 2L15 22L11 13L2 9L22 2Z" />
        </svg>
      </button>
      <button 
        onClick={onComment}
        className="flex items-center gap-2 text-gray-500 hover:text-[#FF0000] transition-colors"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-medium">{metrics.comments}</span>
      </button>
      <button 
        onClick={onBookmark}
        className="text-gray-500 hover:text-[#FF0000] transition-colors"
      >
        <Bookmark className="w-5 h-5" fill={isBookmarked ? 'currentColor' : 'none'} />
      </button>
    </div>
  );
}