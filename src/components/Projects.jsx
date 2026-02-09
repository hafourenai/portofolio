import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/content';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Shield, ArrowRight } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-2 block">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            Featured Projects
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
Security tools and analysis projects demonstrating practical cyber security expertis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card group overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300"
            >
              {/* Project image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-bg-secondary group-hover:scale-[1.02] transition-transform duration-500">
                { project.image ? (
                   <img 
                     src={project.image} 
                     alt={project.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-bg-secondary">
                    <Shield className="w-12 h-12 text-primary/40" />
                  </div>
                )}
                
{/* Overlay on hover */}
                 <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    <Link
                     to={`/project/${project.id}`}
                     className="p-3 bg-white rounded-full text-primary hover:scale-110 transition-transform shadow-lg"
                     title="View Details"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    {project.link && project.link !== "#" && (
                      <a
                       href={project.link}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="p-3 bg-white rounded-full text-primary hover:scale-110 transition-transform shadow-lg"
                       title="View Project"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    <a
                     href={project.github || "https://github.com/hafourenai"}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="p-3 bg-white rounded-full text-primary hover:scale-110 transition-transform shadow-lg"
                     title="View Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                 </div>
              </div>

              {/* Project content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                   <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 bg-primary/10 border border-border-light rounded-md text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer / Highlights */}
                 <div className="pt-4 border-t border-border-light flex items-center justify-between text-xs text-text-muted">
                    <div className="flex items-center gap-1">
                       <Star className="w-3.5 h-3.5 text-accent" />
                       <span>{project.highlights[0]}</span>
                    </div>
                    <Link 
                      to={`/project/${project.id}`}
                      className="flex items-center gap-1 text-primary font-medium group/btn hover:text-primary-dark"
                    >
                       View Detail <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all projects button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link to="/projects" className="btn-secondary inline-block">
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;