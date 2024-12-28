import { Sun, Cloud, CloudRain } from 'lucide-react';

interface HourlyForecastProps {
  location: {
    city: string;
    country: string;
    lat: number;
    lon: number;
  };
  unit: 'C' | 'F';
}

const hourlyData = [
  { time: '12 PM', temp: 28, icon: Sun },
  { time: '1 PM', temp: 29, icon: Sun },
  { time: '2 PM', temp: 30, icon: Cloud },
  { time: '3 PM', temp: 29, icon: CloudRain },
  { time: '4 PM', temp: 27, icon: CloudRain },
  { time: '5 PM', temp: 26, icon: Cloud },
  { time: '6 PM', temp: 25, icon: Sun },
  { time: '7 PM', temp: 24, icon: Sun }
];

export default function HourlyForecast({ location, unit }: HourlyForecastProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-bold mb-4">Hourly Forecast</h2>
      <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
        {hourlyData.map((hour, index) => {
          const temp = unit === 'C' ? hour.temp : Math.round(hour.temp * 1.8 + 32);
          const Icon = hour.icon;
          
          return (
            <div
              key={index}
              className="flex flex-col items-center min-w-[80px] text-center"
            >
              <span className="text-gray-500 mb-2">{hour.time}</span>
              <Icon className="w-8 h-8 mb-2 text-gray-600" />
              <span className="font-medium">{temp}°{unit}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}