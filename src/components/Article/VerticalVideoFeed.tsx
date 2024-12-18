import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: string;
  views: number;
  outlet: {
    name: string;
    logo: string;
  };
}

interface VerticalVideoFeedProps {
  videos: Video[];
}

export default function VerticalVideoFeed({ videos }: VerticalVideoFeedProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold mb-6">Related Videos</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        {videos.map(video => (
          <Link 
            key={video.id}
            to={`/video/${video.id}`}
            className="flex-none w-[300px] group cursor-pointer"
          >
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
          </Link>
        ))}
      </div>
    </div>
  );
}