import React from 'react';
import Navbar from './components/Navbar';
import InteractiveBackground from './components/InteractiveBackground';
import Footer from './components/Footer';

// Sections
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Timeline from './sections/Timeline';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen text-white selection:bg-primary/20 selection:text-white">
      {/* Elegantly styled background containing blurred circles and 2% opacity grid */}
      <InteractiveBackground />

      {/* Floating Glassmorphic Pill Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="relative z-10">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      {/* Premium Footer */}
      <Footer />
    </div>
  );
}
