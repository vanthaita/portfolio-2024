import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { IoMdArrowDown } from "react-icons/io";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactComponent = () => {
  return (
    <div className="relative overflow-hidden bg-white min-h-screen">
      <ExampleContent />
    </div>
  );
};

const ExampleContent = () => {
  const textRef = useRef(null);
  const arrowRef = useRef(null);
  const emailRef = useRef(null);
  const socialRef = useRef(null);
  const resumeRef = useRef(null);

  useEffect(() => {
    const elements = [
      { ref: textRef, delay: 0 },
      { ref: arrowRef, delay: 0.2 },
      { ref: emailRef, delay: 0.4 },
      { ref: socialRef, delay: 0.6 },
      { ref: resumeRef, delay: 0.8 }
    ];

    elements.forEach(({ ref, delay }) => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative grid h-screen place-content-center space-y-8 p-8 bg-white">
      <p
        ref={textRef}
        className="text-center text-5xl md:text-6xl font-black text-gray-900"
      >
        Let&apos;s make it happen
      </p>
      
      <div
        ref={arrowRef}
        className="w-full flex justify-center items-center"
      >
        <IoMdArrowDown className="text-gray-600 text-3xl animate-bounce" />
      </div>

      <div ref={emailRef} className="w-full flex justify-center items-center">
        <Link
          href="mailto:tathai225@gmail.com"
          className="font-bold relative overflow-y-hidden w-fit group h-fit text-center"
        >
          <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-300 text-gray-700">
            tathai225@gmail.com
          </span>
          <span className="absolute inset-0 group-hover:translate-y-0 translate-y-5 transition-all ease-in-out-circ duration-300 underline underline-offset-4 decoration-gray-300 flex-nowrap whitespace-nowrap text-gray-900">
            tathai225@gmail.com
          </span>
        </Link>
      </div>

      <div ref={socialRef} className="flex justify-center space-x-6 pt-4">
        <Link 
          href="https://github.com/vanthaita" 
          target="_blank"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
          aria-label="GitHub"
        >
          <FiGithub className="w-6 h-6" />
        </Link>
        <Link 
          href="https://www.linkedin.com/in/vanthaita/" 
          target="_blank"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FiLinkedin className="w-6 h-6" />
        </Link>
        <Link 
          href="#" 
          target="_blank"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
          aria-label="Twitter"
        >
          <FiTwitter className="w-6 h-6" />
        </Link>
      </div>

      <div ref={resumeRef} className="flex flex-col md:flex-row justify-center gap-4 pt-8">
        <Link
          href="/CV-ta-van-thai-en.pdf"
          download="CV-TaVanThai-English.pdf"
          className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-300"
        >
          <HiDownload className="mr-2" />
          Download Resume (English)
        </Link>
        <Link
          href="/CV-ta-van-thai-jp.pdf"
          download="CV-TaVanThai-Japanese.pdf"
          className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-300"
        >
          <HiDownload className="mr-2" />
          履歴書をダウンロード (日本語)
        </Link>
      </div>
    </div>
  );
};

export default ContactComponent;