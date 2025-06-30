'use client';

import {
  Briefcase,
  Github,
  Home,
  Linkedin,
  Mail,
  Twitter,
  User,
  X,
  Zap,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Skills', href: '#skills', icon: Mail },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
];

export default function UnifiedNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMenu();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:block fixed top-0 left-0 right-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? 'py-3' : 'py-6'
            }`}
          >
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                    scrolled
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                      : 'bg-white/10 backdrop-blur-sm border border-white/20'
                  }`}
                >
                  <Zap className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                {!scrolled && (
                  <div className="absolute inset-0 w-12 h-12 bg-blue-400/20 rounded-xl animate-ping" />
                )}
              </div>
              <div className="flex flex-col items-start">
                <span
                  className={`text-xl font-bold transition-all duration-300 ${
                    scrolled
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
                      : 'text-white'
                  }`}
                >
                  M.Ahmed
                </span>
                <span
                  className={`text-sm font-medium transition-all duration-300 ${
                    scrolled ? 'text-gray-500' : 'text-gray-300'
                  }`}
                >
                  Developer
                </span>
              </div>
            </button>

            {/* Navigation Menu */}
            <div
              className={`backdrop-blur-xl border rounded-full px-8 py-3 transition-all duration-500 ${
                scrolled
                  ? 'bg-white/90 dark:bg-gray-900/90 border-gray-200/30 dark:border-gray-700/30 shadow-2xl'
                  : 'bg-white/10 border-white/20 shadow-lg'
              }`}
            >
              <ul className="flex items-center space-x-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className={`flex items-center space-x-2 group relative px-4 py-2 rounded-lg transition-all duration-300 ${
                        scrolled
                          ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                          : 'text-white hover:text-blue-200'
                      }`}
                    >
                      <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-medium">{item.name}</span>
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => window.open('/resume.pdf', '_blank')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                scrolled
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl'
                  : 'bg-white/20 text-white border border-white/30 backdrop-blur-sm hover:bg-white/30'
              }`}
            >
              Download CV
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Logo */}
      <div className="lg:hidden fixed top-4 left-4 z-[60]">
        <button
          onClick={scrollToTop}
          className="flex items-center space-x-2 group transition-all duration-300 hover:scale-105"
        >
          <div className="relative">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                scrolled
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                  : 'bg-gray-900/80 backdrop-blur-sm border border-gray-700/50'
              }`}
            >
              <Zap className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            {!scrolled && (
              <div className="absolute inset-0 w-10 h-10 bg-blue-400/20 rounded-xl animate-ping" />
            )}
          </div>
          <div className="hidden sm:block">
            <span
              className={`text-lg font-bold transition-all duration-300 ${
                scrolled
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
                  : 'text-white'
              }`}
            >
              M.Ahmed
            </span>
          </div>
        </button>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleMenu}
        className={`fixed top-4 right-4 z-[60] lg:hidden w-12 h-12 backdrop-blur-xl border rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          scrolled
            ? 'bg-white/90 dark:bg-gray-900/90 border-gray-200/30 dark:border-gray-700/30 shadow-lg'
            : 'bg-gray-900/80 border-gray-700/50 shadow-lg'
        }`}
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span
            className={`block w-5 h-0.5 rounded-sm transition-all duration-300 ${
              scrolled && !isOpen ? 'bg-gray-700 dark:bg-white' : 'bg-white'
            } ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}
          />
          <span
            className={`block w-5 h-0.5 rounded-sm transition-all duration-300 ${
              scrolled && !isOpen ? 'bg-gray-700 dark:bg-white' : 'bg-white'
            } ${isOpen ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className={`block w-5 h-0.5 rounded-sm transition-all duration-300 ${
              scrolled && !isOpen ? 'bg-gray-700 dark:bg-white' : 'bg-white'
            } ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}
          />
        </div>
      </button>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 lg:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-l border-gray-200/30 dark:border-gray-700/30 z-50 shadow-2xl transition-transform duration-500 ease-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200/30 dark:border-gray-700/30">
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                M.Ahmed
              </span>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                Full Stack Developer
              </span>
            </div>
          </button>
          <button
            onClick={closeMenu}
            className="w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Mobile Navigation Items */}
        <nav className="p-6">
          <ul className="space-y-3">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center space-x-4 w-full p-4 rounded-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-300 group ${
                    isOpen ? 'animate-slide-in' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="p-3 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-left">{item.name}</span>
                  <div className="ml-auto w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
          opacity: 0;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Prevent horizontal scroll */
        body {
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
}
