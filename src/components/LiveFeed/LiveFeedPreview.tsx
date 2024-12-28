import React from 'react';
import { ArrowRight, Radio } from 'lucide-react';
import Link from 'next/link';
import LiveUpdateCard from './LiveUpdateCard';
import { LiveUpdate } from '../../types/news';

const liveUpdates: LiveUpdate[] = [
  {
    id: '1',
    title: 'Parliament Passes New Economic Bill with Bipartisan Support',
    timestamp: new Date(Date.now() - 900000),
    priority: 'critical'
  },
  {
    id: '2',
    title: 'Tech Giant Unveils Groundbreaking AI-Powered Device at Conference',
    timestamp: new Date(Date.now() - 1800000),
    priority: 'high'
  },
  {
    id: '3',
    title: 'Unexpected Upset in Championship Match as Underdog Team Claims Victory',
    timestamp: new Date(Date.now() - 2700000)
  },
  {
    id: '4',
    title: 'Severe Weather Warning Issued for Coastal Regions',
    timestamp: new Date(Date.now() - 3600000),
    priority: 'critical'
  },
  {
    id: '5',
    title: 'Global Markets Surge as Investor Confidence Grows',
    timestamp: new Date(Date.now() - 4500000)
  }
];

export default function LiveFeedPreview() {
  return (
    <div className="bg-white border-y border-gray-200 mb-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Radio className="w-5 h-5 text-[#FF0000]" /> 
            <Link href="/live" className="text-[18px] font-bold hover:text-[#FF0000] transition-colors">Live Updates</Link> 
          </div>
          <Link 
            href="/live"
            className="flex items-center text-[#FF0000] hover:text-red-700 transition-colors text-[15px] font-medium"
          >
            <span className="animate-pulse flex h-3 w-3 mr-2">
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF0000]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF0000] opacity-75"></span>
              </span>
            </span>
            View All Updates
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div>
          {liveUpdates.map(update => (
            <LiveUpdateCard key={update.id} update={update} />
          ))}
        </div>
      </div>
    </div>
  );
}