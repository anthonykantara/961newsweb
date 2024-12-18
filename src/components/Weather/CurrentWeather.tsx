import React from 'react';
import { Cloud, Wind, Droplets, Sun } from 'lucide-react';

interface CurrentWeatherProps {
  location: {
    city: string;
    country: string;
    lat: number;
    lon: number;
  };
  unit: 'C' | 'F';
}

export default function CurrentWeather({ location, unit }: CurrentWeatherProps) {
  const temp = unit === 'C' ? 28 : Math.round(28 * 1.8 + 32);
  const feelsLike = unit === 'C' ? 30 : Math.round(30 * 1.8 + 32);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-4">
            <Sun className="w-16 h-16 text-yellow-500" />
            <div>
              <div className="text-4xl font-bold">{temp}°{unit}</div>
              <div className="text-gray-500">Feels like {feelsLike}°{unit}</div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-2">Clear Sky</h3>
            <p className="text-gray-600">
              A clear day with plenty of sunshine. Perfect for outdoor activities.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Wind className="w-5 h-5" />
              <span>Wind</span>
            </div>
            <div className="text-2xl font-medium">12 km/h</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Droplets className="w-5 h-5" />
              <span>Humidity</span>
            </div>
            <div className="text-2xl font-medium">65%</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Cloud className="w-5 h-5" />
              <span>Cloud Cover</span>
            </div>
            <div className="text-2xl font-medium">10%</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Sun className="w-5 h-5" />
              <span>UV Index</span>
            </div>
            <div className="text-2xl font-medium">8</div>
          </div>
        </div>
      </div>
    </div>
  );
}