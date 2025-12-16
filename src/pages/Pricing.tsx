import { Check, ArrowRight } from 'lucide-react';

interface PricingProps {
  onNavigate: (page: string) => void;
}

export default function Pricing({ onNavigate }: PricingProps) {
  const includedInRoom = [
    'Bed, mattress, and springs',
    'Chair',
    'Linens and bedding',
    'Chest of drawers',
    'Wardrobe or closet space',
    'Nightstand and reading lights',
    'Free Wi-Fi'
  ];

  const includedInRate = [
    'Assistance with Activities of Daily Living (ADLs)',
    'Medication management',
    '24/7 supervision',
    'Daily meals and snacks',
    'Housekeeping and laundry',
    'Social and faith-friendly activities'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1F2A44] text-white py-16 px-4 page-content">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-200">
            We believe families deserve clear, straightforward pricing.
          </p>
        </div>
      </section>

      {/* Monthly Rates - 3 Card Layout */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1F2A44] text-center">
            Care plan for your needs
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 items-start">
            {/* Shared Room - Light Gold Tint */}
            <div className="bg-[#FFF9E6] rounded-3xl p-8">
              <p className="text-[#D4AF37] text-sm font-semibold mb-3">Shared room plan</p>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold text-[#1F2A44]">$3,400</span>
                <span className="text-gray-600 text-lg ml-1">/month</span>
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="btn-primary w-full mb-8"
              >
                Book now
              </button>
              <div className="space-y-3">
                <p className="text-sm text-gray-500 mb-4">Included features:</p>
                {['Shared bedroom', 'All meals included', '24/7 care & supervision', 'All amenities & activities'].map((item, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <span className="text-[#D4AF37] mt-0.5">→</span>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Private Room - Navy with Rounded Top-Right */}
            <div className="relative">
              <div className="bg-[#1F2A44] text-white rounded-3xl rounded-tr-[80px] p-8">
                <p className="text-[#D4AF37] text-sm font-semibold mb-3">Private room plan</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-bold">$4,000</span>
                  <span className="text-gray-300 text-lg ml-1">/month</span>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn-secondary w-full mb-8"
                >
                  Book now
                </button>
                <div className="space-y-3">
                  <p className="text-sm text-gray-400 mb-4">Included features:</p>
                  {['Private bedroom & bathroom', 'All meals included', 'Medication management', 'Housekeeping & laundry'].map((item, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <span className="text-[#D4AF37] mt-0.5">→</span>
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Customized Plan - Light Gold Tint */}
            <div className="bg-[#FFF9E6] rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#1F2A44] mb-8">Customized plan</h3>
              <button
                onClick={() => onNavigate('contact')}
                className="btn-primary w-full mb-8"
              >
                Contact us
              </button>
              <div className="space-y-3">
                <p className="text-sm text-gray-500 mb-4">Included features:</p>
                {['Fully customizable hours and care services', 'Comprehensive personal care', 'Health monitoring and specialized medical support', 'Customized meal planning and preparation'].map((item, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <span className="text-[#D4AF37] mt-0.5">→</span>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-[#F3F3F5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1F2A44] text-center">
            What's Included
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Room Includes */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#1F2A44] text-center">
                Each Room Includes
              </h3>
              <div className="space-y-3">
                {includedInRoom.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="text-[#D4AF37] shrink-0 mt-1" size={20} />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Rate Includes */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#1F2A44] text-center">
                Monthly Rates Include
              </h3>
              <div className="space-y-3">
                {includedInRate.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="text-[#D4AF37] shrink-0 mt-1" size={20} />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1F2A44] text-center">
            Additional or Optional Services
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#D4AF37]">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Some services, such as certain transportation needs or specialized supplies, may be billed separately. 
              We will always discuss these clearly with families in advance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#F3F3F5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#1F2A44]">
            Request a Personalized Cost Estimate
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Every resident's needs are unique. Let's discuss your specific situation and provide a detailed estimate.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="btn-gold inline-flex items-center space-x-2"
          >
            <span>Request a Personalized Cost Estimate</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
