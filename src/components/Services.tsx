import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Services: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (servicesRef.current) {
      gsap.fromTo(
        servicesRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out', delay: 0.2 }
      );
    }
  }, []);

  return (
    <div ref={servicesRef} className="min-h-screen flex flex-col justify-center items-center bg-[#080807] px-4">
      <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
      <p className="text-lg text-gray-600 max-w-md text-center mt-4">
        From web development to digital marketing, we offer a wide range of services to help your business succeed in the digital world. Our team works closely with you to tailor solutions that fit your needs.
      </p>
    </div>
  );
};

export default Services;
