import React from 'react';

export const PrometheusLogo = ({ className = "w-6 h-6", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="16" cy="16" r="14" fill="#E6522C" />
    <path
      d="M16 6c1.5 3 4 5 4 8 0 3-1.8 5-4 5s-4-2-4-5c0-3 2.5-5 4-8z"
      fill="#FFFFFF"
    />
    <path
      d="M16 11c.8 1.5 2 2.5 2 4 0 1.5-.9 2.5-2 2.5s-2-1-2-2.5c0-1.5 1.2-2.5 2-4z"
      fill="#E6522C"
    />
    <path d="M8 22h16v3H8z" fill="#FFFFFF" />
  </svg>
);
