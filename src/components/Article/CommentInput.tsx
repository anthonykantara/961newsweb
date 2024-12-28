import { useState } from 'react';
import CoinIcon from '../Icons/CoinIcon';

interface CommentInputProps {
  onSubmit: (text: string) => void;
  isFirstComment?: boolean;
  remainingFreeComments?: number;
}

export default function CommentInput({ onSubmit, isFirstComment = true, remainingFreeComments = 1 }: CommentInputProps) {
  const [text, setText] = useState('');
  const maxLength = isFirstComment ? 150 : 200;
  const remaining = maxLength - text.length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && text.length <= maxLength) {
      onSubmit(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Share your thoughts..."
          className={`w-full p-4 rounded-lg border ${
            remaining < 0 ? 'border-red-300' : 'border-gray-200'
          } focus:outline-none focus:ring-2 focus:ring-[#FF0000] min-h-[100px] resize-none`}
          maxLength={maxLength}
        />
        <div className="absolute bottom-3 right-3 flex items-center gap-3">
          <span className={`text-sm ${
            remaining < 20 ? 'text-red-500' : 'text-gray-400'
          }`}>
            {remaining}
          </span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        {isFirstComment ? (
          <p className="text-sm text-gray-500">
            First comment is free
          </p>
        ) : (
          <p className="text-sm text-gray-500"></p>
        )}
        <button
          type="submit"
          disabled={text.length > maxLength || text.length === 0}
          className={`px-6 py-2 rounded-full font-medium ${
            text.length > maxLength || text.length === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-[#FF0000] text-white hover:bg-red-600'
          } transition-colors`}
        >
          Comment
        </button>
      </div>
    </form>
  );
}