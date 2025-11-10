import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart } from 'react-icons/fa';
import { COMPANY_INFO } from '../../utils/constants';
import { validateEmail } from '../../utils/helpers';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setSubscriptionStatus('Please enter a valid email address.');
      return;
    }

    // Simulate subscription
    console.log('Subscribed:', email);
    setSubscriptionStatus('Thank you for subscribing to our newsletter!');
    setEmail('');
    
    // Clear status after 3 seconds
    setTimeout(() => setSubscriptionStatus(''), 3000);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">TravelExplorer</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {COMPANY_INFO.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/hotels" className="text-gray-400 hover:text-white transition duration-300">
                  Hotels
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-400 hover:text-white transition duration-300">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="text-gray-400 hover:text-white transition duration-300">
                  My Favorites
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="text-gray-400 space-y-2">
              <p className="flex items-start">
                <span className="font-medium text-white mr-2">Email:</span>
                {COMPANY_INFO.email}
              </p>
              <p className="flex items-start">
                <span className="font-medium text-white mr-2">Phone:</span>
                {COMPANY_INFO.phone}
              </p>
              <p className="flex items-start">
                <span className="font-medium text-white mr-2">Address:</span>
                {COMPANY_INFO.address}
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-3">
              Subscribe to get updates on new destinations and exclusive deals.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
            {subscriptionStatus && (
              <p className={`mt-2 text-sm ${
                subscriptionStatus.includes('Thank you') ? 'text-green-400' : 'text-red-400'
              }`}>
                {subscriptionStatus}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm flex items-center">
            © 2025 TravelExplorer. Made with <FaHeart className="text-red-500 mx-1" /> for travelers.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition duration-300">
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition duration-300">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;