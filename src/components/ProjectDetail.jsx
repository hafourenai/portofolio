import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target } from 'lucide-react';
import { projects } from '../data/content';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === parseInt(id));
  const [activeImage, setActiveImage] = React.useState(project?.image || "");

  React.useEffect(() => {
    if (project) {
      setActiveImage(project.image);
    }
  }, [project]);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <button 
            onClick={() => navigate('/projects')}
            className="btn-primary"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-bg-card border border-transparent hover:border-border-light"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </button>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Project Image Gallery */}
            <div className="space-y-4">
              <div className="relative group">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-lift bg-bg-card border border-border-light">
                  {activeImage ? (
                    <motion.img 
                      key={activeImage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      src={activeImage} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-blue-50">
                      <Target className="w-16 h-16 text-primary/40" />
                    </div>
                  )}
                </div>
              </div>

              {/* Thumbnails */}
              {project.images && project.images.length > 1 && (
                <div className="flex flex-wrap gap-3">
                  {project.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(img)}
                      className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImage === img ? 'border-primary ring-2 ring-primary/20' : 'border-transparent hover:border-border-light'
                      }`}
                    >
                      <img src={img} alt={`${project.title} ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Project Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-primary/10 border border-border-light rounded-lg text-sm font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Live Project
                  </a>
                )}
                <a
                  href={project.github || "https://github.com/hafourenai"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">Key Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {(project.detailedHighlights || project.highlights).map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-text-secondary">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">About This Project</h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                {project.detailedDescription ? (
                  <p>{project.detailedDescription}</p>
                ) : (
                  <>
                    <p>
                      This project demonstrates advanced capabilities in {project.tech[0].toLowerCase()} 
                      development with a focus on security and performance. The implementation follows 
                      industry best practices and incorporates modern development methodologies.
                    </p>
                    <p>
                      Key challenges addressed include scalability, maintainability, and user experience 
                      optimization. The solution has been thoroughly tested and validated in real-world 
                      scenarios.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">Project Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-text-muted">Completed</p>
                    <p className="font-medium">{project.year || "2024"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-text-muted">Team Size</p>
                    <p className="font-medium">{project.teamSize || "Individual Project"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-text-muted">Category</p>
                    <p className="font-medium">{project.category || "Security Tool"}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/projects"
                  className="block w-full btn-secondary text-center"
                >
                  View All Projects
                </Link>
                <button
                  onClick={() => navigate('/#contact')}
                  className="block w-full btn-primary text-center"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;