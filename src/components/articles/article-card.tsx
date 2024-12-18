import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, Share2, Bookmark } from 'lucide-react'
import { formatTimeAgo } from '@/lib/utils'
import { Article } from '@/types/article'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

interface ArticleCardProps {
  article: Article
  variant?: 'default' | 'featured'
}

export function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  const isFeatured = variant === 'featured'

  return (
    <Card className={cn(
      "overflow-hidden transition-shadow hover:shadow-lg",
      isFeatured && "col-span-2"
    )}>
      <div className="relative">
        <Image
          src={article.featuredImage || 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e'}
          alt={article.title}
          width={isFeatured ? 800 : 400}
          height={isFeatured ? 400 : 200}
          className="w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            {article.category}
          </span>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={article.author.imageUrl} alt={article.author.name} />
            <AvatarFallback>{article.author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {article.author.name}
            </p>
            <p className="text-sm text-gray-500">
              {formatTimeAgo(article.timestamp)}
            </p>
          </div>
        </div>
        <Link href={`/article/${article.id}`} className="block mt-4">
          <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 hover:text-primary transition-colors">
            {article.title}
          </h3>
          {article.subtitle && (
            <p className="mt-2 text-gray-600 line-clamp-2">
              {article.subtitle}
            </p>
          )}
        </Link>
      </CardContent>
      <CardFooter className="px-6 py-4 border-t bg-gray-50/50">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              {article.metrics?.comments || 0}
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              {article.metrics?.shares || 0}
            </Button>
          </div>
          <Button variant="ghost" size="sm">
            <Bookmark className="w-4 h-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}