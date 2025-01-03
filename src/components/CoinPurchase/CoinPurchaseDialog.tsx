import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowLeft, ChevronLeft } from 'lucide-react';
import CoinPackage from './CoinPackage';
import PaymentOptions from './PaymentOptions';
import CreditCardForm from './CreditCardForm';
import QRCodeLogin from '../Auth/QRCodeLogin';

interface CoinPurchaseDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const packages = [
  { price: 1, coins: 10, bonus: 0 },
  { price: 5, coins: 50, bonus: 5 },
  { price: 10, coins: 100, bonus: 20 },
  { price: 25, coins: 250, bonus: 75 },
  { price: 50, coins: 500, bonus: 200 },
  { price: 100, coins: 1000, bonus: 500 }
];

export default function CoinPurchaseDialog({ isOpen, onClose }: CoinPurchaseDialogProps) {
  const [selectedPackage, setSelectedPackage] = useState<null | { coins: number; price: number }>(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);
  
  const resetState = () => {
    setSelectedPackage(null);
    setPaymentMethod('');
    setShowQRCode(false);
  };
  
  const handleClose = () => {
    onClose();
    resetState();
  };

  if (!isOpen) return null;

  const handlePurchase = (totalCoins: number, price: number) => {
    setSelectedPackage({ coins: totalCoins, price });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/50" onClick={handleClose} />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-xl shadow-xl max-w-3xl w-full mx-4 relative z-50 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            {!showQRCode && (
              <button
                onClick={() => {
                  if (paymentMethod === 'card') {
                    setPaymentMethod('');
                  } else if (selectedPackage) {
                    setSelectedPackage(null);
                    setPaymentMethod('');
                  } else {
                    handleClose();
                  }
                }}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            <h2 className="text-xl font-bold">
              {showQRCode ? 'Download 961 App' : selectedPackage ? 'Payment Details' : 'Choose a coin package'}
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6">
          {showQRCode ? (
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Download the 961 News app to top up your wallet or pay with cash
              </p>
              <QRCodeLogin />
            </div>
          ) : selectedPackage ? (
            <>
              <div className="text-center mb-6">
                <p className="text-gray-600">
                  {selectedPackage.coins} coins package for ${selectedPackage.price}
                </p>
              </div>
              {paymentMethod === 'card' ? (
                <CreditCardForm 
                  onSubmit={handleClose}
                  onBack={() => setPaymentMethod('')}
                />
              ) : (
                <PaymentOptions
                  selectedMethod={paymentMethod}
                  onSelect={setPaymentMethod}
                />
              )}
            </>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {packages.map(pkg => (
                <CoinPackage
                  key={pkg.price}
                  price={pkg.price}
                  coins={pkg.coins}
                  bonus={pkg.bonus}
                  onSelect={() => handlePurchase(pkg.coins + pkg.bonus, pkg.price)}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}