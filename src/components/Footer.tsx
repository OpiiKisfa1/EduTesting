import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../utils/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EduLinks</h3>
            <p className="text-gray-400 mb-6">
              Veidojam nākamo paaudzi ar būtiskām digitālajām prasmēm caur interaktīviem tiešsaistes kursiem.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = {
                  'Facebook': Facebook,
                  'Twitter': Twitter,
                  'Instagram': Instagram,
                  'LinkedIn': Linkedin
                }[link.name];
                
                return (
                  <a 
                    key={link.name}
                    href={link.url}
                    className="p-2 bg-gray-800 rounded-full hover:bg-[#1c8f7a] transition-colors"
                    aria-label={link.name}
                  >
                    {Icon && <Icon size={18} />}
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Ātrās Saites</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#1c8f7a] transition-colors">Sākums</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-[#1c8f7a] transition-colors">Kursi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#1c8f7a] transition-colors">Par Mums</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#1c8f7a] transition-colors">Atsauksmes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#1c8f7a] transition-colors">BUJ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakti</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 text-[#1c8f7a]" />
                <span className="text-gray-400">29181327</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 text-[#1c8f7a]" />
                <span className="text-gray-400">online@edulinks.lv</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {currentYear} EduLinks. Visas tiesības aizsargātas.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;