"use client"

import { useState } from 'react';
import { LayoutGrid, ChevronDown, User } from 'lucide-react';
import Link from 'next/link';
import AppDropdown from './AppDropdown';
import { LanguageDropdown } from './LanguageDropdown';
import Logo from './Logo';
import Image from 'next/image';
import { QRDropdown } from './QRDropdown';

export default function Header() {
  const [appDropdownOpen, setAppDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({ code: 'en', name: 'English' });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setAppDropdownOpen(!appDropdownOpen)}
                className="hover:text-gray-300 transition-colors"
              >
                {/* <LayoutGrid className="w-6 h-6" /> */}
                <Image className="w-6 h-6 filter-white-svg" height={6} width={6} src={'/apps.svg'} alt={'grid-menu'} />
              </button>
              <AppDropdown
                isOpen={appDropdownOpen}
                onClose={() => setAppDropdownOpen(false)}
              />
            </div>
            <Logo />
            <div className="h-3 w-px bg-gray-300/80 mx-1" />
            <Link href="/map" className="text-[15px] text-gray-300 hover:text-white transition-colors">News Map</Link>
            <div className="h-3 w-px bg-gray-300/80 mx-1" />
            <Link href="/life" className="text-[15px] text-gray-300 hover:text-white transition-colors">Life</Link>
            <div className="h-3 w-px bg-gray-300/80 mx-1" />
            <Link href="/weather" className="text-[15px] text-gray-300 hover:text-white transition-colors">Weather</Link>
            <div className="h-3 w-px bg-gray-300/80 mx-1" />
            <Link href="/sports" className="text-[15px] text-gray-300 hover:text-white transition-colors">Sports</Link>
          </div>

          <div className="flex items-center space-x-5">
            <div className="relative flex items-center space-x-[1px]">
              <button className="h-[40px]" onClick={toggleDropdown}>
                <img
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  className="h-full object-contain"
                />
              </button>
              <div className="h-[40px] w-[1px]" />
              <QRDropdown isOpen={isDropdownOpen} onClose={closeDropdown} />
              <button className="h-[40px]">
                <img
                  src="/google-play-badge.png"
                  alt="Get it on Google Play"
                  className="h-full object-contain"
                />
              </button>
            </div>
            <div className="relative">
              <button
                className="flex items-center space-x-1.5 hover:text-gray-300 transition-colors text-[15px]"
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
              >
                <span>{selectedLanguage.name}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <LanguageDropdown
                isOpen={languageDropdownOpen}
                onClose={() => setLanguageDropdownOpen(false)}
                selectedLanguage={selectedLanguage}
                onSelectLanguage={setSelectedLanguage}
              />
            </div>
            <div className="h-4 w-px bg-gray-700" />
            <div className="flex items-center">
              <button
                onClick={() => { }}
                className="flex items-center space-x-2 hover:text-gray-300 transition-colors text-[15px]"
              >
                <User className="w-5 h-5" />
                <span className="text-[15px]">Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}