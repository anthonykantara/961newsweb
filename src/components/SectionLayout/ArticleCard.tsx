"use client"

import { useState } from 'react';
import { MessageCircle, Bookmark } from 'lucide-react';
import { formatTimeAgo } from '../../utils/dateUtils';
import { Article } from '../../types/news';
import ArticleCardEngagement from './ArticleCardEngagement';
import ArticleCollectionBadge from './ArticleCollectionBadge';
import ShareDialog from '../LiveFeed/ShareDialog';
import AuthDialog from '../Auth/AuthDialog';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const navigate = useRouter();
  const isLoggedIn = false; // Replace with actual auth state

  const handleReaction = (e: MouseEvent) => {
    e.preventDefault();
    if (!isLoggedIn) {
      setShowAuthDialog(true);
      return;
    }
    // Open reaction dialog
  };

  const handleShare = (e: MouseEvent) => {
    e.preventDefault();
    setShowShareDialog(true);
  };

  const handleComment = (e: MouseEvent) => {
    e.preventDefault();
    navigate.push(`/article/${article.id}#comments`);
  };

  const handleBookmark = (e: MouseEvent) => {
    e.preventDefault();
    if (!isLoggedIn) {
      setShowAuthDialog(true);
      return;
    }
    setIsBookmarked(!isBookmarked);
  };

  return (
    <>
    <div className="block bg-white overflow-hidden group hover:bg-gray-50 transition-colors">
      <div className="p-4 flex items-center gap-4">
        <div className="h-[120px] aspect-[1.91] overflow-hidden rounded flex-shrink-0">
          <Link href={`/article/${article.id}`}>
            <img
              src={article.imageUrl}
              alt={article.headline}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </Link>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <div className="flex-1" />
            {article.collectionCount > 1 && (
              <ArticleCollectionBadge count={article.collectionCount} articleId={article.id} />
            )}
          </div>
          <Link href={`/article/${article.id}`}>
            <h2 className="text-2xl font-medium text-gray-900 line-clamp-2 mb-3 group-hover:text-[#FF0000] transition-colors">
              {article.headline}
            </h2>
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <Link 
              href={`/outlet/${article.id}`}
              className="text-sm text-gray-600 hover:text-[#FF0000] transition-colors"
            >
              {article.outlet.name}
            </Link>
            <span className="text-sm text-gray-400">•</span>
            <span className="text-sm text-gray-500">{formatTimeAgo(article.timestamp)}</span>
            <div className="flex-1" />
            <ArticleCardEngagement
              metrics={article.metrics}
              isBookmarked={isBookmarked}
              onReaction={handleReaction}
              onShare={handleShare}
              onComment={handleComment}
              onBookmark={handleBookmark}
            />
          </div>
        </div>
      </div>
    </div>
    <ShareDialog
      isOpen={showShareDialog}
      onClose={() => setShowShareDialog(false)}
      url={`https://news.961.co/article/${article.id}`}
    />
    <AuthDialog
      isOpen={showAuthDialog}
      onClose={() => setShowAuthDialog(false)}
    />
    </>
  );
}