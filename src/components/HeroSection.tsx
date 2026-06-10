import React from 'react';
import { ContactButton } from './ContactButton';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';

interface HeroSectionProps {
  onContactClick?: () => void;
  onNavClick?: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick, onNavClick }) => {
  const handleNav = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    if (onNavClick) {
      onNavClick(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="h-screen flex flex-col justify-between overflow-x-clip relative w-full bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-20 relative">
        <a
          href="#about"
          onClick={(e) => handleNav(e, 'about')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
        >
          About
        </a>
        <a
          href="#skills"
          onClick={(e) => handleNav(e, 'skills')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={(e) => handleNav(e, 'projects')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={(e) => handleNav(e, 'contact')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
        >
          Contact
        </a>
      </FadeIn>

      {/* Hero Portrait - Centered absolutely */}
      <FadeIn
        delay={0.6}
        y={30}
        as="div"
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-full"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="Muhammad Siyad Portrait"
            className="w-full h-auto object-cover select-none pointer-events-none"
            loading="eager"
          />
        </Magnet>
      </FadeIn>

      {/* Hero Heading */}
      <div className="w-full text-center overflow-hidden z-20 mt-6 sm:mt-4 md:-mt-5 px-6 md:px-10">
        <FadeIn delay={0.15} y={40} as="h1" className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[11vw]">
          Hi, i'm siyad
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 relative">
        <FadeIn delay={0.35} y={20} as="div">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-left max-w-[160px] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
            Information Technology Engineering graduate, Python Developer, and ERPNext Enthusiast
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} as="div">
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};
