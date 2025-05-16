'use client';
import HomePage from '@/components/HomePage';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ClipPathLinksComponent } from '@/components/Link/ClipPathLinks';
import { HoverImageLinks } from '@/components/Link/HoverimageLinks';
import AboutMe from '@/components/About';
import ContractMePage from '@/components/Contract';
import Footer from '@/components/Footer/Footer';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.2,
      when: "beforeChildren"
    } 
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Section = ({ children, id, className }: { children: React.ReactNode; id: string; className?: string }) => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: '-50px 0px' 
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
      className={className}
    >
      <motion.div variants={childVariants}>
        {children}
      </motion.div>
    </motion.section>
  );
};

const Page: React.FC = () => {
  return (
    <div className="relative">
      <>
        <Section id="home" className='min-h-screen'>
          <HomePage />
        </Section>
        
        <Section id="about" className='min-h-screen'>
          <AboutMe />
        </Section>
        
        <div id="works" className='space-y-20 min-h-screen'>
          <HoverImageLinks />
        </div>
        <div>
          <ClipPathLinksComponent />
        </div>
        <Section id="contact" className='min-h-screen'>
          <ContractMePage />
        </Section>
        
        <Section id="footer" className=''>
          <Footer />
        </Section>
      </>
    </div>
  );
};

export default Page;