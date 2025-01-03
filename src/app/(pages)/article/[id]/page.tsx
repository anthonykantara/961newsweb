"use client"

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, Bookmark, UserPlus, Play } from 'lucide-react';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { useArticleLoader } from '@/hooks/useArticleLoader';
import ArticleLoader from '@/components/Article/ArticleLoader';
import ArticleSidebar from '@/components/Article/ArticleSidebar';
import ReactionSystem from '@/components/Reactions/ReactionSystem';
import AuthDialog from '@/components/Auth/AuthDialog';
import ShareDialog from '@/components/LiveFeed/ShareDialog';
import AdPlacement from '@/components/Ads/AdPlacement';
import FollowButton from '@/components/Article/FollowButton';
import { useFollow } from '@/contexts/FollowContext';
import EngagementBar from '@/components/LiveFeed/EngagementBar';
import RelatedArticles from '@/components/Article/RelatedArticles';
import VerticalVideoFeed from '@/components/Article/VerticalVideoFeed';
import LeftSidebar from '@/components/Article/LeftSidebar';
import OutletArticles from '@/components/Article/OutletArticles';
import TopArticles from '@/components/Article/TopArticles';
import CommentInput from '@/components/Article/CommentInput';
import CommentList from '@/components/Article/CommentList';
import Link from 'next/link';

const article = {
  id: '1',
  title: "Lebanon's Economic Recovery: A Comprehensive Analysis of Recent Reforms",
  subtitle: 'An in-depth look at the latest economic measures and their potential impact on the Lebanese economy',
  sponsored: true,
  timestamp: new Date(Date.now() - 3600000),
  featuredImage: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2070',
  outlet: {
    name: 'The Daily Star',
    logo: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=64&h=64&q=80&fit=crop',
    isFollowing: false
  },
  author: {
    name: 'Sarah Thompson',
    role: 'Economic Affairs Correspondent',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&q=80&fit=crop',
    bio: 'Sarah Thompson is a veteran journalist with over 15 years of experience covering economic affairs in the Middle East.',
    followers: 12500,
    isFollowing: false
  },
  content: [
    {
      type: 'text',
      content: "Lebanon's central bank has unveiled a comprehensive economic reform package aimed at stabilizing the currency and controlling inflation. The measures, announced early Thursday morning, include new lending regulations and interest rate adjustments that experts say could mark a turning point for the country's struggling economy."
    },
    {
      type: 'text',
      content: "The reform package, which comes after months of negotiations with international financial institutions, represents the most significant overhaul of Lebanon's monetary policy in decades. Central Bank Governor emphasized that these measures are designed to restore confidence in the banking sector while providing much-needed relief to businesses and individuals affected by the ongoing economic crisis."
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1740',
      caption: 'Central Bank of Lebanon headquarters in Beirut'
    },
    {
      type: 'text',
      content: `Key aspects of the reform package include:`
    },
    {
      type: 'list',
      items: [
        'New regulations on foreign currency transactions',
        'Revised interest rate framework',
        'Enhanced oversight of banking operations',
        'Support mechanisms for small and medium enterprises'
      ]
    },
    {
      type: 'text',
      content: `International response to the announcement has been largely positive, with the International Monetary Fund (IMF) expressing support for the reforms while emphasizing the importance of consistent implementation.`
    },
    {
      type: 'quote',
      content: `"These reforms represent a crucial step toward economic recovery, but their success will depend on rigorous implementation and continued commitment to structural changes."`,
      author: 'IMF spokesperson'
    },
    {
      type: 'text',
      content: `Market reaction to the announcement was immediate, with the Lebanese pound showing signs of stabilization against the US dollar in early trading. Local businesses have cautiously welcomed the measures, though many stress the need for additional reforms to address underlying economic challenges.`
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2070',
      caption: 'Currency exchange office in downtown Beirut'
    },
    {
      type: 'text',
      content: `The banking sector, which has been at the center of Lebanon's financial crisis, is expected to undergo significant changes under the new regulations. Industry experts suggest that while some institutions may face challenges adapting to the new framework, the overall impact should strengthen the sector's stability.`
    },
    {
      type: 'text',
      content: `Looking ahead, economists emphasize that these monetary reforms must be accompanied by broader structural changes to achieve lasting economic recovery. Key areas requiring attention include:`
    },
    {
      type: 'list',
      items: [
        'Public sector reform',
        'Infrastructure development',
        'Energy sector rehabilitation',
        'Enhanced transparency measures'
      ]
    },
    {
      type: 'text',
      content: `As Lebanon navigates this critical period of economic transformation, the success of these reforms will likely depend on continued political support and public cooperation. The coming months will be crucial in determining whether these measures can effectively address the country's economic challenges and pave the way for sustainable recovery.`
    }
  ]
};

