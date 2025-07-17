import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Factory, 
  User,
  ShieldCheck,
  PackageCheck,
  Truck,
  LeafyGreen
} from 'lucide-react';
import SEO from '../components/SEO';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <>
      <SEO title="Contact Us" />
      
      {/* Header Section */}
      <section 
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.pexels.com/photos/3817676/pexels-photo-3817676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Contact JP Dried Treats
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Get in touch with us for inquiries, quotations, or to discuss how our premium dehydrated powders can meet your needs.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,192L48,208C96,224,192,256,288,261.3C384,267,480,245,576,218.7C672,192,768,160,864,170.7C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Contact Information */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="bg-primary-50 p-4 rounded-full mb-4 text-primary-600">
              <Phone size={24} />
            </div>
            <h3 className="font-display font-semibold text-xl mb-3">Call Us</h3>
            <p className="text-gray-600 mb-2">Speak directly with our team</p>
            <a 
              href="tel:+917842448111" 
              className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
            >
              +91-7842448111
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="bg-primary-50 p-4 rounded-full mb-4 text-primary-600">
              <Mail size={24} />
            </div>
            <h3 className="font-display font-semibold text-xl mb-3">Email Us</h3>
            <p className="text-gray-600 mb-2">Send us your inquiries anytime</p>
            <a 
              href="mailto:info@jpdriedtreats.com" 
              className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
            >
              info@jpdriedtreats.com
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="bg-primary-50 p-4 rounded-full mb-4 text-primary-600">
              <Clock size={24} />
            </div>
            <h3 className="font-display font-semibold text-xl mb-3">Business Hours</h3>
            <p className="text-gray-600">Monday to Saturday</p>
            <p className="text-gray-600">9:00 AM - 6:00 PM IST</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </Section>
      
      {/* Contact Form & Details */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionTitle 
              title="Get in Touch" 
              subtitle="Fill out the form below and we'll get back to you as soon as possible"
            />
            
            <ContactForm />
          </div>
          
          <div>
            <SectionTitle 
              title="Company Details" 
              subtitle="Learn more about our company and manufacturing capabilities"
            />
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-semibold text-xl mb-4 text-gray-800 flex items-center">
                    <User size={20} className="text-primary-600 mr-2" />
                    Company Information
                  </h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="text-primary-600 mr-3 mt-1 flex-shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Address:</p>
                        <address className="text-gray-600 not-italic">
                          #21-199, Ballem Vari Street, Water Tank Road, Prasadampadu, Vijayawada Rural, Andhra Pradesh, India - 521108
                        </address>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary-600 mr-3 mt-1 flex-shrink-0">
                        <User size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Contact Person:</p>
                        <p className="text-gray-600">Meesala Joseph Pradeep, Proprietor</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary-600 mr-3 mt-1 flex-shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Mobile:</p>
                        <p className="text-gray-600">
                          <a href="tel:+917842448111" className="hover:text-primary-600 transition-colors duration-300">
                            +91-7842448111
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary-600 mr-3 mt-1 flex-shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Email:</p>
                        <p className="text-gray-600">
                          <a href="mailto:info@jpdriedtreats.com" className="hover:text-primary-600 transition-colors duration-300">
                            info@jpdriedtreats.com
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-display font-semibold text-xl mb-4 text-gray-800 flex items-center">
                    <Factory size={20} className="text-primary-600 mr-2" />
                    Manufacturing Unit
                  </h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="text-primary-600 mr-3 mt-1 flex-shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Location:</p>
                        <p className="text-gray-600">Same as company address</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary-600 mr-3 mt-1 flex-shrink-0">
                        <Factory size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Facility:</p>
                        <p className="text-gray-600">5000 sq.ft. manufacturing unit</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary-600 mr-3 mt-1 flex-shrink-0">
                        <PackageCheck size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Capacity:</p>
                        <p className="text-gray-600">3 tons/month</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-display font-semibold text-xl mb-4 text-gray-800 flex items-center">
                    <ShieldCheck size={20} className="text-primary-600 mr-2" />
                    Why Choose Us
                  </h3>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <LeafyGreen size={16} className="text-secondary-600 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-gray-600">Export-quality, organic, non-GMO powders</p>
                    </li>
                    <li className="flex items-start">
                      <LeafyGreen size={16} className="text-secondary-600 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-gray-600">Customizable solutions for various industries</p>
                    </li>
                    <li className="flex items-start">
                      <LeafyGreen size={16} className="text-secondary-600 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-gray-600">Sustainable sourcing from local farmers</p>
                    </li>
                    <li className="flex items-start">
                      <LeafyGreen size={16} className="text-secondary-600 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-gray-600">Advanced SS316 hygienic processing equipment</p>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-display font-semibold text-xl mb-4 text-gray-800 flex items-center">
                    <Truck size={20} className="text-primary-600 mr-2" />
                    Order Information
                  </h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="text-primary-600 mr-3 mt-1 flex-shrink-0">
                        <PackageCheck size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Minimum Order:</p>
                        <p className="text-gray-600">25 kg per product</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary-600 mr-3 mt-1 flex-shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Pricing:</p>
                        <p className="text-gray-600">Contact for quotations via phone or email</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Map Section */}
      <Section animate={false}>
        <SectionTitle 
          title="Our Location" 
          subtitle="Visit our manufacturing facility in Vijayawada, Andhra Pradesh"
          center
        />
        
        <div className="rounded-lg overflow-hidden shadow-lg h-[400px] mt-8">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30555.404949685704!2d80.63232233955077!3d16.511075299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fabea03d2b67%3A0x9c2a5836a6cc4b7a!2sPrasadampadu%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1701432781015!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="JP Dried Treats location"
          ></iframe>
        </div>
      </Section>
    </>
  );
};

export default Contact;