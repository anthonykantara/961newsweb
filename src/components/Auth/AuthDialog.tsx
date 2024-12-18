import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { X, User, Lock, ArrowRight, QrCode, ChevronLeft } from 'lucide-react';
import QRCodeLogin from './QRCodeLogin';
import SignUpQRCode from './SignUpQRCode';

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthDialog({ isOpen, onClose }: AuthDialogProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [showQRCode, setShowQRCode] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log('Authenticating...', { username, password });
    onClose();
  }, [username, password, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100]">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 relative z-[100]"
      >
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-8 pb-8">
          {showQRCode ? (
            isLogin ? (
              <>
                <button
                  onClick={() => setShowQRCode(false)}
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-6"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Back to login
                </button>
                <QRCodeLogin />
              </>
            ) : (
              <>
                <button
                  onClick={() => setShowQRCode(false)}
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-6"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Back
                </button>
                <SignUpQRCode />
              </>
            )
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-6 text-center">
                {isLogin ? 'Welcome Back!' : 'Create Account'}
              </h2>
              {isLogin ? (
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
                    className="w-full bg-[#FF0000] text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Sign In</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              ) : (
                <div className="text-center">
                  <p className="text-gray-600 mb-6">
                    Sign up is only available through our mobile app. Scan the QR code to get started.
                  </p>
                  <button
                    onClick={() => setShowQRCode(true)}
                    className="w-full bg-[#FF0000] text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Get the App</span>
                    <QrCode className="w-5 h-5" />
                  </button>
                </div>
              )}

              <div className="mt-6 text-center">
                {isLogin && (
                  <button
                    onClick={() => setShowQRCode(true)}
                    className="text-[#FF0000] hover:text-red-600 transition-colors mb-4 block w-full"
                  >
                    Log in with QR Code
                  </button>
                )}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-[#FF0000] hover:text-red-600 transition-colors"
                >
                  {isLogin ? "Don't have an account? Get the app" : 'Already have an account? Sign in'}
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}