import React from 'react';

export const KyvernoLogo = ({ className = "w-6 h-6", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M16 3L5 7v9c0 7.2 4.7 13.9 11 15.5 6.3-1.6 11-8.3 11-15.5V7L16 3z"
      fill="#1A53F0"
    />
    <path
      d="M16 6.5l8 2.9v6.6c0 5.4-3.4 10.4-8 11.8-4.6-1.4-8-6.4-8-11.8V9.4l8-2.9z"
      fill="#2E6BF6"
    />
    <path
      d="M16 11l4.5 4.5h-9L16 11zm0 10l-4.5-4.5h9L16 21z"
      fill="#FFFFFF"
    />
  </svg>
);
