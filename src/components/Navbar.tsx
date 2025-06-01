'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (event: React.MouseEvent, sectionId: string) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto">
            <div className="flex justify-between items-center w-full md:w-auto">
              <Link 
                href="/" 
                aria-label="Back to Home"
                className="group transition-all duration-200"
              >
                <span className="text-xl font-bold tracking-tight text-gray-800 group-hover:text-gray-600 transition-colors">
                  TA THAI<sup className="text-gray-400 ml-0.5">©</sup>
                </span>
              </Link>
              <button 
                className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none transition-transform duration-200 hover:scale-110"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
            <span className="text-sm font-medium text-gray-500 md:text-base hidden md:block">
              Fullstack Developer
            </span>
          </div>

          <nav className={`${isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'} transition-all duration-300 ease-in-out overflow-hidden md:max-h-full md:opacity-100 md:visible w-full md:w-auto`}>
            <ul className="flex flex-col gap-6 md:flex-row md:gap-8">
              {['Works', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => scrollToSection(e, item.toLowerCase())}
                    className="relative group font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <div className="overflow-hidden h-6">
                      <div className="flex flex-col items-start transition-transform duration-300 ease-out group-hover:-translate-y-6">
                        <span>{item}</span>
                        <span className="text-gray-900 underline underline-offset-4 decoration-1 decoration-gray-300">
                          {item}
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-gray-900 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;