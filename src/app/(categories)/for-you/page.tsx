import { redirect } from 'next/navigation'
import { ArticleGrid } from '@/components/articles/article-grid'
import { Article } from '@/types/article'

// Mock data - in a real app this would come from an API
const articles: Article[] = [
  // Add articles...
]

export default function ForYouPage() {
  // In a real app, check auth state server-side
  const isAuthenticated = false

  if (!isAuthenticated) {
    redirect('/')
  }

  return (
    <main className="container py-6">
      <h1 className="text-3xl font-bold mb-6">For You</h1>
      <ArticleGrid articles={articles} />
    </main>
  )
}