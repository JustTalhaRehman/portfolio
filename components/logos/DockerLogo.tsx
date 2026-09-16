import React from 'react';

export const DockerLogo = ({ className = "w-6 h-6", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M29.8 14.5c-.5-.4-1.6-.7-2.7-.4-.2-.8-.7-1.5-1.4-2l-.7-.4-.4.7c-.5.8-.6 1.8-.4 2.7-.8.5-2.2.5-3.3.1l-.5-.2-.3.5c-.9 1.7-2.3 2.9-4.2 3.6H3.5C3.2 19 3 19.3 3 19.7c.6 4.7 4.2 8.3 9.6 8.3 8.3 0 13.5-5.3 14.5-11.8.8-.1 2.3-.5 3-2.1.2-.5.1-1-.3-1.3v1.7z"
      fill="#2496ED"
    />
    <rect x="8.5" y="15.8" width="2.6" height="2.2" rx=".3" fill="#2496ED" />
    <rect x="11.8" y="15.8" width="2.6" height="2.2" rx=".3" fill="#2496ED" />
    <rect x="15.1" y="15.8" width="2.6" height="2.2" rx=".3" fill="#2496ED" />
    <rect x="11.8" y="13.1" width="2.6" height="2.2" rx=".3" fill="#2496ED" />
    <rect x="15.1" y="13.1" width="2.6" height="2.2" rx=".3" fill="#2496ED" />
    <rect x="8.5" y="13.1" width="2.6" height="2.2" rx=".3" fill="#2496ED" />
    <rect x="11.8" y="10.4" width="2.6" height="2.2" rx=".3" fill="#2496ED" />
  </svg>
);
