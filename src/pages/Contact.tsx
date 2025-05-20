import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import Button from '../components/shared/Button';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us - Data Flour Mills (DFM)';
  }, []);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productParam = searchParams.get('product');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: productParam ? `Inquiry about ${productParam}` : '',
    message: productParam ? `I would like to know more about ${productParam}.` : '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5765/flour-wheat.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90"></div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Have questions or need more information? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <SectionHeading title="Get in Touch" />
              <p className="text-gray-700 mb-8">
                Whether you have questions about our products, need a custom flour solution, or want to place an order, our team is ready to assist you. Reach out to us using any of the methods below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary mb-1">Our Location</h3>
                    <p className="text-gray-700">123 Mill Road, Flour District</p>
                    <p className="text-gray-700">City, State - 123456</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary mb-1">Phone</h3>
                    <p className="text-gray-700">+1 (234) 567-890</p>
                    <p className="text-gray-700">+1 (234) 567-891</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary mb-1">Email</h3>
                    <p className="text-gray-700">info@dataflour.com</p>
                    <p className="text-gray-700">sales@dataflour.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Clock className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary mb-1">Business Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="mt-10 rounded-lg overflow-hidden shadow-md h-64 bg-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.03606167886!2d-74.30932853290993!3d40.69753996510555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1636459002385!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="DFM Location"
                ></iframe>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
                
                {submitSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
                    <h3 className="font-bold text-lg mb-1">Thank You!</h3>
                    <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                    <button 
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-4 text-green-600 font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          required 
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          required 
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                          Phone Number
                        </label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          id="subject" 
                          name="subject" 
                          value={formData.subject} 
                          onChange={handleChange} 
                          required 
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={5} 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      ></textarea>
                    </div>
                    
                    {submitError && (
                      <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-md">
                        {submitError}
                      </div>
                    )}
                    
                    <Button 
                      type="submit" 
                      variant="primary" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Find answers to commonly asked questions about our products and services."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Do you offer custom flour milling services?</h3>
              <p className="text-gray-700">
                Yes, we offer custom milling services for businesses with specific flour requirements. Please contact our sales team to discuss your needs.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">What is the minimum order quantity?</h3>
              <p className="text-gray-700">
                Minimum order quantities vary by product. For retail products, we typically require a minimum order of 10 units. For bulk orders, please contact our sales team.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Do you ship internationally?</h3>
              <p className="text-gray-700">
                Yes, we export our products to several countries. International shipping terms and minimum order quantities apply. Contact our export department for details.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Can I visit your facility?</h3>
              <p className="text-gray-700">
                Yes, we welcome visitors for facility tours by appointment. Please contact us at least one week in advance to schedule a visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Join Our Trade Partners
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Become a distributor or retailer of Data Flour Mills products. Enjoy wholesale pricing and dedicated support.
          </p>
          <Button href="tel:+1234567890" variant="primary" size="lg">
            Call Us: +1 (234) 567-890
          </Button>
        </div>
      </section>
    </>
  );
};

export default Contact;