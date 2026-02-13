import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 pointer-events-none flex justify-center`}>
        <div className={`pointer-events-auto transition-all duration-300 ${
          scrolled 
            ? 'mx-4 w-full max-w-5xl glass-card px-4 sm:px-8 py-3' 
            : 'mx-4 w-full max-w-7xl px-4 sm:px-8 py-4 bg-transparent'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('#home')}>
              <Logo size="sm" />
              <div className="ml-2 flex flex-col">
                <span className="text-sm sm:text-lg font-bold text-text-primary leading-tight">
                  Aldi Nova
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-bg-card/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-border-light shadow-sm">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 rounded-full text-sm font-medium text-text-secondary hover:text-primary hover:bg-bg-card transition-all duration-200 relative group"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <div className="text-sm font-medium text-text-secondary font-mono mr-2 hidden sm:block">
                {time.toLocaleTimeString([], { hour12: false })}
              </div>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-bg-card/80 border border-border text-text-primary hover:bg-bg-card transition-colors shadow-sm"
                title="Toggle theme"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
              <button 
                onClick={() => handleNavClick('#contact')}
                className="btn-primary px-5 py-2 text-sm rounded-lg"
              >
                Let's Talk
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <div className="text-sm font-bold text-text-secondary font-mono">
                {time.toLocaleTimeString([], { hour12: false })}
              </div>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-bg-card/80 border border-border text-text-primary hover:bg-bg-card transition-colors shadow-sm"
                title="Toggle theme"
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full bg-bg-card/80 shadow-sm text-text-primary hover:bg-bg-card transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-24 z-40 md:hidden"
          >
            <div className="glass-card p-4 space-y-2 shadow-2xl">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-text-secondary hover:bg-primary/5 hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;