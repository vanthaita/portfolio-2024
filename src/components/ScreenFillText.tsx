import React, { useEffect, useRef } from "react";
import gsap from "gsap";
export const ScreenFitText = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
  
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
      let min = 1;
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
    const resumeRef = useRef<HTMLDivElement | null>(null);

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
  className="flex h-screen w-full items-center overflow-hidden "
  ref={containerRef}
>
{/* `   <div
      ref={resumeRef}
      className="text-4xl font-bold text-slate-700 leading-none mb-10 flex justify-start w-full mt-10 cursor-pointer underline"
    >
      Resume
    </div> */}
  <span
    className="text-5xl font-bold text-slate-700 leading-none mb-10 mt-10"
  >
    I craft modern web and mobile applications, leveraging cutting-edge technologies like Next.js, Expo, and PostgreSQL to bring your ideas to life.
  </span>
  <span
    className="absolute -bottom-4 left-0 mx-auto whitespace-nowrap text-center font-bold uppercase text-slate-900"
    ref={textRef}
  >
    Available for freelance work
  </span>
</div>

  );
};