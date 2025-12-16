import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock, ChevronRight } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for transparency/shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'our-story', label: 'Our Story' },
    { id: 'care-services', label: 'Services' },
    { id: 'residence', label: 'Residence' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faqs', label: 'FAQ' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed w-full top-0 z-50 font-sans">
      {/* 1. TOP UTILITY BAR - Navy Background for Premium Feel */}
      <div className="bg-[#1F2A44] text-white py-2 hidden lg:block transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center text-xs tracking-wide uppercase">
          <div className="flex items-center space-x-6">
            <span className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
              <MapPin size={14} className="mr-2 text-[#D4AF37]" />
              Collierville & Memphis, TN
            </span>
            <span className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
              <Clock size={14} className="mr-2 text-[#D4AF37]" />
              24/7 Residential Care
            </span>
          </div>
          <div className="flex items-center">
             <span className="text-[#D4AF37] font-semibold">Accepting New Residents</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION - Glassmorphism & Elegant Layout */}
      <nav 
        className={`transition-all duration-300 border-b border-[#D4AF37]/20 ${
          scrolled || isMenuOpen 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-white/90 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo Section */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-3 group"
            >
              {/* Refined Icon Container */}
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#D4AF37] opacity-10 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                <div className="w-10 h-10 border border-[#D4AF37] rounded-full flex items-center justify-center text-[#1F2A44] font-serif font-bold text-lg bg-white relative z-10">
                  GY
                </div>
              </div>
              
              <div className="text-left">
                <div className="text-[#1F2A44] text-xl font-bold font-serif leading-tight tracking-tight">
                  GoldNyears
                </div>
                <div className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-medium">
                  Est. 2025
                </div>
              </div>
            </button>

            {/* Desktop Links - Elegant Underline Animation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 py-2 group ${
                    currentPage === item.id ? 'text-[#D4AF37]' : 'text-[#1F2A44] hover:text-[#D4AF37]'
                  }`}
                >
                  {item.label}
                  {/* Animated Gold Underline */}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#D4AF37] transition-all duration-300 ease-out ${
                    currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              ))}
              
              {/* CTA Button - Pill Shape */}
              <button
                onClick={() => handleNavClick('contact')}
                className="ml-6 px-6 py-2.5 bg-[#1F2A44] hover:bg-[#D4AF37] text-white rounded-full font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <Phone size={16} />
                <span>Schedule Tour</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#1F2A44] hover:text-[#D4AF37] transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 3. MOBILE MENU OVERLAY - Clean Slide-down */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ top: '0', paddingTop: '100px' }} // Push down below header
      >
        <div className="px-6 py-8 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full flex justify-between items-center text-lg font-medium p-4 border-b border-gray-100 ${
                currentPage === item.id 
                  ? 'text-[#D4AF37] bg-[#F3F3F5] rounded-lg' 
                  : 'text-[#1F2A44]'
              }`}
            >
              <span>{item.label}</span>
              {currentPage === item.id && <ChevronRight size={18} />}
            </button>
          ))}
          
          <div className="pt-6">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-4 bg-[#1F2A44] text-white rounded-lg text-lg font-semibold shadow-lg active:scale-95 transition-transform flex justify-center items-center gap-2"
            >
              <Phone size={20} />
              Book a Visit
            </button>
          </div>
          
          {/* Mobile Utility Info */}
          <div className="pt-8 text-center text-gray-400 text-sm space-y-2">
            <p>5258 Rolling Ridge Cove, Memphis</p>
            <p>goldenyears25@proton.me</p>
          </div>
        </div>
      </div>
    </header>
  );
}