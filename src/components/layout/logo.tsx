import { Newspaper } from 'lucide-react'

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Newspaper className="h-6 w-6" />
      <span className="font-bold text-xl">961</span>
    </div>
  )
}