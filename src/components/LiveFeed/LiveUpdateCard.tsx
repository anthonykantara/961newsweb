import React from 'react';
import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LiveUpdate } from '../../types/news';
import { formatTimeAgo } from '../../utils/dateUtils';
import { useNavigate } from 'react-router-dom';

interface LiveUpdateCardProps {
  update: LiveUpdate;
}

export default function LiveUpdateCard({ update }: LiveUpdateCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    window.open(`/updates/${update.id}`, '_blank');
  };

  return (
    <div className="bg-white py-2.5 px-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-4">
        <div className="flex-1 flex items-center gap-2">
          <div className="flex items-center gap-2">
            {update.priority === 'critical' && (
              <div className="flex items-center gap-1">
                <span className="bg-[#FF0000] text-white text-[11px] px-1.5 py-0.5 rounded font-medium">
                  Breaking
                </span>
              </div>
            )}
            {update.priority === 'high' && (
              <Zap className="w-4 h-4 text-[#FF0000] flex-shrink-0" />
            )}
            <a
              href={`/updates/${update.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-900 hover:text-[#FF0000] transition-colors text-[15px] leading-snug"
            >
              {update.title}
            </a>
          </div>
        </div>
        <span className="text-gray-400 text-[13px] whitespace-nowrap">
          {formatTimeAgo(update.timestamp)}
        </span>
      </div>
    </div>
  );
}