import React from 'react';
import { CheckCircle, Building2, User, Factory, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import SEO from '../components/SEO';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import CTAButton from '../components/CTAButton';

const About: React.FC = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <>
      <SEO title="About Us" />
      
      {/* Header Section */}
      <section 
        ref={headerRef}
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.pexels.com/photos/7691192/pexels-photo-7691192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className={`max-w-3xl transition-all duration-1000 ${headerInView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              About JP Dried Treats
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Learn about our story, our mission, and our commitment to producing premium dehydrated vegetable and fruit powders.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,106.7C96,117,192,139,288,154.7C384,171,480,181,576,165.3C672,149,768,107,864,90.7C960,75,1056,85,1152,90.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Company Overview */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-bold text-3xl mb-6 text-gray-800">
              Our <span className="text-primary-600">Story</span>
            </h2>
            <p className="text-gray-600 mb-4">
            JP Dried Treats was born in 2025 with a bold vision: to transform fresh produce into premium dehydrated powders that nourish, preserve, and empower industries across the globe. Based in the vibrant city of Vijayawada, Andhra Pradesh, we are proud to be a dynamic manufacturer and exporter rooted in innovation and integrity.
We specialize in crafting high-quality powders from bananas, carrots, tomatoes, beetroots, chilies, leafy greens, and onions. Using cutting-edge SS316 stainless steel dehydration technology, our process retains maximum nutrition, flavor, and shelf life—without compromising on purity.
            </p>
            <p className="text-gray-600 mb-4">
            Our mission is simple yet powerful: to deliver natural, nutrient-rich, and long-lasting vegetable and fruit powders to the food processing, nutraceutical, and hospitality sectors. Whether it's a health supplement, a gourmet dish, or a packaged snack, our products add value and vitality.
We source our produce directly from trusted farmers across Andhra Pradesh, supporting local agriculture while ensuring consistent quality. Every batch begins with fresh, conventionally grown ingredients and ends with a product that meets global standards.

            </p>
            <p className="text-gray-600">
            Sustainability is at the heart of everything we do. From energy-efficient dehydration methods to minimal waste practices, we’re committed to protecting the planet while serving our customers. Our powders are not just products—they’re a promise of health, longevity, and responsibility.
At JP Dried Treats, we don’t just make powders—we build partnerships. With a focus on quality, transparency, and customer satisfaction, we aim to become your most reliable source for premium dehydrated fruits and vegetables. Join us on this journey of flavor, function, and forward-thinking innovation.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/about-owner.jpg" 
              alt="Our Story - JP Dried Treats Owner" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-secondary-600 text-white p-4 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center">
                <Factory size={20} className="mr-2" />
                <p className="font-display font-semibold">Est. 2025</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Our Team */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="about-team.jpg" 
              alt="Our Team" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-display font-bold text-3xl mb-6 text-gray-800">
              Our <span className="text-primary-600">Team</span>
            </h2>
            <p className="text-gray-600 mb-4">
            At JP Dried Treats, excellence is driven by a dynamic trio whose complementary strengths fuel our mission to deliver premium dehydrated fruits and vegetables.            </p>
            <p className="text-gray-600 mb-4">
              <strong>👨‍🔬 Joseph – Head of Research & Development </strong>  Joseph is the innovator at our core. With a sharp intellect and relentless dedication, he leads product development with precision and purpose. His hands-on approach ensures that every batch meets the highest standards of quality and innovation, making him the heartbeat of our production excellence.
.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>📈 Koteswara Rao – Strategy & Business Development </strong> With decades of experience, Koteswara Rao is our strategic compass. His calm demeanor and deep market insight guide our business decisions, helping us forge strong partnerships and align our offerings with evolving customer needs. His wisdom brings clarity and direction to our growth..
            </p>
            <p className="text-gray-600 mb-4">
              <strong>🧠 Pradeep – Operations & Vision Alignment </strong> Pradeep is the visionary who keeps our long-term goals in focus. With a keen eye for quality and operational flow, he ensures that every part of our process works in harmony. His leadership bridges strategy and execution, creating a seamless experience from farm to shelf.            </p>
            <p className="text-gray-600">
            Together, Joseph, Koteswara Rao, and Pradeep form a powerhouse team—blending innovation, experience, and vision. Their synergy is the backbone of JP Dried Treats, ensuring consistent quality, customer satisfaction, and continuous improvement..
            </p>
          </div>
        </div>
      </Section>
      
      {/* Manufacturing Details */}
      <Section>
        <SectionTitle 
          title="Our Manufacturing Facility" 
          subtitle="State-of-the-art production with advanced technology"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
          <div>
            <img 
              src="https://images.pexels.com/photos/9158919/pexels-photo-9158919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Manufacturing facility" 
              className="rounded-lg shadow-lg w-full h-auto mb-8"
            />
            
            <h3 className="font-display font-semibold text-2xl mb-4 text-gray-800 flex items-center">
              <Building2 size={24} className="text-primary-600 mr-2" />
              Facility Details
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle size={20} className="text-secondary-600 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Location:</p>
                  <p className="text-gray-600">#21-199, Ballem Vari Street, Water Tank Road, Prasadampadu, Vijayawada Rural, Andhra Pradesh, India - 521108</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-secondary-600 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Facility Size:</p>
                  <p className="text-gray-600">5000 sq.ft. dedicated manufacturing unit</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-secondary-600 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Production Capacity:</p>
                  <p className="text-gray-600">3 tons of dehydrated powders per month</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-2xl mb-4 text-gray-800 flex items-center">
              <Factory size={24} className="text-primary-600 mr-2" />
              Equipment & Technology
            </h3>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle size={20} className="text-secondary-600 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Tray Dehydrator (SS316)</p>
                  <p className="text-gray-600">Advanced dehydration technology for efficient moisture removal while preserving nutrients</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-secondary-600 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Pulverizer (SS316)</p>
                  <p className="text-gray-600">High-precision grinding equipment for consistent particle size</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-secondary-600 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Slicing Machine (SS316)</p>
                  <p className="text-gray-600">Precision cutting equipment for uniform slicing of raw materials</p>
                </div>
              </li>
            </ul>
            
            <h3 className="font-display font-semibold text-2xl mb-4 text-gray-800 flex items-center">
              <User size={24} className="text-primary-600 mr-2" />
              Quality Control
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle size={20} className="text-secondary-600 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Certifications In Progress:</p>
                  <p className="text-gray-600">FSSAI certification, ISO 9001, and HACCP for export compliance</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-secondary-600 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Testing Procedures:</p>
                  <p className="text-gray-600">Third-party testing for nutritional content, microbiological safety, and physical properties</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-secondary-600 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Hygiene Standards:</p>
                  <p className="text-gray-600">Strict hygiene protocols with SS316 food-grade equipment for all processing</p>
                </div>
              </li>
            </ul>
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
            Interested in Our Products?
          </h2>
          <p className="text-lg mb-8">
            Contact us today to discuss how our premium dehydrated powders can meet your business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton 
              text="View Our Products" 
              to="/products" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary-600"
            />
            <CTAButton 
              text="Contact Us" 
              to="/contact" 
              variant="outline" 
              className="bg-white text-primary-600 border-white hover:bg-transparent hover:text-white"
            />
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;