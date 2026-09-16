import React from 'react';

export const HelmLogo = ({ className = "w-6 h-6", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="16" cy="16" r="14" fill="#0F1689" />
    <path
      d="M16 7v18M7 16h18M9.5 9.5l13 13M9.5 22.5l13-13"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="16" cy="16" r="6" stroke="#FFFFFF" strokeWidth="2" fill="#0F1689" />
    <circle cx="16" cy="16" r="2.5" fill="#FFFFFF" />
  </svg>
);