const relatedArticles = [
  {
    id: '2',
    title: 'Impact of Economic Reforms on Small Businesses',
    category: 'Economy',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1740',
    timestamp: new Date(Date.now() - 86400000),
    outlet: {
      name: 'The Daily Star',
      logo: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop'
    }
  },
  // Add more related articles...
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
  {
    id: '3',
    content: 'International support will be crucial for these reforms to succeed. Good to see the IMF backing these measures.',
    user: {
      id: '5',
      name: 'David Wilson',
      username: 'davidw',
      avatarUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1740'
    },
    timestamp: new Date(Date.now() - 10800000),
    likes: 15,
    isLiked: false
  },
  {
    id: '4',
    content: 'The proposed support for small businesses is a step in the right direction. Many local businesses have been struggling.',
    user: {
      id: '6',
      name: 'Lisa Anderson',
      username: 'lisaa',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1740'
    },
    timestamp: new Date(Date.now() - 14400000),
    likes: 21,
    isLiked: false,
    replies: [
      {
        id: '4.1',
        content: 'Absolutely! Small businesses are the backbone of our economy.',
        user: {
          id: '7',
          name: 'Robert Taylor',
          username: 'robertt',
          avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1740'
        },
        timestamp: new Date(Date.now() - 14300000),
        likes: 9,
        isLiked: false,
        isPaid: true
      }
    ]
  },
  {
    id: '5',
    content: 'The transparency measures outlined in the reform package are particularly important. We need more accountability in the financial sector.',
    user: {
      id: '8',
      name: 'James Miller',
      username: 'jamesm',
      avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=1740'
    },
    timestamp: new Date(Date.now() - 18000000),
    likes: 16,
    isLiked: false
  },
  {
    id: '6',
    content: 'Looking forward to seeing how these reforms affect currency stability. The exchange rate fluctuations have been challenging.',
    user: {
      id: '9',
      name: 'Rachel Green',
      username: 'rachelg',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1740'
    },
    timestamp: new Date(Date.now() - 21600000),
    likes: 13,
    isLiked: false
  },
  {
    id: '7',
    content: 'The emphasis on digital infrastructure is crucial. Our financial system needs to catch up with global standards.',
    user: {
      id: '10',
      name: 'Thomas Lee',
      username: 'thomasl',
      avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1740'
    },
    timestamp: new Date(Date.now() - 25200000),
    likes: 11,
    isLiked: false,
    isPaid: true
  },
  // Add more comments...
];

const relatedVideos = [
  {
    id: '1',
    title: "Behind the Scenes: Lebanon's Economic Reforms",
    thumbnailUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1740',
    duration: '10:32',
    views: 45200,
    outlet: {
      name: '961 News',
      logo: '/961-logo.png'
    }
  },
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
  {
    id: '3',
    title: 'Market Response to New Financial Regulations',
    thumbnailUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2070',
    duration: '12:45',
    views: 28400,
    outlet: {
      name: '961 News',
      logo: '/961-logo.png'
    }
  },
  {
    id: '4',
    title: 'International Investors React to Lebanese Reforms',
    thumbnailUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1740',
    duration: '7:20',
    views: 25600,
    outlet: {
      name: '961 News',
      logo: '/961-logo.png'
    }
  },
  {
    id: '5',
    title: 'Timeline: The Road to Economic Recovery',
    thumbnailUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2070',
    duration: '15:30',
    views: 22800,
    outlet: {
      name: '961 News',
      logo: '/961-logo.png'
    }
  },
  {
    id: '6',
    title: 'Analysis: Impact of Reforms on Currency Stability',
    thumbnailUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2070',
    duration: '9:45',
    views: 19500,
    outlet: {
      name: '961 News',
      logo: '/961-logo.png'
    }
  },
  {
    id: '7',
    title: 'Regional Impact of Lebanese Economic Reforms',
    thumbnailUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1740',
    duration: '11:20',
    views: 17200,
    outlet: {
      name: '961 News',
      logo: '/961-logo.png'
    }
  },
  {
    id: '8',
    title: 'Banking Sector Shows Signs of Recovery',
    thumbnailUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2070',
    duration: '6:50',
    views: 15800,
    outlet: {
      name: '961 News',
      logo: '/961-logo.png'
    }
  },
  {
    id: '9',
    title: 'Central Bank Governor Addresses New Policy',
    thumbnailUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2070',
    duration: '13:15',
    views: 14200,
    outlet: {
      name: '961 News',
      logo: '/961-logo.png'
    }
  },
  {
    id: '10',
    title: 'IMF Comments on Lebanese Economic Reforms',
    thumbnailUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1740',
    duration: '10:40',
    views: 12500,
    outlet: {
      name: '961 News',
      logo: '/961-logo.png'
    }
  },
];

