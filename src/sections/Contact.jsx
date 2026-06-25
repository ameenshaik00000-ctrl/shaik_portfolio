import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2 } from 'lucide-react';
import Container from '../components/Container';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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
              Contact
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Let's Work Together
            </h3>
            <p className="text-slate-300 mt-4 leading-relaxed">
              Have a project idea, job opportunity, or just want to say hello? I'd love to hear from you.
            </p>
          </motion.div>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-8 max-w-4xl mx-auto text-left">

          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="glass-card p-8 rounded-2xl h-full flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-white mb-6">
                  Get In Touch
                </h4>

                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-primary shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="block text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Email</span>
                      <a href="mailto:ameenshaik00000@gmail.com" className="text-sm font-medium text-white hover:text-primary transition duration-300">
                        ameenshaik00000@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-secondary shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="block text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Location</span>
                      <span className="text-sm font-medium text-white">
                        Hyderabad, Telangana, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-10 pt-6 border-t border-white/5">
                <span className="block text-[11px] text-slate-500 font-semibold uppercase tracking-wider mb-3">
                  Social
                </span>
                <div className="flex gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 hover:border-primary/30 hover:text-primary text-slate-400 flex items-center justify-center transition duration-300"
                    aria-label="GitHub"
                  >
                    <Github size={17} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 hover:border-secondary/30 hover:text-secondary text-slate-400 flex items-center justify-center transition duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={17} />
                  </a>
                  <a
                    href="mailto:shaikameen.dev@gmail.com"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 hover:border-primary/30 hover:text-primary text-slate-400 flex items-center justify-center transition duration-300"
                    aria-label="Email"
                  >
                    <Mail size={17} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 rounded-2xl h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <label htmlFor="contact-name" className="block text-[11px] text-slate-500 font-semibold uppercase tracking-wider mb-2">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-white/5 border border-white/8 hover:border-white/15 focus:border-primary/50 rounded-xl px-4 py-3 outline-none text-white text-sm transition duration-300 placeholder:text-slate-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-[11px] text-slate-500 font-semibold uppercase tracking-wider mb-2">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full bg-white/5 border border-white/8 hover:border-white/15 focus:border-primary/50 rounded-xl px-4 py-3 outline-none text-white text-sm transition duration-300 placeholder:text-slate-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-[11px] text-slate-500 font-semibold uppercase tracking-wider mb-2">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        className="w-full bg-white/5 border border-white/8 hover:border-white/15 focus:border-primary/50 rounded-xl px-4 py-3 outline-none text-white text-sm transition duration-300 resize-none placeholder:text-slate-600"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading || !formData.name || !formData.email || !formData.message}
                      className="w-full bg-primary text-slate-900 font-bold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#05a4bf] transition duration-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-slate-900/20 border-t-slate-900 rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={14} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center justify-center text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.1 }}
                      className="w-14 h-14 rounded-full bg-primary/15 border-2 border-primary flex items-center justify-center text-primary mb-5"
                    >
                      <CheckCircle2 size={28} />
                    </motion.div>

                    <h5 className="text-xl font-bold text-white">
                      Message Sent!
                    </h5>
                    <p className="text-slate-400 text-sm mt-2 max-w-xs">
                      Thanks for reaching out. I'll get back to you as soon as possible.
                    </p>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-5 py-2 rounded-xl border border-white/8 hover:bg-white/5 text-sm font-medium text-white transition duration-300"
                    >
                      Send Another
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
