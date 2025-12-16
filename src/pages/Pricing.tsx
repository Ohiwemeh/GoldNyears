import { DollarSign, Check, ArrowRight } from 'lucide-react';

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

      {/* Monthly Rates */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1F2A44] text-center">
            Monthly Rates
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Private Room */}
            <div className="bg-white rounded-lg shadow-xl border-t-4 border-[#D4AF37] overflow-hidden">
              <div className="bg-[#D4AF37] text-[#1F2A44] p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Private Room</h3>
                <div className="flex items-center justify-center space-x-2">
                  <DollarSign size={32} />
                  <span className="text-5xl font-bold">4,000</span>
                </div>
                <p className="text-lg mt-2">per month</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-center">
                  Your loved one enjoys their own private space with all amenities included.
                </p>
              </div>
            </div>

            {/* Shared Room */}
            <div className="bg-white rounded-lg shadow-xl border-t-4 border-[#777777] overflow-hidden">
              <div className="bg-[#777777] text-white p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Shared Room</h3>
                <div className="flex items-center justify-center space-x-2">
                  <DollarSign size={32} />
                  <span className="text-5xl font-bold">3,400</span>
                </div>
                <p className="text-lg mt-2">per month</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-center">
                  If/when shared accommodations are available. Same great care at a lower rate.
                </p>
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
            className="inline-flex items-center space-x-2 bg-[#D4AF37] text-[#1F2A44] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#c49d2f] transition-colors"
          >
            <span>Request a Personalized Cost Estimate</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
