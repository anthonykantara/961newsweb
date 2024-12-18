import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { QrCode, User, Lock } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { login } from '@/lib/store/slices/authSlice'

interface AuthDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function AuthDialog({ isOpen, onClose }: AuthDialogProps) {
  const [showQR, setShowQR] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would make an API call
    dispatch(login({
      id: '1',
      name: username,
      email: `${username}@example.com`
    }))
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            {showQR ? 'Scan to Log In' : 'Welcome Back!'}
          </DialogTitle>
        </DialogHeader>
        {showQR ? (
          <div className="space-y-4">
            <div className="bg-muted aspect-square w-full max-w-[200px] mx-auto rounded-lg flex items-center justify-center">
              <QrCode className="w-12 h-12 text-muted-foreground" />
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Scan this QR code with your 961 mobile app to log in instantly
            </p>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setShowQR(false)}
            >
              Back to login
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
            <div className="text-center space-y-2">
              <Button
                variant="ghost"
                className="w-full"
                onClick={() => setShowQR(true)}
              >
                Log in with QR Code
              </Button>
              <Button variant="link" className="w-full">
                Don&apos;t have an account? Get the app
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}