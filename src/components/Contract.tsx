import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { IoMdArrowDown } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactComponent = () => {
  return (
    <div className="relative overflow-hidden bg-neutral-950 min-h-screen">
      <ExampleContent />
    </div>
  );
};

const ExampleContent = () => {
  const textRef = useRef(null);
  const arrowRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", 
          end: "top 50%", 
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      arrowRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: arrowRef.current,
          start: "top 85%",
          end: "top 55%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      emailRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: emailRef.current,
          start: "top 90%", 
          end: "top 60%", 
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="relative grid h-screen place-content-center space-y-6 p-8 bg-black">
      <p
        ref={textRef}
        className="text-center text-6xl font-black text-neutral-50"
      >
        Let&apos;s make it happen
      </p>
      <div
        ref={arrowRef}
        className="w-full flex justify-center items-center"
      >
        <IoMdArrowDown className="text-white text-3xl animate-bounce" />
      </div>

      <div ref={emailRef} className="w-full flex justify-center items-center">
        
          <Link
              className="font-bold relative overflow-y-hidden w-full group h-fit text-center text-white uppercase justify-center items-center flex"
              href="mailto:thaitv225@gmail.com"
            >
            <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">
              tathai225@gmail.com
            </span>
            <span className="absolute inset-0 group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all ease-in-out-circ duration-500 underline flex-nowrap whitespace-nowrap">
              tathai225@gmail.com
            </span>
        </Link>
      </div>
    </div>
  );
};

export default ContactComponent;
