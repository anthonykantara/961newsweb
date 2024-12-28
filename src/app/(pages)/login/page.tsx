"use client"

import React, { useState } from 'react';
import { User, Lock, QrCode } from 'lucide-react';
import Logo from '@/components/Logo';

export default function LoginPage() {
  const [showQR, setShowQR] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { username, password });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
        <div className="p-8">
          <div className="flex justify-center mb-8">
            <img src="/961-logo.png" alt="961" className="h-16" />
          </div>

          {showQR ? (
            <>
              <button
                onClick={() => setShowQR(false)}
                className="text-gray-600 hover:text-gray-900 transition-colors mb-6 flex items-center gap-1"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                Back to login
              </button>

              <div className="text-center">
                <div className="bg-gray-100 p-8 rounded-lg mb-6">
                  <div className="w-48 h-48 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
                    <QrCode className="w-12 h-12 text-gray-400" />
                  </div>
                </div>
                <p className="text-gray-600">
                  Scan this QR code with your 961 mobile app to log in instantly
                </p>
              </div>
            </>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF0000] transition-shadow"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF0000] transition-shadow"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF0000] text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowQR(true)}
                  className="text-[#FF0000] hover:text-red-600 transition-colors mb-4 block w-full"
                >
                  Log in with QR Code
                </button>
                <a
                  href="https://961.co/download"
                  className="text-[#FF0000] hover:text-red-600 transition-colors"
                >
                  Don't have an account? Get the app
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}