import { Clock, MessageCircle, Bookmark, Share2, UserPlus } from 'lucide-react';
import { formatTimeAgo } from '../../utils/dateUtils';
import Link from 'next/link';

interface ArticleHeaderProps {
  title: string;
  subtitle: string;
  timestamp: Date;
  outlet: {
    name: string;
    logo: string;
    isFollowing: boolean;
    id: string;
  };
  isBookmarked: boolean;
  onBookmarkToggle: () => void;
  onShareClick: () => void;
}

export default function ArticleHeader({
  title,
  subtitle,
  timestamp,
  outlet,
  isBookmarked,
  onBookmarkToggle,
  onShareClick
}: ArticleHeaderProps) {
  return (
    <header className="space-y-4">
      <h1 className="text-4xl font-bold text-gray-900 leading-tight">
        {title}
      </h1>
      <p className="text-xl text-gray-600">
        {subtitle}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href={`/outlet/${outlet.id}`} className="flex items-center gap-4 group">
            <img
              src={outlet.logo}
              alt={outlet.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <h2 className="font-medium text-gray-900 group-hover:text-[#FF0000] transition-colors">{outlet.name}</h2>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>{formatTimeAgo(timestamp)}</span>
              </div>
            </div>
          </Link>
          {!outlet.isFollowing && (
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FF0000] text-white rounded-full hover:bg-red-600 transition-colors">
              <UserPlus className="w-4 h-4" />
              <span className="text-sm font-medium">Follow</span>
            </button>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={onBookmarkToggle}
            className={`p-2 rounded-full transition-colors ${
              isBookmarked ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
            }`}
          >
            <Bookmark className="w-5 h-5" fill={isBookmarked ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={onShareClick}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Share2 className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Comments</span>
          </button>
        </div>
      </div>
    </header>
  );
}