import React from 'react';

export default function MedifastLogo() {
  return (
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg"
    >
      {/* Pill Body */}
      <rect x="40" y="20" width="120" height="80" rx="40" fill="#EF4444" />
      <rect x="40" y="100" width="120" height="80" rx="40" fill="#3B82F6" />
      
      {/* Glossy Overlay */}
      <defs>
        <linearGradient id="gloss" x1="100" y1="20" x2="100" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.4" />
          <stop offset="0.5" stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="black" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect x="40" y="20" width="120" height="160" rx="40" fill="url(#gloss)" />

      {/* Letters */}
      <text 
        x="100" 
        y="75" 
        textAnchor="middle" 
        fill="white" 
        style={{ 
          fontFamily: 'system-ui, sans-serif', 
          fontWeight: 800, 
          fontSize: '60px',
          letterSpacing: '-2px'
        }}
      >
        m
      </text>
      <text 
        x="100" 
        y="155" 
        textAnchor="middle" 
        fill="white" 
        style={{ 
          fontFamily: 'system-ui, sans-serif', 
          fontWeight: 800, 
          fontSize: '60px',
          letterSpacing: '-2px'
        }}
      >
        F
      </text>

      {/* Speed lines like the logo */}
      <g stroke="white" strokeWidth="6" strokeLinecap="round" opacity="0.6">
        <line x1="10" y1="60" x2="35" y2="60" />
        <line x1="0" y1="80" x2="30" y2="80" />
        <line x1="5" y1="100" x2="35" y2="100" />
        <line x1="15" y1="120" x2="30" y2="120" />
      </g>
    </svg>
  );
}
