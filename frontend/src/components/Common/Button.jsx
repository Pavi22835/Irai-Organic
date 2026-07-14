import React from 'react';

function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = "px-8 py-4 rounded-full font-semibold transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 text-sm md:text-base";
  const variants = {
    primary: "bg-primary-green text-white hover:bg-dark-green hover:-translate-y-0.5 shadow-md hover:shadow-lg",
    secondary: "border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white hover:-translate-y-0.5",
    outline: "border-2 border-white/30 text-white hover:bg-white hover:text-dark-green backdrop-blur hover:-translate-y-0.5",
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
