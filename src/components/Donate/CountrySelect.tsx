import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';

interface CountrySelectProps {
  value: string;
  onChange: (value: string) => void;
}

// Priority countries at the top
const priorityCountries = [
  { code: 'LB', name: 'Lebanon' },
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'FR', name: 'France' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'AE', name: 'United Arab Emirates' }
];

// Rest of the countries in alphabetical order
const otherCountries = [
  { code: 'AR', name: 'Argentina' },
  { code: 'AU', name: 'Australia' },
  { code: 'AT', name: 'Austria' },
  { code: 'BH', name: 'Bahrain' },
  { code: 'BE', name: 'Belgium' },
  { code: 'BR', name: 'Brazil' },
  { code: 'BG', name: 'Bulgaria' },
  { code: 'CN', name: 'China' },
  { code: 'HR', name: 'Croatia' },
  { code: 'CZ', name: 'Czech Republic' },
  { code: 'DK', name: 'Denmark' },
  { code: 'EG', name: 'Egypt' },
  { code: 'FI', name: 'Finland' },
  { code: 'DE', name: 'Germany' },
  { code: 'GR', name: 'Greece' },
  { code: 'HU', name: 'Hungary' },
  { code: 'IN', name: 'India' },
  { code: 'IE', name: 'Ireland' },
  { code: 'IL', name: 'Israel' },
  { code: 'IT', name: 'Italy' },
  { code: 'JO', name: 'Jordan' },
  { code: 'JP', name: 'Japan' },
  { code: 'KW', name: 'Kuwait' },
  { code: 'MX', name: 'Mexico' },
  { code: 'NL', name: 'Netherlands' },
  { code: 'NZ', name: 'New Zealand' },
  { code: 'NG', name: 'Nigeria' },
  { code: 'NO', name: 'Norway' },
  { code: 'OM', name: 'Oman' },
  { code: 'PL', name: 'Poland' },
  { code: 'PT', name: 'Portugal' },
  { code: 'QA', name: 'Qatar' },
  { code: 'RO', name: 'Romania' },
  { code: 'RU', name: 'Russia' },
  { code: 'SA', name: 'Saudi Arabia' },
  { code: 'RS', name: 'Serbia' },
  { code: 'SI', name: 'Slovenia' },
  { code: 'SK', name: 'Slovakia' },
  { code: 'KR', name: 'South Korea' },
  { code: 'ZA', name: 'South Africa' },
  { code: 'ES', name: 'Spain' },
  { code: 'SE', name: 'Sweden' },
  { code: 'CH', name: 'Switzerland' },
  { code: 'TR', name: 'Turkey' }
].sort((a, b) => a.name.localeCompare(b.name));

// Combine priority countries with other countries
const countries = [...priorityCountries, ...otherCountries];

export default function CountrySelect({ value, onChange }: CountrySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  const selectedCountry = countries.find(country => country.code === value);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF0000] transition-shadow text-left flex items-center justify-between"
      >
        <span className={selectedCountry ? 'text-gray-900' : 'text-gray-400'}>
          {selectedCountry ? selectedCountry.name : 'Select country'}
        </span>
        <ChevronDown className="w-5 h-5 text-gray-400" />
      </button>

      {isOpen && (
        <div className="fixed z-50 w-[calc(100vw-2rem)] md:w-[calc(100%-2rem)] max-w-[24rem] mt-1 bg-white rounded-lg shadow-lg border border-gray-200" style={{
          top: dropdownRef.current ? dropdownRef.current.getBoundingClientRect().bottom + window.scrollY + 4 : 0,
          left: dropdownRef.current ? dropdownRef.current.getBoundingClientRect().left : 0
        }}>
          <div className="p-2 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search countries..."
                className="w-full pl-9 pr-4 py-2 text-sm rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF0000] transition-shadow"
              />
            </div>
          </div>
          <div className="overflow-y-auto" style={{ maxHeight: 'min(400px, calc(100vh - 200px))' }}>
            {filteredCountries.map(country => (
              <button
                key={country.code}
                type="button"
                onClick={() => {
                  onChange(country.code);
                  setIsOpen(false);
                  setSearch('');
                }}
                className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                  country.code === value ? 'bg-red-50 text-[#FF0000]' : 'text-gray-700'
                }`}
              >
                {country.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}