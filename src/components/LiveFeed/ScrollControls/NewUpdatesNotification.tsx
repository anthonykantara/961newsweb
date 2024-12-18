import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

interface NewUpdatesNotificationProps {
  count: number;
  onClick: () => void;
}

export default function NewUpdatesNotification({ count, onClick }: NewUpdatesNotificationProps) {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <motion.button
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        onClick={onClick}
        className="bg-[#FF0000] text-white px-6 py-2 rounded-full shadow-lg flex items-center justify-center gap-2"
      >
        <span className="font-medium">{count} New Updates</span>
        <ArrowUp className="w-4 h-4" />
      </motion.button>
    </div>
  );
}