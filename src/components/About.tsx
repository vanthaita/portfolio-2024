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
      className="min-h-screen flex flex-col justify-center items-center p-4 md:p-8 lg:p-12 relative bg-white"
      initial="hidden"
      animate={isInViewAbout ? 'visible' : 'hidden'}
      variants={staggeredTextVariants}
    >
      <div className="absolute top-1/2 left-4 -translate-y-1/2 mt-8 flex flex-col justify-between w-full sm:w-1/2 h-auto p-4 md:p-8 lg:p-12">
        <motion.svg
          stroke="currentColor"
          fill="none"
          strokeWidth="1.25"
          viewBox="6 6 12 12"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="m-0 size-8 p-0 sm:w-12 md:w-16 mb-8 text-gray-400"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          variants={textItemVariants}
        >
          <line x1="7" y1="7" x2="17" y2="17"></line>
          <polyline points="17 7 17 17 7 17"></polyline>
        </motion.svg>

        <motion.div className="w-auto space-y-6" variants={staggeredTextVariants}>
          <motion.p 
            className="text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed"
            variants={textItemVariants}
          >
            Full Stack Developer (<span className="text-gray-900 font-medium">JavaScript/TypeScript</span>, <span className="text-gray-900 font-medium">NestJS</span>, <span className="text-gray-900 font-medium">Next.js</span>) passionate about building impactful solutions.
          </motion.p>
          
          <motion.p 
            className="text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed"
            variants={textItemVariants}
          >
            Currently studying at <span className="text-gray-900 font-medium">University of Information Technology</span> (Vietnam) while independently exploring <span className="text-gray-900 font-medium">Generative AI</span>, <span className="text-gray-900 font-medium">cloud architectures</span>, and <span className="text-gray-900 font-medium">Open Source</span> tools.
          </motion.p>
          
          <motion.p 
            className="text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed"
            variants={textItemVariants}
          >
            Thrive at the intersection of <span className="text-gray-900 font-medium">rigorous engineering</span> and <span className="text-gray-900 font-medium">creative experimentation</span>.
          </motion.p>
          
          <motion.p 
            className="text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed mt-8 italic"
            variants={textItemVariants}
          >
            Indie builder with a love for shipping products from idea to production.
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        ref={textRef}
        className="absolute top-1/2 right-4 -translate-y-1/2 p-4 md:p-8 lg:p-12 hidden md:block"
        initial="hidden"
        animate={isInViewText ? 'visible' : 'hidden'}
      >
        <motion.div className="space-y-4 sm:space-y-8 p-4 md:p-8 lg:p-12" variants={staggeredTextVariants}>
          <motion.h2 
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-800 hover:text-blue-500 transition-colors cursor-pointer"
            variants={textItemVariants}
            whileHover={{ x: 10 }}
          >
            DEVELOPER
          </motion.h2>
          <motion.h2 
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-800 hover:text-green-500 transition-colors cursor-pointer"
            variants={textItemVariants}
            whileHover={{ x: 10 }}
          >
            BUILDER
          </motion.h2>
          <motion.h2 
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-800 hover:text-purple-500 transition-colors cursor-pointer"
            variants={textItemVariants}
            whileHover={{ x: 10 }}
          >
            LEARNER
          </motion.h2>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;