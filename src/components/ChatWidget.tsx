import { useState } from 'react';
import { Heart, MessageCircle, X, Send } from 'lucide-react';

export default function ChatWidget() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatStep, setChatStep] = useState(0);
  const [chatData, setChatData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    careLevel: '',
    timeline: ''
  });

  const chatQuestions = [
    { field: 'name', question: "Hi! I'm the GoldNyears Care Assistant. What's your name?", placeholder: "Your name" },
    { field: 'email', question: `Nice to meet you! What's the best email to reach you?`, placeholder: "your@email.com" },
    { field: 'phone', question: "And your phone number?", placeholder: "(555) 123-4567" },
    { field: 'age', question: "What's the age of your loved one?", placeholder: "e.g., 72" },
    { 
      field: 'careLevel', 
      question: "What level of care do they need?",
      options: ['Independent with light help', 'Moderate assistance', 'Memory care support', 'Not sure yet']
    },
    { 
      field: 'timeline', 
      question: "When are you looking to transition?",
      options: ['Immediately', 'Within 1-3 months', '3-6 months', 'Just exploring']
    }
  ];

  const handleChatSubmit = (value: string) => {
    const currentQuestion = chatQuestions[chatStep];
    setChatData(prev => ({ ...prev, [currentQuestion.field]: value }));
    
    if (chatStep < chatQuestions.length - 1) {
      setChatStep(chatStep + 1);
    } else {
      // Final step - show success
      setTimeout(() => {
        alert('Thank you! We\'ll contact you within 24 hours to schedule your personal tour.');
        setChatOpen(false);
        setChatStep(0);
        setChatData({ name: '', email: '', phone: '', age: '', careLevel: '', timeline: '' });
      }, 500);
    }
  };

  return (
    <>
      {/* AI Chatbot Widget */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#E5C158] rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-all z-50 animate-bounce"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Window */}
      {chatOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-[#1F2A44] to-[#2D3E5F] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center">
                <Heart size={20} />
              </div>
              <div>
                <div className="font-bold">Care Assistant</div>
                <div className="text-xs text-gray-300">Quick Fit Assessment</div>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="hover:bg-white/10 rounded-full p-1 transition-all"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-6 h-96 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {/* Bot Message */}
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center shrink-0">
                  <Heart className="text-white" size={16} />
                </div>
                <div className="bg-white rounded-lg rounded-tl-none p-3 shadow max-w-[80%]">
                  <p className="text-sm text-gray-800">{chatQuestions[chatStep].question}</p>
                </div>
              </div>

              {/* Show previous answers */}
              {chatStep > 0 && (
                <div className="flex justify-end">
                  <div className="bg-[#D4AF37] text-white rounded-lg rounded-tr-none p-3 shadow max-w-[80%]">
                    <p className="text-sm">{chatData[chatQuestions[chatStep - 1].field as keyof typeof chatData]}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t bg-white">
            {chatQuestions[chatStep].options ? (
              <div className="space-y-2">
                {chatQuestions[chatStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleChatSubmit(option)}
                    className="w-full px-4 py-3 bg-gray-100 hover:bg-[#D4AF37] hover:text-white rounded-lg text-left transition-all font-medium"
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const input = e.currentTarget.querySelector('input') as HTMLInputElement;
                  if (input.value.trim()) {
                    handleChatSubmit(input.value);
                    input.value = '';
                  }
                }}
                className="flex space-x-2"
              >
                <input
                  type={chatQuestions[chatStep].field === 'email' ? 'email' : chatQuestions[chatStep].field === 'phone' ? 'tel' : 'text'}
                  placeholder={chatQuestions[chatStep].placeholder}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#E5C158] text-white rounded-lg font-bold hover:shadow-lg transition-all"
                >
                  <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
