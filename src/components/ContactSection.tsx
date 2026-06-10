import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import {
  Github,
  Linkedin,
  Mail,
  Send,
  GraduationCap,
  Briefcase,
  Code,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const ROADMAP = [
  "Python Development",
  "ERPNext Development",
  "Frappe Framework",
  "React Development",
  "Database Design",
  "Cloud Computing Fundamentals",
  "Computer Networks",
  "Operating Systems"
];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      // Reset success status after 3.5 seconds
      setTimeout(() => setStatus('idle'), 3500);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] border-t border-[#D7E2EA]/10 pt-24 pb-16 px-5 sm:px-8 md:px-10 w-full relative z-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-16 md:mb-20">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 10vw, 120px)' }}
            >
              Resume & Contact
            </h2>
          </FadeIn>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full items-start">

          {/* Left Column: Interactive Resume Details */}
          <div className="flex flex-col gap-8 w-full text-left">

            {/* Career Objective */}
            <FadeIn delay={0.1} y={20} className="rounded-3xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/5 p-6 md:p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-[#B600A8] w-6 h-6" />
                <h3 className="text-[#D7E2EA] font-semibold uppercase tracking-wider text-base sm:text-lg">
                  Career Objective
                </h3>
              </div>
              <p className="text-[#D7E2EA]/80 font-light leading-relaxed text-sm sm:text-base tracking-wide uppercase">
                Aspiring Software Developer with a strong foundation in programming, databases, networking, and software engineering. Seeking opportunities to contribute, learn, and grow in modern software development environments.
              </p>
            </FadeIn>

            {/* Education */}
            <FadeIn delay={0.2} y={20} className="rounded-3xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/5 p-6 md:p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-[#B600A8] w-6 h-6" />
                <h3 className="text-[#D7E2EA] font-semibold uppercase tracking-wider text-base sm:text-lg">
                  Education
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col text-left">
                  <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest font-medium">Degree</span>
                  <span className="text-[#D7E2EA] font-medium text-base sm:text-lg uppercase">Bachelor of Technology (BTech)</span>
                  <span className="text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-wide">Information Technology</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest font-medium">University</span>
                  <span className="text-[#D7E2EA] font-medium text-sm sm:text-base uppercase">APJ Abdul Kalam Technological University (KTU)</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest font-medium">Current Status</span>
                  <span className="text-[#B600A8] font-bold text-sm sm:text-base uppercase tracking-wider">Graduated</span>
                </div>
                <div className="text-left mt-2">
                  <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest block mb-3 font-medium">Relevant Subjects</span>
                  <div className="flex flex-wrap gap-2">
                    {["Operating Systems", "Database Management Systems", "Computer Networks", "Software Engineering", "Data Structures"].map((subject, idx) => (
                      <span key={idx} className="bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 text-[10px] sm:text-xs uppercase text-[#D7E2EA] px-3 py-1.5 rounded-full tracking-wider font-light">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Beyond Coding */}
            <FadeIn delay={0.3} y={20} className="rounded-3xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/5 p-6 md:p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-[#B600A8] w-6 h-6" />
                <h3 className="text-[#D7E2EA] font-semibold uppercase tracking-wider text-base sm:text-lg">
                  Beyond Coding
                </h3>
              </div>
              <p className="text-[#D7E2EA]/80 font-light leading-relaxed text-sm sm:text-base tracking-wide uppercase">
                I enjoy learning emerging technologies, exploring innovative software solutions, building real-world projects, and continuously improving my technical and communication skills. I believe in consistency, curiosity, and lifelong learning.
              </p>
            </FadeIn>

          </div>

          {/* Right Column: Contact Form & Roadmap */}
          <div className="flex flex-col gap-8 w-full text-left">

            {/* Roadmap */}
            <FadeIn delay={0.15} y={20} className="rounded-3xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/5 p-6 md:p-8 backdrop-blur-sm w-full">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-[#B600A8] w-6 h-6" />
                <h3 className="text-[#D7E2EA] font-semibold uppercase tracking-wider text-base sm:text-lg">
                  Learning Roadmap
                </h3>
              </div>

              {/* Horizontal Scroll Roadmap */}
              <div className="flex overflow-x-auto gap-4 py-2 scrollbar-thin select-none max-w-full">
                {ROADMAP.map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center gap-3 bg-[#0C0C0C] border border-[#D7E2EA]/10 rounded-2xl p-4 hover:border-[#B600A8]/30 transition-colors duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#B600A8] flex items-center justify-center font-bold text-white text-xs sm:text-sm">
                      {index + 1}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-light text-[9px] uppercase tracking-widest text-[#D7E2EA]/40">Phase</span>
                      <span className="font-medium uppercase tracking-wider text-xs text-[#D7E2EA] whitespace-nowrap">{item}</span>
                    </div>
                    {index < ROADMAP.length - 1 && (
                      <ArrowRight className="text-[#D7E2EA]/20 w-4 h-4 ml-1 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Interactive Contact Form Card */}
            <FadeIn delay={0.25} y={20} className="rounded-3xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/5 p-6 md:p-8 backdrop-blur-sm">
              <h3 className="text-[#D7E2EA] font-semibold uppercase tracking-wider text-base sm:text-lg mb-6">
                Get In Touch
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-2xl p-4 text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors duration-200 uppercase tracking-wider text-xs sm:text-sm font-light"
                    disabled={status === 'sending' || status === 'success'}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-2xl p-4 text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors duration-200 uppercase tracking-wider text-xs sm:text-sm font-light"
                    disabled={status === 'sending' || status === 'success'}
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    rows={4}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-2xl p-4 text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors duration-200 uppercase tracking-wider text-xs sm:text-sm font-light resize-none"
                    disabled={status === 'sending' || status === 'success'}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  className="w-full rounded-2xl py-4 flex items-center justify-center gap-2 font-medium uppercase tracking-widest text-white transition-all duration-300 disabled:opacity-50 cursor-pointer"
                  style={{
                    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                  }}
                >
                  {status === 'idle' && (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                  {status === 'sending' && <span>Sending...</span>}
                  {status === 'success' && <span>Message Sent!</span>}
                </button>
              </form>

              {/* Social Channels Link Row */}
              <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-[#D7E2EA]/10">
                <a
                  href="mailto:muhammad.siyad@example.com"
                  className="text-[#D7E2EA]/60 hover:text-[#B600A8] transition-colors duration-200 p-2 border border-[#D7E2EA]/10 rounded-full bg-[#0C0C0C]"
                  title="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D7E2EA]/60 hover:text-[#B600A8] transition-colors duration-200 p-2 border border-[#D7E2EA]/10 rounded-full bg-[#0C0C0C]"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D7E2EA]/60 hover:text-[#B600A8] transition-colors duration-200 p-2 border border-[#D7E2EA]/10 rounded-full bg-[#0C0C0C]"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </FadeIn>

          </div>
        </div>

        {/* Footer info line */}
        <div className="text-center mt-20 pt-8 border-t border-[#D7E2EA]/5">
          <p className="text-[#D7E2EA] font-light uppercase tracking-widest text-xs opacity-40">
            © {new Date().getFullYear()} Muhammad Siyad. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