const popularArticles = [
  {
    id: '1',
    title: 'Central Bank Announces New Monetary Policy Framework',
    timestamp: new Date(Date.now() - 86400000)
  },
  {
    id: '2',
    title: 'Lebanese Banks Implement Digital Transformation Strategy',
    timestamp: new Date(Date.now() - 172800000)
  },
  {
    id: '3',
    title: 'IMF Delegation Arrives for Economic Reform Talks',
    timestamp: new Date(Date.now() - 259200000)
  },
  {
    id: '4',
    title: 'Government Unveils Five-Year Economic Recovery Plan',
    timestamp: new Date(Date.now() - 345600000)
  },
  {
    id: '5',
    title: 'Private Sector Response to New Banking Regulations',
    timestamp: new Date(Date.now() - 432000000)
  },
  {
    id: '6',
    title: 'International Support for Lebanese Economic Reforms',
    timestamp: new Date(Date.now() - 518400000)
  },
  {
    id: '7',
    title: 'Analysis: Impact of Reforms on Currency Stability',
    timestamp: new Date(Date.now() - 604800000)
  }
];

const outletArticles = [
  {
    id: '1',
    title: 'Banking Sector Shows Signs of Recovery After Reforms',
    timestamp: new Date(Date.now() - 43200000)
  },
  {
    id: '2',
    title: 'Experts Weigh In on Economic Reform Package',
    timestamp: new Date(Date.now() - 86400000)
  },
  {
    id: '3',
    title: 'Market Response to New Financial Regulations',
    timestamp: new Date(Date.now() - 129600000)
  },
  {
    id: '4',
    title: 'International Investors React to Lebanese Reforms',
    timestamp: new Date(Date.now() - 172800000)
  },
  {
    id: '5',
    title: 'Timeline: The Road to Economic Recovery',
    timestamp: new Date(Date.now() - 216000000)
  },
  {
    id: '6',
    title: 'Analysis: Future Prospects for Lebanese Economy',
    timestamp: new Date(Date.now() - 259200000)
  },
  {
    id: '7',
    title: 'Regional Impact of Lebanese Economic Reforms',
    timestamp: new Date(Date.now() - 302400000)
  }
];

