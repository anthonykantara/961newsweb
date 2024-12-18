export interface Author {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Post {
  id: string;
  type: 'article' | 'horizontal-video' | 'vertical-video';
  title: string;
  excerpt: string;
  imageUrl: string;
  timestamp: Date;
  author: Author;
  duration?: string;
  views?: number;
}