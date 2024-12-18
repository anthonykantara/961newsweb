import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center">
      <img 
        src="/961-dot.png" 
        alt=""
        className="w-2 h-2 mr-1"
      />
      <span className="text-[22px] font-bold tracking-wide">961</span>
    </div>
  );
}