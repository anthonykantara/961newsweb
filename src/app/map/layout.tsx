import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import TopMenu from '@/components/TopMenu';

export default function MapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <TopMenu />
      <Header />
      <Navigation /> 
      <div className="mx-auto">
        {children}
      </div>
    </>
  )
}