/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Marquee } from "../Marquee";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const RevealLinks = () => {
  const sectionRef = useRef(null); // For the section we will apply ScrollTrigger on

  useEffect(() => {
    const links = gsap.utils.toArray('.flip-link'); // Select all FlipLink elements

    // Scroll-triggered animation for all FlipLinks
    gsap.fromTo(
      links,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Start when the section enters the viewport
          end: "bottom top", // End when the section leaves the viewport
          scrub: true, // Smooth animation when scrolling
          toggleActions: "play reverse play reverse", // Reverses when scrolling up
        }
      }
    );
  }, []);

  return (
    <>
      <section ref={sectionRef} className="grid place-content-center gap-4 px-8 py-24 bg-black text-white">
        <FlipLink href="#">Twitter</FlipLink>
        <FlipLink href="#">LinkedIn</FlipLink>
        <FlipLink href="#">Facebook</FlipLink>
        <FlipLink href="#">Instagram</FlipLink>
      </section>
      <Marquee />
    </>
  );
};

const DURATION = 0.4;
const STAGGER = 0.05;

const FlipLink = ({ children, href }: { children: any; href: any }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="flip-link relative block overflow-hidden whitespace-nowrap text-5xl font-extrabold uppercase sm:text-7xl md:text-8xl lg:text-9xl text-gray-300"
      style={{
        lineHeight: 0.8,
      }}
    >
      <div>
        {children.split("").map((l: any, i: any) => (
          <motion.span
            variants={{
              initial: { y: 0, opacity: 1 },
              hovered: { y: "-100%", opacity: 0.8 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block transition-transform"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l: any, i: any) => (
          <motion.span
            variants={{
              initial: { y: "100%", opacity: 0.5 },
              hovered: { y: 0, opacity: 1 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
