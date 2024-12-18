import React, { memo } from 'react';
import PostCard from './PostCard';
import AdPlacement from '../Ads/AdPlacement';
import { Post } from '../../types/post';

interface FeedListProps {
  posts: Post[];
}

function FeedList({ posts }: FeedListProps) {
  return (
    <div className="space-y-6">
      {posts.map((post, index) => (
        <React.Fragment key={post.id}>
          <PostCard post={post} />
          {(index + 1) % 3 === 0 && index !== posts.length - 1 && (
            <AdPlacement />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default memo(FeedList);