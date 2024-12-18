import React from 'react';
import { Play, Clock } from 'lucide-react';
import { formatTimeAgo } from '../../utils/dateUtils';

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    thumbnailUrl: string;
    duration: string;
    views: number;
    timestamp: Date;
    outlet: {
      name: string;
      logo: string;
    };
  };
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
            <Play className="w-6 h-6 text-gray-900" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded">
          {video.duration}
        </div>
      </div>
      <h3 className="font-medium text-gray-900 line-clamp-2 group-hover:text-[#FF0000] transition-colors mb-2">
        {video.title}
      </h3>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center text-gray-500">
          <img
            src={video.outlet.logo}
            alt={video.outlet.name}
            className="w-5 h-5 rounded-full object-cover mr-2"
          />
          <span>{video.outlet.name}</span>
        </div>
        <div className="flex items-center text-gray-400 text-xs">
          <Clock className="w-3 h-3 mr-1" />
          <span>{formatTimeAgo(video.timestamp)}</span>
        </div>
      </div>
    </div>
  );
}