import React, { useState } from 'react';
import { Zap, ChevronRight } from 'lucide-react';
import ContentLabel from './ContentLabel';
import ReactionSystem from '../Reactions/ReactionSystem';
import ShareDialog from './ShareDialog';
import { LiveUpdate } from '../../types/news';
import { formatTimeAgo } from '../../utils/dateUtils';
import { usePathname, useRouter } from 'next/navigation';

interface SharerProfile {
  id: string;
  imageUrl: string;
}

interface LiveUpdateFeedItemProps {
  update: LiveUpdate;
  sharers?: SharerProfile[];
}

export default function LiveUpdateFeedItem({ update, sharers = [] }: LiveUpdateFeedItemProps) {
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname() || '';
  const displayedSharers = sharers.slice(0, 3);
  const remainingSharers = Math.max(0, sharers.length - 3);
  const isUpdatesPage = pathname.includes(`/updates/`)

  const handleClick = () => {
    if (!isUpdatesPage) {
      router.push(`/updates/${update.id}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`bg-white rounded-lg shadow-sm overflow-hidden max-w-[800px] mx-auto hover:shadow-md transition-shadow ${isUpdatesPage ? '' : 'cursor-pointer'} group`}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-3 relative">
          <div className="flex items-center gap-2">
            {update.priority === 'critical' && (
              <span className="bg-[#FF0000] text-white text-xs px-2 py-1 rounded font-medium">
                Breaking
              </span>
            )}
            {update.isGraphic && (
              <ContentLabel type="graphic" />
            )}
            {update.priority === 'high' && (
              <div className="relative">
                <Zap className="w-5 h-5 text-[#FF0000] animate-pulse" />
                <span className="absolute inset-0 w-5 h-5 rounded-full bg-[#FF0000] opacity-25 animate-ping" />
              </div>
            )}
            <span className="text-gray-400 text-base">
              {formatTimeAgo(update.timestamp)}
            </span>
          </div>
          <div className="group flex items-center justify-between">
            <ReactionSystem />
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#FF0000] transition-colors" />
          </div>
        </div>
        <button
          onClick={handleClick}
          className={`block text-3xl font-bold text-gray-900 mb-4 leading-tight hover:text-[#FF0000] transition-colors ${isUpdatesPage ? 'pointer-events-none' : ''
            }`}
        >
          {update.title}
        </button>
        <p className="text-2xl text-gray-800 mb-6 leading-relaxed">
          {update.content}
        </p>
        {update.media && (
          <div className={`rounded-lg overflow-hidden ${update.media.aspectRatio === 'vertical' ? 'max-w-md mx-auto h-screen' : 'max-w-3xl mx-auto'
            } mb-4`}>
            {update.media.type === 'image' ? (
              <img
                src={update.media.url}
                alt=""
                className={`w-full object-cover ${update.media.aspectRatio === 'vertical'
                    ? 'h-full'
                    : 'max-h-[40vh]'
                  }`}
              />
            ) : (
              <div className={`relative ${update.media.aspectRatio === 'vertical'
                  ? 'h-screen'
                  : 'aspect-video max-h-[40vh]'
                }`}>
                <iframe
                  src={update.media.url}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        )}
        <div className="flex justify-center mt-8">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsShareDialogOpen(true);
            }}
            className="flex items-center gap-3 px-8 py-3 bg-[#FF0000] text-white rounded-full hover:bg-red-600 transition-colors shadow-sm"
          >
            <span className="font-medium">Share this update</span>
            {displayedSharers.length > 0 && (
              <div className="flex -space-x-3">
                {displayedSharers.map((sharer) => (
                  <img
                    key={sharer.id}
                    src={sharer.imageUrl}
                    alt=""
                    className="w-7 h-7 rounded-full border-2 border-[#FF0000]"
                  />
                ))}
                {remainingSharers > 0 && (
                  <div className="h-7 min-w-[1.75rem] rounded-full bg-white/20 border-2 border-[#FF0000] flex items-center justify-center px-1.5">
                    <span className="text-xs font-medium leading-none">+{remainingSharers}</span>
                  </div>
                )}
              </div>
            )}
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
          </button>
        </div>
      </div>
      <ShareDialog
        isOpen={isShareDialogOpen}
        onClose={() => setIsShareDialogOpen(false)}
        url={`https://news.961.co/updates/${update.id}`}
      />
    </div>
  );
}