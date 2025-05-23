import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const ScreenFitText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const resumeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    resizeText();

    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    const containerWidth = container.offsetWidth;
    let min = 20;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + "px";

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = max + "px";
  };

  useEffect(() => {
    const handleMouseEnter = () => {
      if (resumeRef.current) {
        gsap.to(resumeRef.current, { x: 10, duration: 0.3 });
      }
    };

    const handleMouseLeave = () => {
      if (resumeRef.current) {
        gsap.to(resumeRef.current, { x: 0, duration: 0.3 });
      }
    };

    const element = resumeRef.current;
    if (element) {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      className="flex h-2/3 absolute md:bottom-0 items-start mt-10 md:w-2/3 w-full left-0 md:items-center overflow-hidden"
      ref={containerRef}
    >
      <span
        className="md:text-5xl text-3xl font-bold text-gray-400 leading-none md:mb-20 absolute bottom-4 left-0"
        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="1.25"
          viewBox="6 6 12 12"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="m-0 size-4 p-0 md:size-8 mb-4"
          color="#B7B7B7"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="7" y1="7" x2="17" y2="17"></line>
          <polyline points="17 7 17 17 7 17"></polyline>
        </svg>
        I craft modern web and mobile applications, leveraging cutting-edge technologies like Next.js, Expo, and PostgreSQL to bring your ideas to life.
      </span>
      <span
        className="md:absolute md:-bottom-4 md:left-0 mx-auto whitespace-nowrap md:text-center font-bold uppercase md:text-[#555555]
        text-gray-300"
        ref={textRef}
      >
        Available for work
      </span>
    </div>
  );
};
