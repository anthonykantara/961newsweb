import React, { useState } from 'react';
import { Heart, MoreVertical } from 'lucide-react';
import { formatTimeAgo } from '../../utils/dateUtils';
import { Comment } from '../../types/comment';
import CoinIcon from '../Icons/CoinIcon';

interface CommentItemProps {
  comment: Comment;
  onLike: (commentId: string) => void;
  onReply: (commentId: string) => void;
  onReport: (commentId: string) => void;
  onBlock: (userId: string) => void;
  isReply?: boolean;
}

export default function CommentItem({
  comment,
  onLike,
  onReply,
  onReport,
  onBlock,
  isReply = false
}: CommentItemProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex gap-3">
      <img
        src={comment.user.avatarUrl}
        alt={comment.user.name}
        className="w-8 h-8 rounded-full object-cover flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-medium text-gray-900">{comment.user.name}</span>
          <span className="text-sm text-gray-500">@{comment.user.username}</span>
          <span className="text-sm text-gray-400">•</span>
          <span className="text-sm text-gray-400">{formatTimeAgo(comment.timestamp)}</span>
          {comment.isPaid && (
            <div className="flex items-center gap-1">
              <span className="text-sm text-gray-400">•</span>
              <CoinIcon className="w-3.5 h-3.5" />
            </div>
          )}
        </div>
        
        <p className="text-gray-800 mb-2">{comment.content}</p>
        
        <div className="flex items-center gap-4">
          <button
            onClick={() => onLike(comment.id)}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#FF0000] transition-colors group"
          >
            <Heart
              className={`w-4 h-4 ${
                comment.isLiked ? 'fill-[#FF0000] text-[#FF0000]' : 'group-hover:fill-[#FF0000]'
              }`}
            />
            <span>{comment.likes}</span>
          </button>
          
          {!isReply && (
            <button
              onClick={() => onReply(comment.id)}
              className="text-sm text-gray-500 hover:text-[#FF0000] transition-colors"
            >
              Reply
            </button>
          )}
          
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <MoreVertical className="w-4 h-4 text-gray-400" />
            </button>
            
            {showMenu && (
              <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-10">
                <button
                  onClick={() => {
                    onReport(comment.id);
                    setShowMenu(false);
                  }}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Report comment
                </button>
                <button
                  onClick={() => {
                    onBlock(comment.user.id);
                    setShowMenu(false);
                  }}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Block user
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}