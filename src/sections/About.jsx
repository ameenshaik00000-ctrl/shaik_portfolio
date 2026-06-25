import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code2, TrendingUp } from 'lucide-react';
import Container from '../components/Container';

export default function About() {
  const stats = [
    {
      id: 1,
      title: 'CGPA',
      value: '8.74',
      description: 'B.Tech CSE Graduate',
      icon: <GraduationCap size={20} className="text-primary" />,
    },
    {
      id: 2,
      title: 'Projects',
      value: '1+',
      description: 'Full-Stack Web Apps',
      icon: <Briefcase size={20} className="text-secondary" />,
    },
    {
      id: 3,
      title: 'Focus',
      value: '100%',
      description: 'React & JavaScript',
      icon: <Code2 size={20} className="text-primary" />,
    },
    {
      id: 4,
      title: 'Growth',
      value: 'Active',
      description: 'Always Learning',
      icon: <TrendingUp size={20} className="text-secondary" />,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column — Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left"
          >
            <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
              About Me
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Crafting Interfaces With Care & Precision
            </h3>
            <p className="text-slate-300 leading-relaxed mb-5">
              I'm a Frontend Developer and Computer Science graduate passionate about building clean, responsive, and high-performance web applications. My work sits at the intersection of thoughtful design and solid engineering.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              I specialize in the React ecosystem — using modern tooling like Tailwind CSS, Vite, and component-driven architectures to create seamless user experiences. I value clean code, accessibility, and fast load times.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2">
              {['React.js', 'JavaScript ES6+', 'Tailwind CSS', 'Responsive Design', 'Git & GitHub'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column — Stats Cards */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-5 rounded-2xl flex flex-col justify-between min-h-[130px] group"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-semibold text-slate-400 group-hover:text-white transition duration-300">
                      {stat.title}
                    </span>
                    <div className="p-2 rounded-xl bg-white/5 border border-white/8 group-hover:border-primary/25 transition duration-300">
                      {stat.icon}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-2xl font-extrabold text-white group-hover:text-primary transition duration-300">
                      {stat.value}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}