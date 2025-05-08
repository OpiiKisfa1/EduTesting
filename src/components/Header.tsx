import React, { useState, useEffect } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logoImage from '../assets/logo2.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1c8f7a] shadow-md py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src={logoImage}
              alt="EduLinks Logo" 
              className="h-12"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="font-medium transition-colors text-white hover:text-green-300">
              Sākums
            </a>
            <a href="/#courses" className="font-medium transition-colors text-white hover:text-green-300">
              Kursi
            </a>
            <a href="/#" className="font-medium transition-colors text-white hover:text-green-300">
              Par Mums
            </a>
            <a href="/#faq" className="font-medium transition-colors text-white hover:text-green-300">
              BUJ
            </a>
            <a href="/#newsletter" className="font-medium transition-colors cursor-pointer text-white hover:text-green-300">
              Kontakti
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="https://api.whatsapp.com/send?phone=37129181327" className="flex items-center text-white">
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-lg" />
              <span className="font-medium">29181327</span>
            </a>
            <a href="mailto:online@edulinks.lv" className="flex items-center text-white">
              <Mail size={18} className="mr-2" />
              <span className="font-medium">online@edulinks.lv</span>
            </a>
          </div>
          
          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-[#1c8f7a] rounded-lg shadow-lg">
            <div className="flex flex-col space-y-3 p-4">
              <a href="/" className="font-medium text-white hover:text-green-300">
                Sākums
              </a>
              <a href="/#courses" className="font-medium text-white hover:text-green-300">
                Kursi
              </a>
              <a href="/#" className="font-medium text-white hover:text-green-300">
                Par Mums
              </a>
              <a href="/#faq" className="font-medium text-white hover:text-green-300">
                BUJ
              </a>
              <a href="/#newsletter" className="font-medium text-white hover:text-green-300 cursor-pointer">
                Kontakti
              </a>
              <div className="pt-3 border-t border-white/20">
                <a href="https://api.whatsapp.com/send?phone=37129181327" className="flex items-center text-white mb-2">
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-lg" />
                  <span className="font-medium">29181327</span>
                </a>
                <a href="mailto:online@edulinks.lv" className="flex items-center text-white">
                  <Mail size={18} className="mr-2" />
                  <span className="font-medium">online@edulinks.lv</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;