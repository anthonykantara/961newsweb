"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const items = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Following",
    href: "/following",
  },
  {
    title: "For You",
    href: "/for-you",
  },
  {
    title: "Lebanon",
    href: "/lebanon",
  },
  {
    title: "Politics",
    href: "/politics",
  },
  {
    title: "Business",
    href: "/business",
  },
  {
    title: "Technology",
    href: "/technology",
  },
  {
    title: "Middle East",
    href: "/middle-east",
  },
  {
    title: "World",
    href: "/world",
  },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-6 text-sm font-medium">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === item.href
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}