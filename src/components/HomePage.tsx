'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import LocalTime from './LocalTime';
import { ScreenFitText } from './ScreenFillText';

const HomePage: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const localTimeRef = useRef<HTMLDivElement | null>(null);
  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (svgRef.current) {
      gsap.fromTo(
        svgRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)' }
      );
    }

    if (localTimeRef.current) {
      gsap.fromTo(
        localTimeRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.5 }
      );
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (pageRef.current) {
        gsap.to(pageRef.current, {
          y: -window.scrollY / 2,
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
    <div className="relative h-[90vh] px-4 mb-8"> 
      <div ref={pageRef} className="flex flex-col items-center h-full relative">
        <div className="container flex justify-center ms:items-center ms:flex-col-reverse">
          <ScreenFitText />
          <svg ref={svgRef} width="1382.4" height="179.2" viewBox="0 0 1382.4 179.2" xmlns="http://www.w3.org/2000/svg">
          <g id="svgGroup" strokeLinecap="round" fillRule="nonzero" fontSize="9pt" stroke="#000" strokeWidth="0.25mm" fill="#131311">
              <path d="M 67.84 179.2 L 67.84 28.672 L 0 28.672 L 0 0 L 167.68 0 L 167.68 28.672 L 99.84 28.672 L 99.84 179.2 L 67.84 179.2 Z" id="0"/>
              <path d="M 322.816 179.2 L 286.208 179.2 L 269.056 143.36 L 198.912 143.36 L 182.016 179.2 L 144.64 179.2 L 233.984 0 L 322.816 179.2 Z M 212.224 114.688 L 255.232 114.688 L 233.472 69.632 L 212.224 114.688 Z" id="1"/>
              <path d="M 286.464 0 L 323.584 0 L 375.808 109.824 L 427.776 0 L 464.384 0 L 375.552 179.2 L 286.464 0 Z" id="2"/>
              <path d="M 604.416 179.2 L 567.808 179.2 L 550.656 143.36 L 480.512 143.36 L 463.616 179.2 L 426.24 179.2 L 515.584 0 L 604.416 179.2 Z M 493.824 114.688 L 536.832 114.688 L 515.072 69.632 L 493.824 114.688 Z" id="3"/>
              <path d="M 626.688 0 L 631.296 0 L 730.112 102.912 L 730.112 0 L 762.112 0 L 762.112 179.2 L 756.992 179.2 L 658.688 76.032 L 658.688 179.2 L 626.688 179.2 Z" id="4"/>
              <path d="M 853.248 179.2 L 853.248 28.672 L 785.408 28.672 L 785.408 0 L 953.088 0 L 953.088 28.672 L 885.248 28.672 L 885.248 179.2 L 853.248 179.2 Z" id="5"/>
              <path d="M 977.92 179.2 L 977.92 0 L 1009.92 0 L 1009.92 77.056 L 1097.728 77.056 L 1097.728 0 L 1129.728 0 L 1129.728 179.2 L 1097.728 179.2 L 1097.728 105.728 L 1009.92 105.728 L 1009.92 179.2 L 977.92 179.2 Z" id="6"/>
              <path d="M 1328.128 179.2 L 1291.52 179.2 L 1274.368 143.36 L 1204.224 143.36 L 1187.328 179.2 L 1149.952 179.2 L 1239.296 0 L 1328.128 179.2 Z M 1217.536 114.688 L 1260.544 114.688 L 1238.784 69.632 L 1217.536 114.688 Z" id="7"/>
              <path d="M 1350.4 179.2 L 1350.4 0 L 1382.4 0 L 1382.4 179.2 L 1350.4 179.2 Z" id="8"/>
            </g>
          </svg>
        </div>
        <LocalTime />
      </div>
    </div>
  );
};
export default HomePage;