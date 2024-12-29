import { useState } from 'react';
import { Heart, MoreVertical } from 'lucide-react';
import { formatTimeAgo } from '../../utils/dateUtils';
import CommentInput from '../Comments/CommentInput';
import { Comment } from '../../types/comment';

interface CommentListProps {
  comments: Comment[];
  onLike: (commentId: string) => void;
  onReply: (commentId: string) => void;
  onReport: (commentId: string) => void;
  onBlock: (userId: string) => void;
}

export default function CommentList({ 
  comments,
  onLike,
  onReply,
  onReport,
  onBlock
}: CommentListProps) {
  const [expandedComments, setExpandedComments] = useState<Set<string>>(new Set());
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyingToReply, setReplyingToReply] = useState<string | null>(null);

  const toggleReplies = (commentId: string) => {
    setExpandedComments(prev => {
      const next = new Set(prev);
      if (next.has(commentId)) {
        next.delete(commentId);
      } else {
        next.add(commentId);
      }
      return next;
    });
  };

  const handleReplySubmit = (text: string) => {
    if (replyingTo) {
      onReply(replyingTo);
      setReplyingTo(null);
    } else if (replyingToReply) {
      onReply(replyingToReply);
      setReplyingToReply(null);
    }
  };

  const renderComment = (comment: Comment, isReply: boolean = false) => (
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
          <span className="text-sm text-gray-400">{formatTimeAgo(comment.timestamp).replace(' ago', '')}</span>
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
          
          <button
            onClick={() => {
              if (isReply) {
                setReplyingToReply(replyingToReply === comment.id ? null : comment.id);
              } else {
                setReplyingTo(replyingTo === comment.id ? null : comment.id);
              }
            }}
            className="text-sm text-gray-500 hover:text-[#FF0000] transition-colors"
          >
            Reply {!isReply && comment.replies?.length > 0 && `(${comment.replies.length})`}
          </button>
          
          <div className="relative">
            <button
              onClick={() => setOpenMenuId(openMenuId === comment.id ? null : comment.id)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <MoreVertical className="w-4 h-4 text-gray-400" />
            </button>
            
            {openMenuId === comment.id && (
              <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-10">
                <button
                  onClick={() => {
                    onReport(comment.id);
                    setOpenMenuId(null);
                  }}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Report comment
                </button>
                <button
                  onClick={() => {
                    onBlock(comment.user.id);
                    setOpenMenuId(null);
                  }}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Block user
                </button>
              </div>
            )}
          </div>
        </div>

        {(replyingTo === comment.id || replyingToReply === comment.id) && (
          <div className="mt-4">
            <CommentInput
              onSubmit={handleReplySubmit}
              isFirstComment={false}
              remainingFreeComments={0}
            />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <div key={comment.id} className="relative">
          {renderComment(comment)}

          {comment.replies && comment.replies.length > 0 && (
            <>
              {!expandedComments.has(comment.id) ? (
                <button
                  onClick={() => toggleReplies(comment.id)}
                  className="text-[#FF0000] text-sm font-medium hover:text-red-700 transition-colors ml-12 mt-4"
                >
                  Show {comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}
                </button>
              ) : (
                <div className="ml-12 mt-4 space-y-4 relative before:absolute before:left-[-20px] before:top-0 before:bottom-6 before:w-px before:bg-gray-200">
                  {comment.replies.map(reply => (
                    <div key={reply.id}>
                      {renderComment(reply, true)}
                    </div>
                  ))}
                  <button
                    onClick={() => toggleReplies(comment.id)}
                    className="text-[#FF0000] text-sm font-medium hover:text-red-700 transition-colors"
                  >
                    Hide replies
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}