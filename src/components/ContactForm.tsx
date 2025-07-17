import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    
    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitMessage('Thank you for your inquiry! We will contact you shortly.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          country: '',
          product: '',
          quantity: '',
          message: ''
        });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitMessage('');
        }, 5000);
      }, 1500);
    }
  };
  
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      {submitMessage ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 animate-fade-in">
          {submitMessage}
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name <span className="text-accent-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.name ? 'border-accent-600' : 'border-gray-300'
              }`}
            />
            {errors.name && <p className="text-accent-600 text-sm mt-1">{errors.name}</p>}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email <span className="text-accent-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.email ? 'border-accent-600' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="text-accent-600 text-sm mt-1">{errors.email}</p>}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          
          <div>
            <label htmlFor="country" className="block text-gray-700 font-medium mb-2">
              Country <span className="text-accent-600">*</span>
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.country ? 'border-accent-600' : 'border-gray-300'
              }`}
            />
            {errors.country && <p className="text-accent-600 text-sm mt-1">{errors.country}</p>}
          </div>
          
          <div>
            <label htmlFor="product" className="block text-gray-700 font-medium mb-2">
              Product of Interest
            </label>
            <select
              id="product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Select a product</option>
              <option value="Banana Powder">Banana Powder</option>
              <option value="Carrot Powder">Carrot Powder</option>
              <option value="Tomato Powder">Tomato Powder</option>
              <option value="Beetroot Powder">Beetroot Powder</option>
              <option value="Red Chili Powder">Red Chili Powder</option>
              <option value="Green Chili Powder">Green Chili Powder</option>
              <option value="Leafy Vegetable Powder">Leafy Vegetable Powder</option>
              <option value="Onion Powder">Onion Powder</option>
              <option value="Multiple Products">Multiple Products</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">
              Order Quantity (min. 25 kg)
            </label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g., 25 kg, 50 kg, 100 kg"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message <span className="text-accent-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.message ? 'border-accent-600' : 'border-gray-300'
              }`}
            ></textarea>
            {errors.message && <p className="text-accent-600 text-sm mt-1">{errors.message}</p>}
          </div>
        </div>
        
        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 flex justify-center items-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                  <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              'Get a Quote'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;