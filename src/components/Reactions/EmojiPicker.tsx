import React from 'react';
import { Emoji } from '../../types/emoji';
import { Lock } from 'lucide-react';
import CoinIcon from '../Icons/CoinIcon';
import { motion } from 'framer-motion';
import FlagSelector from './FlagSelector';

interface EmojiPickerProps {
  categories: {
    free: Emoji[];
    premium: Emoji[];
  };
  onEmojiClick: (emoji: Emoji) => void;
  userCoins: number;
}

export default function EmojiPicker({ categories, onEmojiClick, userCoins }: EmojiPickerProps) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-8 gap-3 mt-4 w-full">
        {categories.premium.map((emoji) => (
          <motion.button
            key={emoji.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onEmojiClick(emoji)}
            className="relative group flex flex-col items-center w-full"
          >
            <div className={`text-3xl mb-1 ${
              userCoins >= (emoji.coinCost || 0)
                ? 'hover:scale-110 transition-transform'
                : 'opacity-40 cursor-not-allowed'
            }`}>
              {emoji.symbol}
            </div>
            <div className="flex items-center text-xs">
              <CoinIcon className="w-3 h-3 mr-0.5" />
              <span className="font-medium">{emoji.coinCost}</span>
            </div>
            {userCoins < (emoji.coinCost || 0) && (
              <Lock className="absolute -top-1 -right-1 w-3 h-3 text-gray-400" />
            )}
          </motion.button>
        ))}
        <FlagSelector
          onSelect={(flag) => onEmojiClick({
            id: `flag-${flag.code}`,
            symbol: flag.symbol,
            name: flag.name,
            count: 0,
            isPremium: true,
            coinCost: flag.cost
          })}
          userCoins={userCoins}
        />
      </div>
    </div>
  );
}