import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contactRef.current) {
      gsap.fromTo(
        contactRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out', delay: 0.2 }
      );
    }
  }, []);

  return (
    <div ref={contactRef} className="min-h-screen flex flex-col justify-center items-center bg-black px-4">
      <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
      <p className="text-lg text-gray-600 max-w-md text-center mt-4">
        Have any questions or want to work with us? Feel free to get in touch. We're always open to new opportunities and collaborations!
      </p>
      <a
        href="mailto:contact@yourcompany.com"
        className="mt-6 text-lg font-semibold text-orange-500 hover:underline"
      >
        contact@yourcompany.com
      </a>
    </div>
  );
};

export default Contact;
