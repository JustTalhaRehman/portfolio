import React from 'react';

export const DatadogLogo = ({ className = "w-6 h-6", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="16" cy="16" r="14" fill="#632CA6" />
    <path
      d="M10 20.5c0-4 2.5-6.5 6-6.5 2.5 0 4.5 1.5 5 3.5v-7.5h2v12h-2v-1.5c-1 1-2.5 1.5-4 1.5-3.5 0-7-1.5-7-5.5zm7 2c2 0 4-1.5 4-3.5s-2-3.5-4-3.5-4 1.5-4 3.5 2 3.5 4 3.5z"
      fill="#FFFFFF"
    />
  </svg>
);
