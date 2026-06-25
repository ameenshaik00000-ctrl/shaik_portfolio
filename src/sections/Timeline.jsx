import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import Container from '../components/Container';

export default function Timeline() {
  const education = [
    {
      id: 1,
      year: '2021 – 2025',
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'University Graduation',
      grade: 'CGPA: 8.74 / 10',
      description: 'Studied Algorithm Design, DBMS, Operating Systems, and Machine Learning. Built projects using Python, React, and modern web technologies.',
      icon: <GraduationCap size={18} className="text-primary" />,
    },
    {
      id: 2,
      year: '2019 – 2021',
      degree: 'Intermediate (MPC)',
      institution: 'Senior Secondary Education',
      grade: '89.0%',
      description: 'Specialized in Mathematics, Physics, and Chemistry with a strong focus on analytical problem-solving.',
      icon: <Award size={18} className="text-secondary" />,
    },
    {
      id: 3,
      year: '2019',
      degree: 'Secondary School Certificate (SSC)',
      institution: 'High School',
      grade: '98.0%',
      description: 'Graduated with distinction across all subjects including Sciences, Social Studies, and Languages.',
      icon: <Calendar size={18} className="text-primary" />,
    },
  ];

  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
              Education
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Academic Background
            </h3>
            <p className="text-slate-300 mt-4 leading-relaxed">
              My academic journey, from school through engineering graduation.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-secondary/30 to-transparent" />

          <div className="space-y-10">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-14"
              >
                {/* Dot on timeline */}
                <div className="absolute left-3 top-6 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                {/* Card */}
                <div className="glass-card p-6 rounded-2xl group">
                  {/* Year badge */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-semibold text-primary tracking-wide mb-3">
                    <Calendar size={11} />
                    {edu.year}
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-primary transition duration-300 mb-1">
                    {edu.degree}
                  </h4>

                  <div className="flex items-center gap-2 text-xs mb-3">
                    <span className="text-slate-400 font-medium">{edu.institution}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-primary font-mono font-bold bg-primary/10 px-2 py-0.5 rounded text-[11px]">
                      {edu.grade}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
