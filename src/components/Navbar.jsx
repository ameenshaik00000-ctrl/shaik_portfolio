import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -55% 0px',
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'top-3 px-4' : 'top-6 px-6'
          }`}
      >
        <div className="max-w-4xl mx-auto">
          <nav
            className={`glass-nav rounded-full px-6 py-2.5 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-[#0F172A]/85 shadow-lg border-white/5' : 'bg-transparent'
              }`}
          >
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-extrabold text-xs shadow-md">
                AS
              </span>
              <span className="font-bold text-white tracking-wide text-sm">
                Ameen<span className="text-primary">.dev</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${activeSection === link.id ? 'text-primary' : 'text-slate-300 hover:text-white'
                      }`}
                  >
                    {activeSection === link.id && (
                      <motion.span
                        layoutId="activePill"
                        className="absolute inset-0 bg-white/5 border border-white/8 rounded-full z-[-1]"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA or Spacer to align links center */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold hover:bg-primary hover:text-white transition-all duration-200"
              >
                Connect
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-slate-300 hover:text-white transition p-1.5 rounded-full hover:bg-white/5"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 top-[70px] z-30 px-6 pb-6 md:hidden pointer-events-none"
          >
            <div className="glass rounded-2xl p-5 shadow-xl flex flex-col gap-4 pointer-events-auto bg-[#0F172A]/95">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-base py-2 border-b border-white/5 font-semibold transition ${activeSection === link.id ? 'text-primary' : 'text-slate-300'
                        }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-slate-900 w-full py-2 rounded-xl text-center text-xs font-bold shadow-md hover:bg-white transition"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}