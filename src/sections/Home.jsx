import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import Container from '../components/Container';
import profile from '../assets/profile.png';

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-16 relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left z-10"
          >
            {/* Small Minimalist Badge */}
            <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary tracking-wide mb-6">
              Frontend Developer
            </div>

            {/* Main Headings */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Hi, I'm <br />
              <span className="text-gradient-accent font-black block mt-1 py-1">
                Shaik Ameen
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 block mt-2 leading-snug">
                Frontend Developer Building Modern Web Experiences
              </span>
            </h1>

            {/* Paragraph Bio Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
              Computer Science graduate passionate about creating responsive and user-friendly web applications using React and JavaScript.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="bg-primary text-slate-900 font-bold px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#05a4bf] hover:shadow-md transition duration-200 group text-sm"
              >
                View Projects 
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition duration-200" />
              </a>

              <a
                href="#contact"
                className="border border-white/8 hover:bg-white/5 text-white font-bold px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition duration-200 text-sm"
              >
                <FileText size={16} className="text-secondary" />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right Column - Profile Image Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Subtle radial background glow behind card */}
            <div className="absolute w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-30 filter blur-3xl pointer-events-none" />

            {/* Main Profile Image Card with soft border gradient */}
            <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-2xl p-[1px] bg-gradient-to-tr from-primary/30 to-secondary/30 shadow-xl overflow-hidden group">
              <div className="w-full h-full rounded-2xl bg-[#1E293B] overflow-hidden p-2">
                <img
                  src={profile}
                  alt="Shaik Ameen"
                  className="w-full h-full object-cover rounded-xl transition duration-500 group-hover:scale-[1.02]"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div class="w-full h-full flex flex-col items-center justify-center bg-[#1E293B] p-6 text-center text-white">
                        <div class="w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center mb-3 font-extrabold text-lg">SA</div>
                        <div class="font-bold text-sm">Shaik Ameen</div>
                        <div class="text-primary text-xs mt-1">Frontend Engineer</div>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
          </motion.div>
          
        </div>
      </Container>
    </section>
  );
}
