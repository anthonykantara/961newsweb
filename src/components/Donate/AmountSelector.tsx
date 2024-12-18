import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface AmountSelectorProps {
  onAmountSelect: (amount: number) => void;
  selectedAmount: number;
}

const presetAmounts = [20, 100, 500];

export default function AmountSelector({ onAmountSelect, selectedAmount }: AmountSelectorProps) {
  const [isCustom, setIsCustom] = useState(false);
  const [customAmount, setCustomAmount] = useState('');

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(value);
    if (value) {
      onAmountSelect(parseInt(value, 10));
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {presetAmounts.map((amount) => (
          <motion.button
            key={amount}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setIsCustom(false);
              onAmountSelect(amount);
            }}
            className={`py-4 rounded-xl border-2 transition-colors ${
              selectedAmount === amount && !isCustom
                ? 'border-[#FF0000] bg-red-50'
                : 'border-gray-200 hover:border-[#FF0000]/20 hover:bg-red-50/50'
            }`}
          >
            <span className="text-2xl font-bold text-gray-900">${amount}</span>
          </motion.button>
        ))}
      </div>

      <div 
        className={`relative rounded-xl border-2 transition-colors ${
          isCustom ? 'border-[#FF0000] bg-red-50' : 'border-gray-200'
        }`}
        onClick={() => setIsCustom(true)}
      >
        <input
          type="text"
          placeholder="Custom Amount"
          value={customAmount}
          onChange={handleCustomAmountChange}
          onFocus={() => setIsCustom(true)}
          className="w-full px-4 py-4 bg-transparent text-2xl font-bold text-gray-900 placeholder-gray-400 focus:outline-none"
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <span className="text-2xl font-bold text-gray-900">$</span>
        </div>
      </div>
    </div>
  );
}