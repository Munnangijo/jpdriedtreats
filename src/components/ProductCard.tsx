import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Product } from '../types/types';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref} 
      className={`group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <p className="font-medium">{product.shortDescription}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display font-semibold text-xl mb-2 text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.shortDescription}</p>
        <Link 
          to="/contact" 
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
        >
          Get a Quote <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;