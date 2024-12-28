"use client"

import { useRef, useEffect } from 'react';

interface QRDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QRDropdown({ isOpen, onClose }: QRDropdownProps) {
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