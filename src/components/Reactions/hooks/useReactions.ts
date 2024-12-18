import { useState, useCallback } from 'react';
import { Emoji } from '../../../types/emoji';

export function useReactions(initialEmojis: Emoji[], userCoins: number) {
  const [emojis, setEmojis] = useState<Emoji[]>(
    initialEmojis.map(emoji => ({ ...emoji, count: emoji.count || 0 }))
  );
  const [selectedPremiumEmoji, setSelectedPremiumEmoji] = useState<Emoji | null>(null);

  const handleEmojiClick = useCallback((selectedEmoji: Emoji, isLoggedIn: boolean) => {
    if (!isLoggedIn) {
      return { requiresAuth: true };
    }

    if (selectedEmoji.isPremium && (selectedEmoji.coinCost || 0) > userCoins) {
      return { insufficientCoins: true };
    }

    if (selectedEmoji.isPremium) {
      setSelectedPremiumEmoji(selectedEmoji);
      return { requiresQuantity: true };
    }

    setEmojis(current => 
      current.map(emoji => 
        emoji.id === selectedEmoji.id
          ? { ...emoji, count: (emoji.count || 0) + 1 }
          : emoji
      )
    );

    return { success: true };
  }, [userCoins]);

  const handleQuantitySelect = useCallback((quantity: number, isLoggedIn: boolean) => {
    if (!isLoggedIn) {
      return { requiresAuth: true };
    }

    if (!selectedPremiumEmoji) return { error: true };
    
    const totalCost = quantity * (selectedPremiumEmoji.coinCost || 0);
    if (totalCost > userCoins) return { insufficientCoins: true };
    
    setEmojis(current => 
      current.map(emoji => 
        emoji.id === selectedPremiumEmoji.id 
          ? { ...emoji, count: (emoji.count || 0) + quantity }
          : emoji
      )
    );

    return { success: true };
  }, [selectedPremiumEmoji, userCoins]);

  const sortedEmojis = [...emojis].sort((a, b) => b.count - a.count);
  const totalReactions = sortedEmojis.reduce((sum, emoji) => sum + (emoji.count || 0), 0);

  return {
    emojis: sortedEmojis,
    totalReactions,
    selectedPremiumEmoji,
    handleEmojiClick,
    handleQuantitySelect,
    setSelectedPremiumEmoji
  };
}