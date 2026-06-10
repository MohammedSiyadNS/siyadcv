import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

interface AboutSectionProps {
  onContactClick?: () => void;
}

const HIGHLIGHTS = [
  "BTech Information technology Engineering Student",
  "Strong interest in Python Development",
  "Learning ERPNext and Frappe Framework",
  "Knowledge of Database Management Systems",
  "Knowledge of Operating Systems",
  "Understanding of Computer Networks & TCP/IP",
  "Passionate about problem solving & software engineering",
  "Open to internships & software dev opportunities"
];

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 text-center overflow-hidden"
    >
      {/* Absolute Decorative 3D Images */}
      {/* Top-Left: Moon icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 select-none pointer-events-none opacity-40 sm:opacity-100"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon 3D"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto"
        />
      </FadeIn>

      {/* Bottom-Left: 3D object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 select-none pointer-events-none opacity-40 sm:opacity-100"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="Sphere 3D"
          className="w-[100px] sm:w-[140px] md:w-[180px] h-auto"
        />
      </FadeIn>

      {/* Top-Right: Lego icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 select-none pointer-events-none opacity-40 sm:opacity-100"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego 3D"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto"
        />
      </FadeIn>

      {/* Bottom-Right: 3D group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 select-none pointer-events-none opacity-40 sm:opacity-100"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="Abstract Group 3D"
          className="w-[130px] sm:w-[170px] md:w-[220px] h-auto"
        />
      </FadeIn>

      {/* Central Content */}
      <div className="flex flex-col items-center max-w-4xl z-10 w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading/text */}
        <div className="h-10 sm:h-14 md:h-16 w-full" />

        {/* Animated Paragraph */}
        <AnimatedText
          text="I am a passionate Information technology Engineering    student. currently im a BTech IT graduate from LBS college of engg kasaragod under KTU. I have a strong interest in software development, Python programming, ERP systems, databases, web development, and cloud technologies. Let's build something incredible together!"
          className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />

        {/* Resume Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl w-full mt-12 text-left">
          {HIGHLIGHTS.map((highlight, index) => (
            <FadeIn
              key={index}
              delay={0.1 + index * 0.05}
              y={20}
              className="flex items-center gap-3 p-4 rounded-2xl border border-[#D7E2EA]/10 bg-[#0C0C0C]/50 backdrop-blur-sm hover:border-[#B600A8]/30 transition-colors duration-300"
            >
              <span className="w-2 h-2 bg-[#B600A8] rounded-full flex-shrink-0" />
              <span className="text-[#D7E2EA] text-sm sm:text-base font-light tracking-wide uppercase">
                {highlight}
              </span>
            </FadeIn>
          ))}
        </div>

        {/* Gap between text block/grid and button */}
        <div className="h-16 sm:h-20 md:h-24 w-full" />

        {/* Button */}
        <FadeIn delay={0.4} y={20}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};
