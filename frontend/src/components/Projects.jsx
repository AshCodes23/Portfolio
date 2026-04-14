import { motion } from 'framer-motion';
import { ExternalLink, Code2, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Agentic RAG System',
      duration: 'Jan 2025 – Feb 2025',
      description: 'Engineered a backend system using LLMs and FAISS for semantic retrieval across 400+ embeddings. Built RESTful APIs and modular microservices for real-time query processing.',
      highlights: ['25% Latency Reduction', '30% Accuracy Improvement'],
      tech: ['LLMs', 'FAISS', 'Node.js', 'Docker', 'REST APIs'],
      github: 'https://github.com/AshCodes23/Agentic-RAG-System-with-Local-LLMs-Document-Grounded-Question-Answering-.git',
      demo: 'https://demo.com'
    },
    {
      title: 'Deepfake Detection System',
      duration: 'Nov 2024 – Dec 2024',
      description: 'Developed a CNN-LSTM pipeline for video classification on 10k+ frames. Achieved 96% accuracy through hyperparameter tuning and optimization.',
      highlights: ['96% Accuracy', '10k+ Frames Processed'],
      tech: ['CNN-LSTM', 'TensorFlow', 'OpenCV', 'Python'],
      github: 'https://github.com/AshCodes23/Deepfake_Detection_System-Using-Deep-Learning.git',
      demo: 'https://demo.com'
    },
    {
      title: 'Real-Time Exercise Correction',
      duration: 'Sep 2024 – Oct 2024',
      description: 'Built a real-time system (30 FPS) for pose detection using computer vision. Designed efficient pipeline for continuous video stream processing.',
      highlights: ['30 FPS Real-time', '25% Accuracy Improvement'],
      tech: ['Computer Vision', 'Pose Detection', 'OpenCV'],
      github: 'https://github.com/AshCodes23/AI-Exercise-Pose-Correction-using-ML.git',
      demo: 'https://demo.com'
    },
    {
      title: 'Patreon Clone Full-Stack',
      duration: 'Jul 2024 – Aug 2024',
      description: 'Developed a full-stack application using Next.js, Node.js, and MongoDB. Designed secure authentication and payment systems using JWT and Stripe API.',
      highlights: ['Secure Authentication', 'Payment Integration'],
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe API', 'JWT'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ];

  return (
    <section id="projects" className="w-full py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col h-full"
            >
              {/* Top Gradient Bar */}
              <div className="h-2 w-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-75 group-hover:opacity-100 transition-opacity" />
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-400 text-sm font-mono">{project.duration}</p>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-full hover:bg-slate-700 transition-colors">
                      <FaGithub size={20} />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-cyan-400 bg-slate-900 rounded-full hover:bg-slate-700 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, i) => (
                      <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-cyan-400 bg-cyan-400/10 rounded border border-cyan-400/20">
                        <Sparkles size={12} />
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-slate-700/50 pt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-medium text-slate-400 px-2.5 py-1 bg-slate-900 rounded border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
