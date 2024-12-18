import React from 'react';
import { Users, Newspaper, Video, Eye, BarChart2, TrendingUp } from 'lucide-react';

interface JournalistStatsProps {
  journalist: {
    followers: string;
    articles: number;
    videos: number;
    views: string;
  };
}

export default function JournalistStats({ journalist }: JournalistStatsProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-[#FF0000]" />
            <div>
              <div className="text-lg font-bold">{journalist.followers}</div>
              <div className="text-sm text-gray-500">Followers</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center gap-3">
            <Newspaper className="w-5 h-5 text-[#FF0000]" />
            <div>
              <div className="text-lg font-bold">{journalist.articles}</div>
              <div className="text-sm text-gray-500">Articles</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center gap-3">
            <Video className="w-5 h-5 text-[#FF0000]" />
            <div>
              <div className="text-lg font-bold">{journalist.videos}</div>
              <div className="text-sm text-gray-500">Videos</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center gap-3">
            <Eye className="w-5 h-5 text-[#FF0000]" />
            <div>
              <div className="text-lg font-bold">{journalist.views}</div>
              <div className="text-sm text-gray-500">Views</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-2 mb-6">
            <BarChart2 className="w-5 h-5 text-[#FF0000]" />
            <h2 className="text-[18px] font-bold">Past 30 Days</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Articles Written</span>
              <span className="font-bold">109</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Videos Created</span>
              <span className="font-bold">24</span>
            </div>
            <div className="h-px bg-gray-100" />
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Most Active Section</span>
                <span className="font-bold">Economics</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>42 articles</span>
                <span>•</span>
                <span>38.5% of total</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-[#FF0000]" />
            <h2 className="text-[18px] font-bold">Follow Stats</h2>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex gap-4">
                <div className="w-[420px] relative">
                  <div className="flex items-end gap-3">
                    <div className="flex flex-col items-center gap-1 w-4.5">
                      <div className="text-xs text-gray-500">15%</div>
                      <div className="w-full bg-gray-100 rounded-t h-[48px]" />
                      <div className="text-xs text-gray-500">10s</div>
                    </div>
                    <div className="flex flex-col items-center gap-1 w-4.5">
                      <div className="text-xs text-[#FF0000] font-bold">45%</div>
                      <div className="w-full bg-[#FF0000] rounded-t h-[144px]" />
                      <div className="text-xs text-gray-500">20s</div>
                    </div>
                    <div className="flex flex-col items-center gap-1 w-4.5">
                      <div className="text-xs text-[#FF0000] font-bold">25%</div>
                      <div className="w-full bg-[#FF0000] rounded-t h-[80px]" />
                      <div className="text-xs text-gray-500">30s</div>
                    </div>
                    <div className="flex flex-col items-center gap-1 w-4.5">
                      <div className="text-xs text-gray-500">10%</div>
                      <div className="w-full bg-gray-100 rounded-t h-[32px]" />
                      <div className="text-xs text-gray-500">40s</div>
                    </div>
                    <div className="flex flex-col items-center gap-1 w-4.5">
                      <div className="text-xs text-gray-500">5%</div>
                      <div className="w-full bg-gray-100 rounded-t h-[16px]" />
                      <div className="text-xs text-gray-500">50s</div>
                    </div>
                    <div className="flex flex-col items-center gap-1 w-4.5">
                      <div className="text-xs text-gray-500">0%</div>
                      <div className="w-full bg-gray-100 rounded-t h-0" />
                      <div className="text-xs text-gray-500">60s+</div>
                    </div>
                  </div>
                </div>
                <div className="w-px bg-gray-100" />
                <div className="flex-1 flex items-center justify-center ml-4 mr-8">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        fill="none"
                        stroke="#f3f4f6"
                        strokeWidth="16"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        fill="none"
                        stroke="#FF0000"
                        strokeWidth="16"
                        strokeDasharray="351.86"
                        strokeDashoffset="158.34"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#FF0000]">55%</div>
                        <div className="text-sm text-gray-500">Male</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}