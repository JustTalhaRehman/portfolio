import React from 'react';

export const ArgoCdLogo = ({ className = "w-6 h-6", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M16 2.5C9.65 2.5 4.5 7.65 4.5 14c0 4.14 2.2 7.77 5.5 9.8v3.2c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5v-2.5h4v2.5c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5v-3.2c3.3-2.03 5.5-5.66 5.5-9.8 0-6.35-5.15-11.5-11.5-11.5z"
      fill="#EF6B48"
    />
    <circle cx="11.5" cy="13.5" r="2.2" fill="#FFFFFF" />
    <circle cx="20.5" cy="13.5" r="2.2" fill="#FFFFFF" />
    <circle cx="11.5" cy="13.5" r="1.1" fill="#24292E" />
    <circle cx="20.5" cy="13.5" r="1.1" fill="#24292E" />
    <path
      d="M14 18c.5 1 1.5 1.5 2 1.5s1.5-.5 2-1.5"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
