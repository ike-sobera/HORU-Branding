import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/LOGO IW/IW Dourado.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-primary/90 backdrop-blur-lg py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="IW Assessoria" className="h-8 md:h-10 w-auto" />
          <div className="h-4 w-[1px] bg-white/20 mx-2 hidden sm:block"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-light hidden sm:block text-white/60">
            Assessoria de Marketing
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm uppercase tracking-widest transition-colors duration-300 hover:text-accent ${
                location.pathname === link.path ? 'text-accent font-semibold' : 'text-white/70'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contato" className="btn-gold !py-2 !px-6 text-xs tracking-widest uppercase">
            Diagnóstico
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-primary border-b border-white/5 p-6 md:hidden"
          >
            <div className="flex flex-col space-y-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg uppercase tracking-widest ${
                    location.pathname === link.path ? 'text-accent' : 'text-white/70'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contato"
                onClick={() => setIsOpen(false)}
                className="btn-gold w-full text-center py-3 text-sm tracking-widest uppercase"
              >
                Diagnóstico
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
