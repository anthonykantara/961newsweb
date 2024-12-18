import { notFound } from 'next/navigation'
import { ArticleGrid } from '@/components/articles/article-grid'
import { Article } from '@/types/article'

const categories = [
  'lebanon',
  'politics',
  'business',
  'technology',
  'middle-east',
  'world'
]

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

interface PageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: PageProps) {
  if (!categories.includes(params.category)) {
    notFound()
  }

  const categoryTitle = params.category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <main className="container py-6">
      <h1 className="text-3xl font-bold mb-6">{categoryTitle}</h1>
      <ArticleGrid articles={articles} />
    </main>
  )
}