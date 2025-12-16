import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'What ages do you accept?',
      answer: 'We primarily serve adults ages 55–85 who need assistance with daily living but do not require skilled nursing or hospital-level care.'
    },
    {
      question: 'Are you a nursing home?',
      answer: 'No, Golden Years Residence is a Residential Home for the Aged, not a nursing home. We provide non-medical assistance with daily living, 24/7 supervision, meals, and support.'
    },
    {
      question: 'How many residents do you care for at one time?',
      answer: 'Our planned licensed capacity is 3–4 residents, which allows us to provide truly personalized attention in a calm, homelike environment.'
    },
    {
      question: 'Do you provide memory care?',
      answer: 'We support residents with early memory care needs through routine, structure, and supervision. We are not a locked dementia unit and may refer families to a higher level of care if needed over time.'
    },
    {
      question: 'Do you accept veterans?',
      answer: 'Yes. We are proud to welcome veterans and work with families to understand available benefits and resources.'
    },
    {
      question: 'What is included in the monthly rate?',
      answer: 'ADL support, medication management, 24/7 supervision, meals, housekeeping, laundry, activities, and room furnishings are included. Some specialized services may have additional charges, which we explain in advance.'
    },
    {
      question: 'Can family members visit?',
      answer: 'Yes. We encourage family visits and will work with you to set visitation guidelines that support resident safety and well-being.'
    },
    {
      question: 'Where are you located?',
      answer: 'We serve the Memphis–Collierville area. Our mailing/office address is: 875 W. Poplar Ave, Suite 23-225, Collierville, TN 38017. Our residence address is: 5258 Rolling Ridge Cove, Memphis, TN 38141.'
    },
    {
      question: 'How do we get started?',
      answer: 'You can call us, email us, or fill out our contact form. Our team can help you determine if Golden Years Residence is a good fit and schedule a tour.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1F2A44] text-white py-16 px-4 page-content">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-200">
            Find answers to common questions about Golden Years Residence
          </p>
        </div>
      </section>

      {/* FAQs List */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#F3F3F5] transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#1F2A44] pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="text-[#D4AF37] shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-[#D4AF37] shrink-0" size={24} />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-5 pt-2 bg-[#F3F3F5]">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#F3F3F5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#1F2A44]">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We're here to help. Reach out to us and we'll be happy to answer any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:goldenyears25@proton.me"
              className="bg-[#D4AF37] text-[#1F2A44] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#c49d2f] transition-colors"
            >
              Email Us
            </a>
            <a
              href="tel:"
              className="bg-[#1F2A44] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2a3a5a] transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
