import React from 'react';
import { Link } from 'react-router-dom';

export default function TopHeader() {
  return (
    <div className="bg-black border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-end h-7">
          <div className="flex items-center space-x-3 text-[13px]">
            <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/advertise" className="text-gray-400 hover:text-white transition-colors">
              Advertise
            </Link>
            <Link to="/for-businesses" className="text-gray-400 hover:text-white transition-colors">
              For Businesses
            </Link>
            <Link to="/for-creators" className="text-gray-400 hover:text-white transition-colors">
              For Creators
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}