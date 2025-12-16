import { Award, Shield, Heart, Users } from 'lucide-react';

export default function OurStory() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1F2A44] text-white py-16 px-4 page-content">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Story: A Mission to Serve in the Golden Years
          </h1>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            After more than 28 years of service to the United States in the U.S. Army, our founder, 
            <strong> Lieutenant Colonel (Retired) Paul C. Ogwo, MBA</strong>, decided to continue serving 
            in a new way — by caring for those in their later years of life.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Paul saw two realities clearly:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2 ml-4">
            <li>America's population is aging rapidly.</li>
            <li>Many families are struggling to find safe, dignified, and truly caring homes for their loved ones.</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed">
            Golden Years Residence LLC was born from a desire to be part of the solution.
          </p>
        </div>
      </section>

      {/* Foundation of Trust */}
      <section className="py-16 px-4 bg-[#F3F3F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1F2A44] text-center">
            A Foundation of Trust
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Award className="text-[#D4AF37] mt-1 shrink-0" size={24} />
                <span className="text-lg text-gray-700">Retired U.S. Army Lieutenant Colonel</span>
              </li>
              <li className="flex items-start space-x-3">
                <Award className="text-[#D4AF37] mt-1 shrink-0" size={24} />
                <span className="text-lg text-gray-700">Master's in Business Administration (MBA)</span>
              </li>
              <li className="flex items-start space-x-3">
                <Shield className="text-[#D4AF37] mt-1 shrink-0" size={24} />
                <span className="text-lg text-gray-700">
                  Held a Department of Defense Top Secret Security Clearance (2003–present)
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Award className="text-[#D4AF37] mt-1 shrink-0" size={24} />
                <span className="text-lg text-gray-700">
                  Certified by the State of Tennessee as Home for the Aged/Assisted Care Living Facility Administrator
                </span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              These experiences shape how Golden Years Residence is run: with discipline, transparency, 
              and a deep sense of responsibility for every resident entrusted to our care.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1F2A44] text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#D4AF37]">
              <h3 className="text-2xl font-bold mb-4 text-[#1F2A44] flex items-center space-x-3">
                <Heart className="text-[#D4AF37]" size={32} />
                <span>Dignity</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Every person is treated with respect, regardless of age or condition.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#D4AF37]">
              <h3 className="text-2xl font-bold mb-4 text-[#1F2A44] flex items-center space-x-3">
                <Shield className="text-[#D4AF37]" size={32} />
                <span>Safety</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Physical, emotional, and spiritual safety are at the heart of our daily routines and environment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#D4AF37]">
              <h3 className="text-2xl font-bold mb-4 text-[#1F2A44] flex items-center space-x-3">
                <Users className="text-[#D4AF37]" size={32} />
                <span>Community</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We cultivate a family-like atmosphere where residents feel known and connected.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#D4AF37]">
              <h3 className="text-2xl font-bold mb-4 text-[#1F2A44] flex items-center space-x-3">
                <Heart className="text-[#D4AF37]" size={32} />
                <span>Faith</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We honor and support each resident's faith traditions and spiritual needs.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-gray-700 italic">
              Golden Years Residence is more than a business. It is a calling to serve those who once cared for us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
