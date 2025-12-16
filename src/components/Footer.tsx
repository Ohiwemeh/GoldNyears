import { Mail, MapPin, Phone, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1F2A44] to-[#2D3E5F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#E5C158] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">GY</span>
              </div>
              <div>
                <div className="text-white text-lg font-bold">GoldNyears</div>
                <div className="text-[#D4AF37] text-xs font-medium">Golden Years Residence</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Boutique residential care with dignity and heart in Memphis-Collierville.
            </p>
          </div>

          {/* Mailing Address */}
          <div>
            <h3 className="text-[#D4AF37] font-bold text-lg mb-4">Office Address</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="text-[#D4AF37] mt-1 shrink-0" size={18} />
              <p className="text-gray-300 text-sm leading-relaxed">
                Golden Years Residence LLC<br />
                875 W. Poplar Ave<br />
                Suite 23-225<br />
                Collierville, TN 38017
              </p>
            </div>
          </div>

          {/* Residence Address */}
          <div>
            <h3 className="text-[#D4AF37] font-bold text-lg mb-4">Residence</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="text-[#D4AF37] mt-1 shrink-0" size={18} />
              <p className="text-gray-300 text-sm leading-relaxed">
                5258 Rolling Ridge Cove<br />
                Memphis, TN 38141
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#D4AF37] font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="text-[#D4AF37] mt-0.5 shrink-0" size={18} />
                <p className="text-gray-300 text-sm">Coming Soon</p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-[#D4AF37] mt-0.5 shrink-0" size={18} />
                <a 
                  href="mailto:goldenyears25@proton.me" 
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm break-all"
                >
                  goldenyears25@proton.me
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Golden Years Residence LLC. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <button className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">Privacy Policy</button>
              <button className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">Terms of Service</button>
            </div>
            <p className="text-gray-400 text-sm flex items-center space-x-2">
              <span>Made with</span>
              <Heart className="text-[#D4AF37]" size={16} fill="currentColor" />
              <span>in Memphis</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
