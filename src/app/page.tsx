import { Header } from '@/components/layout/header'
import { ArticleGrid } from '@/components/HomePage/ArticleGrid'
import { Article } from '@/types/article'

// Mock data - in a real app this would come from an API
const articles: Article[] = [
  {
    id: '1',
    title: "Lebanon's Economic Recovery: A Comprehensive Analysis",
    subtitle: "An in-depth look at the latest economic measures and their potential impact",
    category: "Economy",
    timestamp: new Date(),
    featuredImage: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e",
    content: [],
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
  },
  // Add more articles...
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-6">
        <ArticleGrid articles={articles} layout='standard' />
      </main>
    </div>
  )
}