import React from 'react';

interface LiveProjectButtonProps {
  onClick?: () => void;
  href?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ onClick, href }) => {
  const className = "inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200 active:scale-95 cursor-pointer text-center";

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        Live Project
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      Live Project
    </button>
  );
};
