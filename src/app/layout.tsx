import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/lib/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "961 News",
  description: "Your gateway to Lebanon's news",
  openGraph: {
    title: "961 News",
    description: "Your gateway to Lebanon's news",
    url: "https://news.961.co/",
    siteName: '961 News',
    images: [
      {
        url: "/961-news-logo.png",
        width: 800,
        height: 600,
      },
      {
        url: "/961-news-logo.png",
        width: 1800,
        height: 1600,
        alt: "961 News",
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "961 News",
    description: "Your gateway to Lebanon's news",
    images: ["/961-news-logo.png"],
    creator: "961 News",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}