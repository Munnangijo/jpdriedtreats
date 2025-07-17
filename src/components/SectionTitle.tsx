import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = false,
  light = false
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className={`font-display font-bold text-3xl md:text-4xl mb-4 ${light ? 'text-white' : 'text-gray-800'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-gray-200' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-primary-600 mt-4 ${center ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;