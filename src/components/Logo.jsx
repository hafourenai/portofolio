import React from 'react';

const Logo = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10", 
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative group`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle with gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D9FF" />
            <stop offset="100%" stopColor="#FF006E" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Outer ring */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          opacity="0.3"
          className="animate-pulse"
        />
        
        {/* Letter A - Geometric design */}
        <g filter="url(#glow)">
          {/* Main triangle shape */}
          <path
            d="M 50 20 L 75 70 L 60 70 L 50 50 L 40 70 L 25 70 Z"
            fill="url(#logoGradient)"
            className="transition-all duration-300 group-hover:opacity-90"
          />
          
          {/* Cross bar */}
          <rect
            x="35"
            y="45"
            width="30"
            height="4"
            fill="url(#logoGradient)"
            className="transition-all duration-300 group-hover:opacity-90"
          />
          
          {/* Tech dots */}
          <circle cx="50" cy="30" r="2" fill="#00D9FF" className="animate-pulse" />
          <circle cx="35" cy="60" r="1.5" fill="#FF006E" className="animate-pulse delay-75" />
          <circle cx="65" cy="60" r="1.5" fill="#FF006E" className="animate-pulse delay-150" />
        </g>
      </svg>
    </div>
  );
};

export default Logo;