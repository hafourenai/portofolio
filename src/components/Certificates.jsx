import React, { useState } from 'react';
import { certificates } from '../data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ZoomIn, FileText, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-20 relative bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-2 block">
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-text-primary">
            Certifications
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            certifications and achievements
          </p>
        </motion.div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedCert(cert)}
              className="bg-bg-card rounded-xl shadow-sm border border-border-light p-4 cursor-pointer group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-bg-secondary mb-4 border border-border/50">
                {cert.image ? (
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Award className="w-12 h-12 text-gray-300" />
                  </div>
                )}
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="bg-bg-card/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ZoomIn className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>
              
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-text-primary text-lg leading-tight group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  {cert.issuer && (
                     <p className="text-sm text-text-secondary mt-1">{cert.issuer}</p>
                  )}
                </div>
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors flex-shrink-0"
                  title="View PDF Certificate"
                >
                  <FileText className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-bg-card rounded-2xl shadow-2xl p-2"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 sm:-right-12 text-white hover:text-gray-200 transition-colors p-2"
              >
                <X className="w-8 h-8" />
              </button>
              
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="rounded-xl w-full h-full object-contain max-h-[85vh]"
              />
              
              <div className="absolute bottom-4 left-4 right-4 bg-bg-card/90 backdrop-blur-md p-4 rounded-xl hidden sm:block">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-text-primary">{selectedCert.title}</h3>
                  <a
                    href={selectedCert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2 text-sm"
                  >
                    <FileText className="w-4 h-4" />
                    View PDF
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
