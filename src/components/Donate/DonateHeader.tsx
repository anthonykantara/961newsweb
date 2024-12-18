import React from 'react';
import { Heart } from 'lucide-react';

export default function DonateHeader() {
  return (
    <div className="text-center mb-8 mt-8">
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="flex -space-x-4">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=32&h=32&q=80&fit=crop"
            alt=""
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&q=80&fit=crop"
            alt=""
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&q=80&fit=crop"
            alt=""
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <div className="w-12 h-12 rounded-full bg-red-100 border-2 border-white flex items-center justify-center">
            <span className="text-sm font-bold text-[#FF0000]">+5.2k</span>
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-[#FF0000] mb-8">Join 5,200+ Supporters Today!</h2>
      <p className="text-lg text-gray-600 mb-6">
        961 is a nonprofit empowering independent media and expediting Lebanon's digitalization
      </p>
      <p className="text-lg text-gray-600">
        We rely on your donations to keep going
      </p>
      <p className="text-lg font-bold text-gray-800">
        Your donations keep independent journalism alive!
      </p>
    </div>
  );
}