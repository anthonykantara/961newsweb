import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Home, Newspaper, ShoppingBag, ShoppingCart } from 'lucide-react';

interface AppDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const apps = [
  { name: 'Home', icon: Home, to: 'https://961.co', description: 'Your gateway to Lebanon' },
  { name: 'News', icon: Newspaper, to: '/', description: 'Latest updates from Lebanon', active: true },
  { name: 'Deals', icon: ShoppingBag, to: 'https://deals.961.co', description: 'Exclusive offers and discounts' },
  { name: 'Merch', icon: ShoppingCart, to: 'https://merch.961.co', description: 'Official 961 merchandise' }
];

export default function AppDropdown({ isOpen, onClose }: AppDropdownProps) {
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
      className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl p-4 w-72 z-50"
    >
      <div className="grid gap-2">
        {apps.map((app) => (
          <Link
            key={app.name}
            href={app.to}
            className={`flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors ${
              app.active ? 'bg-red-50' : ''
            }`}
          >
            <div className={`p-2 rounded-lg ${app.active ? 'bg-[#FF0000]' : 'bg-gray-100'}`}>
              <app.icon className={`w-5 h-5 ${app.active ? 'text-white' : 'text-gray-600'}`} />
            </div>
            <div>
              <div className="font-medium text-gray-900">{app.name}</div>
              <div className="text-sm text-gray-500">{app.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}