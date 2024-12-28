import { Play } from 'lucide-react';

const videos = [
  {
    id: '1',
    title: 'Match Highlights: Al Ahed vs Nejmeh',
    thumbnailUrl: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=735',
    duration: '10:32',
    views: 45200,
    timestamp: new Date(Date.now() - 86400000),
    competition: 'Lebanese Premier League'
  },
  {
    id: '2',
    title: 'Top 10 Plays of the Week - Lebanese Basketball League',
    thumbnailUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=890',
    duration: '5:15',
    views: 32100,
    timestamp: new Date(Date.now() - 172800000),
    competition: 'Lebanese Basketball League'
  },
  {
    id: '3',
    title: 'Tennis Championship Finals - Best Moments',
    thumbnailUrl: 'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?auto=format&fit=crop&q=80&w=870',
    duration: '8:45',
    views: 28400,
    timestamp: new Date(Date.now() - 259200000),
    competition: 'Tennis'
  }
];

export default function VideoHighlights() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-4">Video Highlights</h2>
      <div className="grid grid-cols-3 gap-6">
        {videos.map(video => (
          <div key={video.id} className="group cursor-pointer">
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
            <div className="space-y-1">
              <span className="text-xs text-[#FF0000] font-medium">{video.competition}</span>
              <h3 className="font-medium text-gray-900 line-clamp-2 group-hover:text-[#FF0000] transition-colors">
                {video.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>{video.views.toLocaleString()} views</span>
                <span>•</span>
                <span>{new Date(video.timestamp).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                })}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}