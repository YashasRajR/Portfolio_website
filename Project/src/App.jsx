import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import StarsCanvas from './components/canvas/Stars';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  // Smooth spring effect for the progress bar
  const scaleX = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  // Track mouse for the ambient radial glow effect
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="relative z-0 bg-[#030014] text-white min-h-screen font-sans selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* Custom Cursor Glow tracking the mouse */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.08), transparent 40%)`
        }}
      />

      {/* Top Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 transform origin-left z-50 shadow-[0_0_10px_rgba(168,85,247,0.8)]" 
        style={{ scaleX }} 
      />

      <div className="relative z-0">
        <StarsCanvas />
        <Navbar />
        <Hero />
      </div>
      
      <main className="max-w-7xl mx-auto px-6 sm:px-16 lg:px-24">
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      
      <footer className="w-full border-t border-purple-900/30 py-8 text-center text-sm mt-32 backdrop-blur-md relative z-10">
        <p className="text-gray-400 tracking-wider font-mono">Crafted with React, Framer Motion & Tailwind</p>
      </footer>
    </div>
  );
}

export default App;
