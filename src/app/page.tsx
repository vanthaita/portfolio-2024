'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HomePage from '@/components/HomePage';

gsap.registerPlugin(ScrollTrigger);

const Page: React.FC = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { scale: 1.2, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: section,
              start: 'top center',
              end: 'bottom center',
              scrub: true,
              markers: false,
              onEnter: () => {
                gsap.to(section, { scale: 1, opacity: 1 });
              },
              onLeaveBack: () => {
                gsap.to(section, { scale: 0.8, opacity: 0 });
              },
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="relative">
      <section
        ref={(el) => {
          sectionsRef.current[0] = el as HTMLDivElement; 
        }}
      >
        <HomePage />
      </section>
      <section
        ref={(el) => {
          sectionsRef.current[1] = el as HTMLDivElement; 
        }}
        className="min-h-screen flex items-center justify-center bg-[#e9ecef] text-4xl"
      >
        Section 2 - About Us
      </section>
      <section
        ref={(el) => {
          sectionsRef.current[2] = el as HTMLDivElement; 
        }}
        className="min-h-screen flex items-center justify-center bg-[#dee2e6] text-4xl"
      >
        Section 3 - Services
      </section>
      <section
        ref={(el) => {
          sectionsRef.current[3] = el as HTMLDivElement; 
        }}
        className="min-h-screen flex items-center justify-center bg-[#ced4da] text-4xl"
      >
        Section 4 - Contact
      </section>
    </div>
  );
};

export default Page;
