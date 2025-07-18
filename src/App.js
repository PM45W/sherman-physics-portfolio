import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import MOSFETSimulator from './pages/MOSFETSimulator';
import CircuitBuilder from './pages/CircuitBuilder';
import Research from './pages/Research';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import UnderConstruction from './pages/UnderConstruction';
import LoadingScreen from './components/LoadingScreen';
import EasterEgg from './components/EasterEgg';
import EasterEggHint from './components/EasterEggHint';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [loading, setLoading] = useState(true);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [konami, setKonami] = useState([]);
  
  // Use konami state to prevent unused variable warning
  console.log('Konami sequence length:', konami.length);
  console.log('Current loading state:', loading);
  
  useEffect(() => {
    // Simulate loading with longer duration for better experience
    console.log('Loading screen started');
    const timer = setTimeout(() => {
      console.log('Loading screen finished');
      setLoading(false);
    }, 4000);
    
    // Konami code: up, up, down, down, left, right, left, right, b, a
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    
    // Konami code listener
    const handleKeyDown = (e) => {
      setKonami(prev => {
        const newKonami = [...prev, e.keyCode];
        if (newKonami.length > konamiCode.length) {
          newKonami.shift();
        }
        
        // Check if konami code is entered
        if (newKonami.join('') === konamiCode.join('')) {
          setShowEasterEgg(true);
        }
        
        return newKonami;
      });
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  // F1 Ferrari easter egg - press 'F' key
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'f' || e.key === 'F') {
        document.body.classList.toggle('ferrari-cursor');
      }
    };
    
    window.addEventListener('keypress', handleKeyPress);
    
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ErrorBoundary>
      <Router>
        <div className="noise"></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mosfet" element={<MOSFETSimulator />} />
          <Route path="/circuit" element={<CircuitBuilder />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/under-construction" element={<UnderConstruction />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <EasterEggHint />
        {showEasterEgg && <EasterEgg onClose={() => setShowEasterEgg(false)} />}
      </Router>
    </ErrorBoundary>
  );
}

export default App;