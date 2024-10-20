import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AboutUs: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out', delay: 0.2 }
      );
    }
  }, []);

  return (
    <div ref={aboutRef} className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
      <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
      <p className="text-lg text-gray-600 max-w-md text-center mt-4">
        We are a team of creative professionals dedicated to building exceptional digital experiences. Our mission is to empower businesses and individuals through cutting-edge technology and innovation.
      </p>
    </div>
  );
};

export default AboutUs;
