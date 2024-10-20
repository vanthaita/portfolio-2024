'use client';
import HomePage from '@/components/HomePage';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { RevealLinks } from '@/components/RevealLink';
import Menu from '@/components/Menu';


const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const buttonVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const Section = ({ children, id }: { children: React.ReactNode; id: string }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      id={id}
      ref={ref}
      initial="hidden"
      className='mb-10'
      animate={inView ? "visible" : "hidden"}
      variants={fadeInVariants}
    >
      {children}
    </motion.div>
  );
};

const Page: React.FC = () => {
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const homeSectionHeight = homeSection?.offsetHeight || 0;

      if (window.scrollY > homeSectionHeight) {
        setShowMenuButton(true);
      } else {
        setShowMenuButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
        <>
          {showMenuButton && (
            <motion.button
              className="
                group pointer-events-auto flex aspect-square size-16 flex-col items-center justify-center rounded-full bg-accent-500 transition-all duration-800 ease-expo sm:hover:scale-90 scale-100 top-4 right-4 fixed z-[9998] bg-[#E3E3DE]"
              onClick={toggleMenu}
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
            >
              <span
                className={`ease-in-out-circ absolute h-[2px] w-7 rounded-full bg-black transition-all duration-300 2xl:w-9`}
              ></span>
              <span
                className={`ease-in-out-circ absolute h-[2px] w-7 rounded-full bg-black transition-all duration-300 2xl:w-9 
                translate-y-2`}
              ></span>
            </motion.button>
          )}
          <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <Section id="home">
            <HomePage />
          </Section>
          <Section id="services">
            <Services />
          </Section>
          <Section id="about">
            <About />
          </Section>
          <Section id="contact">
            <Contact />
          </Section>
          <Section id='link'>
            <RevealLinks />
          </Section>
        </>
    </div>
  );
};

export default Page;
