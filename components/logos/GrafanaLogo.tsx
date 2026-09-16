import React from 'react';

export const GrafanaLogo = ({ className = "w-6 h-6", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M16 2.5C8.5 2.5 2.5 8.5 2.5 16s6 13.5 13.5 13.5 13.5-6 13.5-13.5S23.5 2.5 16 2.5zm5.8 7.5c1.2 1.4 2 3.1 2.2 5H18c-.2-1.8-1-3.5-2.2-5h6zm-7.6 0c-1.2 1.5-2 3.2-2.2 5H6c.2-1.9 1-3.6 2.2-5h6zm-2.2 7c.2 1.8 1 3.5 2.2 5H8.2c-1.2-1.4-2-3.1-2.2-5H12zm4 7c-1.5 0-2.8-.6-3.8-1.5 1-1 1.8-2.2 2.2-3.5h3.2c.4 1.3 1.2 2.5 2.2 3.5-1 .9-2.3 1.5-3.8 1.5zm1.8-5H14.2c-.2-.7-.3-1.3-.3-2s.1-1.3.3-2h3.6c.2.7.3 1.3.3 2s-.1 1.3-.3 2zm.4 5c1.2-1.5 2-3.2 2.2-5H26c-.2 1.9-1 3.6-2.2 5h-5.6z"
      fill="#F46800"
    />
  </svg>
);