export default function ArticlePage() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [isLoggedIn] = useState(false); // Set to false for testing
  const [remainingFreeComments, setRemainingFreeComments] = useState(1);
  const commentsRef = useRef<HTMLDivElement>(null);

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

  const handleBookmarkClick = () => {
    if (!isLoggedIn) {
      setShowAuthDialog(true);
      return;
    }
    setIsBookmarked(!isBookmarked);
  };

  const handleCommentClick = () => {
    if (!isLoggedIn) {
      setShowAuthDialog(true);
      return;
    }
    commentsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const {
    loadedArticles,
    isLoading,
    hasMore,
    loadNextArticle
  } = useArticleLoader(article);


  const { targetRef } = useInfiniteScroll(loadNextArticle);

  return (
    <div className="min-h-screen py-6">
      <div className="container mx-auto px-4">
        <AdPlacement />

        <div className="grid grid-cols-[300px,850px,340px] max-w-[1550px] mx-auto justify-center divide-x divide-gray-200">
          <LeftSidebar
            articles={popularArticles}
            outlet={article.outlet}
            author={article.author}
          />
          <div className="space-y-6">
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

                <div className="relative aspect-[2/1] overflow-hidden -mx-6 mb-8">
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
                  <div className="absolute bottom-2 right-3">
                    <p className="text-white/65 text-sm">
                      Photo: Central Bank of Lebanon headquarters in Beirut
                    </p>
                  </div>
                </div>

                <div className="max-w-none space-y-12 mt-8">
                  {!article.featuredImage && <div className="h-pxbg-white mb-8" />}
                  {article.content.reduce((acc: JSX.Element[], block, index, array) => {
                    const contentElements = acc.filter(el => el.type !== 'div');
                    const shouldAddAd = contentElements.length % 4 === 0 &&
                      contentElements.length > 0 &&
                      index !== array.length - 1 &&
                      block.type !== 'image';

                    const isFirstBlock = index === 0;
                    let elements: JSX.Element[] = [];

                    if (block.type === 'text') {
                      elements.push(
                        <React.Fragment key={`text-${index}`}>
                          <p className="text-[20px] text-gray-900 leading-[1.7] tracking-tight font-[450]">
                            {block.content}
                          </p>
                        </React.Fragment>
                      );
                    }

                    if (block.type === 'list') {
                      elements.push(
                        <React.Fragment key={`list-${index}`}>
                          <ul className="list-disc pl-8 space-y-3">
                            {block.items?.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-[20px] text-gray-900 leading-[1.7] tracking-tight font-[450]">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </React.Fragment>
                      );
                    }

                    if (block.type === 'quote') {
                      elements.push(
                        <React.Fragment key={`quote-${index}`}>
                          <blockquote className="border-l-4 border-[#FF0000] pl-6 my-12">
                            <p className="text-[22px] text-gray-800 leading-[1.6] italic font-[450]">{block.content}</p>
                            {block.author && (
                              <footer className="mt-4 text-[17px] text-gray-600 font-medium">— {block.author}</footer>
                            )}
                          </blockquote>
                        </React.Fragment>
                      );
                    }

                    if (block.type === 'image') {
                      elements.push(
                        <React.Fragment key={`image-${index}`}>
                          <figure className="my-12">
                            <img
                              src={block.url}
                              alt={block.caption}
                              className="w-full rounded-lg"
                            />
                            <figcaption className="mt-3 text-center text-[15px] text-gray-500">
                              {block.caption}
                            </figcaption>
                          </figure>
                        </React.Fragment>
                      );
                    }

                    if (isFirstBlock || shouldAddAd) {
                      elements.push(
                        <div key={`ad-${index}`} className="my-12">
                          <AdPlacement />
                        </div>
                      );
                    }

                    return [...acc, ...elements];
                  }, [])}

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
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6 mt-4">
                <EngagementBar
                  likes={0}
                  shares={0}
                  onLike={() => { }}
                  onShare={() => { }}
                />
              </div>
            </article>

            <AdPlacement />

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

            <OutletArticles />

            <AdPlacement />

            <RelatedArticles />

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

            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              <TopArticles />
            </article>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <EngagementBar
                likes={0}
                shares={0}
                onLike={() => { }}
                onShare={() => { }}
              />
            </div>

            <OutletArticles />

            <AdPlacement />

            <RelatedArticles />

            <AdPlacement />

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="relative">
                <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth" id="videoScroll">
                  {relatedVideos.map((video, index) => (
                    <React.Fragment key={video.id}>
                      <Link href={`/video/${video.id}`} passHref>
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
                                <Play className="w-7 h-7 text-gray-900" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
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
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

            <ShareDialog
              isOpen={showShareDialog}
              onClose={() => setShowShareDialog(false)}
              url="https://news.961.co/article/1"
            />

            <AuthDialog
              isOpen={showAuthDialog}
              onClose={() => setShowAuthDialog(false)}
            />
          </div>

          <div>
            <ArticleSidebar
              outlet={article.outlet}
              author={article.author}
              popularArticles={popularArticles}
              outletArticles={outletArticles}
              isLoggedIn={isLoggedIn}
            />
          </div>
        </div>
        <div ref={targetRef} className="h-px" />
        {loadedArticles.slice(1).map((nextArticle, index) => {
          const isLast = index === loadedArticles.length - 2;
          return (
            <div key={nextArticle.id} className="mt-12 pt-12 border-t border-gray-200">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-[300px,850px,340px] max-w-[1550px] mx-auto justify-center divide-x divide-gray-200">
                  <LeftSidebar
                    articles={popularArticles}
                    outlet={nextArticle.outlet}
                    author={nextArticle.author}
                  />
                  <ArticleLoader
                    article={nextArticle}
                    isLast={isLast}
                  />
                  <div>
                    <ArticleSidebar
                      outlet={nextArticle.outlet}
                      author={nextArticle.author}
                      popularArticles={popularArticles}
                      outletArticles={outletArticles}
                      isLoggedIn={isLoggedIn}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {isLoading && (
          <div className="flex justify-center py-8">
            <div className="w-8 h-8 border-4 border-gray-200 border-t-[#FF0000] rounded-full animate-spin" />
          </div>
        )}
        {!hasMore && (
          <div className="text-center py-8 text-gray-500">
            No more articles to load
          </div>
        )}
      </div>
    </div>
  );
}