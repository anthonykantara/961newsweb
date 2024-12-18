export interface LiveUpdate {
  id: string;
  title: string;
  timestamp: Date;
  priority?: 'high' | 'critical';
  content?: string;
  type?: string;
  description?: string;
  media?: {
    type: 'image' | 'video';
    url: string;
    aspectRatio?: 'vertical' | 'horizontal';
  };
}

export interface Article {
  id: string;
  headline: string;
  imageUrl: string;
  outlet: {
    name: string;
    icon: string;
  };
  timestamp: Date;
  collectionCount?: number;
  metrics: {
    reactions: number;
    comments: number;
    shares: number;
  };
}