import React from 'react';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animate?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  animate = true
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={animate ? ref : undefined}
      id={id}
      className={`py-16 ${animate ? (inView ? 'animate-fade-in opacity-100' : 'opacity-0') : ''} ${className}`}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section;