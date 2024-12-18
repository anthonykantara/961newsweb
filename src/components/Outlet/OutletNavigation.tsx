import React from 'react';

interface OutletNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: 'lebanon', name: 'Lebanon' },
  { id: 'politics', name: 'Politics' },
  { id: 'business', name: 'Business' },
  { id: 'technology', name: 'Technology' },
  { id: 'middle-east', name: 'Middle East' },
  { id: 'world', name: 'World' },
  { id: 'sports', name: 'Sports' }
];

export default function OutletNavigation({ activeSection, onSectionChange }: OutletNavigationProps) {
  return (
    <div className="flex gap-4 border-b border-gray-200 px-6 overflow-x-auto no-scrollbar">
      {sections.map(section => (
        <button
          key={section.id}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
            activeSection === section.id ? 'bg-[#FF0000] text-white' : 'text-gray-600 hover:text-[#FF0000]'
          }`}
          onClick={() => onSectionChange(section.id)}
        >
          {section.name}
        </button>
      ))}
    </div>
  );
}