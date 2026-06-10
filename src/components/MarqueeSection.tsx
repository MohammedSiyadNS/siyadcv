import React, { useEffect, useRef, useState } from 'react';

const ALL_IMAGES = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif"
];

// Row 1: first 11 images
const ROW1 = ALL_IMAGES.slice(0, 11);
// Row 2: remaining 10 images
const ROW2 = ALL_IMAGES.slice(11);

// Triple them for seamless scrolling
const ROW1_TRIPLED = [...ROW1, ...ROW1, ...ROW1];
const ROW2_TRIPLED = [...ROW2, ...ROW2, ...ROW2];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      
      // Calculate scroll offset
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(scrollOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial run

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3 w-full"
    >
      {/* Row 1: Moves right on scroll */}
      <div 
        className="flex gap-3 w-max"
        style={{ 
          transform: `translate3d(${offset - 200}px, 0px, 0px)`,
          willChange: 'transform'
        }}
      >
        {ROW1_TRIPLED.map((src, i) => (
          <img 
            key={`row1-${i}`}
            src={src} 
            alt={`Work Preview 1-${i}`} 
            className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0 select-none pointer-events-none"
            loading="lazy"
          />
        ))}
      </div>

      {/* Row 2: Moves left on scroll */}
      <div 
        className="flex gap-3 w-max"
        style={{ 
          transform: `translate3d(${-(offset - 200)}px, 0px, 0px)`,
          willChange: 'transform'
        }}
      >
        {ROW2_TRIPLED.map((src, i) => (
          <img 
            key={`row2-${i}`}
            src={src} 
            alt={`Work Preview 2-${i}`} 
            className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0 select-none pointer-events-none"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};
