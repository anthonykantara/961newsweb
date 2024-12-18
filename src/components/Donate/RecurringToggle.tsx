import React from 'react';
import { motion } from 'framer-motion';

interface RecurringToggleProps {
  isRecurring: boolean;
  onToggle: () => void;
}

export default function RecurringToggle({ isRecurring, onToggle }: RecurringToggleProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <h3 className="font-medium text-gray-900">Support us better and make this a monthly donation</h3>
      </div>
      <button
        role="switch"
        aria-checked={isRecurring}
        onClick={onToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          isRecurring ? 'bg-[#FF0000]' : 'bg-gray-200'
        }`}
      >
        <motion.span
          layout
          className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
          animate={{ x: isRecurring ? 28 : 4 }}
        />
      </button>
    </div>
  );
}