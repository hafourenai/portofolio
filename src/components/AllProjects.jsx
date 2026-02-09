import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Star, Shield, ArrowRight, Filter } from 'lucide-react';
import { projects } from '../data/content';

const AllProjects = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = React.useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tech.some(tech => 
        tech.toLowerCase().includes(filter.toLowerCase())
      ));

  const techOptions = ['all', ...new Set(projects.flatMap(p => p.tech))];

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-6 mx-auto px-4 py-2 rounded-full hover:bg-bg-card border border-transparent hover:border-border-light"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            All Projects
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Complete collection of my cyber security projects and tools
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Filter className="w-5 h-5 text-text-muted" />
            {techOptions.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === tech
                    ? 'bg-primary text-white'
                    : 'bg-bg-card border border-border-light text-text-secondary hover:border-primary/30 hover:text-primary'
                }`}
              >
                {tech === 'all' ? 'All Projects' : tech}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card group overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300"
            >
              {/* Project image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-bg-secondary group-hover:scale-[1.02] transition-transform duration-500">
                {project.image ? (
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
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Shield className="w-16 h-16 text-primary/40 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-text-secondary mb-6">
              Try adjusting the filter to see more projects
            </p>
            <button
              onClick={() => setFilter('all')}
              className="btn-primary"
            >
              Show All Projects
            </button>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8 text-center"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {projects.length}
              </div>
              <p className="text-text-secondary">Total Projects</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {projects.reduce((acc, p) => acc + p.tech.length, 0)}
              </div>
              <p className="text-text-secondary">Technologies Used</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {projects.filter(p => p.link && p.link !== "#").length}
              </div>
              <p className="text-text-secondary">Live Projects</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AllProjects;