import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaHeart, FaMapPin } from 'react-icons/fa';
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

    setSubscriptionStatus('Thank you for subscribing to our newsletter!');
    setEmail('');
    setTimeout(() => setSubscriptionStatus(''), 3000);
  };

  return (
    <footer className="bg-[#3A3A3A] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-serif font-bold text-white mb-2">TripNest</h3>
              <div className="h-1 w-16 bg-[#C8A24A]"></div>
            </div>
            <p className="text-[#D8CFC4]/80 mb-8 leading-relaxed font-light">
              {COMPANY_INFO.description}
            </p>
            <div className="flex space-x-5">
              <a
                href="https://www.facebook.com/profile.php?id=61583443868345"
                target='_blank'
                className="text-[#D8CFC4] hover:text-[#C8A24A] transition-all duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-white/5"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <div className="mb-6">
              <h4 className="text-xl font-serif font-semibold text-white mb-2">Quick Links</h4>
              <div className="h-0.5 w-12 bg-[#C8A24A]"></div>
            </div>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-[#D8CFC4]/80 hover:text-[#C8A24A] transition-all duration-300 group flex items-center"
                >
                  <span className="w-2 h-2 bg-transparent group-hover:bg-[#C8A24A] mr-3 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/hotels"
                  className="text-[#D8CFC4]/80 hover:text-[#C8A24A] transition-all duration-300 group flex items-center"
                >
                  <span className="w-2 h-2 bg-transparent group-hover:bg-[#C8A24A] mr-3 transition-all duration-300"></span>
                  Hotels
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-[#D8CFC4]/80 hover:text-[#C8A24A] transition-all duration-300 group flex items-center"
                >
                  <span className="w-2 h-2 bg-transparent group-hover:bg-[#C8A24A] mr-3 transition-all duration-300"></span>
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#D8CFC4]/80 hover:text-[#C8A24A] transition-all duration-300 group flex items-center"
                >
                  <span className="w-2 h-2 bg-transparent group-hover:bg-[#C8A24A] mr-3 transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/favorites"
                  className="text-[#D8CFC4]/80 hover:text-[#C8A24A] transition-all duration-300 group flex items-center"
                >
                  <span className="w-2 h-2 bg-transparent group-hover:bg-[#C8A24A] mr-3 transition-all duration-300"></span>
                  My Favorites
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <div className="mb-6">
              <h4 className="text-xl font-serif font-semibold text-white mb-2">Contact Us</h4>
              <div className="h-0.5 w-12 bg-[#C8A24A]"></div>
            </div>
            <div className="space-y-5">
              <div className="flex items-start group">
                <div className="w-8 h-8 rounded-full bg-[#C8A24A]/20 flex items-center justify-center mr-4 group-hover:bg-[#C8A24A]/40 transition-all duration-300">
                  <span className="text-sm font-medium">@</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white mb-1">Email</p>
                  <p className="text-[#D8CFC4]/80 font-light">{COMPANY_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-8 h-8 rounded-full bg-[#C8A24A]/20 flex items-center justify-center mr-4 group-hover:bg-[#C8A24A]/40 transition-all duration-300">
                  <span className="text-sm font-medium text-white"><FaPhoneAlt /></span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white mb-1">Phone</p>
                  <p className="text-[#D8CFC4]/80 font-light">{COMPANY_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-8 h-8 rounded-full bg-[#C8A24A]/20 flex items-center justify-center mr-4 group-hover:bg-[#C8A24A]/40 transition-all duration-300">
                  <span className="text-sm font-medium text-white"><FaMapPin /></span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white mb-1">Address</p>
                  <p className="text-[#D8CFC4]/80 font-light leading-relaxed">{COMPANY_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <div className="mb-6">
              <h4 className="text-xl font-serif font-semibold text-white mb-2">Newsletter</h4>
              <div className="h-0.5 w-12 bg-[#C8A24A]"></div>
            </div>
            <p className="text-[#D8CFC4]/80 mb-6 font-light">
              Subscribe to get updates on new destinations and exclusive deals.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-5 py-3.5 bg-white/5 border border-[#D8CFC4]/20 rounded-lg focus:outline-none focus:border-[#C8A24A] text-white placeholder-[#D8CFC4]/50 font-light transition-all duration-300"
                  required
                />
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-[#C8A24A]/30 pointer-events-none transition-all duration-300"></div>
              </div>
              <button
                type="submit"
                className="w-full group relative overflow-hidden bg-[#C8A24A] text-[#3A3A3A] font-semibold py-3.5 px-6 rounded-lg transition-all duration-500 hover:shadow-lg"
              >
                <span className="relative z-10">Subscribe</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </form>
            {subscriptionStatus && (
              <div className={`mt-4 p-3 rounded-lg ${subscriptionStatus.includes('Thank you')
                ? 'bg-[#C8A24A]/10 border border-[#C8A24A]/30'
                : 'bg-red-500/10 border border-red-500/30'
                }`}>
                <p className={`text-sm font-light ${subscriptionStatus.includes('Thank you') ? 'text-[#C8A24A]' : 'text-red-300'
                  }`}>
                  {subscriptionStatus}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D8CFC4]/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#D8CFC4]/70 text-sm flex items-center font-light">
            © {new Date().getFullYear()} TripNest. Made with <FaHeart className="text-[#C8A24A] mx-1.5" /> for travelers.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-[#D8CFC4]/70 hover:text-[#C8A24A] text-sm transition-all duration-300 font-light"
            >
              Privacy Policy
            </Link>
            <span className="text-[#D8CFC4]/30">|</span>
            <Link
              to="/terms"
              className="text-[#D8CFC4]/70 hover:text-[#C8A24A] text-sm transition-all duration-300 font-light"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;