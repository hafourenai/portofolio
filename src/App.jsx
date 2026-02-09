import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';
import ProjectDetail from './components/ProjectDetail';
import AllProjects from './components/AllProjects';

// Context
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-primary selection:text-white">
          {/* Global patterned background */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute inset-0 pattern-grid opacity-[0.03]" />
          </div>

          <Navbar />
          
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={
                <>
                  <div className="pt-24 sm:pt-32 pb-16">
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Certificates />
                    <Contact />
                  </div>
                  <Footer />
                </>
              } />
              <Route path="/project/:id" element={<ProjectDetail />} />
              <Route path="/projects" element={<AllProjects />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;