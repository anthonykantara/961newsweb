import Image from 'next/image'
import { Article, ArticleContent } from '@/types/article'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MessageCircle, Share2, Bookmark, UserPlus } from 'lucide-react'
import { ArticleContent } from './article-content'
import { ArticleComments } from './article-comments'
import { RelatedArticles } from './related-articles'

interface ArticleDetailProps {
  article: Article
}

export function ArticleDetail({ article }: ArticleDetailProps) {
  return (
    <div className="min-h-screen bg-background">
      <main className="container py-6">
        <div className="grid grid-cols-[1fr,300px] gap-6">
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={article.author.imageUrl} alt={article.author.name} />
                    <AvatarFallback>{article.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{article.author.name}</h3>
                    <p className="text-sm text-muted-foreground">{article.author.role}</p>
                  </div>
                </div>
                <Button>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Follow
                </Button>
              </div>

              <h1 className="text-4xl font-bold leading-tight mb-4">
                {article.title}
              </h1>
              {article.subtitle && (
                <p className="text-xl text-muted-foreground mb-6">
                  {article.subtitle}
                </p>
              )}

              {article.featuredImage && (
                <div className="relative aspect-[2/1] mb-6">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              )}

              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {article.metrics?.comments || 0}
                  </Button>
                  <Button variant="ghost">
                    <Share2 className="mr-2 h-4 w-4" />
                    {article.metrics?.shares || 0}
                  </Button>
                </div>
                <Button variant="ghost">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>

              <ArticleContent content={article.content} />
            </Card>

            <ArticleComments articleId={article.id} />
          </div>

          <div className="space-y-6">
            <RelatedArticles category={article.category} />
          </div>
        </div>
      </main>
    </div>
  )
}