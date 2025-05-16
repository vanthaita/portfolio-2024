import React, { useEffect, useRef } from "react";
import {
  SiNextdotjs,
  SiNestjs,
  SiNodedotjs,
  SiReact,
  SiPrisma,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiExpo,
  SiDocker,
  SiPython,
  SiJavascript,
  SiVuedotjs,
  SiCplusplus,
  SiRust,
  SiPostgresql,
} from "react-icons/si";
import { motion, useAnimate } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ClipPathLinksComponent: React.FC = () => {
  return (
    <div className="bg-white p-4 md:p-12">
      <motion.h1 
        className="text-5xl font-extrabold text-black uppercase tracking-widest mb-12 transition-transform duration-500 hover:scale-105"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Tech Stack
      </motion.h1>
      <div className="mx-auto max-w-7xl">
        <ClipPathLinks />
      </div>
    </div>
  );
};

const ClipPathLinks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
        onEnter: () => {
          gsap.to(containerRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
          });
        },
        onLeave: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
          });
        },
        onEnterBack: () => {
          gsap.to(containerRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
          });
        },
        onLeaveBack: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
          });
        },
      },
    });

    gsap.set(containerRef.current, { opacity: 0, y: 50 });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div 
      className=" overflow-hidden border"
      ref={containerRef}
    >
      <div className="grid grid-cols-2 divide-x divide-gray-200">
        <LinkBox Icon={SiNextdotjs} href="#" />
        <LinkBox Icon={SiNestjs} href="#" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-gray-200">
        <LinkBox Icon={SiNodedotjs} href="#" />
        <LinkBox Icon={SiReact} href="#" />
        <LinkBox Icon={SiPrisma} href="#" />
        <LinkBox Icon={SiTailwindcss} href="#" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-gray-200">
        <LinkBox Icon={SiMongodb} href="#" />
        <LinkBox Icon={SiExpo} href="#" />
        <LinkBox Icon={SiTypescript} href="#" />
        <LinkBox Icon={SiDocker} href="#" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-gray-200">
        <LinkBox Icon={SiPython} href="#" />
        <LinkBox Icon={SiVuedotjs} href="#" />
        <LinkBox Icon={SiJavascript} href="#" />
        <LinkBox Icon={SiCplusplus} href="#" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-gray-200">
        <LinkBox Icon={SiRust} href="#" /> 
        <LinkBox Icon={SiPostgresql} href="#" />
        <div className="col-span-2 bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center">
          <p className="text-gray-600 font-medium">More coming soon...</p>
        </div>
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES: Record<string, string[]> = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: Record<string, string[]> = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

interface LinkBoxProps {
  Icon: React.ElementType; 
  href: string;
}

const LinkBox: React.FC<LinkBoxProps> = ({ Icon, href }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: React.MouseEvent<HTMLElement>): string => {
    const box = e.currentTarget.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
      backgroundColor: "#f8fafc",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
      backgroundColor: "#ffffff", 
    });
  };

  return (
    <a
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-24 w-full place-content-center sm:h-28 md:h-32 transition-all duration-300 hover:shadow-inner"
    >
      <Icon className="text-2xl sm:text-3xl lg:text-4xl text-gray-700" />

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-gray-50"
      >
        <Icon className="text-2xl sm:text-3xl md:text-4xl text-blue-600" />
      </div>
    </a>
  );
};