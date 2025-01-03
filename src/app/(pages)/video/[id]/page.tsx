"use client"

import React, { useRef, useState } from 'react';
import { Play, Clock, MessageCircle, Bookmark } from 'lucide-react';
import { formatTimeAgo } from '@/utils/dateUtils';
import AdPlacement from '@/components/Ads/AdPlacement';
import EngagementBar from '@/components/LiveFeed/EngagementBar';
import ShareDialog from '@/components/LiveFeed/ShareDialog';
import AuthDialog from '@/components/Auth/AuthDialog';
import Comments from '@/components/Comments/Comments';
import ReactionSystem from '@/components/Reactions/ReactionSystem';
import CommentInput from '@/components/Comments/CommentInput';
import CommentList from '@/components/Comments/CommentList';
import TopArticles from '@/components/Article/TopArticles';

const video = {
  id: '1',
  title: "Behind the Scenes: Lebanon's Economic Recovery",
  description: "An in-depth look at the implementation of recent economic reforms and their impact on various sectors of the Lebanese economy. This special report features exclusive interviews with key stakeholders and expert analysis of the ongoing changes.",
  type: 'horizontal', // or 'vertical'
  thumbnailUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2070',
  duration: '15:45',
  views: 45200,
  timestamp: new Date(Date.now() - 3600000),
  outlet: {
    name: '961 News',
    logo: '/961-logo.png',
    isFollowing: false
  },
  author: {
    name: 'Sarah Thompson',
    role: 'Senior Economic Affairs Correspondent',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1740',
    bio: 'Sarah Thompson is a veteran journalist with over 15 years of experience covering economic affairs in the Middle East.',
    followers: 12500,
    isFollowing: false
  }
};

const relatedVideos = [
  {
    id: '2',
    title: 'Expert Analysis: Future of Lebanese Banking',
    thumbnailUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2070',
    duration: '8:15',
    views: 32100,
    outlet: {
      name: '961 News',
      logo: '/961-logo.png'
    }
  },
  // ... more related videos
];

const comments = [
  {
    id: '1',
    content: 'These economic reforms seem promising, but implementation will be key. The banking sector needs to fully commit to these changes for them to be effective.',
    user: {
      id: '1',
      name: 'John Smith',
      username: 'johnsmith',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1740'
    },
    timestamp: new Date(Date.now() - 3600000),
    likes: 24,
    isLiked: false,
    replies: [
      {
        id: '1.1',
        content: 'I agree. The success of these reforms heavily depends on proper oversight and enforcement.',
        user: {
          id: '2',
          name: 'Sarah Johnson',
          username: 'sarahj',
          avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1740'
        },
        timestamp: new Date(Date.now() - 3500000),
        likes: 12,
        isLiked: false
      },
      {
        id: '1.2',
        content: 'The timeline for implementation seems ambitious. Hope they can stick to it.',
        user: {
          id: '3',
          name: 'Michael Brown',
          username: 'mikebrown',
          avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1740'
        },
        timestamp: new Date(Date.now() - 3400000),
        likes: 8,
        isLiked: false
      }
    ]
  },
  {
    id: '2',
    content: 'The focus on digital transformation in the banking sector is particularly interesting. This could really modernize our financial infrastructure.',
    user: {
      id: '4',
      name: 'Emily Davis',
      username: 'emilyd',
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1740'
    },
    timestamp: new Date(Date.now() - 7200000),
    likes: 18,
    isLiked: false,
    isPaid: true
  },
];

