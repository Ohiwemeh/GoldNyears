import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B1E3D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section with Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 pb-12 border-b border-white/10">
          {/* Logo */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 border-2 border-[#D4AF37] rounded-full flex items-center justify-center">
                <span className="text-[#D4AF37] font-bold text-lg">GY</span>
              </div>
              <div className="text-white text-xl font-bold">GoldNyears</div>
            </div>
          </div>

          {/* Call us on */}
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-[#1F2A44] rounded-lg flex items-center justify-center shrink-0">
              <Phone className="text-[#D4AF37]" size={18} />
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Call us on:</p>
              <a href="tel:+19015877635" className="text-white font-medium hover:text-[#D4AF37] transition-colors">(901) 587-7635</a>
            </div>
          </div>

          {/* E-mail on */}
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-[#1F2A44] rounded-lg flex items-center justify-center shrink-0">
              <Mail className="text-[#D4AF37]" size={18} />
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">E-mail on:</p>
              <a href="mailto:goldenyears25@proton.me" className="text-white font-medium hover:text-[#D4AF37] transition-colors">
                goldenyears25@proton.me
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Page Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Page link</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <a href="#home" className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm">Home</a>
              <a href="#our-story" className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm">Our Story</a>
              <a href="#contact" className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm">Contact</a>
              <a href="#care-services" className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm">Services</a>
              <a href="#residence" className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm">Residence</a>
              <a href="#pricing" className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm">Pricing</a>
              <a href="#faqs" className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm">FAQs</a>
              <a href="#veterans-memory-care" className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm">Veterans Care</a>
            </div>
          </div>

          {/* Address */}
          <div>
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-[#1F2A44] rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="text-[#D4AF37]" size={18} />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Address:</p>
                <p className="text-white text-sm leading-relaxed">
                  5258 Rolling Ridge Cove<br />
                  Memphis, TN 38141
                </p>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-[#5BA3D0] rounded-2xl p-6">
            <h3 className="text-[#0B1E3D] text-xl font-bold mb-2">
              Need immediate assistance? We're here to help 24/7
            </h3>
            <button className="btn-primary mt-4 w-full">
              Call for emergency support
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Golden Years Residence LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
