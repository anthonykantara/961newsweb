import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ArticleCollectionBadgeProps {
  count: number;
  articleId: string;
}

export default function ArticleCollectionBadge({ count, articleId }: ArticleCollectionBadgeProps) {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/collection/${articleId}`);
  };

  return (
    <button
      onClick={handleClick}
      className="relative flex items-center px-2 py-1.5 group"
    >
      <div className="relative">
        <div className="relative">
          <svg className="w-6 h-6 text-[#FF0000] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M16 2v4a2 2 0 002 2h4" />
            <path d="M21 6v13a2 2 0 01-2 2H9a2 2 0 01-2-2V4a2 2 0 012-2h8l4 4z" />
            <path d="M3 7v13a2 2 0 002 2h11" strokeOpacity="0.5" />
          </svg>
          <div className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 bg-[#FF0000] rounded-full flex items-center justify-center">
            <span className="text-[11px] font-bold text-white leading-none">{count}</span>
          </div>
        </div>
      </div>
    </button>
  );
}