import { motion } from 'framer-motion';
import { Layout, Server, Database, Brain, Cloud, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Layout,
      skills: ["JavaScript/TypeScript", "Python", "Java", "C/C++", "SQL (MySQL)"]
    },
    {
      title: "Frontend",
      icon: Layout,
      skills: ["React.js", "Next.js", "Vue.js", "HTML/CSS", "Tailwind CSS"]
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["Generative AI", "LLMs", "RAG", "FAISS", "CNNs", "LSTM", "OpenCV", "TensorFlow", "PyTorch"]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "GitHub Actions", "Vercel", "Model Deployment"]
    },
    {
      title: "Tools & Methodologies",
      icon: Settings,
      skills: ["Git", "GitHub", "Postman", "Prisma", "Stripe API", "Agile/Scrum", "TDD", "Design Patterns"]
    }
  ];

  return (
    <section id="skills" className="w-full py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-400">
                  <category.icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 text-sm font-medium bg-slate-800 text-slate-300 rounded-md border border-slate-700 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
