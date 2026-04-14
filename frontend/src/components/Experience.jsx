import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, GitBranch } from 'lucide-react';

const Experience = () => {
  const timeline = [
    {
      title: "BTech Computer Science",
      subtitle: "Galgotias University (or your university) - Greater Noida",
      date: "2023 - 2027",
      icon: GraduationCap,
      description: "Pursuing undergraduate degree with a focus on core computer science subjects, algorithms, and artificial intelligence. Maintaining excellent academic standing while actively building projects."
    },
    {
      title: "Self-Learning Journey",
      subtitle: "Full-Stack & AI Engineering",
      date: "2022 - Present",
      icon: BookOpen,
      description: "Continuous self-directed learning to master modern web technologies (MERN stack, Next.js) and deep learning frameworks (TensorFlow, PyTorch). Applied learning through building 10+ complex real-world applications."
    },
    {
      title: "Open Source Contributions",
      subtitle: "Global Developer Community",
      date: "2023 - Present",
      icon: GitBranch,
      description: "Actively engaging with the open-source community. Contributing code, squashing bugs, and improving documentation for various tools and libraries in the JavaScript and Python ecosystems."
    }
  ];

  return (
    <section id="experience" className="w-full py-24 bg-slate-900/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-800" />

          <div className="space-y-12 relative">
            {timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-20"
              >
                {/* Timeline Icon */}
                <div className="absolute left-4 -translate-x-1/2 top-0 w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-800 flex items-center justify-center text-cyan-400 z-10 z-[1] shadow-lg shadow-cyan-500/20">
                  <item.icon size={18} />
                </div>

                <div className="bg-slate-800/30 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <span className="text-cyan-400 font-mono text-sm sm:mt-1 bg-cyan-400/10 px-3 py-1 rounded inline-block mt-2 sm:mt-0 w-fit">
                      {item.date}
                    </span>
                  </div>
                  <h4 className="text-slate-400 font-medium mb-4">{item.subtitle}</h4>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
