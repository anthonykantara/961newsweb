export interface Emoji {
  id: string;
  symbol: string;
  name: string;
  count: number;
  isPremium?: boolean;
  coinCost?: number;
  alwaysFilled?: boolean;
}

export interface EmojiCategory {
  name: string;
  emojis: Emoji[];
}