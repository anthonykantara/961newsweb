import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import TopMenu from '@/components/TopMenu';
import { openGraphImage } from '@/utils/sharedMetadata';

export const metadata = {
  title: {
    template: '%s | 961 News',
    default: '961 News',
  },
  openGraph: {
    ...openGraphImage,
    title: '961 News',
  },
}

export default function PagesLayout({
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