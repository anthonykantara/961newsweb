import { Header } from '@/components/layout/header'
import { MainNav } from '@/components/layout/main-nav'

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="border-b">
        <div className="container">
          <MainNav />
        </div>
      </div>
      {children}
    </div>
  )
}