import React from 'react';

interface CoinIconProps {
  className?: string;
}

export default function CoinIcon({ className = "w-4 h-4" }: CoinIconProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="11" fill="#FFD700" />
      <circle cx="12" cy="12" r="9" fill="#FFA500" />
      <path
        d="M12 4L14.5 9.5H20L15.5 13L17.5 19L12 15.5L6.5 19L8.5 13L4 9.5H9.5L12 4Z"
        fill="#FFD700"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}