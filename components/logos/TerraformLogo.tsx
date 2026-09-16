import React from 'react';

export const TerraformLogo = ({ className = "w-6 h-6", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12.92 10.994V3.68l6.34 3.657v7.314l-6.34-3.657z" fill="#7B42BC" />
    <path d="M12.92 18.665v-7.314l-6.34 3.657v7.314l6.34-3.657z" fill="#5C4EE5" />
    <path d="M19.617 18.665v-7.314l6.34 3.657v7.314l-6.34-3.657z" fill="#00BC7F" />
    <path d="M12.92 26.335v-7.314l6.34 3.657v7.314l-6.34-3.657z" fill="#844FBA" />
  </svg>
);
