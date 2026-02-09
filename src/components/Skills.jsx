import React from 'react';
import { skills } from '../data/content';
import { motion } from 'framer-motion';
import { Shield, Code, Search, Lock } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: "Security Analysis",
      skills: ["Threat Analysis", "Risk Assessment", "Security Documentation"]
    },
    {
      icon: Search,
      title: "Detection & Testing", 
      skills: ["Phishing Detection", "Web Security Testing", "Vulnerability Assessment"]
    },
    {
      icon: Code,
      title: "Technical Skills",
      skills: ["Python Security Scripts", "OWASP Top 10", "practical familiarity with Metasploit"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-2 block">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            My Skills
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Specialized in cyber security analysis with focus on threat detection and web application security
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-bg-card border border-border-light rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-text-secondary font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* All skills grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="glass-card p-10 text-center bg-bg-card">
            <h3 className="text-xl font-bold text-text-primary mb-8">
              Technical Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-bg-secondary border border-border-light rounded-full text-text-secondary font-medium hover:border-primary hover:text-primary hover:shadow-sm transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;