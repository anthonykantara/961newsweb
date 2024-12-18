import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MessageCircle, Heart } from 'lucide-react'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { AuthDialog } from '@/components/auth/auth-dialog'

interface Comment {
  id: string
  content: string
  author: {
    name: string
    imageUrl: string
  }
  timestamp: Date
  likes: number
}

interface ArticleCommentsProps {
  articleId: string
}

// Mock comments - in a real app these would come from an API
const comments: Comment[] = [
  {
    id: '1',
    content: 'This is a great analysis of the economic situation. Looking forward to seeing how these reforms play out.',
    author: {
      name: 'John Smith',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    },
    timestamp: new Date(),
    likes: 12
  },
  // Add more comments...
]

export function ArticleComments({ articleId }: ArticleCommentsProps) {
  const [showAuthDialog, setShowAuthDialog] = useState(false)
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)
  const [comment, setComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isAuthenticated) {
      setShowAuthDialog(true)
      return
    }
    // Handle comment submission
    setComment('')
  }

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Comments</h2>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your thoughts..."
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
        />
        <div className="flex justify-end mt-2">
          <Button type="submit">
            Comment
          </Button>
        </div>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-4">
            <Avatar>
              <AvatarImage src={comment.author.imageUrl} alt={comment.author.name} />
              <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{comment.author.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {comment.timestamp.toLocaleDateString()}
                  </span>
                </div>
                <p>{comment.content}</p>
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <Button variant="ghost" size="sm">
                  <Heart className="w-4 h-4 mr-1" />
                  {comment.likes}
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  Reply
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AuthDialog
        isOpen={showAuthDialog}
        onClose={() => setShowAuthDialog(false)}
      />
    </Card>
  )
}