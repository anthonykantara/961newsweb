import React from 'react';
import Link from 'next/link';
import { MessageCircle, Flame, MessageSquare } from 'lucide-react';
import { formatTimeAgo } from '../../utils/dateUtils'; 

interface Article {
  id: string;
  title: string;
  timestamp: Date;
  outlet?: {
    name: string;
    logo: string;
  };
}

interface Comment {
  id: string;
  content: string;
  user: {
    name: string;
    avatarUrl: string;
  };
  likes: number;
}

interface LeftSidebarProps {
  articles: Article[];
  outlet: {
    name: string;
    logo: string;
  };
  author: {
    name: string;
    imageUrl: string;
  };
}

const topComments: Comment[] = [
  {
    id: '1',
    content: 'These economic reforms seem promising, but implementation will be key. The banking sector needs to fully commit to these changes.',
    user: {
      name: 'John Smith',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1740'
    },
    likes: 24
  },
  {
    id: '2',
    content: 'The focus on digital transformation in the banking sector is particularly interesting. This could modernize our financial infrastructure.',
    user: {
      name: 'Emily Davis',
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1740'
    },
    likes: 18
  }
];

export default function LeftSidebar({ articles, outlet, author }: LeftSidebarProps) {
  const scrollToComments = () => {
    const commentsSection = document.getElementById('comments-section');
    commentsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <aside className="w-[300px]">
      <div className="bg-white">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img
                src={outlet.logo}
                alt={outlet.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-gray-900">{outlet.name}</h3>
                <p className="text-sm text-gray-500">125K followers</p>
              </div>
            </div>
            <button className="flex items-center gap-1.5 px-4 py-2 bg-[#FF0000] text-white rounded-full hover:bg-red-600 transition-colors">
              <span className="font-medium">Follow</span>
            </button>
          </div>
          
          <div className="flex items-center justify-between pt-6">
            <div className="flex items-center gap-3">
              <img
                src={author.imageUrl}
                alt={author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-gray-900">{author.name}</h3>
                <p className="text-sm text-gray-500">12.5K followers</p>
              </div>
            </div>
            <button className="flex items-center gap-1.5 px-4 py-2 bg-[#FF0000] text-white rounded-full hover:bg-red-600 transition-colors">
              <span className="font-medium">Follow</span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-6">
          <Flame className="w-5 h-5 text-[#FF0000]" />
          <h2 className="text-[18px] font-bold text-gray-900">Popular Across 961</h2>
        </div>
        <div className="space-y-4">
          {articles.slice(0, 5).map((article) => (
            <Link
              key={article.id}
              href={`/article/${article.id}`}
              className="group flex items-start gap-3 cursor-pointer pb-4 border-b border-gray-100 last:border-0 last:pb-0"
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-[15px] leading-snug line-clamp-2 mb-1 text-gray-900 group-hover:text-[#FF0000] transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">
                    {formatTimeAgo(article.timestamp)}
                  </span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-400">{article.outlet?.name || 'The Daily Star'}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="bg-white p-6 border-b border-gray-200">
        <div className="h-[250px] w-full rounded flex items-center justify-center relative">
          <div className="absolute top-2 right-2 bg-white/80 px-2 py-0.5 rounded text-xs text-gray-500">
            AD
          </div>
          <span className="text-gray-400">Ad Space</span>
        </div>
      </div>

      <div className="bg-white p-6">
        <div className="flex items-center gap-2 mb-6">
          <MessageSquare className="w-5 h-5 text-[#FF0000]" />
          <h2 className="text-[18px] font-bold text-gray-900">What Readers Are Saying</h2>
        </div>
        <div 
          onClick={scrollToComments}
          className="space-y-6 cursor-pointer w-full text-left"
        >
          {topComments.map(comment => (
            <div
              key={comment.id}
              className="flex gap-3 w-full text-left p-2 -mx-2 rounded-lg transition-colors hover:bg-gray-50"
            >
              <img
                src={comment.user.avatarUrl}
                alt={comment.user.name}
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-gray-900">{comment.user.name}</span>
                </div>
                <p className="text-gray-800 text-sm line-clamp-2">{comment.content}</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{comment.likes} likes</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToComments();
                    }}
                    className="text-sm text-gray-500 hover:text-[#FF0000] transition-colors"
                  >
                    Reply
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="text-sm text-gray-900 hover:text-gray-700 transition-colors font-medium">
            Leave a comment
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 border-t border-gray-200">
        <Link
          href="https://deals.961.co"
          className="block"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#FF0000] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-[18px] font-bold text-gray-900">961 Deals</h2>
              <p className="text-sm text-gray-500">Exclusive offers across Lebanon</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[#FF0000] font-medium">Browse Deals</span>
            </div>
            <svg className="w-5 h-5 text-[#FF0000]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>
    </aside>
  );
}