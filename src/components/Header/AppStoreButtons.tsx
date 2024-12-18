import React from 'react';

export default function AppStoreButtons() {
  return (
    <div className="flex items-center space-x-2">
      <a 
        href="https://apps.apple.com/app/961"
        target="_blank"
        rel="noopener noreferrer"
        className="h-[40px]"
      >
        <img 
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="Download on the App Store"
          className="h-full w-[135px] object-contain"
        />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=co.961.app"
        target="_blank"
        rel="noopener noreferrer" 
        className="h-[40px]"
      >
        <img 
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          alt="Get it on Google Play"
          className="h-full w-[155px] object-contain"
        />
      </a>
    </div>
  );
}