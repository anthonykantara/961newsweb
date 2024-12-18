import React from 'react';
import { ChevronDown } from 'lucide-react';

interface Language {
  code: string;
  name: string;
}

interface LanguageSelectorProps {
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const languages: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' },
  { code: 'fr', name: 'Français' }
];

export default function LanguageSelector({ selectedLanguage, onLanguageChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button 
        className="flex items-center space-x-1.5 hover:text-gray-300 transition-colors text-[15px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedLanguage.name}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg py-2 w-32 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                onLanguageChange(language);
                setIsOpen(false);
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
      )}
    </div>
  );
}