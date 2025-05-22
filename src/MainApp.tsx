import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import AIInterests from './components/AIInterests';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import './index.css';

// Scroll restoration component
const ScrollToTop = () => {
  const location = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
};

const MainApp: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-primary text-light">
        <Navbar />
        <main className="relative">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Hero />
                  <About />
                  <Projects />
                  <AIInterests />
                  <Blog />
                  <Contact />
                  <AIAssistant />
                </>
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default MainApp; 