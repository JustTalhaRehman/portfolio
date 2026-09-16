import React from 'react';

export const GitHubActionsLogo = ({ className = "w-6 h-6", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="16" cy="16" r="14" fill="#2088FF" />
    <path
      d="M13.5 9l8 7-8 7V9z"
      fill="#FFFFFF"
    />
    <circle cx="10" cy="16" r="2.5" fill="#FFFFFF" />
  </svg>
);
