import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Article } from '@/types/article'
import Link from 'next/link'
import Image from 'next/image'

interface RelatedArticlesProps {
  category: string
}

// Mock data - in a real app this would come from an API
const relatedArticles: Article[] = [
  {
    id: '2',
    title: 'Impact of Economic Reforms on Small Businesses',
    category: 'Economy',
    timestamp: new Date(),
    featuredImage: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f',
    content: [],
    outlet: {
      name: 'The Daily Star',
      logo: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769',
      isFollowing: false
    },
    author: {
      name: 'John Smith',
      role: 'Business Reporter',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      bio: 'Business reporter covering SMEs and startups',
      followers: 8500,
      isFollowing: false
    }
  },
  // Add more related articles...
]

export function RelatedArticles({ category }: RelatedArticlesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>More from {category}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {relatedArticles.map((article) => (
            <Link
              key={article.id}
              href={`/article/${article.id}`}
              className="block group"
            >
              <div className="flex space-x-4">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src={article.featuredImage || ''}
                    alt={article.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="font-medium group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {article.author.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}