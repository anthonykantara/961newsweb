import { notFound } from 'next/navigation'
import { ArticleDetail } from '@/components/articles/article-detail'
import { Article } from '@/types/article'

// Mock data - in a real app this would be fetched from an API
const article: Article = {
  id: '1',
  title: "Lebanon's Economic Recovery: A Comprehensive Analysis",
  subtitle: "An in-depth look at the latest economic measures and their potential impact",
  category: "Economy",
  timestamp: new Date(),
  featuredImage: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e",
  content: [
    {
      type: 'text',
      content: "Lebanon's central bank has unveiled a comprehensive economic reform package aimed at stabilizing the currency and controlling inflation. The measures, announced early Thursday morning, include new lending regulations and interest rate adjustments that experts say could mark a turning point for the country's struggling economy."
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f',
      caption: 'Central Bank of Lebanon headquarters in Beirut'
    },
    {
      type: 'quote',
      content: "These reforms represent a crucial step toward economic recovery, but their success will depend on rigorous implementation and continued commitment to structural changes.",
      author: "IMF spokesperson"
    }
  ],
  outlet: {
    name: "The Daily Star",
    logo: "https://images.unsplash.com/photo-1679678691006-0ad24fecb769",
    isFollowing: false
  },
  author: {
    name: "Sarah Thompson",
    role: "Senior Economic Correspondent",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Senior economic correspondent covering Lebanese financial markets",
    followers: 12500,
    isFollowing: false
  },
  metrics: {
    views: 1250,
    comments: 45,
    shares: 89
  }
}

interface PageProps {
  params: {
    id: string
  }
}

export default function ArticlePage({ params }: PageProps) {
  // In a real app, fetch the article data here
  if (!article) {
    notFound()
  }

  return <ArticleDetail article={article} />
}