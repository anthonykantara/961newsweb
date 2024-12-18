import React, { useRef, useEffect } from 'react';
import { 
  Link2, 
  Facebook, 
  Instagram, 
  MessageCircle, 
  Twitter, 
  Send,
  X
} from 'lucide-react';

interface ShareDialogProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

const shareOptions = [
  { icon: Link2, label: 'Copy Link', action: 'copy' },
  { icon: Facebook, label: 'Facebook', action: 'facebook' },
  { icon: Instagram, label: 'Instagram', action: 'instagram' },
  { icon: MessageCircle, label: 'WhatsApp', action: 'whatsapp' },
  { icon: Twitter, label: 'X (Twitter)', action: 'twitter' },
  { icon: Send, label: 'Telegram', action: 'telegram' }
];

export default function ShareDialog({ isOpen, onClose, url }: ShareDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleShare = async (action: string) => {
    switch (action) {
      case 'copy':
        await navigator.clipboard.writeText(url);
        // You could add a toast notification here
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'telegram':
        window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}`, '_blank');
        break;
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div 
        ref={dialogRef}
        className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden"
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold">Share</h3>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-3 gap-4">
            {shareOptions.map((option) => (
              <button
                key={option.label}
                onClick={() => handleShare(option.action)}
                className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                  <option.icon className="w-6 h-6 text-gray-700" />
                </div>
                <span className="text-sm text-gray-600">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}