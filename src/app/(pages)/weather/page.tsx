"use client"

import { useState } from 'react';
import WeatherHeader from '@/components/Weather/WeatherHeader';
import CurrentWeather from '@/components/Weather/CurrentWeather';
import HourlyForecast from '@/components/Weather/HourlyForecast';
import DailyForecast from '@/components/Weather/DailyForecast';
import AdPlacement from '@/components/Ads/AdPlacement';

export default function WeatherPage() {
  const [unit, setUnit] = useState<'C' | 'F'>('C');
  const [location, setLocation] = useState({
    city: 'Beirut',
    country: 'Lebanon',
    lat: 33.8938,
    lon: 35.5018
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <WeatherHeader
            location={location}
            onLocationChange={setLocation}
            unit={unit}
            onUnitChange={setUnit}
          />
          <AdPlacement />
          <div className="space-y-6">
            <CurrentWeather location={location} unit={unit} />
            <HourlyForecast location={location} unit={unit} />
            <AdPlacement />
            <DailyForecast location={location} unit={unit} days={7} title="7-Day Forecast" />
            <DailyForecast location={location} unit={unit} days={14} title="14-Day Forecast" startFromDay={7} />
            <AdPlacement />
          </div>
        </div>
      </div>
    </div>
  );
}