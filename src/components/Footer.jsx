import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Container from './Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-background/80 py-8 relative z-10">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-linear-to-tr from-primary to-secondary flex items-center justify-center text-slate-900 font-extrabold text-[10px]">
              SA
            </span>
            <span className="font-bold text-white text-sm tracking-wide">
              Shaik Ameen
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-500 font-medium">
            © {currentYear} Shaik Ameen. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-primary transition duration-300"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-secondary transition duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:ameenshaik00000@gmail.com"
              className="text-slate-500 hover:text-primary transition duration-300"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>

        </div>
      </Container>
    </footer>
  );
}
