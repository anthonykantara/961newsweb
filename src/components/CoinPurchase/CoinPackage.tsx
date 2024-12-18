import React from 'react';
import { motion } from 'framer-motion';
import CoinIcon from '../Icons/CoinIcon';

interface CoinPackageProps {
  price: number;
  coins: number;
  bonus: number;
  onSelect: () => void;
}

export default function CoinPackage({ price, coins, bonus, onSelect }: CoinPackageProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      className="w-full p-4 rounded-xl border border-gray-200 hover:border-[#FF0000]/20 hover:bg-[#FF0000]/5 hover:shadow-md transition-all text-center group focus:border-[#FF0000] focus:bg-[#FF0000]/5 focus:outline-none"
    >
      <div className="flex justify-center mb-3">
        <CoinIcon className="w-12 h-12" />
      </div>
      <div className="text-3xl font-bold mb-1">
        {coins}
        {bonus > 0 && (
          <span className="text-[#FF0000]"> +{bonus}</span>
        )}
      </div>
      
      <div className="mt-2">
        <span className="text-xl text-gray-700">${price}</span>
        <span className="text-xs text-gray-500 block mt-1">
          ${(price / (coins + bonus)).toFixed(2)}/coin
        </span>
      </div>
    </motion.button>
  );
}