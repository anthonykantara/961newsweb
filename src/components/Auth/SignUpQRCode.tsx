import React from 'react';
import { QrCode } from 'lucide-react';

export default function SignUpQRCode() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-6">Download 961 News</h2>
      
      <div className="bg-gray-100 p-8 rounded-lg mb-6">
        <div className="w-48 h-48 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
          <QrCode className="w-12 h-12 text-gray-400" />
        </div>
      </div>
      
      <p className="text-gray-600 mb-6">
        Scan this QR code to download the 961 News app and create your account
      </p>
    </div>
  );
}