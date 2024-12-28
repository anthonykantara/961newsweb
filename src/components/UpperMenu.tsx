"use client"

import Link from 'next/link';
import { NewspaperIcon, ShoppingBagIcon, HomeIcon, User } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface QRDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

function QRDropdown({ isOpen, onClose }: QRDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg p-4 w-48 z-50"
    >
      <div className="text-center">
        <div className="bg-gray-100 p-4 rounded-lg mb-2">
          <div className="w-32 h-32 mx-auto bg-gray-200 rounded-lg" />
        </div>
        <p className="text-sm text-gray-600">Scan QR code to download the app</p>
      </div>
    </div>
  );
}

const menuItems = [
  { name: '961', icon: HomeIcon, to: 'https://961.co', fontSize: 'text-[16px]' },
  { name: 'News', icon: NewspaperIcon, to: '/', active: true, fontSize: 'text-[16px]' },
  { name: 'Deals', icon: ShoppingBagIcon, to: 'https://deals.961.co', fontSize: 'text-[16px]' },
];

export default function UpperMenu() {
  const [iosDropdownOpen, setIosDropdownOpen] = useState(false);
  const [androidDropdownOpen, setAndroidDropdownOpen] = useState(false);

  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 text-[13px]">
          <div className="flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.to}
                className={`flex items-center space-x-2 hover:text-gray-300 transition-colors ${item.fontSize} ${
                  item.active ? 'text-[#FF0000]' : ''
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}