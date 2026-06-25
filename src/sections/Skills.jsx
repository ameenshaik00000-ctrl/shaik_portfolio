import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';

const SkillBar = ({ name, level, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass-card p-5 rounded-2xl group"
  >
    <div className="flex justify-between items-center mb-3">
      <span className="font-semibold text-white group-hover:text-primary transition duration-300 text-sm">
        {name}
      </span>
      <span className="text-xs font-mono text-primary font-bold bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-md">
        {level}%
      </span>
    </div>
    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
      />
    </div>
  </motion.div>
);

export default function Skills() {
  const skills = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Git & GitHub', level: 78 },
    { name: 'Python', level: 65 },
    { name: 'Responsive Design', level: 88 },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
              Skills
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Technologies I Work With
            </h3>
            <p className="text-slate-300 mt-4 leading-relaxed">
              A focused toolkit of modern web technologies that I use to build fast, responsive, and maintainable applications.
            </p>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {skills.map((skill, idx) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              delay={idx * 0.05}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
