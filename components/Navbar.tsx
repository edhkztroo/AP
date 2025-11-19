import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { APP_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area - Image Based */}
        <div className="cursor-pointer" onClick={() => scrollToSection('hero')}>
          <img 
            src="/logo.svg" 
            alt="ACCIÓN POLÍTICA" 
            className="h-12 md:h-16 w-auto object-contain hover:opacity-90 transition-opacity"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {['Nosotros', 'Servicios', 'Experiencia', 'Campañas'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm font-semibold uppercase tracking-widest text-gray-300 hover:text-brand-red transition-colors duration-300"
            >
              {item}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button 
            onClick={() => scrollToSection('contacto')}
            className="px-6 py-2 border border-white/20 bg-white/5 hover:bg-brand-red hover:border-brand-red text-white text-xs font-bold uppercase tracking-widest transition-all duration-300"
          >
            Contacto
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 py-6 px-6 flex flex-col space-y-4 shadow-2xl">
          {['Nosotros', 'Servicios', 'Experiencia', 'Campañas', 'Contacto'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-left text-lg font-heading font-medium text-white hover:text-brand-red"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;