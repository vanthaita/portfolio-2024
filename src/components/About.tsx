'use client'
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';

const AboutMe: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const pageRef = useRef<HTMLDivElement | null>(null);
  
  const isInViewAbout = useInView(aboutRef, { once: true, amount: 0.3 });
  const isInViewText = useInView(textRef, { once: true, amount: 0.2 });
  
  const { scrollYProgress } = useScroll();
  
  // Smoother y-axis movement with easing
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  
  // Fixed opacity for reverse on scroll back
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.3, duration: 0.6, ease: 'easeOut' } },
  };
  
  const textScrollVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.6, ease: 'easeOut' } },
  };
  
  // GSAP-based parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (pageRef.current) {
        gsap.to(pageRef.current, {
          y: -window.scrollY * 0.5,  // Adjusted factor for smoother effect
          ease: 'power1.out',
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <motion.div
      ref={aboutRef}
      className="min-h-screen flex flex-col justify-center items-center bg-black px-4 relative"
      initial="hidden"
      animate={isInViewAbout ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className="absolute top-4 left-4 mt-8 flex flex-col justify-between w-1/2 h-full">
        <motion.svg
          stroke="currentColor"
          fill="none"
          strokeWidth="1.25"
          viewBox="6 6 12 12"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="m-0 size-8 p-0 md:size-16"
          color="#fff"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          variants={textVariants}
        >
          <line x1="7" y1="7" x2="17" y2="17"></line>
          <polyline points="17 7 17 17 7 17"></polyline>
        </motion.svg>
        
        <motion.div
          className="w-auto mb-14"
          variants={textVariants}
          style={{ y, opacity }}
        >
          <span className="text-white text-4xl whitespace-pre-wrap tracking-wide">
            Passionate developer and entrepreneur leveraging technology for innovative solutions. Strong background in software development. Committed to continuous learning and collaboration for positive change.
          </span>
        </motion.div>
      </div>

      <motion.div
        ref={textRef}
        className="absolute top-4 right-4 p-4 rounded-lg shadow-lg"
        initial="hidden"
        animate={isInViewText ? 'visible' : 'hidden'}
        variants={textScrollVariants}
        style={{ y, opacity }}
      >
        <ul className="text-9xl font-bold text-white whitespace-pre-wrap">
          DEVELOPER,
        </ul>
        <ul className="text-9xl font-bold text-white whitespace-pre-wrap">
          BUSINESS,
        </ul>
        <ul className="text-9xl font-bold text-white whitespace-pre-wrap">
          TO LIVE
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
