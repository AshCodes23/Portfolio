import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, Loader2, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="w-full py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Interested in working together?</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Whether you have a question, a project idea, or just want to say hi, 
                my inbox is always open. I'll get back to you within <span className="text-cyan-400 font-bold">24 hours</span>.
              </p>
            </div>

            <a 
              href="mailto:23thakurashmit@gmail.com" 
              className="group flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all w-fit text-center sm:text-left mx-auto sm:mx-0 break-all"
            >
              <div className="w-12 h-12 shrink-0 bg-cyan-500/10 text-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div className="min-w-0">
                <p className="text-slate-400 text-sm font-medium">Email me at</p>
                <p className="text-white text-base sm:text-lg font-bold group-hover:text-cyan-400 transition-colors break-all shrink">
                  23thakurashmit@gmail.com
                </p>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/40 border border-slate-700 rounded-3xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                  placeholder="Rahul Sharma"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                  placeholder="rahul@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all resize-none"
                  placeholder="How can I help you construct something great?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className="w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {status === 'idle' || status === 'error' ? (
                  <>
                    <span>Send Message</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                ) : status === 'submitting' ? (
                  <>
                    <span>Sending...</span>
                    <Loader2 size={18} className="animate-spin" />
                  </>
                ) : (
                  <>
                    <span>Message Sent!</span>
                    <CheckCircle size={18} />
                  </>
                )}
              </button>

              {status === 'error' && (
                <p className="text-red-400 text-sm text-center mt-2">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
