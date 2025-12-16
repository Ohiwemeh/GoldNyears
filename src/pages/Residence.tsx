import { Bed, Armchair, Wifi, Home, Sun, ArrowRight } from 'lucide-react';

interface ResidenceProps {
  onNavigate: (page: string) => void;
}

export default function Residence({ onNavigate }: ResidenceProps) {
  const roomAmenities = [
    { icon: Bed, text: 'Bed, mattress, and springs' },
    { icon: Armchair, text: 'Comfortable chair' },
    { icon: Bed, text: 'Linens and pillows' },
    { icon: Home, text: 'Chest of drawers' },
    { icon: Home, text: 'Wardrobe or closet space' },
    { icon: Home, text: 'Nightstand and reading lights' },
    { icon: Wifi, text: 'Free Wi-Fi' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1F2A44] text-white py-16 px-4 page-content">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The Residence: A Warm, Comfortable Home
          </h1>
          <p className="text-xl text-gray-200">
            Golden Years Residence is designed to feel like home from the moment you walk in. 
            With a planned licensed capacity of just 3–4 residents, our boutique environment 
            allows us to maintain a peaceful, low-stress atmosphere.
          </p>
        </div>
      </section>

      {/* Private Rooms */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1F2A44] text-center">
            Private Rooms Designed for Comfort
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            Each resident room is thoughtfully furnished and ready to welcome your loved one. Every room includes:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {roomAmenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#D4AF37]">
                  <div className="flex items-center space-x-4">
                    <Icon className="text-[#D4AF37] shrink-0" size={32} />
                    <p className="text-gray-700 font-medium">{amenity.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-[#F3F3F5] p-8 rounded-lg">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Residents are welcome to bring cherished photos, small décor items, or other personal touches 
              to make their room truly feel like their own.
            </p>
          </div>
        </div>
      </section>

      {/* Shared Spaces */}
      <section className="py-16 px-4 bg-[#F3F3F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1F2A44] text-center">
            Shared Spaces
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <Home className="text-[#D4AF37] mt-1 shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">Cozy Common Area</h3>
                  <p className="text-gray-700">For conversation, reading, and TV</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <Home className="text-[#D4AF37] mt-1 shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">Dining Space</h3>
                  <p className="text-gray-700">For family-style meals</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <Sun className="text-[#D4AF37] mt-1 shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">Outdoor Areas</h3>
                  <p className="text-gray-700">As available for fresh air and sunshine</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mt-8 text-center">
            Our goal is to create a quiet, homelike setting where residents can relax, socialize, and feel secure.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <button
            onClick={() => onNavigate('care-services')}
            className="inline-flex items-center space-x-2 bg-[#D4AF37] text-[#1F2A44] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#c49d2f] transition-colors"
          >
            <span>View Our Care & Services</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
