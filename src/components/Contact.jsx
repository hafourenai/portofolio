import React from 'react';
import { contactInfo } from '../data/content';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      
      const webhookUrl = 'https://sheetdb.io/api/v1/378qsd6bi3cu4'; // My Sheet GWeh
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-2 block">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            Get In Touch
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Let's connect and discuss opportunities in cyber security
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-bg-card rounded-3xl shadow-xl overflow-hidden border border-border-light">
          
          <div className="bg-gradient-to-br from-primary to-primary-dark p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Let's Connect
              </h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                I'm always interested in discussing cyber security opportunities, 
                collaborative projects, or sharing insights about threat detection and web security.
              </p>

              <div className="space-y-6">
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-4 text-blue-50 hover:text-white transition-colors">
                  <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-blue-200">Email</p>
                    <p className="font-medium">{contactInfo.email}</p>
                  </div>
                </a>

                <a 
                  href={`https://${contactInfo.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-blue-50 hover:text-white transition-colors"
                >
                  <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-blue-200">LinkedIn</p>
                    <p className="font-medium">Connect with me</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-blue-50">
                  <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-blue-200">Location</p>
                    <p className="font-medium">{contactInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
               <a href={contactInfo.github} target="_blank" rel="noreferrer" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                 <Github className="w-6 h-6" />
               </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10">
            <h3 className="text-xl font-bold text-text-primary mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-bg-secondary border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:border-primary focus:bg-bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-bg-secondary border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:border-primary focus:bg-bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-bg-secondary border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:border-primary focus:bg-bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm">
                    ✅ Thank you for your message! I'll get back to you soon.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">
                    ❌ Oops! Something went wrong. Please try again or email me directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;