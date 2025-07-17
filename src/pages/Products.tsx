import React from 'react';
import { 
  LeafyGreen, 
  Sparkles, 
  Factory, 
  PackagePlus, 
  Map, 
  Clock 
} from 'lucide-react';
import SEO from '../components/SEO';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import CTAButton from '../components/CTAButton';
import { products } from '../data/products';

const Products: React.FC = () => {
  return (
    <>
      <SEO title="Our Products" />
      
      {/* Header Section */}
      <section 
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.pexels.com/photos/3209021/pexels-photo-3209021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Our Premium Dehydrated Powders
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Explore our range of high-quality dehydrated vegetable and fruit powders for your food processing, nutraceutical, and hospitality needs.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,288L48,277.3C96,267,192,245,288,224C384,203,480,181,576,181.3C672,181,768,203,864,224C960,245,1056,267,1152,261.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Products Gallery */}
      <Section>
        <SectionTitle 
          title="Our Product Range" 
          subtitle="Premium quality dehydrated powders for various applications"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <CTAButton text="Contact Us for Custom Solutions" to="/contact" className="text-lg" />
        </div>
      </Section>
      
      {/* Product Applications */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-bold text-3xl mb-6 text-gray-800">
              Applications & <span className="text-primary-600">Uses</span>
            </h2>
            <p className="text-gray-600 mb-6">
            JP Dried Treats’ dehydrated vegetable and fruit powders are packed with nutrition, shelf-stable, and easy to use—making them ideal for a wide range of industries and innovations.            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-display font-semibold text-lg mb-2 text-gray-800">Food Processing</h3>
                <ul className="text-gray-600 space-y-1">
                  
                  <li>• Soups, sauces, and gravies</li>
                  <li>• Ready-to-eat meals </li>
                  <li>• Snack seasonings</li>
                  <li>• Bakery Products</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-display font-semibold text-lg mb-2 text-gray-800">Nutraceuticals</h3>
                <ul className="text-gray-600 space-y-1">
                  
                  <li>• Nutritional supplements</li>
                  <li>• Herbal and wellness drinks</li>
                  <li>• Functional foods</li>
                  <li>• Sports nutrition</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-display font-semibold text-lg mb-2 text-gray-800">Hospitality</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Restaurant kitchens</li>
                  <li>• Catering services</li>
                  <li>• Institutional dining</li>
                  <li>• Hotel F&B operations</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-display font-semibold text-lg mb-2 text-gray-800">Other Industries</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Natural colorants</li>
                  <li>• Pet food manufacturing</li>
                  <li>• Educational institutions</li>
                  <li>• Research applications</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="products-applications.jpg" 
              alt="Product applications" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </Section>
      
      {/* USP Section */}
      <Section>
        <SectionTitle 
          title="Our Unique Selling Points" 
          subtitle="What makes our dehydrated powders stand out from the competition"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-primary-50 p-3 rounded-full mr-3 text-primary-600">
                <LeafyGreen size={24} />
              </div>
              <h3 className="font-display font-semibold text-xl">100% Natural</h3>
            </div>
            <p className="text-gray-600">
              Our powders are made from 100% natural, organic, non-GMO vegetables and fruits with no artificial additives, preservatives, or fillers.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-primary-50 p-3 rounded-full mr-3 text-primary-600">
                <Sparkles size={24} />
              </div>
              <h3 className="font-display font-semibold text-xl">Nutritional Retention</h3>
            </div>
            <p className="text-gray-600">
              Our advanced dehydration technology preserves nutrients, colors, and flavors, resulting in powders with high nutritional value.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-primary-50 p-3 rounded-full mr-3 text-primary-600">
                <Factory size={24} />
              </div>
              <h3 className="font-display font-semibold text-xl">Hygienic Processing</h3>
            </div>
            <p className="text-gray-600">
              All products are processed in our clean facility using food-grade SS316 equipment with strict quality control measures.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-primary-50 p-3 rounded-full mr-3 text-primary-600">
                <PackagePlus size={24} />
              </div>
              <h3 className="font-display font-semibold text-xl">Customizable Options</h3>
            </div>
            <p className="text-gray-600">
              We offer customizable particle sizes, blends, and packaging options (HDPE bags, vacuum-sealed pouches, 25kg bulk bags) to meet specific requirements.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-primary-50 p-3 rounded-full mr-3 text-primary-600">
                <Map size={24} />
              </div>
              <h3 className="font-display font-semibold text-xl">Local Sourcing</h3>
            </div>
            <p className="text-gray-600">
              We source fresh produce directly from local Andhra Pradesh farmers, ensuring quality raw materials while supporting the local economy.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-primary-50 p-3 rounded-full mr-3 text-primary-600">
                <Clock size={24} />
              </div>
              <h3 className="font-display font-semibold text-xl">Long Shelf Life</h3>
            </div>
            <p className="text-gray-600">
              Our dehydration process naturally extends shelf life without the need for artificial preservatives, making our powders ideal for long-term storage.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Packaging Information */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.pexels.com/photos/5946083/pexels-photo-5946083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Product packaging" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="font-display font-bold text-3xl mb-6 text-gray-800">
              Packaging & <span className="text-primary-600">Delivery</span>
            </h2>
            <p className="text-gray-600 mb-6">
              We provide food-grade packaging solutions designed to maintain product freshness and quality during shipping and storage. Our packaging options are customizable to meet your specific requirements.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-display font-semibold text-lg mb-2 text-gray-800">Packaging Options</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>HDPE bags with inner liner (1kg, 5kg, 10kg)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Vacuum-sealed pouches for maximum freshness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>25kg bulk bags for industrial customers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Private labeling available with small JP Dried Treats advertisement</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-display font-semibold text-lg mb-2 text-gray-800">Minimum Order</h3>
                <p className="text-gray-600">
                  Our minimum order quantity is 25 kg per product. Volume discounts are available for larger orders.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-display font-semibold text-lg mb-2 text-gray-800">Shipping & Logistics</h3>
                <p className="text-gray-600">
                  We handle all logistics for domestic and international shipments, ensuring your products arrive safely and on time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Call to Action */}
      <Section 
        className="bg-gradient-to-r from-primary-600 to-primary-700 text-white"
        animate={false}
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
            Ready to Order?
          </h2>
          <p className="text-lg mb-8">
            Contact us today for pricing, samples, or to discuss your custom requirements.
          </p>
          <CTAButton 
            text="Contact Us Now" 
            to="/contact" 
            variant="outline" 
            className="bg-transparent border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8"
          />
        </div>
      </Section>
    </>
  );
};

export default Products;