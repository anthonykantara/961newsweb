import React from 'react';
import { CreditCard, Wallet, Banknote, QrCode } from 'lucide-react';
import TopUpQRDialog from './TopUpQRDialog';

interface PaymentOptionsProps {
  selectedMethod: string;
  onSelect: (method: string) => void;
}

export default function PaymentOptions({ selectedMethod, onSelect }: PaymentOptionsProps) {
  const [showQR, setShowQR] = React.useState(false);

  return (
    <>
      <div className="border-t border-gray-100 mt-6 pt-6">
      <h3 className="text-lg font-medium mb-4">Payment Method</h3>
      <div className="space-y-3">
        <button
          onClick={() => onSelect('card')}
          className={`w-full flex items-center justify-between p-4 rounded-lg border transition-colors ${
            selectedMethod === 'card'
              ? 'border-[#FF0000] bg-[#FF0000]/5'
              : 'border-gray-200 hover:border-[#FF0000]/20 hover:bg-[#FF0000]/5'
          }`}
        >
          <div className="flex items-center gap-3">
            <CreditCard className="w-5 h-5 text-gray-600" />
            <span className="font-medium">Credit Card</span>
          </div>
          <div className="text-sm text-gray-500">Visa, Mastercard, Amex</div>
        </button>

        <button
          onClick={() => onSelect('wallet')}
          className={`w-full flex items-center justify-between p-4 rounded-lg border transition-colors ${
            selectedMethod === 'wallet'
              ? 'border-[#FF0000] bg-[#FF0000]/5'
              : 'border-gray-200 hover:border-[#FF0000]/20 hover:bg-[#FF0000]/5'
          }`}
        >
          <div className="flex items-center gap-3">
            <Wallet className="w-5 h-5 text-gray-600" />
            <span className="font-medium">961 Wallet</span>
            <div
              onClick={(e) => {
                e.stopPropagation();
                setShowQR(true);
              }}
              className="ml-2 px-3 py-1 text-sm bg-[#FF0000] text-white hover:bg-red-600 rounded-full transition-colors"
            >
              Top up
            </div>
          </div>
          <div className="text-sm text-gray-500">Balance: $0.00</div>
        </button>

        <button
          onClick={() => setShowQR(true)}
          className="w-full flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-[#FF0000]/20 hover:bg-[#FF0000]/5 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Banknote className="w-5 h-5 text-gray-600" />
            <span className="font-medium">Cash</span>
            <span className="text-sm text-gray-500 ml-2">Cash pickup or Agent top up</span>
          </div>
        </button>
      </div>
      </div>
      <TopUpQRDialog isOpen={showQR} onClose={() => setShowQR(false)} />
    </>
  );
}