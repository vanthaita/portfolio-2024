import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { IoMdArrowDown } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FuzzyOverlayComponent = () => {
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
    // Text Animation
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
          start: "top 80%", // Start animation when the element is 80% into the viewport
          end: "top 50%", // End animation when the top of the element reaches 50% of the viewport height
          toggleActions: "play none none reverse",
        },
      }
    );

    // Arrow Animation
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
          start: "top 85%", // Start animation when the element is 85% into the viewport
          end: "top 55%", // End animation when the top of the element reaches 55% of the viewport height
          toggleActions: "play none none reverse",
        },
      }
    );

    // Email Animation
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
          start: "top 90%", // Start animation when the element is 90% into the viewport
          end: "top 60%", // End animation when the top of the element reaches 60% of the viewport height
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="relative grid h-screen place-content-center space-y-6 p-8">
      {/* Animated Text */}
      <p
        ref={textRef}
        className="text-center text-6xl font-black text-neutral-50"
      >
        Let&apos;s make it happen
      </p>

      {/* Animated Arrow */}
      <div
        ref={arrowRef}
        className="w-full flex justify-center items-center"
      >
        <IoMdArrowDown className="text-white text-3xl animate-bounce" />
      </div>

      {/* Animated Email */}
      <div ref={emailRef} className="w-full flex justify-center items-center">
        <Link
          href="mailto:tathai225@gmail.com"
          className="text-white font-medium text-center uppercase hover:text-yellow-400 transition-colors duration-300"
        >
          tathai225@gmail.com
        </Link>
      </div>
    </div>
  );
};

export default FuzzyOverlayComponent;
