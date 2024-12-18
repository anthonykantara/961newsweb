import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import DonateHeader from './DonateHeader';
import AmountSelector from './AmountSelector';
import RecurringToggle from './RecurringToggle';
import BillingForm from './BillingForm';

interface DonateDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonateDialog({ isOpen, onClose }: DonateDialogProps) {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState(100);
  const [isRecurring, setIsRecurring] = useState(true);

  const handleNext = () => {
    setStep(2);
  };

  const handleDonate = (billingDetails: any) => {
    console.log('Processing donation:', {
      amount,
      isRecurring,
      billingDetails
    });
  };

  const handleClose = () => {
    onClose();
    // Reset state after animation completes
    setTimeout(() => {
      setStep(1);
      setAmount(100);
      setIsRecurring(true);
    }, 200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-xl mx-4 bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8">
              {step === 1 ? (
                <>
                  <DonateHeader />
                  
                  <div className="space-y-8">
                    <AmountSelector
                      selectedAmount={amount}
                      onAmountSelect={setAmount}
                    />

                    <div className="h-px bg-gray-100" />

                    <RecurringToggle
                      isRecurring={isRecurring}
                      onToggle={() => setIsRecurring(!isRecurring)}
                    />

                    <button
                      onClick={handleNext}
                      className="w-full bg-[#FF0000] text-white py-4 rounded-lg font-medium hover:bg-red-600 transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2">Complete your donation</h2>
                    <p className="text-gray-600">
                      You're donating ${amount}{isRecurring ? ' monthly' : ''}
                    </p>
                  </div>
                  
                  <BillingForm 
                    onSubmit={handleDonate}
                    onBack={() => setStep(1)}
                  />
                </>
              )}
            </div>

            <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
              <p className="text-center text-sm text-gray-500">
                By donating, you agree to our Terms of Service and Privacy Policy.
                Donations are processed securely through Stripe.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}