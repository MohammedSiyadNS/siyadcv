import React from 'react';
import { FadeIn } from './FadeIn';

const SKILLS = [
  {
    id: "01",
    title: "Programming Languages",
    description: "Python, Java, JavaScript, SQL. Experienced in writing clean, modular, and efficient backend scripts and database query flows."
  },
  {
    id: "02",
    title: "Frontend Development",
    description: "HTML, CSS, React. Creating responsive, intuitive, and interactive user interfaces with optimized modern web practices."
  },
  {
    id: "03",
    title: "Backend Development",
    description: "Node.js, Python. Designing modular server-side logic, RESTful API endpoints, and implementing webhooks."
  },
  {
    id: "04",
    title: "Databases",
    description: "MySQL, PostgreSQL. Strong fundamentals in Database Management Systems (DBMS), database schema designs, and index optimization."
  },
  {
    id: "05",
    title: "Tools & Technologies",
    description: "Git, GitHub, VS Code, ERPNext, Frappe Framework. Utilizing version control and building custom business apps on top of Frappe/ERPNext."
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section 
      id="skills"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full text-center relative z-10"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Title */}
        <FadeIn delay={0} y={40}>
          <h2 
            className="text-[#0C0C0C] font-black uppercase centered mb-16 sm:mb-20 md:mb-28 leading-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Skills
          </h2>
        </FadeIn>

        {/* Skills List */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {SKILLS.map((skill, index) => (
            <FadeIn 
              key={skill.id} 
              delay={index * 0.1} 
              y={30} 
              as="div" 
              className="flex items-center gap-6 sm:gap-10 md:gap-16 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)]"
            >
              {/* Number on the left */}
              <div 
                className="font-black text-[#0C0C0C] leading-none select-none flex-shrink-0 w-[60px] sm:w-[100px] md:w-[160px] text-left"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 130px)' }}
              >
                {skill.id}
              </div>

              {/* Name & Description on the right */}
              <div className="flex-grow text-left flex flex-col gap-2 sm:gap-3">
                <h3 
                  className="text-[#0C0C0C] font-medium uppercase leading-snug"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {skill.title}
                </h3>
                <p 
                  className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {skill.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
