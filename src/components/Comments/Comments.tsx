import React, { useState } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import { Comment } from '../../types/comment';
import AuthDialog from '../Auth/AuthDialog';
import CoinPurchaseDialog from '../CoinPurchase/CoinPurchaseDialog';

interface CommentsProps {
  comments: Comment[];
  isLoggedIn?: boolean;
}

export default function Comments({ comments: initialComments, isLoggedIn = false }: CommentsProps) {
  const [comments, setComments] = useState(initialComments);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [showCoinDialog, setShowCoinDialog] = useState(false);
  const [remainingFreeComments, setRemainingFreeComments] = useState(1);

  const handleComment = (text: string) => {
    if (!isLoggedIn) {
      setShowAuthDialog(true);
      return;
    }

    if (remainingFreeComments === 0) {
      setShowCoinDialog(true);
      return;
    }

    // Add new comment
    const newComment: Comment = {
      id: Date.now().toString(),
      content: text,
      user: {
        id: 'current-user',
        name: 'Current User',
        username: 'currentuser',
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1740'
      },
      timestamp: new Date(),
      likes: 0,
      isLiked: false,
      isPaid: remainingFreeComments === 0
    };

    setComments([newComment, ...comments]);
    setRemainingFreeComments(prev => Math.max(0, prev - 1));
  };

  const handleLike = (commentId: string) => {
    if (!isLoggedIn) {
      setShowAuthDialog(true);
      return;
    }

    setComments(prev => 
      prev.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            isLiked: !comment.isLiked
          };
        }
        return comment;
      })
    );
  };

  const handleReply = (commentId: string) => {
    if (!isLoggedIn) {
      setShowAuthDialog(true);
      return;
    }

    if (remainingFreeComments === 0) {
      setShowCoinDialog(true);
      return;
    }
    // Implement reply logic
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">{comments.length > 0 ? `Comments (${comments.length})` : 'Comments'}</h2>
      </div>

      <div className="mb-8">
        <CommentInput
          onSubmit={handleComment}
          isFirstComment={remainingFreeComments > 0}
          remainingFreeComments={remainingFreeComments}
        />
      </div>

      <CommentList
        comments={comments}
        onLike={handleLike}
        onReply={handleReply}
        onReport={(id) => console.log('Report', id)}
        onBlock={(id) => console.log('Block', id)}
      />

      <AuthDialog
        isOpen={showAuthDialog}
        onClose={() => setShowAuthDialog(false)}
      />

      <CoinPurchaseDialog
        isOpen={showCoinDialog}
        onClose={() => setShowCoinDialog(false)}
      />
    </div>
  );
}