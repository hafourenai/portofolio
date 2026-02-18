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
      <img 
        src="/images/bg.png" 
        alt="Logo" 
        className="w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  );
};

export default Logo;