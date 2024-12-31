"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import TopEmojis from './TopEmojis';
import EmojiPicker from './EmojiPicker';
import { Smile } from 'lucide-react';
import AuthDialog from '../Auth/AuthDialog';
import CoinPurchaseDialog from '../CoinPurchase/CoinPurchaseDialog';
import CoinIcon from '../Icons/CoinIcon';
import { useReactions } from './hooks/useReactions';
import { initialEmojis, premiumEmojis } from './constants/emojis';
import { Emoji } from '@/types/emoji';

export default function ReactionSystem() {
  const [emojis, setEmojis] = useState(initialEmojis.map((e) => ({ ...e, count: e.count || 0 })));
  const [selectedEmojiId, setSelectedEmojiId] = useState<string | null>(null); // State to track the selected emoji
  const [showPicker, setShowPicker] = useState(false);
  const [showCoinPurchase, setShowCoinPurchase] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [showQuantitySelector, setShowQuantitySelector] = useState(false);
  const [userCoins] = useState(100);
  const [isLoggedIn] = useState(true); // Always logged in for now

  const {
    emojis: sortedEmojis,
    totalReactions,
    selectedPremiumEmoji,
    handleEmojiClick,
    handleQuantitySelect,
    setSelectedPremiumEmoji,
    incrementEmojiCount,
    decrementEmojiCount
  } = useReactions(emojis, setEmojis, userCoins);

  const handleCoinClick = () => {
    setShowCoinPurchase(true);
  };

  const handleEmojiSelection = (selectedEmoji: Emoji) => {
    if (!selectedEmoji.isPremium) {
      if (selectedEmojiId) {
        // Decrement the previously selected emoji back to zero
        decrementEmojiCount(selectedEmojiId);
      }

      if (selectedEmoji.id === selectedEmojiId) {
        // Deselect if the same emoji is clicked again
        setSelectedEmojiId(null);
      } else {
        // Select the new emoji
        incrementEmojiCount(selectedEmoji.id);
        setSelectedEmojiId(selectedEmoji.id);
      }
    } else {
      const result = handleEmojiClick(selectedEmoji, isLoggedIn);

    if (result.insufficientCoins) {
      alert(`You need ${selectedEmoji.coinCost} coins to use this reaction!`);
      return;
    }

    if (result.requiresQuantity) {
      setShowQuantitySelector(true);
      return;
    }

    if (result.success) {
      setShowPicker(false);
    }}
  };

  const handleQuantitySelection = (quantity: number) => {
    const result = handleQuantitySelect(quantity, isLoggedIn);

    if (result.success) {
      setShowQuantitySelector(false);
      setShowPicker(false);
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      <button
        onClick={() => setShowPicker(!showPicker)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E8E8E8] hover:bg-gray-50 transition-colors"
      >
        {sortedEmojis.length > 0 ? (
          <>
            <div className="flex items-center gap-1">
              {sortedEmojis.slice(0, 4).map((emoji) => (
                <span key={emoji.id} className="text-lg">{emoji.symbol}</span>
              ))}
            </div>
            <span className="text-[15px] font-medium text-gray-600">
              {totalReactions}
            </span>
          </>
        ) : (
          <>
            <span className="text-[15px] font-medium text-gray-600">React</span>
            <Smile className="w-5 h-5 text-gray-500" />
          </>
        )}
      </button>
      {showPicker && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/20" onClick={() => setShowPicker(false)} />
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-visible relative z-50 max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex flex-wrap justify-center gap-8 mb-6">
                {emojis.map((emoji) => (
                  <motion.button
                    key={emoji.id}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleEmojiSelection(emoji)}
                    className="flex flex-col items-center text-5xl p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="relative">
                      {emoji.symbol}
                      <span className="text-base font-medium text-gray-600 mt-1 block">
                        {emoji.count}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
              <div className="h-px bg-gray-100 mb-6" />
              <div className="flex justify-center">
                <TopEmojis emojis={emojis} onEmojiClick={handleEmojiSelection} />
              </div>
              <div className="h-px bg-gray-100 my-6" />
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center justify-between w-full">
                  <span className="font-medium text-gray-900">Premium Reactions</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCoinClick();
                    }}
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
            </div>
          </div>
        </div>
      )}

      {showQuantitySelector && selectedPremiumEmoji && (
        <div className="fixed inset-0 flex items-center justify-center z-[60]">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowQuantitySelector(false)} />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg p-6 max-w-sm w-full m-4 relative z-[60]"
          >
            <div className="text-center mb-6">
              <span className="text-4xl mb-4 block">{selectedPremiumEmoji.symbol}</span>
              <h3 className="text-lg font-semibold text-gray-900">
                How many reactions would you like to add?
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {selectedPremiumEmoji.coinCost} coins each
              </p>
            </div>

            <div className="flex justify-center gap-4 mb-6">
              {[1, 5, 10, 50, 100].map((amount) => {
                const totalCost = amount * (selectedPremiumEmoji.coinCost || 0);
                const canAfford = totalCost <= userCoins;

                return (
                  <button
                    key={amount}
                    onClick={() => {
                      if (canAfford) handleQuantitySelection(amount);
                    }}
                    className={`px-4 py-2 rounded-full ${canAfford
                        ? 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                        : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                      }`}
                  >
                    {amount}
                  </button>
                );
              })}
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowQuantitySelector(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
      <CoinPurchaseDialog
        isOpen={showCoinPurchase}
        onClose={() => setShowCoinPurchase(false)}
      />
      <AuthDialog
        isOpen={showAuthDialog}
        onClose={() => setShowAuthDialog(false)}
      />
    </div>
  );
}