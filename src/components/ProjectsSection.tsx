import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';
import aboutImg from "../assets/projects/about.png";
import dashImg from "../assets/projects/dash.png";
import saleImg from "../assets/projects/sale.png";
const PROJECTS = [
  {
    id: "01",
    category: "personal project",
    title: "Mini ERP System ",
    description: "Developed an ERP-based application for managing inventory, employees, sales, and business operations.",
    col1Image1: aboutImg,
    col1Image2: saleImg,
    col2Image: dashImg
  },
  {
    id: "02",
    category: "Academic Project",
    title: "Vehicle Value Calculator",
    description: "Built a system that estimates vehicle value based on various parameters and provides accurate market price predictions.",
    col1Image1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    col1Image2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    col2Image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
  },
  {
    id: "03",
    category: "Personal Project",
    title: "Mini ERP System",
    description: "Developed an ERP-based application for managing inventory, employees, sales, and business operations.",
    col1Image1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    col1Image2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    col2Image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
  }
];

interface ProjectCardProps {
  project: typeof PROJECTS[0];
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] w-full flex flex-col justify-start relative"
    >
      <motion.div
        style={{
          scale,
          top: `calc(var(--sticky-top, 96px) + ${index * 28}px)`,
        }}
        className="sticky w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col"
      >
        {/* Top Row: Number, category, project name, and button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-[#D7E2EA]/10 w-full">
          <div className="flex items-end gap-4 sm:gap-6">
            <div
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
            >
              {project.id}
            </div>

            <div className="flex flex-col text-left mb-1 sm:mb-2">
              <span className="text-[#D7E2EA] opacity-60 uppercase text-[10px] sm:text-xs tracking-widest font-light">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] uppercase font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center">
            <LiveProjectButton href="#" />
          </div>
        </div>

        {/* Project Description (Added for resume value) */}
        <p className="text-left text-[#D7E2EA]/70 text-xs sm:text-sm md:text-base font-light tracking-wide mt-3 mb-1 max-w-3xl">
          {project.description}
        </p>

        {/* Bottom Row: Image Grid */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 mt-4 flex-grow overflow-hidden">
          {/* Left Column (40%) */}
          <div className="w-full md:w-[40%] flex flex-col gap-4 sm:gap-6">
            <img
              src={project.col1Image1}
              alt={`${project.title} Preview 1`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(110px, 14vw, 210px)' }}
              loading="lazy"
            />
            <img
              src={project.col1Image2}
              alt={`${project.title} Preview 2`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 18vw, 280px)' }}
              loading="lazy"
            />
          </div>

          {/* Right Column (60%) */}
          <div className="w-full md:w-[60%] flex flex-col flex-grow">
            <img
              src={project.col2Image}
              alt={`${project.title} Main Preview`}
              className="w-full h-[180px] sm:h-[240px] md:h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] flex-grow"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-24 pb-20 px-5 sm:px-8 md:px-10 w-full relative z-20"
    >
      <div className="max-w-5xl mx-auto w-full text-center mb-16 md:mb-24">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Projects
          </h2>
        </FadeIn>
      </div>

      <div className="max-w-5xl mx-auto w-full flex flex-col gap-0">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            totalCards={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
};
