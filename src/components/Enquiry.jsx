import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { nileOperations } from '../context/nile';

const Enquiry = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Contact method data adapted for LoopSpace
  const contactMethods = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-6 h-6" />,
      href: "https://linkedin.com",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      hoverBg: "hover:bg-blue-500/20"
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-6 h-6" />,
      href: "https://instagram.com",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20",
      hoverBg: "hover:bg-pink-500/20"
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-6 h-6" />,
      href: "https://wa.me/+923365950900",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      hoverBg: "hover:bg-green-500/20"
    },
    {
      name: "Email",
      icon: <FaEnvelope className="w-6 h-6" />,
      href: "mailto:hello@loopsspace.com",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
      hoverBg: "hover:bg-amber-500/20"
    }
  ];

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading('Sending your message...');

    try {
      const result = await nileOperations.submitEnquiry(formData);
      console.log('Enquiry submitted successfully:', result);

      // Success - reset form and show success toast
      setFormData({ name: '', email: '', message: '' });
      toast.success('We\'ll get back to you soon!', { 
        id: toastId,
        duration: 4000 
      });
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(error.message || 'Failed to send message. Please try again.', { 
        id: toastId,
        duration: 4000 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enquiry" className="bg-transparent text-white py-24 px-6 relative overflow-hidden">
      {/* Toaster component with custom styling */}
      <Toaster
        position="top-center"
        toastOptions={{
          className: 'bg-white/5 backdrop-blur-md border border-white/10',
          style: {
            background: 'rgba(255, 255, 255, 0.05)',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            marginTop: '50px',
          },
          success: {
            iconTheme: {
              primary: '#4ade80',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#f87171',
              secondary: '#fff',
            },
          },
          loading: {
            iconTheme: {
              primary: '#60a5fa',
              secondary: '#fff',
            },
          }
        }}
      />

      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 rounded-full bg-green-500/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-1/4 h-1/4 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-green-400 bg-clip-text text-transparent"
              style={{ fontFamily: 'LEMONMILK, sans-serif' }}>
            Get In Touch
          </h1>
          <p className="text-gray-300 max-w-md mx-auto">
            Let's collaborate to bring your vision to life. We're just a message away.
          </p>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto mt-8"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/20 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm shadow-2xl hover:border-green-500/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project or inquiry..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 ${
                  isSubmitting 
                    ? 'bg-green-700 cursor-not-allowed' 
                    : 'inset-0 bg-gradient-to-r from-green-500/30 to-green/10'
                } text-white font-medium rounded-xl transition-all duration-300 shadow-green-600/40 hover:shadow-green-600/40 flex items-center justify-center group`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">Connect With Us</h3>
            
            <div className="grid grid-cols-1 gap-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 ${method.bgColor} ${method.borderColor} border rounded-xl flex items-center transition-all duration-300 ${method.hoverBg} hover:scale-105 hover:shadow-lg`}
                >
                  <div className={`p-3 rounded-xl ${method.bgColor} ${method.color} mr-4`}>
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Connect via</p>
                    <p className={`text-lg font-medium ${method.color}`}>{method.name}</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
            
            <div className="mt-10 bg-gradient-to-br from-gray-800/30 to-gray-900/20 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-medium mb-4 text-white">Business Hours</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="font-medium mb-1 sm:mb-0">Monday - Friday</span>
                  <span className="text-green-400">9:00 AM - 6:00 PM</span>
                </li>
                
                <li className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="font-medium mb-1 sm:mb-0">Saturday-Sunday</span>
                  <span className="text-red-400">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;
