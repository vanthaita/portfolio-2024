'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutMe: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  const isInViewAbout = useInView(aboutRef, { once: true, amount: 0.3 });
  const isInViewText = useInView(textRef, { once: true, amount: 0.2 });

  const staggeredTextVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const textItemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  useEffect(() => {
    if (aboutRef.current && textRef.current) {
      gsap.fromTo(
        aboutRef.current,
        { y: 50 },
        {
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 80%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { y: 50 },
        {
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 75%',
            end: 'bottom 35%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <motion.div
      ref={aboutRef}
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12 relative"
      initial="hidden"
      animate={isInViewAbout ? 'visible' : 'hidden'}
      variants={staggeredTextVariants}
    >
      <div className="absolute top-4 left-4 mt-8 flex flex-col justify-between w-full sm:w-1/2 h-full">
        <motion.svg
          stroke="currentColor"
          fill="none"
          strokeWidth="1.25"
          viewBox="6 6 12 12"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="m-0 size-8 p-0 sm:w-12 md:w-16"
          color="#B7B7B7"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          variants={textItemVariants}
        >
          <line x1="7" y1="7" x2="17" y2="17"></line>
          <polyline points="17 7 17 17 7 17"></polyline>
        </motion.svg>

        <motion.div className="w-auto mb-20" variants={staggeredTextVariants}>
          <span className="text-white text-lg sm:text-2xl lg:text-4xl whitespace-pre-wrap tracking-wide opacity-70">
            Passionate developer and entrepreneur leveraging technology for innovative solutions. Strong background in software development. Committed to continuous learning and collaboration for positive change.
          </span>
        </motion.div>
      </div>

      <motion.div
        ref={textRef}
        className="absolute top-4 right-4 p-4 rounded-lg shadow-lg opacity-70"
        initial="hidden"
        animate={isInViewText ? 'visible' : 'hidden'}
      >
        <motion.ul className="text-4xl sm:text-6xl lg:text-9xl font-bold text-white whitespace-pre-wrap hover:underline cursor-pointer" variants={textItemVariants}>
          DEVELOPER
        </motion.ul>
        <motion.ul className="text-4xl sm:text-6xl lg:text-9xl font-bold text-white whitespace-pre-wrap hover:underline cursor-pointer" variants={textItemVariants}>
          BUSINESS
        </motion.ul>
        <motion.ul className="text-4xl sm:text-6xl lg:text-9xl font-bold text-white whitespace-pre-wrap hover:underline cursor-pointer" variants={textItemVariants}>
          TO LIVE
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
