"use client"

import React from 'react';
import { LiveUpdate } from '@/types/news';
import LiveUpdateFeedItem from '@/components/LiveFeed/LiveUpdateFeedItem';
import AdPlacement from '@/components/Ads/AdPlacement';
import { Clock, ArrowUp, Play } from 'lucide-react';
import Link from 'next/link';
import { formatTimeAgo } from '@/utils/dateUtils';
import EngagementBar from '@/components/LiveFeed/EngagementBar';
import { DonateDialog } from '@/components/Donate';
import MoreUpdates from '@/components/LiveFeed/MoreUpdates';
import { useState, useEffect } from 'react';

const mockUpdate: LiveUpdate = {
    id: '1',
    title: 'Breaking: Major Economic Reform Package Announced by Central Bank',
    timestamp: new Date(Date.now() - 900000),
    priority: 'critical',
    content: 'The Central Bank has unveiled a comprehensive economic reform package aimed at stabilizing the currency and controlling inflation. The measures include new lending regulations and interest rate adjustments.',
    media: {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2070',
        aspectRatio: 'horizontal'
    }
};

const trendingNews = [
    {
        id: '1',
        title: 'Previous Economic Reforms: A Historical Perspective',
        category: 'Economy',
        imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1740',
        timestamp: new Date(Date.now() - 86400000),
        outlet: {
            name: '961 News',
            logo: '/961-logo.png'
        }
    },
    {
        id: '2',
        title: 'Expert Analysis: Impact of New Banking Regulations',
        category: 'Analysis',
        imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1740',
        timestamp: new Date(Date.now() - 172800000),
        outlet: {
            name: '961 News',
            logo: '/961-logo.png'
        }
    },
    {
        id: '3',
        title: 'Central Bank Governor Addresses New Policy Implementation',
        category: 'Economy',
        imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1740',
        timestamp: new Date(Date.now() - 259200000),
        outlet: {
            name: '961 News',
            logo: '/961-logo.png'
        }
    },
    {
        id: '4',
        title: 'Market Response to Economic Reform Package',
        category: 'Markets',
        imageUrl: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80&w=1740',
        timestamp: new Date(Date.now() - 345600000),
        outlet: {
            name: '961 News',
            logo: '/961-logo.png'
        }
    },
    {
        id: '5',
        title: 'International Monetary Fund Comments on Lebanese Reforms',
        category: 'Economy',
        imageUrl: 'https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&q=80&w=1740',
        timestamp: new Date(Date.now() - 432000000),
        outlet: {
            name: '961 News',
            logo: '/961-logo.png'
        }
    },
    {
        id: '6',
        title: 'Lebanese Pound Shows Signs of Stability After Reform Announcement',
        category: 'Currency',
        imageUrl: 'https://images.unsplash.com/photo-1621981386829-9b458a2cdddb?auto=format&fit=crop&q=80&w=1740',
        timestamp: new Date(Date.now() - 518400000),
        outlet: {
            name: '961 News',
            logo: '/961-logo.png'
        }
    }
];

