import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    bestTime: '',
    lovedOneAge: '',
    careNeeds: [] as string[],
    moveInTimeframe: '',
    message: ''
  });

  const careNeedsOptions = [
    'ADL support',
    'Memory care',
    'Mobility assistance',
    'Medication management',
    'Other'
  ];

  const handleCheckboxChange = (option: string) => {
    setFormData(prev => ({
      ...prev,
      careNeeds: prev.careNeeds.includes(option)
        ? prev.careNeeds.filter(item => item !== option)
        : [...prev.careNeeds, option]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[400px] flex items-center justify-center text-white px-4 page-content"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1521791055366-0d553872125f?w=1600&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-6">
            Contact Us & Schedule a Tour
          </h1>
          <p className="text-xl">
            We'd be honored to talk with you about your loved one's needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="w-16 h-1 bg-[#E8B4A0] mx-auto mb-8"></div>
          <h2 className="text-3xl font-serif font-light mb-12 text-gray-800 text-center">
            Contact Information
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <Phone className="text-[#E8B4A0] mx-auto mb-4" size={48} strokeWidth={1.5} />
              <h3 className="text-xl font-serif text-gray-800 mb-3">Phone</h3>
              <p className="text-gray-600">Coming Soon</p>
            </div>

            {/* Email */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <Mail className="text-[#E8B4A0] mx-auto mb-4" size={48} strokeWidth={1.5} />
              <h3 className="text-xl font-serif text-gray-800 mb-3">Email</h3>
              <a 
                href="mailto:goldenyears25@proton.me"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                goldenyears25@proton.me
              </a>
            </div>

            {/* Location */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <MapPin className="text-[#E8B4A0] mx-auto mb-4" size={48} strokeWidth={1.5} />
              <h3 className="text-xl font-serif text-gray-800 mb-3">Location</h3>
              <p className="text-gray-600">Memphis-Collierville Area</p>
            </div>
          </div>
        </div>
      </section>

      {/* Addresses */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mailing Address */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif font-light text-gray-800 mb-4">Mailing/Office Address</h3>
              <div className="flex items-start space-x-3">
                <MapPin className="text-[#E8B4A0] mt-1 shrink-0" size={24} />
                <div className="text-gray-600">
                  <p className="font-medium text-gray-800">Golden Years Residence LLC</p>
                  <p>875 W. Poplar Ave, Suite 23-225</p>
                  <p>Collierville, TN 38017</p>
                </div>
              </div>
            </div>

            {/* Residence Address */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif font-light text-gray-800 mb-4">Residence Address</h3>
              <div className="flex items-start space-x-3">
                <MapPin className="text-[#E8B4A0] mt-1 shrink-0" size={24} />
                <div className="text-gray-600">
                  <p>5258 Rolling Ridge Cove</p>
                  <p>Memphis, TN 38141</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="w-16 h-1 bg-[#E8B4A0] mx-auto mb-8"></div>
          <h2 className="text-3xl font-serif font-light mb-8 text-gray-800 text-center">
            Send Us a Message
          </h2>
          
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#1F2A44] mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E8B4A0]"
                />
              </div>

              {/* Phone and Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#1F2A44] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E8B4A0]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#1F2A44] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E8B4A0]"
                  />
                </div>
              </div>

              {/* Best Time to Reach */}
              <div>
                <label htmlFor="bestTime" className="block text-sm font-semibold text-[#1F2A44] mb-2">
                  Best Time to Reach You
                </label>
                <input
                  type="text"
                  id="bestTime"
                  value={formData.bestTime}
                  onChange={(e) => setFormData({ ...formData, bestTime: e.target.value })}
                  placeholder="e.g., Weekday mornings, Evenings after 6pm"
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E8B4A0]"
                />
              </div>

              {/* Loved One's Age */}
              <div>
                <label htmlFor="lovedOneAge" className="block text-sm font-semibold text-[#1F2A44] mb-2">
                  Your Loved One's Age
                </label>
                <input
                  type="text"
                  id="lovedOneAge"
                  value={formData.lovedOneAge}
                  onChange={(e) => setFormData({ ...formData, lovedOneAge: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E8B4A0]"
                />
              </div>

              {/* Primary Care Needs */}
              <div>
                <label className="block text-sm font-semibold text-[#1F2A44] mb-3">
                  Primary Care Needs (select all that apply)
                </label>
                <div className="space-y-2">
                  {careNeedsOptions.map((option) => (
                    <label key={option} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.careNeeds.includes(option)}
                        onChange={() => handleCheckboxChange(option)}
                        className="w-5 h-5 text-[#D4AF37] border-gray-300 rounded focus:ring-[#D4AF37]"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Move-In Timeframe */}
              <div>
                <label htmlFor="moveInTimeframe" className="block text-sm font-semibold text-[#1F2A44] mb-2">
                  Preferred Move-In Timeframe
                </label>
                <select
                  id="moveInTimeframe"
                  value={formData.moveInTimeframe}
                  onChange={(e) => setFormData({ ...formData, moveInTimeframe: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E8B4A0]"
                >
                  <option value="">Select a timeframe</option>
                  <option value="immediate">Immediate (within 2 weeks)</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="1-3-months">1-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="exploring">Just exploring options</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#1F2A44] mb-2">
                  Message / Questions
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your loved one's needs or any questions you have..."
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E8B4A0]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#E8B4A0] text-white px-8 py-3 rounded-full hover:bg-[#d9a08f] transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
