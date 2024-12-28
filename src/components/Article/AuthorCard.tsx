import { UserPlus } from 'lucide-react';

interface AuthorCardProps {
  author: {
    name: string;
    role: string;
    imageUrl: string;
    bio: string;
    followers: number;
    isFollowing: boolean;
  };
}

export default function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="flex items-start gap-4">
      <img
        src={author.imageUrl}
        alt={author.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-gray-900">{author.name}</h3>
            <p className="text-gray-600">{author.role}</p>
          </div>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-[#FF0000] text-white rounded-full hover:bg-red-600 transition-colors">
            <UserPlus className="w-4 h-4" />
            <span className="font-medium">Follow</span>
          </button>
        </div>
        <p className="mt-2 text-gray-600">{author.bio}</p>
        <p className="mt-2 text-sm text-gray-500">{author.followers.toLocaleString()} followers</p>
      </div>
    </div>
  );
}