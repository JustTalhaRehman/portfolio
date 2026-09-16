import React from 'react';

export const OpenTofuLogo = ({ className = "w-6 h-6", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="32" height="32" rx="6" fill="#FFDA55" />
    <path
      d="M16 6l9 5.2v10.4L16 26.8 7 21.6V11.2L16 6z"
      fill="#1A1A1A"
    />
    <path
      d="M16 10l5.5 3.2v6.4L16 22.8l-5.5-3.2v-6.4L16 10z"
      fill="#FFDA55"
    />
    <circle cx="16" cy="16.4" r="2.5" fill="#1A1A1A" />
  </svg>
);
