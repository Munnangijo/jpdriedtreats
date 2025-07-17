import React from 'react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  text: string;
  to: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  text, 
  to, 
  variant = 'primary',
  className = ''
}) => {
  const baseStyles = "inline-block font-medium rounded-md transition-all duration-300 text-center";
  
  const variantStyles = {
    primary: "bg-primary-600 hover:bg-primary-700 text-white px-6 py-3",
    secondary: "bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-3",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 py-[10px]"
  };
  
  return (
    <Link
      to={to}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {text}
    </Link>
  );
};

export default CTAButton;