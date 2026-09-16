import React from 'react';

export const KedaLogo = ({ className = "w-6 h-6", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="16" cy="16" r="14" fill="#3A5262" />
    <path
      d="M16 6l8.66 5v10L16 26l-8.66-5V11L16 6z"
      stroke="#B388FF"
      strokeWidth="2"
      fill="none"
    />
    <path d="M16 10v12M11 13l10 6M11 19l10-6" stroke="#B388FF" strokeWidth="1.8" />
  </svg>
);
