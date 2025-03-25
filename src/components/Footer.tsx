import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

const Footer = ({ onPrivacyClick, onTermsClick, onCookieClick }) => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZWY2ODI4YTVmMzI1MjQwOWJiOTRhYTRhMzk1ZDVjNjk5NjlkMzcwYTViNzhlODNmZjNlNmJmZWUwMDE1ODRmNGQ1NTRiMmNkMTU0NzM1NzgiLCJpYXQiOjE3NDI5NDE2OTcuMDA1NDI3LCJuYmYiOjE3NDI5NDE2OTcuMDA1NDMsImV4cCI6NDg5ODYxNTI5Ny4wMDA3Mywic3ViIjoiMTQyMjc0NyIsInNjb3BlcyI6W119.BuiQY38LCYukL7Rr_zOub7snZsUQmCmVoRZIkMVrdOXrM60DMwVBEG_0jSXyqRp7a9bDzdMxAy5TzJdYrgfEEMJUyKjnIgg5cSGX4wC3oCxlBlAncfp5lYiW218tEap0m3Xw4jY_SBDVf5qQmJtr1_zlMjB-cs7PMEF4qXNMjlRM2yECI6_P1ozucBrb5xGno6PXo-S-u-1D6Q6vzLP3I9ongs_MAFc8lIkX1PYbIdth9QU4iDc5YCmT-v1HBT3nnYn68mNhRgalEJM6sabHTXMY0nVMQ9cb6LoT_TjhfP47iM-_8BgyDCn9u6sgdfMdIMkD7dMf-MWH3ZlgfFywxWoHkoC19tAMk_H3Ho7RzKf5JJWvjZvJqyzdhfFB4b2-ijPqJpXl6ilGyJAe20zrdCJbQa45tZveH89l6skJo7devyKJ70t0T3S0w3mRJj1VhTdJHnmwBsBuqUvAwXHPAZcVGeFZhwNme__BzKv6sBJZMMCi_KbZvZ5VPVXxISChVQd1b33469TLCn9CeiT80u8xGRpuYxPumqEbdL4tJshiY4J7c3Kuk1l9zR7Coy9YqqLrBNtIwzNsDYYdD8Z2tuYzppoGzjBDKR7ixlw6qWFkbdEJ9QI5GhSSTgLFx7HovHGqnnT-1rKSYJZJVcnhJUgvtY3kOvsDEhmoaP21F5A',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email,
          groups: ['149885394641487849']
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to subscribe');
      }

      toast.success('Successfully subscribed to our newsletter!');
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to subscribe. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 py-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Cooper Management</h3>
            <p className="text-gray-400 mb-6">
            Elevating manufacturing brands through expert management, strategic marketing, and innovative business solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Our Brands</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://ascrfilters.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  ASCR Filters
                </a>
              </li>
              <li>
                <a 
                  href="https://selocooling.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  SELOCOOLER
                </a>
              </li>
              <li>
                <a 
                  href="http://www.treproducts.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  TRE Products
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and industry insights.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 
                           text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                           focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-blue-600 text-white py-2 rounded-lg font-semibold 
                         hover:bg-blue-700 transition-colors duration-300 flex items-center 
                         justify-center space-x-2 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <span>Subscribe</span>
                )}
              </motion.button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © {currentYear} Cooper Management LLC. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <button 
                onClick={onPrivacyClick}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </button>
              <button 
                onClick={onTermsClick}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </button>
              <button 
                onClick={onCookieClick}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;