import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock } from 'lucide-react';
import { formatTimeAgo } from '../../utils/dateUtils';

interface Video {
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
}

const videos: Video[] = [
  {
    id: '1',
    title: "Behind the Scenes: Lebanon's Cultural Renaissance",
    thumbnailUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1740",
    duration: "10:32",
    views: 45200,
    timestamp: new Date(Date.now() - 86400000),
    outlet: {
      name: "MTV Lebanon",
      logo: "https://images.unsplash.com/photo-1679678691330-a14e09c004c7?w=32&h=32&q=80&fit=crop"
    }
  },
  {
    id: '2',
    title: "Special Report: Mediterranean Environmental Summit",
    thumbnailUrl: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&q=80&w=1740",
    duration: "15:45",
    views: 32100,
    timestamp: new Date(Date.now() - 172800000),
    outlet: {
      name: "LBCI",
      logo: "https://images.unsplash.com/photo-1679678691310-a14e09c004c7?w=32&h=32&q=80&fit=crop"
    }
  },
  {
    id: '3',
    title: "Economic Analysis: Future of Lebanese Markets",
    thumbnailUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1740",
    duration: "8:15",
    views: 28400,
    timestamp: new Date(Date.now() - 259200000),
    outlet: {
      name: "MTV Lebanon",
      logo: "https://images.unsplash.com/photo-1679678691330-a14e09c004c7?w=32&h=32&q=80&fit=crop"
    }
  }
];

export default function VideoSection() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Latest Videos</h2>
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