import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Code2, Briefcase, MessageCircle, Mail, ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-cyan-400 font-mono tracking-wide mb-4">Hello, World!</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Hi, I'm <span className="gradient-text">Ashmit Rana</span>
          </h1>
          
          <div className="text-xl md:text-3xl font-medium text-slate-300 mb-8 h-12">
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'AI/ML Engineer',
                2000,
                'Open Source Contributor',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="max-w-2xl text-lg text-slate-400 mb-10 mx-auto leading-relaxed">
            I craft production-grade, intentional digital experiences. From scalable web applications 
            to robust machine learning models, I transform complex problems into elegant, user-friendly solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="#projects" 
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all w-full sm:w-auto"
            >
              View Projects
            </a>
            <a 
              href="https://drive.google.com/file/d/15H4DfC28qWycU_PC6ySVHGeK5jFZT2eL/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-medium transition-all w-full sm:w-auto"
            >
              Download Resume
            </a>
          </div>

          <div className="flex items-center justify-center space-x-6">
            {[
              { icon: FaGithub, href: 'https://github.com/AshCodes23' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ashmit-rana-6906b8203/' },
              { icon: Mail, href: 'mailto:23thakurashmit@gmail.com' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors border border-slate-800 hover:border-slate-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about">
          <ChevronDown size={32} className="hover:text-cyan-400 transition-colors" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
