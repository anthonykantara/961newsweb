"use client"

import { useState } from 'react';
import { Search } from 'lucide-react';
import CoinIcon from '../Icons/CoinIcon';
import { motion } from 'framer-motion';

interface Flag {
  code: string;
  name: string;
  symbol: string;
  cost: number;
}

interface FlagSelectorProps {
  onSelect: (flag: Flag) => void;
  userCoins: number;
}

// Helper function to get flag emoji
const getFlagEmoji = (countryCode: string) => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

// Generate all country flags
const allFlags: Flag[] = [
  { code: 'sy', name: 'Syria', symbol: '🇸🇾', cost: 30 },
  { code: 'ps', name: 'Palestine', symbol: '🇵🇸', cost: 30 },
  { code: 'il', name: 'Israel', symbol: '🇮🇱', cost: 30 },
  { code: 'us', name: 'United States', symbol: '🇺🇸', cost: 10 },
  { code: 'gb', name: 'United Kingdom', symbol: '🇬🇧', cost: 10 },
  { code: 'fr', name: 'France', symbol: '🇫🇷', cost: 10 },
  { code: 'de', name: 'Germany', symbol: '🇩🇪', cost: 10 },
  // ... more flags can be added
];

export default function FlagSelector({ onSelect, userCoins }: FlagSelectorProps) {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredFlags = allFlags.filter(flag => 
    flag.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center w-12 h-12 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <line x1="4" y1="22" x2="4" y2="15" />
        </svg>
        <div className="absolute bottom-1 right-1">
          <CoinIcon className="w-3.5 h-3.5" />
        </div>
      </motion.button>

      {isOpen && (
        <div className="absolute mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 right-0 z-60">
          <div className="p-3 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search flags..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>
          <div className="max-h-72 overflow-y-auto p-2">
            <div className="grid grid-cols-4 gap-2">
              {filteredFlags.map((flag) => (
                <button
                  key={flag.code}
                  onClick={() => {
                    onSelect(flag);
                    setIsOpen(false);
                  }}
                  className={`relative p-2 rounded-lg text-2xl hover:scale-110 transition-transform ${
                    userCoins >= flag.cost 
                      ? 'hover:bg-gray-100' 
                      : 'opacity-40 cursor-not-allowed'
                  }`}
                >
                  {flag.symbol}
                  <div className="absolute bottom-0 right-0 flex items-center text-xs">
                    <CoinIcon className="w-3 h-3 mr-0.5" />
                    <span className="font-medium">{flag.cost}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}