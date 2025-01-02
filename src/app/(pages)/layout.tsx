import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import TopMenu from '@/components/TopMenu';

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <TopMenu />
      <Header />
      <Navigation />
      <div className="container mx-auto px-4 py-6">
        {children}
      </div>
    </>
  )
}