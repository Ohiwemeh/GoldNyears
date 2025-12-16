import { Heart, Pill, Clock, UtensilsCrossed, Home, Car, Users } from 'lucide-react';

export default function CareServices() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1F2A44] text-white py-16 px-4 page-content">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Personalized Care for Everyday Living
          </h1>
          <p className="text-xl text-gray-200">
            At Golden Years Residence, we serve adults ages 55–85 who need support with daily living 
            but still value independence, choice, and community.
          </p>
        </div>
      </section>

      {/* ADL Support */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <Heart className="text-[#D4AF37]" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44]">
              Activities of Daily Living (ADL) Support
            </h2>
          </div>
          
          <p className="text-lg text-gray-700 mb-6">We assist with:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              'Bathing and personal hygiene',
              'Dressing and grooming',
              'Toileting and continence care',
              'Mobility and safe transfers',
              'Eating and meal assistance as needed'
            ].map((item, index) => (
              <div key={index} className="bg-[#F3F3F5] p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full shrink-0"></div>
                  <p className="text-gray-700">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg text-gray-700 leading-relaxed bg-white p-6 rounded-lg shadow-md">
            Our caregivers provide help with patience, respect, and kindness — never rushing or treating residents like tasks.
          </p>
        </div>
      </section>

      {/* Medication Management */}
      <section className="py-16 px-4 bg-[#F3F3F5]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <Pill className="text-[#D4AF37]" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44]">
              Medication Management
            </h2>
          </div>
          
          <p className="text-lg text-gray-700 mb-6">We help ensure medications are:</p>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 shrink-0"></div>
                <p className="text-gray-700 text-lg">Taken on schedule</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 shrink-0"></div>
                <p className="text-gray-700 text-lg">Tracked and documented</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 shrink-0"></div>
                <p className="text-gray-700 text-lg">Coordinated with families and healthcare providers</p>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mt-6 text-center">
            This reduces stress for residents and gives families peace of mind.
          </p>
        </div>
      </section>

      {/* 24/7 Supervision */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <Clock className="text-[#D4AF37]" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44]">
              24/7 Supervision
            </h2>
          </div>
          
          <p className="text-lg text-gray-700 mb-6">There is always someone available to:</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-gray-700 font-medium">Provide assistance</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-gray-700 font-medium">Monitor safety and well-being</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-gray-700 font-medium">Respond to needs, day or night</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meals, Housekeeping & More */}
      <section className="py-16 px-4 bg-[#F3F3F5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1F2A44] text-center">
            Meals, Housekeeping & More
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <UtensilsCrossed className="text-[#D4AF37] mb-4" size={36} />
              <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">Meals & Nutrition</h3>
              <p className="text-gray-700">Home-style meals served daily with snacks and hydration throughout the day</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Home className="text-[#D4AF37] mb-4" size={36} />
              <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">Housekeeping</h3>
              <p className="text-gray-700">Housekeeping and linen services to maintain a clean, comfortable environment</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Home className="text-[#D4AF37] mb-4" size={36} />
              <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">Laundry Services</h3>
              <p className="text-gray-700">Complete laundry services for residents' clothing and linens</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Car className="text-[#D4AF37] mb-4" size={36} />
              <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">Transportation</h3>
              <p className="text-gray-700">Assistance for medical appointments and essential errands (as arranged)</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="text-[#D4AF37] mb-4" size={36} />
              <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">Activities</h3>
              <p className="text-gray-700">Social, recreational, and faith-friendly activities</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Heart className="text-[#D4AF37] mb-4" size={36} />
              <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">Customized Care</h3>
              <p className="text-gray-700">Routines aligned with each resident's needs, preferences, and abilities</p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              We work with families to customize routines that align with each resident's needs, preferences, and abilities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
