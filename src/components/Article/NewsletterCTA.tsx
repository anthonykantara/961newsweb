import { Mail } from 'lucide-react';

export default function NewsletterCTA() {
  return (
    <div className="bg-white p-6 border-b border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <Mail className="w-5 h-5 text-[#FF0000]" />
        <h2 className="text-[18px] font-bold text-gray-900">Be the First to Get News</h2>
      </div>
      
      <p className="text-gray-600 text-sm mb-4">
        Get exclusive updates and insights delivered straight to your inbox
      </p>
      
      <form className="space-y-3">
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF0000] transition-shadow text-sm"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-[#FF0000] text-white py-2.5 rounded-lg font-medium hover:bg-red-600 transition-colors text-sm flex items-center justify-center gap-2 group whitespace-nowrap"
        >
          <span>Subscribe (Free)</span>
          <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </form>
    </div>
  );
}