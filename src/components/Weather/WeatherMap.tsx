interface WeatherMapProps {
  location: {
    city: string;
    country: string;
    lat: number;
    lon: number;
  };
}

export default function WeatherMap({ location }: WeatherMapProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm h-full">
      <h2 className="text-lg font-bold mb-4">Weather Map</h2>
      <div className="aspect-square w-full bg-gray-100 rounded-lg">
        {/* Map implementation would go here */}
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          Weather Map Placeholder
        </div>
      </div>
    </div>
  );
}