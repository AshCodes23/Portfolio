import { motion } from 'framer-motion';
import { Terminal, BrainCircuit, MonitorPlay, Cloud, Code2, Award, Calendar } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '10+', icon: Code2 },
    { label: 'Tech Skills', value: '50+', icon: Terminal },
    { label: 'Since', value: '2023', icon: Calendar },
  ];

  const specializations = [
    { title: 'Full-Stack + AI/ML', icon: Terminal, desc: 'Bridging robust backend systems with intelligent AI models for end-to-end solutions.' },
    { title: 'LLMs & RAG Systems', icon: BrainCircuit, desc: 'Building semantic retrieval systems and integrating Generative AI into applications.' },
    { title: 'Real-Time Computer Vision', icon: MonitorPlay, desc: 'Optimizing continuous video stream processing and pose detection pipelines.' },
    { title: 'Cloud & MLOps', icon: Cloud, desc: 'Deploying scalable architectures using Docker, Kubernetes, and AWS.' },
  ];

  return (
    <section id="about" className="w-full py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-slate-300 text-lg leading-relaxed"
          >
            <p>
              I am a passionate software engineer currently pursuing my BTech in Computer Science (2023-2027). 
              My journey began with a curiosity for how things work, evolving into a deep dive into full-stack 
              development and artificial intelligence.
            </p>
            <p>
              I specialize in converting complex AI problems into elegant, user-friendly solutions. Whether it's 
              building a real-time pose detection system or an enterprise-grade agentic RAG pipeline, I focus on 
              architectures that are scalable, maintainable, and highly performant.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-medium">
              <Award size={18} />
              <span>Pursuing BTech Computer Science (2023-2027)</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, i) => (
              <div key={i} className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-colors">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {specializations.map((spec, i) => (
            <div key={i} className="bg-slate-800/30 border border-slate-700/30 rounded-2xl p-6 hover:bg-slate-800/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 text-cyan-400">
                <spec.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{spec.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{spec.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
