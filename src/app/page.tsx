"use client"

import React, { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import { formatTimeAgo } from '../utils/dateUtils';
import LiveFeedPreview from '../components/LiveFeed/LiveFeedPreview';
import AdPlacement from '../components/Ads/AdPlacement';
import { Sun, ChevronRight, ChevronLeft, Radio, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import CategoryCards from '../components/HomePage/CategoryCards';
import WorldNewsSection from '../components/HomePage/WorldNewsSection';
import MostSharedSection from '../components/HomePage/MostSharedSection';
import PopularJournalists from '../components/HomePage/PopularJournalists';
import PopularOutlets from '../components/HomePage/PopularOutlets';

const heroSlides = [
  {
    id: '1',
    title: "Lebanon's Economic Recovery Plan Shows Promising Results",
    category: 'Economy',
    type: 'article',
    timestamp: new Date(Date.now() - 3600000),
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2070',
    outlet: {
      name: 'The Daily Star',
      logo: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop'
    }
  },
  {
    id: '2',
    title: 'Tech Innovation Hub Opens in Beirut Digital District',
    category: 'Technology',
    type: 'video',
    timestamp: new Date(Date.now() - 7200000),
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
    outlet: {
      name: 'Executive',
      logo: 'https://images.unsplash.com/photo-1679678691250-a14e09c004c7?w=32&h=32&q=80&fit=crop'
    }
  },
  {
    id: '3',
    title: 'Breaking: Major Environmental Protection Laws Passed',
    category: 'Politics',
    type: 'breaking',
    timestamp: new Date(Date.now() - 10800000),
    imageUrl: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&q=80&w=1740',
    outlet: {
      name: "L'Orient Today",
      logo: 'https://images.unsplash.com/photo-1679678691170-7781f11f9d86?w=32&h=32&q=80&fit=crop'
    }
  }
];

const sections = [
  { id: 'latest', name: 'Latest' },
  { id: 'top', name: 'Top Stories' },
  { id: 'videos', name: 'Videos' },
  { id: 'opinion', name: 'Opinion' },
  { id: 'economy', name: 'Economy' },
  { id: 'sports', name: 'Sports' },
  { id: 'trending', name: 'Trending' }
];

const latestNews = [
  {
    id: '1',
    title: "Lebanon's Economic Recovery Plan Shows Promising Results in First Quarter",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2070",
    category: "Economy",
    timestamp: new Date(Date.now() - 3600000),
    outlet: {
      name: "The Daily Star",
      logo: "https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop"
    }
  },
  {
    id: '2',
    title: "Tech Innovation Hub Opens in Beirut Digital District",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070",
    category: "Technology",
    timestamp: new Date(Date.now() - 7200000),
    outlet: {
      name: "Executive",
      logo: "https://images.unsplash.com/photo-1679678691250-a14e09c004c7?w=32&h=32&q=80&fit=crop"
    }
  }
];

const politicsNews = [
  {
    id: '3',
    title: "Parliament Approves New Environmental Protection Laws",
    category: "Politics",
    timestamp: new Date(Date.now() - 10800000),
    outlet: {
      name: "L'Orient Today",
      logo: "https://images.unsplash.com/photo-1679678691170-7781f11f9d86?w=32&h=32&q=80&fit=crop"
    }
  },
  {
    id: '4',
    title: "International Summit on Regional Cooperation Begins in Beirut",
    category: "Politics",
    timestamp: new Date(Date.now() - 14400000),
    outlet: {
      name: "The Daily Star",
      logo: "https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop"
    }
  }
];

const verticalVideos = [
  {
    id: '1',
    title: "Behind the Scenes: Lebanon's Cultural Renaissance",
    thumbnailUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1740",
    duration: "10:32",
    views: 45200,
    outlet: {
      name: "MTV Lebanon",
      logo: "https://images.unsplash.com/photo-1679678691330-a14e09c004c7?w=32&h=32&q=80&fit=crop"
    }
  },
  {
    id: '2',
    title: "Special Report: Mediterranean Environmental Summit",
    thumbnailUrl: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&q=80&w=1740",
    duration: "15:45",
    views: 32100,
    outlet: {
      name: "LBCI",
      logo: "https://images.unsplash.com/photo-1679678691310-a14e09c004c7?w=32&h=32&q=80&fit=crop"
    }
  },
  {
    id: '3',
    title: "Economic Analysis: Future of Lebanese Markets",
    thumbnailUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1740",
    duration: "8:15",
    views: 28400,
    outlet: {
      name: "MTV Lebanon",
      logo: "https://images.unsplash.com/photo-1679678691330-a14e09c004c7?w=32&h=32&q=80&fit=crop"
    }
  },
  {
    id: '4',
    title: "International Summit on Regional Cooperation",
    thumbnailUrl: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&q=80&w=1740",
    duration: "12:45",
    views: 25600,
    outlet: {
      name: "LBCI",
      logo: "https://images.unsplash.com/photo-1679678691310-a14e09c004c7?w=32&h=32&q=80&fit=crop"
    }
  },
  {
    id: '5',
    title: "Tech Sector Growth Accelerates",
    thumbnailUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1740",
    duration: "7:20",
    views: 22800,
    outlet: {
      name: "MTV Lebanon",
      logo: "https://images.unsplash.com/photo-1679678691330-a14e09c004c7?w=32&h=32&q=80&fit=crop"
    }
  },
  {
    id: '6',
    title: "Analysis: Impact of Reforms on Currency",
    thumbnailUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1740",
    duration: "9:45",
    views: 19500,
    outlet: {
      name: "LBCI",
      logo: "https://images.unsplash.com/photo-1679678691310-a14e09c004c7?w=32&h=32&q=80&fit=crop"
    }
  },
  {
    id: '7',
    title: "Regional Impact of Lebanese Reforms",
    thumbnailUrl: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&q=80&w=1740",
    duration: "11:20",
    views: 17200,
    outlet: {
      name: "MTV Lebanon",
      logo: "https://images.unsplash.com/photo-1679678691330-a14e09c004c7?w=32&h=32&q=80&fit=crop"
    }
  },
  {
    id: '8',
    title: "Banking Sector Shows Signs of Recovery",
    thumbnailUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1740",
    duration: "6:50",
    views: 15800,
    outlet: {
      name: "LBCI",
      logo: "https://images.unsplash.com/photo-1679678691310-a14e09c004c7?w=32&h=32&q=80&fit=crop"
    }
  },
  {
    id: '9',
    title: "Central Bank Governor Addresses Policy",
    thumbnailUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1740",
    duration: "13:15",
    views: 14200,
    outlet: {
      name: "MTV Lebanon",
      logo: "https://images.unsplash.com/photo-1679678691330-a14e09c004c7?w=32&h=32&q=80&fit=crop"
    }
  },
  {
    id: '10',
    title: "IMF Comments on Lebanese Reforms",
    thumbnailUrl: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&q=80&w=1740",
    duration: "10:40",
    views: 12500,
    outlet: {
      name: "LBCI",
      logo: "https://images.unsplash.com/photo-1679678691310-a14e09c004c7?w=32&h=32&q=80&fit=crop"
    }
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSection, setSelectedSection] = useState('latest');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -600 : 600;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    scrollRef.current?.addEventListener('scroll', checkScroll);
    return () => scrollRef.current?.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <>
      <LiveFeedPreview />
      <div className="container mx-auto px-4">
        <div className="max-w-[800px] mx-auto">
          <AdPlacement />
        </div>
      </div>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-[1fr,300px] gap-6">
          <div className="relative">
            <div className="relative aspect-[2/1] overflow-hidden rounded-xl">
              <img
                src={heroSlides[currentSlide].imageUrl}
                alt={heroSlides[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-white/90 text-sm">
                    {formatTimeAgo(heroSlides[currentSlide].timestamp)}
                  </span>
                  <span className="text-white/60">•</span>
                  {heroSlides[currentSlide].type === 'video' && (
                    <span className="px-2 py-1 bg-[#FF0000] text-white text-xs font-medium rounded-full">
                      Video
                    </span>
                  )}
                  {heroSlides[currentSlide].type === 'breaking' && (
                    <span className="px-2 py-1 bg-[#FF0000] text-white text-xs font-medium rounded-full animate-pulse">
                      Breaking
                    </span>
                  )}
                  <span className="px-2 py-1 bg-white/20 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                    {heroSlides[currentSlide].category}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-white mb-4">
                  {heroSlides[currentSlide].title}
                </h1>
                <div className="flex items-center gap-2">
                  <img
                    src={heroSlides[currentSlide].outlet.logo}
                    alt={heroSlides[currentSlide].outlet.name}
                    className="w-5 h-5 rounded-full"
                  />
                  <span className="text-white/90 text-sm">
                    {heroSlides[currentSlide].outlet.name}
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -left-4">
              <button
                onClick={() => setCurrentSlide(prev => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
                className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4">
              <button
                onClick={() => setCurrentSlide(prev => (prev === heroSlides.length - 1 ? 0 : prev + 1))}
                className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <button
                onClick={() => {}}
                className="w-full bg-[#FF0000] text-white py-3.5 rounded-lg font-medium hover:bg-red-600 transition-colors"
              >
                961 Log in
              </button>
              <div className="text-right">
                <button className="text-sm text-gray-600 hover:text-[#FF0000] transition-colors">
                  Create account
                </button>
              </div>
            </div>

            <Link
              href="/weather"
              className="bg-white rounded-lg shadow-sm p-4 block hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sun className="w-5 h-5 text-yellow-500" />
                  <span className="font-medium">Beirut, 27°C</span>
                </div>
                <span className="text-sm text-gray-500">Sunny</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>High: 29°C</span>
                  <span>Low: 22°C</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>UV Index: 8</span>
                  <span>Visibility: 10 km</span>
                </div>
              </div>
            </Link>

            <Link
              href="https://deals.961.co"
              className="bg-white rounded-lg shadow-sm p-4 block hover:bg-gray-50 transition-colors border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#FF0000] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-[18px] font-bold text-gray-900">961 Deals</h2>
                  <p className="text-sm text-gray-500">Exclusive offers across Lebanon</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[#FF0000] font-medium">Browse Deals</span>
                </div>
                <svg className="w-5 h-5 text-[#FF0000]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link
              href="/map"
              className="relative bg-white rounded-lg shadow-sm block hover:bg-gray-50 transition-colors border border-gray-200 mt-4 overflow-hidden h-[160px] group"
            >
              <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=33.8938,35.5018&zoom=14&size=800x400&scale=2&style=feature:all|element:labels|visibility:off&style=feature:landscape|color:0xf0f0f0&style=feature:road|color:0xffffff&style=feature:water|color:0xe0e0e0')] bg-cover bg-center opacity-75 group-hover:opacity-85 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/70" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <svg className="w-8 h-8 text-[#FF0000] mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C7.802 0 4 3.403 4 7.602C4 11.8 7.469 16.812 12 24C16.531 16.812 20 11.8 20 7.602C20 3.403 16.199 0 12 0ZM12 11C10.343 11 9 9.657 9 8C9 6.343 10.343 5 12 5C13.657 5 15 6.343 15 8C15 9.657 13.657 11 12 11Z" />
                </svg>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">News Map</h2>
                <p className="text-gray-500 font-medium">Coming Soon</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-6 mt-6">
          {[
            {
              id: '1',
              title: 'Central Bank Announces New Economic Measures',
              category: 'Economy',
              imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2070',
              timestamp: new Date(Date.now() - 3600000),
              outlet: {
                name: 'The Daily Star',
                logo: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop'
              }
            },
            {
              id: '2',
              title: 'Tech Innovation Hub Opens in Beirut Digital District',
              category: 'Technology',
              imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
              timestamp: new Date(Date.now() - 7200000),
              outlet: {
                name: 'Executive',
                logo: 'https://images.unsplash.com/photo-1679678691250-a14e09c004c7?w=32&h=32&q=80&fit=crop'
              }
            },
            {
              id: '3',
              title: 'Environmental Protection Laws Take Effect',
              category: 'Environment',
              imageUrl: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&q=80&w=1740',
              timestamp: new Date(Date.now() - 10800000),
              outlet: {
                name: "L'Orient Today",
                logo: 'https://images.unsplash.com/photo-1679678691170-7781f11f9d86?w=32&h=32&q=80&fit=crop'
              }
            },
            {
              id: '4',
              title: 'International Summit on Regional Cooperation',
              category: 'Politics',
              imageUrl: 'https://images.unsplash.com/photo-1530099486328-e021101a494a?auto=format&fit=crop&q=80&w=2547',
              timestamp: new Date(Date.now() - 14400000),
              outlet: {
                name: 'The Daily Star',
                logo: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=32&h=32&q=80&fit=crop'
              }
            },
            {
              id: '5',
              title: 'Healthcare Sector Receives Major Investment',
              category: 'Healthcare',
              imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=2070',
              timestamp: new Date(Date.now() - 18000000),
              outlet: {
                name: 'Executive',
                logo: 'https://images.unsplash.com/photo-1679678691250-a14e09c004c7?w=32&h=32&q=80&fit=crop'
              }
            }
          ].map(article => (
            <Link
              key={article.id}
              href={`/article/${article.id}`}
              className="bg-white rounded-lg overflow-hidden group relative flex flex-col"
            >
              <div className="aspect-[1.91/1] overflow-hidden">
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2 py-0.5 text-xs font-medium text-[#FF0000] bg-red-50 rounded">
                    {article.category}
                  </span>
                </div>
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex-1">
                <h3 className="font-medium text-[17px] leading-snug text-gray-900 group-hover:text-[#FF0000] transition-colors line-clamp-2 mb-2">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{article.outlet.name}</span>
                  <span className="text-xs text-gray-400">{formatTimeAgo(article.timestamp)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 max-w-[800px] mx-auto">
          <AdPlacement />
        </div>

        <div className="mt-6">
          <div className="bg-white p-6">
            <div className="relative">
              <div 
                ref={scrollRef}
                className="flex gap-4 overflow-x-hidden scroll-smooth relative"
              >
                {verticalVideos.map((video, index) => (
                  <React.Fragment key={video.id}>
                    <div className="flex-none w-[300px] group cursor-pointer">
                      <div className="relative aspect-[9/16] rounded-lg overflow-hidden mb-3">
                        <img
                          src={video.thumbnailUrl}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-medium line-clamp-2 mb-2">
                            {video.title}
                          </h3>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <img
                                src={video.outlet.logo}
                                alt={video.outlet.name}
                                className="w-5 h-5 rounded-full object-cover mr-2"
                              />
                              <span className="text-white/90 text-sm">{video.outlet.name}</span>
                            </div>
                            <div className="px-2 py-1 bg-black/40 text-white text-xs rounded">
                              {video.duration}
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                            <Play className="w-7 h-7 text-gray-900" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {index === 1 && (
                      <div className="flex-none w-[300px]">
                        <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                          <div className="absolute top-2 right-2 bg-white/80 px-2 py-0.5 rounded text-xs text-gray-500">
                            AD
                          </div>
                          <span className="text-gray-400">Ad Space</span>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              {canScrollLeft && (
                <button 
                  onClick={() => scroll('left')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}
              {canScrollRight && (
                <button 
                  onClick={() => scroll('right')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <CategoryCards />
        </div>

        <div className="mt-6">
          <WorldNewsSection />
        </div>

        <div className="mt-6">
          <MostSharedSection />
        </div>

        <div className="mt-6">
          <PopularJournalists />
        </div>

        <div className="mt-6">
          <PopularOutlets />
        </div>
      </div>
    </>
  );
}