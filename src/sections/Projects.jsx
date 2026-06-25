import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Container from '../components/Container';

const projects = [
  {
    title: 'Medicine Recommendation System',
    description:
      'ML-powered web application that predicts diseases and suggests medicines, diets, and precautions.',
    tech: ['Python', 'Flask', 'ML'],
    github: 'https://github.com',
  },
  {
    title: 'Personal Portfolio',
    description:
      'Modern responsive portfolio built to showcase my skills, projects, and experience.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    github: 'https://shaik-portfolio-kappa.vercel.app/',
  },
  {
    title: 'Task Manager App',
    description:
      'A productivity application to create, manage, and organize daily tasks efficiently.',
    tech: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com',
  },
  {
    title: 'Weather Dashboard',
    description:
      'Displays real-time weather information using external APIs with responsive UI.',
    tech: ['React', 'API', 'Tailwind'],
    github: 'https://github.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <Container>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Projects
          </h2>

          <h3 className="text-4xl font-bold text-white mb-4">
            Things I've Built
          </h3>

          <p className="text-slate-400">
            A collection of projects that reflect my learning journey and passion for building modern web applications.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-5">
                <Github className="text-primary" size={28} />

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white transition"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              <h4 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h4>

              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </Container>
    </section>
  );
}