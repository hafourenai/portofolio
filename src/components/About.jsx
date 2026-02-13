import React from 'react';
import { personalInfo } from '../data/content';
import { motion } from 'framer-motion';
import { Shield, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-2 block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            Who I Am
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Passionate cyber security analyst focused on threat detection and web application security
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[4/6] max-h-[400px]">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl opacity-60" />
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-2xl animate-pulse" />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border-4 border-bg-card">
                <img 
                  src={personalInfo.profileImage} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-0 bg-bg-card p-3 rounded-lg shadow-lift border border-border"
              >
                <Target className="w-6 h-6 text-accent" />
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-4 bottom-4 bg-bg-card p-3 rounded-lg shadow-lift border border-border"
              >
                <Award className="w-6 h-6 text-primary" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                {personalInfo.name}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                I am a sixth-semester Information Systems student at Gunadarma University specializing in security, with a strong interest in understanding real-world cyber threats and defensive strategies.
                My learning journey is driven by curiosity and problem-solving, supported by hands-on experience in developing security tools and analyzing real security incidents, including Trojan-related cases in public-sector environments. 
                I approach cybersecurity with a calm and reflective mindset, focusing on continuous learning, ethical practice, and practical analysis to build reliable and responsible security solutions.
              </p>
              <div className="h-1 w-20 bg-primary/20 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-bg-card border border-border-light rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold text-text-primary text-sm">Focus</h4>
                <p className="text-xs text-text-secondary mt-1">Threat Detection and Defensive Security</p>
              </div>
              
              <div className="bg-bg-card border border-border-light rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold text-text-primary text-sm">Expertise</h4>
                <p className="text-xs text-text-secondary mt-1">Web Security</p>
              </div>
              
              <div className="bg-bg-card border border-border-light rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold text-text-primary text-sm">Approach</h4>
                <p className="text-xs text-text-secondary mt-1">Analytical, ethical, and hands-on learning in controlled and authorized environments</p>
              </div>
            </div>

            <div className="bg-bg-secondary/50 border border-border-light rounded-xl p-6">
              <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4" /> Core Philosophy
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                I believe that meaningful growth in cybersecurity comes from curiosity-driven learning, collaborative support, and responsible experimentation. 
                Every project I undertake is designed to deepen my understanding of real-world threats while strictly adhering to legal, ethical, and professional standards.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;