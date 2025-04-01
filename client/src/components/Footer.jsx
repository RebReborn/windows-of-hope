import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              <span className="text-blue-400">Windows</span> of Hope
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Restoring dignity and creating sustainable opportunities for vulnerable communities in Malawi through education and empowerment.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                  Our Programs
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                  Our Impact
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider mb-4">Contact Us</h3>
            <address className="not-italic space-y-3 text-gray-300">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:info@windowshf.org" className="hover:text-blue-400 transition-colors duration-300">
                  info@windowshf.org
                </a>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="tel:+265888616600" className="hover:text-blue-400 transition-colors duration-300">
                  +265 888 616 600
                </a>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Dowa, Malawi</span>
              </div>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates on our work.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400 text-white transition-colors duration-300"
                required
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Windows of Hope Foundation. All rights reserved.
            <span className="block sm:inline-block sm:ml-2 mt-2 sm:mt-0">
              Made with <FaHeart className="inline text-red-500 mx-1" /> in Malawi
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;