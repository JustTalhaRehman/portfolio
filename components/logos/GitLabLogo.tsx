import React from 'react';

export const GitLabLogo = ({ className = "w-6 h-6", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M16 26.5l5.2-16H10.8L16 26.5z" fill="#E24329" />
    <path d="M16 26.5L10.8 10.5H3.5L16 26.5z" fill="#FC6D26" />
    <path d="M3.5 10.5l-1.6 4.9c-.3.8 0 1.7.7 2.2L16 26.5 3.5 10.5z" fill="#FCA326" />
    <path d="M3.5 10.5h7.3L7.7 2.3c-.3-.9-1.5-.9-1.8 0L3.5 10.5z" fill="#E24329" />
    <path d="M16 26.5l5.2-16h7.3L16 26.5z" fill="#FC6D26" />
    <path d="M28.5 10.5l1.6 4.9c.3.8 0 1.7-.7 2.2L16 26.5 28.5 10.5z" fill="#FCA326" />
    <path d="M28.5 10.5h-7.3l3.1-8.2c.3-.9 1.5-.9 1.8 0l2.4 8.2z" fill="#E24329" />
  </svg>
);
