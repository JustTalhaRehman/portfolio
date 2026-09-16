import React from 'react';

export const KubernetesLogo = ({ className = "w-6 h-6", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M16 2.5a2.5 2.5 0 00-1.25.335l-9.5 5.5A2.5 2.5 0 004 10.5v11a2.5 2.5 0 001.25 2.165l9.5 5.5a2.5 2.5 0 002.5 0l9.5-5.5A2.5 2.5 0 0028 21.5v-11a2.5 2.5 0 00-1.25-2.165l-9.5-5.5A2.5 2.5 0 0016 2.5z"
      fill="#326CE5"
    />
    <path
      d="M16 7.2l4.8 2.8v5.6L16 18.4l-4.8-2.8v-5.6L16 7.2z"
      stroke="#FFFFFF"
      strokeWidth="1.2"
      fill="none"
    />
    <path
      d="M16 9v4m-3.46 2l3.46-2 3.46 2m0 4l-3.46-2-3.46 2"
      stroke="#FFFFFF"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="16" cy="13" r="1.5" fill="#FFFFFF" />
    <circle cx="12.5" cy="15" r="1.5" fill="#FFFFFF" />
    <circle cx="19.5" cy="15" r="1.5" fill="#FFFFFF" />
    <circle cx="12.5" cy="19" r="1.5" fill="#FFFFFF" />
    <circle cx="19.5" cy="19" r="1.5" fill="#FFFFFF" />
    <circle cx="16" cy="21" r="1.5" fill="#FFFFFF" />
    <circle cx="16" cy="7.2" r="1.2" fill="#FFFFFF" />
  </svg>
);
