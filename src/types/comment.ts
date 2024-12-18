export interface User {
  id: string;
  name: string;
  username: string;
  avatarUrl: string;
}

export interface Comment {
  id: string;
  content: string;
  user: User;
  timestamp: Date;
  likes: number;
  isLiked: boolean;
  isPaid?: boolean;
  replies?: Comment[];
}