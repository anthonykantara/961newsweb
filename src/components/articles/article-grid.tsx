import { Article } from '@/types/article'
import { ArticleCard } from './article-card'

interface ArticleGridProps {
  articles: Article[]
  featured?: boolean
}

export function ArticleGrid({ articles, featured = false }: ArticleGridProps) {
  if (featured) {
    const [featuredArticle, ...restArticles] = articles
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredArticle && (
          <ArticleCard article={featuredArticle} variant="featured" />
        )}
        <div className="grid grid-cols-1 gap-6">
          {restArticles.slice(0, 2).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}