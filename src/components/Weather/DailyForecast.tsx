import { Sun, Cloud, CloudRain } from 'lucide-react';

interface DailyForecastProps {
  location: {
    city: string;
    country: string;
    lat: number;
    lon: number;
  };
  unit: 'C' | 'F';
  days?: number;
  title?: string;
  startFromDay?: number;
}

const dailyData = [
  { day: 'Today', high: 30, low: 22, icon: Sun, precipitation: '0%' },
  { day: 'Tomorrow', high: 29, low: 21, icon: Cloud, precipitation: '20%' },
  { day: 'Wed', high: 27, low: 20, icon: CloudRain, precipitation: '80%' },
  { day: 'Thu', high: 26, low: 19, icon: CloudRain, precipitation: '60%' },
  { day: 'Fri', high: 28, low: 20, icon: Cloud, precipitation: '30%' },
  { day: 'Sat', high: 29, low: 21, icon: Sun, precipitation: '0%' },
  { day: 'Sun', high: 30, low: 22, icon: Sun, precipitation: '0%' },
  { day: 'Mon', high: 31, low: 23, icon: Sun, precipitation: '0%' },
  { day: 'Tue', high: 30, low: 22, icon: Cloud, precipitation: '10%' },
  { day: 'Wed', high: 28, low: 21, icon: CloudRain, precipitation: '40%' },
  { day: 'Thu', high: 27, low: 20, icon: Cloud, precipitation: '20%' },
  { day: 'Fri', high: 29, low: 21, icon: Sun, precipitation: '0%' },
  { day: 'Sat', high: 30, low: 22, icon: Sun, precipitation: '0%' },
  { day: 'Sun', high: 31, low: 23, icon: Sun, precipitation: '0%' }
];

export default function DailyForecast({ location, unit, days = 7, title = "7-Day Forecast", startFromDay = 0 }: DailyForecastProps) {
  const displayData = dailyData.slice(startFromDay, startFromDay + days);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-7 gap-4 overflow-x-auto">
        {displayData.map((day, index) => {
          const high = unit === 'C' ? day.high : Math.round(day.high * 1.8 + 32);
          const low = unit === 'C' ? day.low : Math.round(day.low * 1.8 + 32);
          const Icon = day.icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <span className={`font-medium mb-2 ${index === 0 && startFromDay === 0 ? 'text-[#FF0000]' : ''}`}>
                {day.day}
              </span>
              <Icon className="w-8 h-8 mb-2 text-gray-600" />
              <span className="text-blue-500 text-sm mb-2">{day.precipitation}</span>
              <div className="flex flex-col items-center">
                <span className="text-lg font-medium">{high}°</span>
                <span className="text-sm text-gray-500">{low}°</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}