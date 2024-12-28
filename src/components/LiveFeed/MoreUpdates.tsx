import React from 'react';
import Link from 'next/link';

interface Update {
  id: string;
  title: string;
}

const popularUpdates: Update[] = [
  {
    id: '2',
    title: 'Parliament Votes on Controversial Infrastructure Bill'
  },
  {
    id: '3',
    title: 'Tech Companies Announce Joint Cybersecurity Initiative'
  },
  {
    id: '4',
    title: 'Breaking: International Peace Conference Reaches Historic Agreement'
  },
  {
    id: '5',
    title: 'Major Scientific Discovery in Climate Research'
  }
];

export default function MoreUpdates() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold mb-6">More Updates From Today</h2>
      <div className="space-y-4">
        {popularUpdates.map((update) => (
          <Link
            key={update.id}
            href={`/updates/${update.id}`}
            className="flex items-start gap-4 group"
          >
            <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#FF0000] mt-3" />
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#FF0000] transition-colors">
                {update.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}