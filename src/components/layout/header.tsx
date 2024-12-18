import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu } from 'lucide-react'
import { Logo } from './logo'
import { AuthButton } from '@/components/auth/auth-button'

export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/map"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              News Map
            </Link>
            <Link
              href="/weather"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Weather
            </Link>
            <Link
              href="/sports"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Sports
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button variant="outline" size="icon" className="mr-2">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
          <nav className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <AuthButton />
          </nav>
        </div>
      </div>
    </header>
  )
}