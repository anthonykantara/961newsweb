import React from 'react';

interface DateSeparatorProps {
  date: Date;
}

export default function DateSeparator({ date }: DateSeparatorProps) {
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="max-w-[800px] mx-auto py-4">
      <div className="flex items-center gap-4">
        <div className="h-px bg-gray-200 flex-1" />
        <span className="text-gray-500 font-medium whitespace-nowrap">
          {formattedDate}
        </span>
        <div className="h-px bg-gray-200 flex-1" />
      </div>
    </div>
  );
}