import React from 'react';

export const IstioLogo = ({ className = "w-6 h-6", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M4 27.5L16 29.5V23.5L4 27.5Z" fill="#466BB0" />
    <path d="M4 25.5L16 21.5V11L4 25.5Z" fill="#466BB0" />
    <path d="M16 21.5L28 25.5L16 2.5V21.5Z" fill="#466BB0" />
    <path d="M16 29.5L28 27.5L16 23.5V29.5Z" fill="#466BB0" />
  </svg>
);
