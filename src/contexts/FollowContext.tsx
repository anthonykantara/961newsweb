import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FollowContextType {
  followedOutlets: Set<string>;
  followedAuthors: Set<string>;
  followOutlet: (outletId: string) => void;
  unfollowOutlet: (outletId: string) => void;
  followAuthor: (authorId: string) => void;
  unfollowAuthor: (authorId: string) => void;
  isOutletFollowed: (outletId: string) => boolean;
  isAuthorFollowed: (authorId: string) => boolean;
}

const FollowContext = createContext<FollowContextType | undefined>(undefined);

export function FollowProvider({ children }: { children: ReactNode }) {
  const [followedOutlets, setFollowedOutlets] = useState<Set<string>>(new Set());
  const [followedAuthors, setFollowedAuthors] = useState<Set<string>>(new Set());

  const followOutlet = (outletId: string) => {
    setFollowedOutlets(prev => new Set([...prev, outletId]));
  };

  const unfollowOutlet = (outletId: string) => {
    setFollowedOutlets(prev => {
      const next = new Set(prev);
      next.delete(outletId);
      return next;
    });
  };

  const followAuthor = (authorId: string) => {
    setFollowedAuthors(prev => new Set([...prev, authorId]));
  };

  const unfollowAuthor = (authorId: string) => {
    setFollowedAuthors(prev => {
      const next = new Set(prev);
      next.delete(authorId);
      return next;
    });
  };

  const isOutletFollowed = (outletId: string) => followedOutlets.has(outletId);
  const isAuthorFollowed = (authorId: string) => followedAuthors.has(authorId);

  return (
    <FollowContext.Provider value={{
      followedOutlets,
      followedAuthors,
      followOutlet,
      unfollowOutlet,
      followAuthor,
      unfollowAuthor,
      isOutletFollowed,
      isAuthorFollowed
    }}>
      {children}
    </FollowContext.Provider>
  );
}

export function useFollow() {
  const context = useContext(FollowContext);
  if (context === undefined) {
    throw new Error('useFollow must be used within a FollowProvider');
  }
  return context;
}