export default function UpdatePage({
    params,
}: {
    params: { id: string }
}) {
    const id = params.id;
    const [newUpdatesCount, setNewUpdatesCount] = useState(0);
    const [showDonateDialog, setShowDonateDialog] = useState(false);
    const [update, setUpdate] = useState<LiveUpdate | null>(null);

    // Simulate new updates coming in
    useEffect(() => {
        const interval = setInterval(() => {
            setNewUpdatesCount(prev => prev + 1);
        }, 30000); // Add new update every 30 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // In a real app, this would fetch the update from an API
        // For now, we'll use the mock data
        setUpdate(mockUpdate);
    }, [id]);

    if (!update) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-[800px] mx-auto px-4 py-6">
                <AdPlacement />

                <Link
                    href="/live"
                    className="flex items-center justify-center gap-2 bg-[#FF0000] text-white px-6 py-2 rounded-full shadow-lg mb-6 hover:bg-red-600 transition-colors"
                >
                    {newUpdatesCount > 0 ? (
                        <span className="font-medium">{newUpdatesCount} New Updates</span>
                    ) : (
                        <span className="font-medium">View Updates</span>
                    )}
                    <ArrowUp className="w-4 h-4" />
                </Link>

                <div className="mb-6">
                    <LiveUpdateFeedItem update={update} />
                </div>

                <AdPlacement />

                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="text-center">
                        <h2 className="text-xl font-bold mb-4">Support Independent Journalism</h2>
                        <p className="text-gray-600 mb-6">
                            961 News is Lebanon's only independent and nonprofit outlet. We need your contributions to keep our critical coverage active. Please consider donating to support us. Any amount helps!
                        </p>
                        <button
                            onClick={() => setShowDonateDialog(true)}
                            className="bg-[#FF0000] text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition-colors cursor-pointer"
                        >
                            Donate Now
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <EngagementBar
                        likes={0}
                        shares={0}
                        onLike={() => { }}
                        onShare={() => { }}
                    />
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <MoreUpdates />
                </div>

                <AdPlacement />

                <div className="mt-8 max-w-[1200px] -mx-[200px]">
                    <h2 className="text-xl font-bold mb-6">Latest News</h2>
                    <div className="grid grid-cols-3 gap-6">
                        {trendingNews.map(article => (
                            <div
                                key={article.id}
                                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col"
                            >
                                <div className="aspect-[16/9] overflow-hidden relative">
                                    <img
                                        src={article.imageUrl}
                                        alt={article.title}
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className="px-2 py-0.5 text-xs font-medium text-[#FF0000] bg-red-50 rounded">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium text-gray-900 hover:text-[#FF0000] transition-colors mb-4 line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-gray-400 text-sm">
                                            <Clock className="w-4 h-4 mr-1" />
                                            <span>{formatTimeAgo(article.timestamp)}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={article.outlet.logo}
                                                alt={article.outlet.name}
                                                className="w-4 h-4 rounded-full"
                                            />
                                            <span className="text-sm text-gray-500">{article.outlet.name}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <AdPlacement />

                <div className="mt-8 max-w-[1200px] -mx-[200px]">
                    <div className="relative">
                        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth" id="videoScroll">
                            {Array.from({ length: 10 }, (_, index) => (
                                <React.Fragment key={index}>
                                    <div className="flex-none w-[300px] group cursor-pointer">
                                        <div className="relative aspect-[9/16] rounded-lg overflow-hidden mb-3">
                                            <img
                                                src={`https://images.unsplash.com/photo-${1578575437130 + (index > 2 ? index + 1 : index)}-527eed3abbec?auto=format&fit=crop&q=80&w=1740`}
                                                alt=""
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <h3 className="text-white font-medium line-clamp-2 mb-2">
                                                    {[
                                                        "Economic Impact: Analyzing the Reform Package",
                                                        "Public Response to New Economic Measures",
                                                        "Expert Analysis: Future of Lebanese Banking",
                                                        "International Response to Economic Reforms",
                                                        "Market Reactions to Policy Changes",
                                                        "Banking Sector Transformation",
                                                        "Currency Stabilization Efforts",
                                                        "Regional Economic Impact",
                                                        "Future of Lebanese Economy",
                                                        "Global Financial Markets Response"
                                                    ][index]}
                                                </h3>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <img
                                                            src="/961-logo.png"
                                                            alt="961 News"
                                                            className="w-5 h-5 rounded-full object-cover mr-2"
                                                        />
                                                        <span className="text-white/90 text-sm">961 News</span>
                                                    </div>
                                                    <div className="px-2 py-1 bg-black/40 text-white text-xs rounded">
                                                        {["3:45", "2:30", "4:15", "3:20", "2:55", "3:10", "4:30", "2:45", "3:35", "3:50"][index]}
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
                        <button
                            onClick={() => {
                                const container = document.getElementById('videoScroll');
                                if (container) {
                                    container.scrollBy({ left: -600, behavior: 'smooth' });
                                }
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                        <button
                            onClick={() => {
                                const container = document.getElementById('videoScroll');
                                if (container) {
                                    container.scrollBy({ left: 600, behavior: 'smooth' });
                                }
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>

                <AdPlacement />

            </div>
            <DonateDialog
                isOpen={showDonateDialog}
                onClose={() => setShowDonateDialog(false)}
            />
        </div>
    );
}