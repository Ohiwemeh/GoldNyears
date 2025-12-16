import { Heart, Shield, Users, Home as HomeIcon, ArrowRight, Pill, Utensils, Clock } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Split Layout */}
      <section className="page-content py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="bg-[#F0F4F8] rounded-[40px] p-12 md:p-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2A44] mb-8 leading-tight">
                Where comfort meets compassion
              </h1>
              <button
                onClick={() => onNavigate('care-services')}
                className="px-8 py-4 bg-[#1F2A44] text-white rounded-lg font-semibold hover:bg-[#2D3E5F] transition-all inline-block mb-16"
              >
                Explore services
              </button>
              
              <div className="pt-8 border-t border-gray-300">
                <p className="text-[#1F2A44] font-medium mb-3">Give us a call:</p>
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:goldenyears25@proton.me" className="text-[#1F2A44] hover:text-[#D4AF37] underline transition-colors">
                    goldenyears25@proton.me
                  </a>
                  <span className="text-gray-400">•</span>
                  <span className="text-[#1F2A44]">Phone: Coming Soon</span>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="rounded-[40px] overflow-hidden h-[500px] md:h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80" 
                alt="Caregiver with senior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr_1fr] gap-8 items-center mb-16">
            {/* Left Image */}
            <div className="hidden md:block rounded-3xl overflow-hidden h-[350px]">
              <img 
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&q=80" 
                alt="Caregiver with senior"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Center Content */}
            <div className="text-center px-4">
              <p className="text-sm text-[#D4AF37] font-semibold mb-4 tracking-wider">WHO WE ARE</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#1F2A44] leading-tight">
                Care that respects, comforts, and supports
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We believe in providing more than care, we offer a compassionate partnership 
                that respects the dignity and individuality of each senior we serve. Led by a 
                retired U.S. Army Lt. Colonel with 28+ years of service, we're committed to 
                enhancing quality of life with highly trained and dedicated caregivers.
              </p>
              <button
                onClick={() => onNavigate('our-story')}
                className="px-8 py-3 bg-[#5BA3D0] text-white rounded-lg font-semibold hover:bg-[#4A92BF] transition-all"
              >
                More about us
              </button>
            </div>

            {/* Right Image */}
            <div className="hidden md:block rounded-3xl overflow-hidden h-[350px]">
              <img 
                src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=400&q=80" 
                alt="Senior care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Icon Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {[
              { icon: Users, title: 'Experienced caregivers', desc: 'Our trained team brings both experience and genuine compassion to every caregiving moment.' },
              { icon: Heart, title: 'Personalized care plans', desc: 'Every senior has unique needs. We create care plans tailored to individual preferences and requirements.' },
              { icon: Shield, title: 'Focus on total well-being', desc: 'We support physical, emotional, and social health to ensure complete care for every resident.' },
              { icon: HomeIcon, title: 'Safe and comfortable living', desc: 'We follow strict safety measures and offer warm, personalized environments for peace of mind.' }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F0F4F8] rounded-full mb-4">
                    <Icon className="text-[#5BA3D0]" size={28} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#1F2A44]">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section - Dark Navy Background */}
      <section className="py-24 px-4 bg-[#1F2A44] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tailored care solutions for every need
            </h2>
            <p className="text-gray-300 max-w-2xl">
              Whether it's daily assistance, specialized care, or simply companionship, we provide the 
              support your loved ones need to live comfortably and independently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Pill, title: 'Medication management', desc: 'We improve seniors\' quality of life with mindful medication scheduling and support.' },
              { icon: Clock, title: '24/7 supervision', desc: 'Always someone available when you need help or assistance.' },
              { icon: Utensils, title: 'Nutrition care', desc: 'Home-cooked meals that nourish body and soul.' },
              { icon: Users, title: 'Social activities', desc: 'Social care empowers seniors to stay active, connected, and emotionally fulfilled.' },
              { icon: HomeIcon, title: 'Residential care', desc: 'Personal home care offers essential daily assistance for seniors at home.' },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-[#2D3E5F] rounded-2xl p-8 hover:bg-[#374559] transition-all">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#1F2A44] rounded-lg mb-4">
                    <Icon className="text-[#D4AF37]" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
                </div>
              );
            })}

            {/* CTA Card - Light Blue */}
            <div className="bg-[#5BA3D0] rounded-2xl p-8 flex items-center justify-center">
              <button
                onClick={() => onNavigate('care-services')}
                className="text-center"
              >
                <h3 className="text-2xl font-bold mb-2">Discover our full range of care services</h3>
                <ArrowRight className="mx-auto mt-4" size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - 3 Cards */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#1F2A44]">
              Care plan for your needs
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {/* Shared Room - Light Blue */}
            <div className="bg-[#E8F4F8] rounded-3xl p-8">
              <p className="text-[#5BA3D0] text-sm font-semibold mb-3">Shared room plan</p>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold text-[#1F2A44]">$3,400</span>
                <span className="text-gray-600 text-lg ml-1">/month</span>
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-4 bg-[#0B1E3D] text-white rounded-2xl font-semibold mb-8 hover:bg-[#1F2A44] transition-all"
              >
                Book now
              </button>
              <div className="space-y-3">
                <p className="text-sm text-gray-500 mb-4">Included features:</p>
                {['Shared bedroom', 'All meals included', '24/7 care & supervision', 'All amenities & activities'].map((item, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <span className="text-gray-600 mt-0.5">→</span>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Private Room - Dark Navy with Rounded Top-Right */}
            <div className="relative">
              <div className="bg-[#0B1E3D] text-white rounded-3xl rounded-tr-[80px] p-8">
                <p className="text-[#5BA3D0] text-sm font-semibold mb-3">Private room plan</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-bold">$4,000</span>
                  <span className="text-gray-300 text-lg ml-1">/month</span>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-4 bg-white text-[#0B1E3D] rounded-2xl font-semibold mb-8 hover:bg-gray-100 transition-all"
                >
                  Book now
                </button>
                <div className="space-y-3">
                  <p className="text-sm text-gray-400 mb-4">Included features:</p>
                  {['Private bedroom & bathroom', 'All meals included', 'Medication management', 'Housekeeping & laundry'].map((item, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <span className="text-gray-400 mt-0.5">→</span>
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Customized Plan - Light Gray */}
            <div className="bg-[#E8F4F8] rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#1F2A44] mb-8">Customized plan</h3>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-4 bg-[#0B1E3D] text-white rounded-2xl font-semibold mb-8 hover:bg-[#1F2A44] transition-all"
              >
                Contact us
              </button>
              <div className="space-y-3">
                <p className="text-sm text-gray-500 mb-4">Included features:</p>
                {['Fully customizable hours and care services', 'Comprehensive personal care', 'Health monitoring and specialized medical support', 'Customized meal planning and preparation'].map((item, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <span className="text-gray-600 mt-0.5">→</span>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              📞 Call us for an online session: <a href="mailto:goldenyears25@proton.me" className="text-[#D4AF37] font-semibold hover:underline">goldenyears25@proton.me</a>
            </p>
          </div>
        </div>
      </section>

      {/* Book Appointment Section - Split Layout */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 items-stretch">
            {/* Left Image */}
            <div className="relative h-[500px] md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80" 
                alt="Caregiver with senior"
                className="w-full h-full object-cover rounded-l-3xl"
              />
              {/* Pause button overlay like in template */}
              <button className="absolute bottom-8 left-8 w-12 h-12 bg-[#1F2A44] rounded-lg flex items-center justify-center hover:bg-[#2D3E5F] transition-all">
                <div className="w-2 h-4 bg-white mr-0.5"></div>
                <div className="w-2 h-4 bg-white"></div>
              </button>
            </div>

            {/* Right Form */}
            <div className="bg-[#F0F4F8] p-12 md:p-16 rounded-r-3xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1F2A44]">
                Book appointment
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#1F2A44] mb-2">
                      Name*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1F2A44] mb-2">
                      Contact no*
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your contact number"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-gray-700"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#1F2A44] mb-2">
                      Service
                    </label>
                    <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-gray-700">
                      <option>Choose a service</option>
                      <option>Private Room Care</option>
                      <option>Shared Room Care</option>
                      <option>Customized Plan</option>
                      <option>Tour Visit</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1F2A44] mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your city or area"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-gray-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1F2A44] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-gray-700 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className="w-full md:w-auto px-10 py-4 bg-[#1F2A44] text-white rounded-lg font-semibold hover:bg-[#2D3E5F] transition-all"
                >
                  Book now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}