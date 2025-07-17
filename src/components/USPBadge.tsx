import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface USPBadgeProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const USPBadge: React.FC<USPBadgeProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="bg-primary-50 p-3 rounded-full mb-4 text-primary-600">
        <Icon size={24} />
      </div>
      <h3 className="font-display font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default USPBadge;