import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Residence from './pages/Residence';
import CareServices from './pages/CareServices';
import VeteransMemoryCare from './pages/VeteransMemoryCare';
import Pricing from './pages/Pricing';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'our-story':
        return <OurStory />;
      case 'residence':
        return <Residence onNavigate={setCurrentPage} />;
      case 'care-services':
        return <CareServices />;
      case 'veterans-memory-care':
        return <VeteransMemoryCare onNavigate={setCurrentPage} />;
      case 'pricing':
        return <Pricing onNavigate={setCurrentPage} />;
      case 'faqs':
        return <FAQs />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
      <ChatWidget onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
