import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import AIAssistant from './components/AIAssistant'
import AIInterests from './components/AIInterests'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

const MainApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <AIAssistant />
      <AIInterests />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default MainApp 