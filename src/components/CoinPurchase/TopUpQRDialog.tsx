import React from 'react';
import { motion } from 'framer-motion';
import { X, QrCode } from 'lucide-react';

interface TopUpQRDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TopUpQRDialog({ isOpen, onClose }: TopUpQRDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[60]">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 relative z-[60]"
      >
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-8 pb-8 text-center">
          <div className="bg-gray-100 p-8 rounded-lg mb-6">
            <div className="w-48 h-48 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
              <QrCode className="w-12 h-12 text-gray-400" />
            </div>
          </div>
          
          <p className="text-gray-600">
            Top up your wallet by requesting a cash pick up or find an agent
          </p>
          <p className="text-gray-600 mt-2">
            Only available in-app
          </p>
        </div>
      </motion.div>
    </div>
  );
}