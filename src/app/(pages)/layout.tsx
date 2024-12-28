import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import UpperMenu from '@/components/UpperMenu';

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <UpperMenu />
      <Header />
      <Navigation />
      <div className="container mx-auto px-4 py-6">
        {children}
      </div>
    </>
  )
}