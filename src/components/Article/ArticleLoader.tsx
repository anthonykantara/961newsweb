import React from 'react';
import { MessageCircle, Bookmark, Share2 } from 'lucide-react';
import { Article } from '../../types/article';
import ReactionSystem from '../Reactions/ReactionSystem';
import ShareDialog from '../LiveFeed/ShareDialog';
import EngagementBar from '../LiveFeed/EngagementBar';
import TopArticles from './TopArticles';
import OutletArticles from './OutletArticles';
import Comments from '../Comments/Comments';
import AdPlacement from '../Ads/AdPlacement';
import RelatedArticles from './RelatedArticles';

interface ArticleLoaderProps {
  article: Article;
  isLast: boolean;
}

export default function ArticleLoader({ article, isLast }: ArticleLoaderProps) {
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const [showShareDialog, setShowShareDialog] = React.useState(false);

  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 space-y-6">
        <h1 className="text-[2.25rem] font-extrabold text-gray-900 leading-tight mb-1 text-center">
          {article.title}
        </h1>
        <div className="text-[0.9rem] text-gray-500 text-center mt-0.5 mb-7 flex items-center justify-center gap-3">
          {article.timestamp.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}
          <span>•</span>
          <span>8 min read</span>
        </div>

        <div className="flex items-center justify-end mt-4">
          <div className="flex items-center gap-4 w-full">
            <div className="flex items-center gap-2">
              <ReactionSystem />
              <button 
                className="h-10 flex items-center gap-2 px-5 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-gray-600" />
                <span className="text-[15px] font-medium text-gray-600">24</span>
              </button>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <button 
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="h-10 flex items-center gap-2 px-5 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'text-[#FF0000]' : 'text-gray-600'}`} fill={isBookmarked ? 'currentColor' : 'none'} />
              </button>
              <button
                onClick={() => setShowShareDialog(true)}
                className="h-10 flex items-center gap-2 px-5 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=32&h=32&q=80&fit=crop"
                      alt=""
                      className="w-7 h-7 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&q=80&fit=crop"
                      alt=""
                      className="w-7 h-7 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&q=80&fit=crop"
                      alt=""
                      className="w-7 h-7 rounded-full border-2 border-white"
                    />
                    <div className="h-7 min-w-[1.75rem] rounded-full bg-white/20 border-2 border-white flex items-center justify-center px-1.5">
                      <span className="text-xs font-medium leading-none">+12</span>
                    </div>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="relative aspect-[2/1] overflow-hidden -mx-6 mb-8">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
        </div>

        {article.content.map((block, index) => {
          if (block.type === 'text') {
            return (
              <p key={index} className="text-[20px] text-gray-900 leading-[1.7] tracking-tight font-[450]">
                {block.content}
              </p>
            );
          }
          return null;
        })}
        
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowShareDialog(true)}
            className="flex items-center gap-4 px-8 py-3 bg-[#FF0000] text-white rounded-full hover:bg-red-600 transition-colors shadow-sm"
          >
            <span className="font-medium">Share this article</span>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=32&h=32&q=80&fit=crop"
                  alt=""
                  className="w-7 h-7 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&q=80&fit=crop"
                  alt=""
                  className="w-7 h-7 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&q=80&fit=crop"
                  alt=""
                  className="w-7 h-7 rounded-full border-2 border-white"
                />
                <div className="h-7 min-w-[1.75rem] rounded-full bg-white/20 border-2 border-white flex items-center justify-center px-1.5">
                  <span className="text-xs font-medium leading-none">+12</span>
                </div>
              </div>
            </div>
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6 mt-4">
        <EngagementBar 
          likes={0}
          shares={0}
          onLike={() => {}}
          onShare={() => {}}
        />
      </div>

      <AdPlacement />

      <div className="space-y-6 mt-6">
        <Comments comments={[]} />

        <AdPlacement />

        <TopArticles />

        <OutletArticles />

        <AdPlacement />

        <RelatedArticles />

        <AdPlacement />
      </div>

      {!isLast && (
        <div className="border-t border-gray-100 p-4 text-center text-sm text-gray-500">
          Scroll for next article
        </div>
      )}

      <ShareDialog
        isOpen={showShareDialog}
        onClose={() => setShowShareDialog(false)}
        url={`https://news.961.co/article/${article.id}`}
      />
    </article>
  );
}