'use client';
import throttle from 'lodash/throttle';
import HomePage from '@/components/HomePage';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { RevealLinks } from '@/components/Link/RevealLink';
import { ClipPathLinksComponent } from '@/components/Link/ClipPathLinks';
import { HoverImageLinks } from '@/components/Link/HoverimageLinks';
import AboutMe from '@/components/About';
import ContractMePage from '@/components/Contract';
import Footer from '@/components/Footer/Footer';
import Menu from '@/components/Menu/Menu';

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const Section = ({ children, id, className }: { children: React.ReactNode; id: string; className?: string }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Page: React.FC = () => {
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const homeSectionHeight = document.getElementById('home')?.offsetHeight || 0;
      setShowMenuButton(window.scrollY > homeSectionHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  useEffect(() => {
    const handleMouseMove = throttle((event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }, 16);

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative">
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          top: mousePosition.y - 50,
          left: mousePosition.x - 50,
          width: 100,
          height: 100,
          borderRadius: "50%",
          border: "2px solid rgba(255, 255, 255, 0.5)",
          background: "rgba(255, 255, 255, 0.1)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <>
        {showMenuButton && (
          <motion.button
            className="group pointer-events-auto flex aspect-square size-16 flex-col items-center justify-center rounded-full bg-accent-500 transition-all duration-800 ease-expo sm:hover:scale-90 scale-100 top-4 right-4 fixed z-[9998] bg-[#E3E3DE]"
            onClick={toggleMenu}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <span className="ease-in-out-circ absolute h-[2px] w-7 rounded-full bg-black transition-all duration-300 2xl:w-9" />
            <span className="ease-in-out-circ absolute h-[2px] w-7 rounded-full bg-black transition-all duration-300 2xl:w-9 translate-y-2" />
          </motion.button>
        )}
        <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <Section id="home" className='min-h-screen'>
          <HomePage />
        </Section>
        <Section id="about" className='min-h-screen'>
          <AboutMe />
        </Section>
        <Section id="works" className='space-y-20 bg-black min-h-screen'>
          <HoverImageLinks />
          <ClipPathLinksComponent />
        </Section>
        <Section id="contact" className='min-h-screen'>
          <ContractMePage />
        </Section>
        <Section id="link" className='bg-black min-h-screen'>
          <RevealLinks />
        </Section>
        <Section id="footer" className='bg-black min-h-[40vh] justify-center flex items-center'>
          <Footer />
        </Section>
      </>
    </div>
  );
};

export default Page;
