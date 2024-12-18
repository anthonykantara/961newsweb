import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid3x3, User } from 'lucide-react';
import AppMenu from './AppMenu';
import LanguageSelector from './LanguageSelector';
import AppStoreButtons from './AppStoreButtons';
import Logo from '../Logo';
import TopHeader from './TopHeader';

export default function Header() {
  const [appMenuOpen, setAppMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({ code: 'en', name: 'English' });

  return (
    <>
      <TopHeader />
      <header className="bg-black text-white relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setAppMenuOpen(!appMenuOpen)}
                  className="hover:text-gray-300 transition-colors"
                >
                  <Grid3x3 className="w-5 h-5" />
                </button>
                <AppMenu
                  isOpen={appMenuOpen}
                  onClose={() => setAppMenuOpen(false)}
                />
              </div>
              <Logo />
              <div className="h-3 w-px bg-gray-700/50" />
              <Link to="/map" className="text-[15px] text-gray-300 hover:text-white transition-colors">News Map</Link>
              <div className="h-3 w-px bg-gray-700/50" />
              <Link to="/weather" className="text-[15px] text-gray-300 hover:text-white transition-colors">Weather</Link>
              <div className="h-3 w-px bg-gray-700/50" />
              <Link to="/sports" className="text-[15px] text-gray-300 hover:text-white transition-colors">Sports</Link>
            </div>
            
            {/* Right Section */}
            <div className="flex items-center space-x-3">
              <AppStoreButtons />
              <LanguageSelector
                selectedLanguage={selectedLanguage}
                onLanguageChange={setSelectedLanguage}
              />
              <div className="h-4 w-px bg-gray-700" />
              <Link
                to="/login"
                className="flex items-center space-x-2 hover:text-gray-300 transition-colors text-[15px]"
              >
                <User className="w-5 h-5" />
                <span>Login</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}