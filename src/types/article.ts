export interface Article {
  id: string
  title: string
  subtitle?: string
  content: ArticleContent[]
  timestamp: Date
  featuredImage?: string
  excerpt?: string;
  outlet: {
    name: string
    logo: string
    isFollowing: boolean
  }
  author: {
    name: string
    role: string
    imageUrl: string
    bio: string
    followers: number
    isFollowing: boolean
  }
  metrics?: {
    views: number
    comments: number
    shares: number
  }
  category: string
  tags?: string[]
}

export type ArticleContent = 
  | { type: 'text'; content: string }
  | { type: 'image'; url: string; caption?: string }
  | { type: 'quote'; content: string; author?: string }
  | { type: 'list'; items: string[] }
  | { type: 'video'; url: string; title?: string }