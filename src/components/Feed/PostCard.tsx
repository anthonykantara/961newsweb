import { memo, useCallback } from 'react';
import Link from 'next/link';
import { Clock, Users, Play } from 'lucide-react';
import { formatTimeAgo, formatNumber } from '../../utils/dateUtils';
import { Post } from '../../types/post';
import { getAspectRatioClass } from './utils';

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  const isVerticalVideo = post.type === 'vertical-video';
  const isVideo = post.type === 'vertical-video' || post.type === 'horizontal-video';

  const getPostUrl = useCallback(() => {
    if (isVideo) {
      return `/video/${post.id}`;
    }
    return `/article/${post.id}`;
  }, [isVideo, post.id]);

  return (
    <Link
      href={getPostUrl()} 
      className={`block bg-white rounded-lg shadow-sm overflow-hidden group mb-16 ${
        isVerticalVideo ? 'max-w-sm mx-auto' : ''
      }`}
    >
      <div className={`relative ${getAspectRatioClass(post.type)} overflow-hidden`}>
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
        />
        {isVideo && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute top-3 left-3 w-11 h-11 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors">
              <Play className="w-5 h-5 text-white fill-white ml-0.5" />
            </div>
            <div className="absolute top-3 right-3 px-3 py-1.5 bg-black/20 backdrop-blur-md rounded-full border border-white/10">
              <span className="text-white text-xs font-medium tracking-wide">{post.duration}</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                <Play className="w-7 h-7 text-gray-900" />
              </div>
            </div>
            <div className="absolute bottom-6 left-3 right-3">
              <div className="flex items-center gap-2">
                <img
                  src={post.author.imageUrl}
                  alt={post.author.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-white/90 text-sm">{post.author.name}</span>
              </div>
              <h2 className="text-white font-medium text-2xl line-clamp-2">
                {post.title}
              </h2>
            </div>
          </>
        )}
      </div>
      {post.type === 'article' && (
        <div className="p-4">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={post.author.imageUrl}
              alt={post.author.name}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="font-medium text-gray-900">{post.author.name}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">{formatTimeAgo(post.timestamp)}</span>
          </div>
          <h2 className="text-2xl font-medium text-gray-900 group-hover:text-[#FF0000] transition-colors line-clamp-2">
            {post.title}
          </h2>
        </div>
      )}
    </Link>
  );
}

export default memo(PostCard);