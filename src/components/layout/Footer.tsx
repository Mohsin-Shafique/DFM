import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Logo from '../shared/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Information */}
          <div className="space-y-4">
            <Logo className="h-14" />
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              Providing premium quality flour products since 1985. Our commitment to quality and innovation has made us a trusted name in the industry.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 heading-underline">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-secondary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-secondary transition-colors">Our Products</Link>
              </li>
              <li>
                <Link to="/manufacturing-process" className="text-gray-300 hover:text-secondary transition-colors">Manufacturing Process</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-secondary transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6 heading-underline">Our Products</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-secondary transition-colors">Chakki Atta</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-secondary transition-colors">Maida</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-secondary transition-colors">Suji / Rava</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-secondary transition-colors">Wheat Flour</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-secondary transition-colors">Export Quality Flour</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6 heading-underline">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-secondary mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">123 Mill Road, Flour District,<br />City, State - 123456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-secondary flex-shrink-0" size={18} />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-secondary transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-secondary flex-shrink-0" size={18} />
                <a href="mailto:info@dataflour.com" className="text-gray-300 hover:text-secondary transition-colors">info@dataflour.com</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Data Flour Mills (DFM). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;