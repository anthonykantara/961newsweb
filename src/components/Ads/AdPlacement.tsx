export default function AdPlacement() {
  return (
    <div className="bg-white p-6 text-center mb-6">
      <div className="bg-gray-200 h-32 flex items-center justify-center relative">
        <div className="absolute top-2 right-2 bg-white/80 px-2 py-0.5 rounded text-xs text-gray-500">
          AD
        </div>
        <span className="text-gray-400">Ad Space</span>
      </div>
    </div>
  );
}