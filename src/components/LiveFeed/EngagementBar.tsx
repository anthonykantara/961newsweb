import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TopEmojis from '../Reactions/TopEmojis';
import EmojiPicker from '../Reactions/EmojiPicker';
import CoinPurchaseDialog from '../CoinPurchase/CoinPurchaseDialog';
import CoinIcon from '../Icons/CoinIcon';
import { useReactions } from '../Reactions/hooks/useReactions';
import { initialEmojis, premiumEmojis } from '../Reactions/constants/emojis';
import ShareDialog from './ShareDialog';
import { Emoji } from '../../types/emoji';

interface EngagementBarProps {
  likes: number;
  shares: number;
  onLike: () => void;
  onShare: () => void;
}

const EngagementBar = ({ likes, shares, onLike, onShare }: EngagementBarProps) => {
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [showCoinPurchase, setShowCoinPurchase] = useState(false);
  const [showPremiumReactions, setShowPremiumReactions] = useState(false);
  const [userCoins] = useState(100);
  const [isLoggedIn] = useState(true);

  const {
    emojis: sortedEmojis,
    totalReactions,
    handleEmojiClick,
  } = useReactions(initialEmojis, userCoins);

  const handleEmojiSelection = (selectedEmoji: Emoji) => {
    const result = handleEmojiClick(selectedEmoji, isLoggedIn);
    
    if (result.insufficientCoins) {
      alert(`You need ${selectedEmoji.coinCost} coins to use this reaction!`);
      return;
    }
    
    if (result.success) {
      onLike();
    }
  };

  return (
    <>
      <div className="flex flex-col gap-6 p-6">
        <div className="flex flex-wrap justify-center gap-8">
          {[...initialEmojis.slice(0, 5), {
            id: 'premium-trigger',
            symbol: '✨',
            name: 'premium',
            count: 0,
            isPremium: true,
            coinCost: 5
          }].map((emoji) => (
            <motion.button
              key={emoji.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (emoji.id === 'premium-trigger') {
                  setShowPremiumReactions(!showPremiumReactions);
                } else {
                  handleEmojiSelection(emoji);
                }
              }}
              className={`flex flex-col items-center text-5xl p-3 hover:bg-gray-50 rounded-lg transition-colors ${
                emoji.id === 'premium-trigger' ? 'bg-gradient-to-br from-amber-100 to-amber-50' : ''
              }`}
            >
              <div className="relative">
                {emoji.symbol}
                {emoji.id !== 'premium-trigger' && (
                  <span className="text-base font-medium text-gray-600 mt-1 block">
                    {emoji.count}
                  </span>
                )}
              </div>
              {emoji.id === 'premium-trigger' && (
                <div className="absolute -top-2 -right-2 bg-[#FF0000] rounded-full p-1">
                  <CoinIcon className="w-4 h-4 text-white" />
                </div>
              )}
            </motion.button>
          ))}
        </div>
        
        {(sortedEmojis.length > 0 || showPremiumReactions) && (
          <>
            <div className="h-px bg-gray-100" />
            {sortedEmojis.length > 0 && (
              <TopEmojis 
                emojis={sortedEmojis} 
                onEmojiClick={handleEmojiSelection}
              />
            )}
          </>
        )}
        
        {showPremiumReactions && (
          <>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center justify-between w-full">
                <span className="font-medium text-gray-900">Premium Reactions</span>
                <button 
                  onClick={() => setShowCoinPurchase(true)}
                  className="flex items-center gap-2 px-6 py-2.5 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors border border-gray-200"
                >
                  <CoinIcon className="w-5 h-5 text-yellow-500" />
                  <span className="font-medium text-lg">{userCoins}</span>
                </button>
              </div>
              <EmojiPicker
                categories={{
                  free: initialEmojis,
                  premium: premiumEmojis
                }}
                onEmojiClick={handleEmojiSelection}
                userCoins={userCoins}
              />
            </div>
          </>
        )}
      </div>
      <CoinPurchaseDialog
        isOpen={showCoinPurchase}
        onClose={() => setShowCoinPurchase(false)}
      />
    </>
  );
};

export default EngagementBar;