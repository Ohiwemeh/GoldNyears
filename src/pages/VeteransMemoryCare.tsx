import { Flag, Heart, Shield, Clock, ArrowRight } from 'lucide-react';

interface VeteransMemoryCareProps {
  onNavigate: (page: string) => void;
}

export default function VeteransMemoryCare({ onNavigate }: VeteransMemoryCareProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1F2A44] text-white py-16 px-4 page-content">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Honoring Veterans & Supporting Memory Care Needs
          </h1>
          <p className="text-xl text-gray-200">
            Golden Years Residence has a special heart for veterans, senior citizens, and individuals 
            experiencing early memory care needs.
          </p>
        </div>
      </section>

      {/* Support for Veterans */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <Flag className="text-[#D4AF37]" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44]">
              Support for Veterans
            </h2>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Our founder's military background means we understand:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#D4AF37]">
              <Shield className="text-[#D4AF37] mb-4" size={36} />
              <h3 className="text-xl font-semibold text-[#1F2A44] mb-3">Military Culture</h3>
              <p className="text-gray-700">
                The unique culture and experiences of veterans
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#D4AF37]">
              <Heart className="text-[#D4AF37] mb-4" size={36} />
              <h3 className="text-xl font-semibold text-[#1F2A44] mb-3">Respect & Honor</h3>
              <p className="text-gray-700">
                The importance of respect, routine, and honor
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#D4AF37]">
              <Flag className="text-[#D4AF37] mb-4" size={36} />
              <h3 className="text-xl font-semibold text-[#1F2A44] mb-3">Camaraderie</h3>
              <p className="text-gray-700">
                The value of camaraderie and shared stories
              </p>
            </div>
          </div>

          <div className="mt-8 bg-[#F3F3F5] p-8 rounded-lg">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              We aim to create an environment where veterans and seniors feel recognized and appreciated for their service.
            </p>
          </div>
        </div>
      </section>

      {/* Gentle Memory Care Support */}
      <section className="py-16 px-4 bg-[#F3F3F5]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <Heart className="text-[#D4AF37]" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44]">
              Gentle Memory Care Support
            </h2>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            For residents with early memory challenges, we provide:
          </p>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <Clock className="text-[#D4AF37] mt-1 shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">Structured Daily Routines</h3>
                  <p className="text-gray-700">
                    Consistent schedules that provide comfort and reduce confusion
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <Heart className="text-[#D4AF37] mt-1 shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">Calm Environment</h3>
                  <p className="text-gray-700">
                    Low-stimulation setting designed to reduce stress and anxiety
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <Heart className="text-[#D4AF37] mt-1 shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">Patience & Repetition</h3>
                  <p className="text-gray-700">
                    Understanding approach with gentle reminders and reassurance
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <Shield className="text-[#D4AF37] mt-1 shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">Safety-Minded Supervision</h3>
                  <p className="text-gray-700">
                    Constant awareness and monitoring to ensure resident safety
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <Heart className="text-[#D4AF37] mt-1 shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">Clear Communication</h3>
                  <p className="text-gray-700">
                    Simple, direct language that's easy to understand
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-[#1F2A44] text-white p-8 rounded-lg">
            <p className="text-lg leading-relaxed text-center">
              <strong>Important Note:</strong> We are not a locked memory-care facility, but we are experienced in supporting 
              residents who need reminders, reassurance, and extra patience. We may refer families to a higher level of care 
              if needed over time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#1F2A44]">
            Let's Talk About Your Loved One
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Every situation is unique. We're here to listen and help you determine if Golden Years Residence is the right fit.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center space-x-2 bg-[#D4AF37] text-[#1F2A44] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#c49d2f] transition-colors"
          >
            <span>Talk with Us About Your Loved One</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
