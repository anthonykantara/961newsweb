import React, { useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface Language {
  code: string;
  name: string;
}

interface LanguageDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLanguage: Language;
  onSelectLanguage: (language: Language) => void;
}

const languages: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' },
  { code: 'fr', name: 'Français' },
];

export function LanguageDropdown({ isOpen, onClose, selectedLanguage, onSelectLanguage }: LanguageDropdownProps) {
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
      className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg py-2 w-32 z-50"
    >
      {languages.map((language) => (
        <button
          key={language.code}
          onClick={() => {
            onSelectLanguage(language);
            onClose();
          }}
          className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors ${
            language.code === selectedLanguage.code
              ? 'text-[#FF0000] font-medium'
              : 'text-gray-700'
          }`}
        >
          {language.name}
        </button>
      ))}
    </div>
  );
}