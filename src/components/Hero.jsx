import React from 'react';
import { personalInfo } from '../data/content';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="absolute inset-0 bg-bg-primary/40 backdrop-blur-[100px]" /> {/* Soften blobs */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                Cyber Security Analyst
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-display font-extrabold text-text-primary tracking-tight mb-6"
            >
              Securing the <br /> 
              <span className="gradient-text-primary">Digital World</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {personalInfo.tagline}. I build robust defense systems and automated detectors to protect web infrastructures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary group"
              >
                View Portfolio
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a 
                href={personalInfo.cvUrl}
                download
                className="btn-secondary"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex items-center justify-center lg:justify-start gap-6"
            >
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-text-muted hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          {/* Visual/Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 relative hidden lg:block"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[4/6] max-h-[400px]">
              {/* Abstract decorative circles */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full opacity-60 animate-blob" />
              <div className="absolute -right-8 top-0 w-64 h-64 bg-amber-100 rounded-full opacity-60 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
              <div className="absolute -left-8 -bottom-8 w-64 h-64 bg-pink-100 rounded-full opacity-60 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
              
              {/* Profile Image Container */}
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-lift border-[8px] border-white/50 backdrop-blur-sm">
                 <img 
                   src={personalInfo.profileImage} 
                   alt={personalInfo.name} 
                   className="w-full h-full object-cover object-top"
                 />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;