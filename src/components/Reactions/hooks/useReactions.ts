import { useState, useCallback } from "react";
import { Emoji } from "../../../types/emoji";

export function useReactions(
  emojis: Emoji[],
  setEmojis: React.Dispatch<React.SetStateAction<Emoji[]>>,
  userCoins: number
) {
  const [selectedPremiumEmoji, setSelectedPremiumEmoji] =
    useState<Emoji | null>(null);

  const updateEmojiCount = useCallback(
    (emojiId: string, increment: number) => {
      setEmojis((current) =>
        current.map((emoji) =>
          emoji.id === emojiId
            ? { ...emoji, count: Math.max(0, (emoji.count || 0) + increment) }
            : emoji
        )
      );
    },
    [setEmojis]
  );

  const handleEmojiClick = useCallback(
    (selectedEmoji: Emoji, isLoggedIn: boolean) => {
      if (!isLoggedIn) {
        return { requiresAuth: true };
      }

      if (
        selectedEmoji.isPremium &&
        (selectedEmoji.coinCost || 0) > userCoins
      ) {
        return { insufficientCoins: true };
      }

      if (selectedEmoji.isPremium) {
        setSelectedPremiumEmoji(selectedEmoji);
        return { requiresQuantity: true };
      }

      updateEmojiCount(selectedEmoji.id, 1);
      return { success: true };
    },
    [userCoins, updateEmojiCount]
  );

  const handleQuantitySelect = useCallback(
    (quantity: number, isLoggedIn: boolean) => {
      if (!isLoggedIn) {
        return { requiresAuth: true };
      }

      if (!selectedPremiumEmoji) return { error: true };

      const totalCost = quantity * (selectedPremiumEmoji.coinCost || 0);
      if (totalCost > userCoins) return { insufficientCoins: true };

      setEmojis((current) =>
        current.map((emoji) =>
          emoji.id === selectedPremiumEmoji.id
            ? { ...emoji, count: (emoji.count || 0) + quantity }
            : emoji
        )
      );

      return { success: true };
    },
    [selectedPremiumEmoji, userCoins]
  );

  const sortedEmojis = [...emojis].sort((a, b) => b.count - a.count);
  const totalReactions = sortedEmojis.reduce(
    (sum, emoji) => sum + (emoji.count || 0),
    0
  );

  return {
    emojis: sortedEmojis,
    totalReactions,
    selectedPremiumEmoji,
    handleEmojiClick,
    handleQuantitySelect,
    setSelectedPremiumEmoji,
    incrementEmojiCount: (emojiId: string) => updateEmojiCount(emojiId, 1),
    decrementEmojiCount: (emojiId: string) => updateEmojiCount(emojiId, -1)
  };
}
