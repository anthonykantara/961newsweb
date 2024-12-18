import { Emoji } from '../../../types/emoji';

export const initialEmojis: Emoji[] = [
  { id: '1', symbol: '❤️', name: 'heart', count: 150 },
  { id: '2', symbol: '🇱🇧', name: 'lebanon', count: 120 },
  { id: '3', symbol: '😮', name: 'surprised', count: 80 },
  { id: '4', symbol: '😢', name: 'sad', count: 75 },
  { id: '5', symbol: '😡', name: 'angry', count: 45 },
];

export const premiumEmojis: Emoji[] = [
  // 2 coins
  { id: 'p1', symbol: '😂', name: 'laughing', count: 0, isPremium: true, coinCost: 2 },
  { id: 'p2', symbol: '👏', name: 'clap', count: 0, isPremium: true, coinCost: 2 },
  { id: 'p3', symbol: '😭', name: 'crying', count: 0, isPremium: true, coinCost: 2 },
  { id: 'p4', symbol: '🙏', name: 'thankful', count: 0, isPremium: true, coinCost: 2 },
  { id: 'p5', symbol: '🚀', name: 'rocket', count: 0, isPremium: true, coinCost: 2 },
  { id: 'p6', symbol: '👑', name: 'crown', count: 0, isPremium: true, coinCost: 2 },
  { id: 'p8', symbol: '🔥', name: 'fire', count: 0, isPremium: true, coinCost: 2 },
  // 5 coins
  { id: 'p9', symbol: '🔺', name: 'red-triangle', count: 0, isPremium: true, coinCost: 5 },
  { id: 'p11', symbol: '🧡', name: 'orange-heart', count: 0, isPremium: true, coinCost: 5 },
  { id: 'p12', symbol: '💛', name: 'yellow-heart', count: 0, isPremium: true, coinCost: 5 },
  { id: 'p13', symbol: '💚', name: 'green-heart', count: 0, isPremium: true, coinCost: 5 },
  { id: 'p14', symbol: '💙', name: 'blue-heart', count: 0, isPremium: true, coinCost: 5 },
  { id: 'p10', symbol: '🔻', name: 'red-triangle-down', count: 0, isPremium: true, coinCost: 30 },
  { id: 'p15', symbol: '✝️', name: 'cross', count: 0, isPremium: true, coinCost: 5 },
  { id: 'p16', symbol: '☪️', name: 'crescent', count: 0, isPremium: true, coinCost: 5 },
];