import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  // Track scroll position of the paragraph element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const chars = text.split("");

  return (
    <p ref={containerRef} className={`${className} flex flex-wrap justify-center`} style={style}>
      {chars.map((char, i) => (
        <Character
          key={i}
          index={i}
          total={chars.length}
          progress={scrollYProgress}
        >
          {char}
        </Character>
      ))}
    </p>
  );
};

interface CharacterProps {
  children: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Character: React.FC<CharacterProps> = ({ children, index, total, progress }) => {
  // Stagger the fade-in start and end progress values per character.
  // First character begins at 0.0, last character starts around 0.8.
  // Each character takes a window of 0.2 scroll progress to fully fade in.
  const start = (index / total) * 0.8;
  const end = Math.min(1.0, start + 0.2);
  
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block whitespace-pre">
      {/* Invisible placeholder for layout/wrapping */}
      <span className="opacity-0">{children}</span>
      {/* Absolutely positioned character that will animate opacity */}
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {children}
      </motion.span>
    </span>
  );
};
