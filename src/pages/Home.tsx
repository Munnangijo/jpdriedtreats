import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LeafyGreen, 
  ShieldCheck, 
  Truck, 
  BarChart4, 
  Factory,
  Leaf 
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import SEO from '../components/SEO';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import CTAButton from '../components/CTAButton';
import USPBadge from '../components/USPBadge';
import { products } from '../data/products';

const Home: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Featured products (first 3)
  const featuredProducts = products.slice(0, 3);
  
  return (
    <>
      <SEO title="Premium Dehydrated Vegetable & Fruit Powders" />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.pexels.com/photos/5946083/pexels-photo-5946083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 py-24 text-center">
          <div className={`max-w-3xl mx-auto transition-all duration-1000 ${heroInView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Premium Dehydrated <span className="text-primary-500">Vegetable</span> and <span className="text-primary-500">Fruit</span> Powders
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Export-quality organic powders for food processing, nutraceutical, and hospitality industries globally.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTAButton text="Explore Our Powders" to="/products" className="text-lg" />
              <CTAButton text="Get a Quote" to="/contact" variant="outline" className="text-lg" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L60,229.3C120,235,240,245,360,234.7C480,224,600,192,720,192C840,192,960,224,1080,240C1200,256,1320,256,1380,256L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* About Summary */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 text-gray-800">
              About <span className="text-primary-600">JP Dried Treats</span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              JP Dried Treats, founded in 2025, is a dynamic manufacturer and exporter of organic, non-GMO dehydrated vegetable and fruit powders from Vijayawada, Andhra Pradesh, India. We deliver high-quality products to food processing, nutraceutical, and hospitality industries globally.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Our state-of-the-art facility utilizes advanced stainless steel (SS316) dehydration technology to create premium quality powders while preserving nutritional value and flavor.
            </p>
            <CTAButton text="Learn More About Us" to="/about" variant="outline" />
          </div>
          <div className="relative">
            <img 
              src="/about-summary.jpg" 
              alt="JP Dried Treats powders and logo" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-4 rounded-lg shadow-lg hidden md:block">
              <p className="font-display font-semibold">Founded 2025</p>
              <p>Vijayawada, India</p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* USP Highlights */}
      <Section className="bg-gray-50">
        <SectionTitle 
          title="Why Choose JP Dried Treats?" 
          subtitle="Our commitment to quality, sustainability, and customer satisfaction sets us apart"
          center
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <USPBadge 
            icon={LeafyGreen} 
            title="100% Natural" 
            description="Our powders are made from fresh, naturally grown produce with no artificial additives or preservatives."
          />
          <USPBadge 
            icon={ShieldCheck} 
            title="Export-Ready Quality" 
            description="Adhering to international standards with rigorous quality control and testing procedures."
          />
          <USPBadge 
            icon={Truck} 
            title="Sustainable Sourcing" 
            description="Working directly with local farmers to ensure fresh, ethically sourced raw materials."
          />
          <USPBadge 
            icon={BarChart4} 
            title="Consistent Quality" 
            description="Advanced SS316 equipment and standardized processes ensure batch-to-batch consistency."
          />
          <USPBadge 
            icon={Factory} 
            title="Modern Facility" 
            description="State-of-the-art 5000 sq.ft. manufacturing unit with hygienic processing areas."
          />
          <USPBadge 
            icon={Leaf} 
            title="Customizable Solutions" 
            description="Tailored particle sizes, blends, and packaging options to meet specific client requirements."
          />
        </div>
      </Section>
      
      {/* Featured Products */}
      <Section>
        <SectionTitle 
          title="Our Featured Products" 
          subtitle="Explore our range of premium dehydrated vegetable and fruit powders"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                <Link 
                  to="/products" 
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <CTAButton text="View All Products" to="/products" />
        </div>
      </Section>
      
      {/* Call to Action */}
      <Section 
        className="bg-gradient-to-r from-primary-600 to-primary-700 text-white"
        animate={false}
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
            Ready to Place an Order?
          </h2>
          <p className="text-lg mb-8">
            Contact us today for customized solutions and competitive pricing for your business needs.
          </p>
          <CTAButton 
            text="Get a Quote" 
            to="/contact" 
            variant="outline" 
            className="bg-transparent border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8"
          />
        </div>
      </Section>
    </>
  );
};

export default Home;