import React from 'react';
import { AlertCircle } from 'lucide-react';

const breakingNews = [
  "Breaking: Global Climate Summit Reaches Historic Agreement",
  "Update: Major Breakthrough in Peace Negotiations",
  "Alert: Central Bank Announces New Policy Measures"
];

export default function BreakingNews() {
  return (
    <div className="bg-black text-white py-2 mb-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            <span className="font-bold">BREAKING</span>
          </div>
          <div className="overflow-hidden relative flex-1">
            <div className="animate-marquee whitespace-nowrap">
              {breakingNews.map((news, index) => (
                <span key={index} className="mx-4">• {news}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}