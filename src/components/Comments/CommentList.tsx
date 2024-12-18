import React from 'react';
import CommentItem from './CommentItem';
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
  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <div key={comment.id} className="relative">
          <CommentItem
            comment={comment}
            onLike={onLike}
            onReply={onReply}
            onReport={onReport}
            onBlock={onBlock}
          />
          {comment.replies && comment.replies.length > 0 && (
            <div className="ml-12 mt-4 space-y-4 relative before:absolute before:left-[-20px] before:top-0 before:bottom-6 before:w-px before:bg-gray-200">
              {comment.replies.slice(0, 3).map((reply) => (
                <CommentItem
                  key={reply.id}
                  comment={reply}
                  onLike={onLike}
                  onReply={onReply}
                  onReport={onReport}
                  onBlock={onBlock}
                  isReply
                />
              ))}
              {comment.replies.length > 3 && (
                <button className="text-[#FF0000] text-sm font-medium hover:text-red-700 transition-colors ml-12">
                  Show {comment.replies.length - 3} more replies
                </button>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}