import React from 'react';
import { useFollow } from '../../contexts/FollowContext';
import AuthDialog from '../Auth/AuthDialog';
import { useState } from 'react';

interface FollowButtonProps {
  id: string;
  type: 'outlet' | 'author';
  isLoggedIn?: boolean;
}

export default function FollowButton({ id, type, isLoggedIn = true }: FollowButtonProps) {
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const { 
    isOutletFollowed, 
    isAuthorFollowed, 
    followOutlet, 
    unfollowOutlet,
    followAuthor,
    unfollowAuthor
  } = useFollow();

  const isFollowed = type === 'outlet' ? isOutletFollowed(id) : isAuthorFollowed(id);

  const handleClick = () => {
    if (!isLoggedIn) {
      setShowAuthDialog(true);
      return;
    }

    if (type === 'outlet') {
      isFollowed ? unfollowOutlet(id) : followOutlet(id);
    } else {
      isFollowed ? unfollowAuthor(id) : followAuthor(id);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="text-sm font-medium text-[#FF0000] hover:text-red-700 transition-colors"
      >
        {isFollowed ? 'Unfollow' : 'Follow'}
      </button>
      <AuthDialog
        isOpen={showAuthDialog}
        onClose={() => setShowAuthDialog(false)}
      />
    </>
  );
}