"use client"

import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

interface Location {
  city: string;
  country: string;
  lat: number;
  lon: number;
}

interface WeatherHeaderProps {
  location: Location;
  onLocationChange: (location: Location) => void;
  unit: 'C' | 'F';
  onUnitChange: (unit: 'C' | 'F') => void;
}

export default function WeatherHeader({ location, onLocationChange, unit, onUnitChange }: WeatherHeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <MapPin className="w-6 h-6 text-[#FF0000]" />
        <h1 className="text-2xl font-bold">{location.city}, {location.country}</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative flex-1 md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF0000] transition-shadow"
          />
        </div>
        <div className="flex bg-white rounded-lg border border-gray-200 p-1">
          <button
            onClick={() => onUnitChange('C')}
            className={`px-3 py-1 rounded ${
              unit === 'C' ? 'bg-[#FF0000] text-white' : 'text-gray-600 hover:text-[#FF0000]'
            } transition-colors`}
          >
            °C
          </button>
          <button
            onClick={() => onUnitChange('F')}
            className={`px-3 py-1 rounded ${
              unit === 'F' ? 'bg-[#FF0000] text-white' : 'text-gray-600 hover:text-[#FF0000]'
            } transition-colors`}
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
}