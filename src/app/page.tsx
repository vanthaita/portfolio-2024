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

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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

  return (
    <div className="relative">
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
       
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
        <Section id="home" className='min-h-screen'>
          <HomePage />
        </Section>
         <Section id="about" className='min-h-screen'>
          <AboutMe />
        </Section>
        <Section id="works" className='space-y-20  min-h-screen'>
          <HoverImageLinks />
          <ClipPathLinksComponent />
        </Section>
        <Section id="contact" className='min-h-screen'>
          <ContractMePage />
        </Section>
        <Section id="footer" className=' md:min-h-[40vh] lg:md:min-h-[40vh] min-h-[30vh] justify-center flex items-center'>
          <Footer />
        </Section>
      </>
    </div>
  );
};

export default Page;