export default function VideoPage({
  params,
}: {
  params: { id: string }
}) {
  const id = params.id;
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const isLoggedIn = false; // Replace with actual auth state
  const [remainingFreeComments, setRemainingFreeComments] = useState(1);
  const commentsRef = useRef<HTMLDivElement>(null);

  const handleBookmarkClick = () => {
    if (!isLoggedIn) {
      setShowAuthDialog(true);
      return;
    }
    setIsBookmarked(!isBookmarked);
  };

  const handleComment = (text: string) => {
    if (!isLoggedIn) {
      setShowAuthDialog(true);
      return;
    }

    // Add new comment logic here
    console.log('New comment:', text);
  };

  const handleLike = (commentId: string) => {
    if (!isLoggedIn) {
      setShowAuthDialog(true);
      return;
    }

    // Like comment logic here
    console.log('Like comment:', commentId);
  };

  const handleReply = (commentId: string) => {
    if (!isLoggedIn) {
      setShowAuthDialog(true);
      return;
    }

    // Reply to comment logic here
    console.log('Reply to comment:', commentId);
  };

  const handleCommentClick = () => {
    if (!isLoggedIn) {
      setShowAuthDialog(true);
      return;
    }
    commentsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screenbg-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-[300px,850px,340px] max-w-[1550px] mx-auto justify-center divide-x divide-gray-200">
          {/* Left Sidebar */}
          <div className="pr-6">
            <div className="sticky top-6 space-y-6">
              {/* Video Info */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={video.outlet.logo}
                    alt={video.outlet.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{video.outlet.name}</h3>
                    <p className="text-sm text-gray-500">125K followers</p>
                  </div>
                </div>
                <button className="w-full bg-[#FF0000] text-white py-2.5 rounded-lg font-medium hover:bg-red-600 transition-colors">
                  Follow
                </button>
              </div>

              {/* Video Stats */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-4">Video Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Views</span>
                    <span className="font-medium">{video.views.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">{video.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Published</span>
                    <span className="font-medium">{formatTimeAgo(video.timestamp)}</span>
                  </div>
                </div>
              </div>

              <AdPlacement />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 space-y-6">
                <h1 className="text-[2.25rem] font-extrabold text-gray-900 leading-tight mb-1 text-center">
                  {video.title}
                </h1>
                <div className="text-[0.9rem] text-gray-500 text-center mt-0.5 mb-7 flex items-center justify-center gap-3">
                  {video.timestamp.toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                  <span>•</span>
                  <span>Sponsored</span>
                </div>

                <div className="flex items-center justify-end mt-4">
                  <div className="flex items-center gap-4 w-full">
                    <div className="flex items-center gap-2">
                      <ReactionSystem />
                      <button
                        onClick={() => commentsRef.current?.scrollIntoView({ behavior: 'smooth' })}
                        className="h-10 flex items-center gap-2 px-5 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                      >
                        <MessageCircle className="w-5 h-5 text-gray-600" />
                        <span className="text-[15px] font-medium text-gray-600">24</span>
                      </button>
                    </div>
                    <div className="flex items-center gap-2 ml-auto">
                      <button
                        onClick={handleBookmarkClick}
                        className="h-10 flex items-center gap-2 px-5 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                      >
                        <Bookmark className={`w-5 h-5 ${isBookmarked ? 'text-[#FF0000]' : 'text-gray-600'}`} fill={isBookmarked ? 'currentColor' : 'none'} />
                      </button>
                      <button
                        onClick={() => setShowShareDialog(true)}
                        className="h-10 flex items-center gap-2 px-5 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex -space-x-3 mr-2">
                          <img
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=32&h=32&q=80&fit=crop"
                            alt=""
                            className="w-6 h-6 rounded-full border-2 border-white"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&q=80&fit=crop"
                            alt=""
                            className="w-6 h-6 rounded-full border-2 border-white"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&q=80&fit=crop"
                            alt=""
                            className="w-6 h-6 rounded-full border-2 border-white"
                          />
                          <div className="min-w-[1.5rem] h-6 rounded-full bg-red-100 border-2 border-white flex items-center justify-center px-1">
                            <span className="text-[13px] font-medium text-red-900">+12</span>
                          </div>
                        </div>
                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 2L11 13" />
                          <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Video Player */}
                <div className={`relative ${video.type === 'vertical' ? 'aspect-[9/16] max-w-[480px] mx-auto' : 'aspect-video'
                  } bg-black rounded-lg overflow-hidden group cursor-pointer`}>
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 text-gray-900" fill="currentColor" />
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={video.author.imageUrl}
                        alt={video.author.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900">{video.author.name}</h3>
                        <p className="text-sm text-gray-500">{video.author.role}</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-[#FF0000] text-white rounded-full font-medium hover:bg-red-600 transition-colors">
                      Follow
                    </button>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {video.description}
                  </p>
                  <EngagementBar
                    likes={0}
                    shares={0}
                    onLike={() => { }}
                    onShare={() => setShowShareDialog(true)}
                  />
                </div>

              </div>
            </article>

            <AdPlacement />

            {/* Comments */}
            <div ref={commentsRef} id="comments-section" className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Comments ({comments.length})</h2>
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
            </div>

            <AdPlacement />
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
                <TopArticles />
              </article>

              <AdPlacement />

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="relative">
                  <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth" id="videoScroll">
                    {relatedVideos.map((video, index) => (
                      <React.Fragment key={video.id}>
                        <div className="flex-none w-[300px] group cursor-pointer">
                          <div className="relative aspect-[9/16] rounded-lg overflow-hidden mb-3">
                            <img
                              src={video.thumbnailUrl}
                              alt={video.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                              <h3 className="text-white font-medium line-clamp-2 mb-2">
                                {video.title}
                              </h3>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <img
                                    src={video.outlet.logo}
                                    alt={video.outlet.name}
                                    className="w-5 h-5 rounded-full object-cover mr-2"
                                  />
                                  <span className="text-white/90 text-sm">{video.outlet.name}</span>
                                </div>
                                <div className="px-2 py-1 bg-black/40 text-white text-xs rounded">
                                  {video.duration}
                                </div>
                              </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                                <Play className="w-7 h-7 text-gray-900" fill="white" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {index === 1 && (
                          <div className="flex-none w-[300px]">
                            <div className="relative aspect-[9/16] rounded-lg overflow-hiddenbg-white flex items-center justify-center">
                              <div className="absolute top-2 right-2 bg-white/80 px-2 py-0.5 rounded text-xs text-gray-500">
                                AD
                              </div>
                              <span className="text-gray-400">Ad Space</span>
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      const container = document.getElementById('videoScroll');
                      if (container) {
                        container.scrollBy({ left: -600, behavior: 'smooth' });
                      }
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={() => {
                      const container = document.getElementById('videoScroll');
                      if (container) {
                        container.scrollBy({ left: 600, behavior: 'smooth' });
                      }
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>

              <AdPlacement />
          </div>

          {/* Right Sidebar */}
          <div className="pl-6">
            <div className="sticky top-6 space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-bold mb-4">Related Videos</h2>
                <div className="space-y-4">
                  {relatedVideos.map(video => (
                    <div key={video.id} className="group cursor-pointer">
                      <div className="relative aspect-video rounded-lg overflow-hidden mb-2">
                        <img
                          src={video.thumbnailUrl}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded">
                          {video.duration}
                        </div>
                      </div>
                      <h3 className="font-medium text-gray-900 group-hover:text-[#FF0000] transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-gray-500">{video.views.toLocaleString()} views</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <AdPlacement />
            </div>
          </div>
        </div>
      </div >

      <ShareDialog
        isOpen={showShareDialog}
        onClose={() => setShowShareDialog(false)}
        url={`https://news.961.co/video/${id}`}
      />

      <AuthDialog
        isOpen={showAuthDialog}
        onClose={() => setShowAuthDialog(false)}
      />
    </div >
  );
}