import React from 'react';
import { CreditCard, Mail, User, ChevronLeft } from 'lucide-react';
import CountrySelect from './CountrySelect';

interface BillingFormProps {
  onSubmit: (data: any) => void;
  onBack: () => void;
}

export default function BillingForm({ onSubmit, onBack }: BillingFormProps) {
  const [country, setCountry] = React.useState('LB');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onSubmit({
      // Form data
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
      >
        <ChevronLeft className="w-5 h-5" />
        <span>Back</span>
      </button>

      <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            required
            className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF0000] transition-shadow"
            placeholder="Full name"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            required
            className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF0000] transition-shadow"
            placeholder="Email address"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Card Details
        </label>
        <div className="relative">
          <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            required
            className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF0000] transition-shadow"
            placeholder="Card number"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expiry Date
            </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF0000] transition-shadow"
            placeholder="MM/YY"
          />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              CVC
            </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF0000] transition-shadow"
            placeholder="CVC"
          />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Country
        </label>
        <CountrySelect value={country} onChange={setCountry} />
      </div>

      <button
        type="submit"
        className="w-full bg-[#FF0000] text-white py-4 rounded-lg font-medium hover:bg-red-600 transition-colors"
      >
        Complete Donation
      </button>
      </div>
    </form>
  );
}