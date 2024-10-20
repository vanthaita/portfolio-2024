import React from 'react';

interface MenuButtonProps {
  ariaLabel: string;
  ariaExpanded: boolean;
  ariaControls: string;
  onClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ ariaLabel, ariaExpanded, ariaControls, onClick }) => {
  return (
    <button
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      className="group pointer-events-auto flex aspect-square size-16 flex-col items-center justify-center rounded-full bg-accent-500 transition-all duration-800 ease-expo sm:hover:scale-90 scale-100"
      onClick={onClick}
    >
      <span className="ease-in-out-circ absolute h-[2px] w-7 rounded-full bg-secondary-400 transition-all duration-300 2xl:w-9 translate-y-0 rotate-45"></span>
      <span className="ease-in-out-circ absolute h-[2px] w-7 rounded-full bg-secondary-400 transition-all duration-300 2xl:w-9 translate-y-0 -rotate-45"></span>
    </button>
  );
};

export default MenuButton;
