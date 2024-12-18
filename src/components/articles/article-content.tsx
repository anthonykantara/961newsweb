import Image from 'next/image'
import { ArticleContent as ArticleContentType } from '@/types/article'
import { cn } from '@/lib/utils'

interface ArticleContentProps {
  content: ArticleContentType[]
}

export function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      {content.map((block, index) => {
        switch (block.type) {
          case 'text':
            return (
              <p key={index} className="text-lg leading-relaxed">
                {block.content}
              </p>
            )
          
          case 'image':
            return (
              <figure key={index} className="my-8">
                <div className="relative aspect-[2/1]">
                  <Image
                    src={block.url}
                    alt={block.caption || ''}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                {block.caption && (
                  <figcaption className="text-center text-sm text-muted-foreground mt-2">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            )
          
          case 'quote':
            return (
              <blockquote key={index} className="border-l-4 border-primary pl-6 my-8">
                <p className="text-xl italic font-medium">{block.content}</p>
                {block.author && (
                  <footer className="mt-2 text-muted-foreground">
                    — {block.author}
                  </footer>
                )}
              </blockquote>
            )
          
          case 'list':
            return (
              <ul key={index} className="list-disc pl-6 space-y-2">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )
          
          case 'video':
            return (
              <div key={index} className="relative aspect-video my-8">
                <iframe
                  src={block.url}
                  title={block.title || 'Video content'}
                  className="absolute inset-0 w-full h-full rounded-lg"
                  allowFullScreen
                />
              </div>
            )
          
          default:
            return null
        }
      })}
    </div>
  )
}