import React, { useState, useEffect } from 'react';
import { LiveUpdate } from '../types/news';
import LiveUpdateFeedItem from '../components/LiveFeed/LiveUpdateFeedItem';
import AdPlacement from '../components/Ads/AdPlacement';
import DateSeparator from '../components/LiveFeed/DateSeparator';
import BackToTop from '../components/LiveFeed/ScrollControls/BackToTop';
import NewUpdatesNotification from '../components/LiveFeed/ScrollControls/NewUpdatesNotification';
import { Link } from 'react-router-dom';
import { QrCode, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { DonateDialog } from '../components/Donate';

function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

const sharers = [
  { id: '1', imageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=32&h=32&q=80&fit=crop' },
  { id: '2', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&q=80&fit=crop' },
  { id: '3', imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&q=80&fit=crop' },
  { id: '4', imageUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=32&h=32&q=80&fit=crop' },
  { id: '5', imageUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=32&h=32&q=80&fit=crop' }
];

const liveUpdates: LiveUpdate[] = [
  {
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
  },
  {
    id: '2',
    title: 'Parliament Votes on Controversial Infrastructure Bill',
    timestamp: new Date(Date.now() - 1800000),
    priority: 'high',
    content: 'Members of Parliament are currently voting on a major infrastructure bill that would allocate significant funding to rural development projects and urban renewal initiatives.'
  },
  {
    id: '3',
    title: 'Tech Companies Announce Joint Cybersecurity Initiative',
    timestamp: new Date(Date.now() - 2700000),
    content: 'Leading technology firms have joined forces to combat rising cyber threats, pledging $500 million in collective funding for advanced security research and development.',
    media: {
      type: 'video',
      url: 'https://player.vimeo.com/video/824804225',
      aspectRatio: 'horizontal'
    }
  },
  {
    id: '4',
    title: 'Breaking: International Peace Conference Reaches Historic Agreement',
    isGraphic: true,
    timestamp: new Date(Date.now() - 3600000),
    priority: 'critical',
    content: 'After intense negotiations, participating nations have signed a landmark peace accord addressing long-standing regional conflicts and establishing new security cooperation frameworks.',
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1530099486328-e021101a494a?auto=format&fit=crop&q=80&w=2547',
      aspectRatio: 'vertical'
    }
  },
  {
    id: '5',
    title: 'Major Scientific Discovery in Climate Research',
    isGraphic: true,
    timestamp: new Date(Date.now() - 4500000),
    priority: 'high',
    content: 'Scientists have identified a new atmospheric phenomenon that could significantly impact our understanding of climate change patterns and future weather predictions.',
    media: {
      type: 'video',
      url: 'https://player.vimeo.com/video/783455878',
      aspectRatio: 'vertical'
    }
  },
  {
    id: '6',
    title: 'Global Trade Agreement Negotiations Enter Final Phase',
    timestamp: new Date(Date.now() - 5400000),
    content: 'Representatives from 30 countries are meeting to finalize terms of a comprehensive trade agreement that would reshape international commerce regulations.'
  }
];

export default function LiveUpdates() {
  const [newUpdatesCount, setNewUpdatesCount] = useState(0);
  const [showQRCode, setShowQRCode] = useState(false);
  const [showDonateDialog, setShowDonateDialog] = useState(false);

  // Simulate new updates coming in
  useEffect(() => {
    const interval = setInterval(() => {
      setNewUpdatesCount(prev => prev + 1);
    }, 30000); // Add new update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNewUpdatesClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setNewUpdatesCount(0);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-[800px] mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <span className="animate-pulse flex h-3 w-3 mr-2">
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF0000]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF0000] opacity-75"></span>
              </span>
            </span>
            <span className="text-2xl font-bold">
              Live Updates
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowQRCode(true)}
              className="flex items-center space-x-2 hover:text-[#FF0000] transition-colors text-[15px] h-9 px-3 rounded-full border border-[#E8E8E8]"
            >
              <span>+ News tip</span>
            </button>
            <button
              onClick={() => setShowDonateDialog(true)}
              className="bg-[#FF0000] px-6 h-9 rounded-full hover:bg-red-700 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span className="font-semibold leading-none text-white">Donate</span>
            </button>
          </div>
        </div>
        {showQRCode && (
          <div className="fixed inset-0 flex items-center justify-center z-[60]">
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowQRCode(false)} />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 relative z-[60]"
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setShowQRCode(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="px-8 pb-8 text-center">
                <div className="bg-gray-100 p-8 rounded-lg mb-6">
                  <div className="w-48 h-48 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
                    <QrCode className="w-12 h-12 text-gray-400" />
                  </div>
                </div>
                <p className="text-gray-600">
                  Scan QR code to submit a news tip through the 961 app
                </p>
              </div>
            </motion.div>
          </div>
        )}
        <div className="space-y-6">
          {liveUpdates.map((update, index) => (
            <React.Fragment key={update.id}> 
              {index === 3 && (
                <DateSeparator date={update.timestamp} />
              )}
              <LiveUpdateFeedItem 
                update={update} 
                sharers={index === 0 ? sharers : index === 2 ? sharers.slice(0, 3) : []}
              />
              {index === 0 && <AdPlacement />}
              {index > 0 && index % 3 === 0 && <AdPlacement />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <BackToTop />
      {newUpdatesCount > 0 && (
        <NewUpdatesNotification
          count={newUpdatesCount}
          onClick={handleNewUpdatesClick}
        />
      )}
      <DonateDialog
        isOpen={showDonateDialog}
        onClose={() => setShowDonateDialog(false)}
      />
    </div>
  );
}