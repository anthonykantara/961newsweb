import React, { useState } from 'react';
import DonateHeader from '../components/Donate/DonateHeader';
import AmountSelector from '../components/Donate/AmountSelector';
import RecurringToggle from '../components/Donate/RecurringToggle';
import BillingForm from '../components/Donate/BillingForm';

export default function DonatePage() {
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

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          {step === 1 ? (
            <div className="bg-white rounded-2xl shadow-sm p-8">
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
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-sm p-8">
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
            </div>
          )}

          <p className="text-center text-sm text-gray-500 mt-8">
            By donating, you agree to our Terms of Service and Privacy Policy.
            Donations are processed securely through Stripe.
          </p>
        </div>
      </div>
    </div>
  );
}