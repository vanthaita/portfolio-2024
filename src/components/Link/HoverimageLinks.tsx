import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef, MouseEvent, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface LinkProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  href: string;
}

export const HoverImageLinks: React.FC = () => {
  const linksRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const links = gsap.utils.toArray<HTMLAnchorElement>('.link');
    
    const triggerAnimation = gsap.fromTo(
      links,
      { autoAlpha: 0, y: 50, scale: 0.5 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        stagger: 0.2,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: linksRef.current,
          start: "top 75%",
          end: "bottom 25%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      triggerAnimation.kill();
    };
  }, []);

  return (
    <section className="bg-black p-4 md:p-8"> 
      <motion.h1 
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-[#E3E3DE] uppercase tracking-widest shadow-lg mb-8 transition-transform duration-500 hover:scale-105"
      >
        Projects
      </motion.h1>
      <div ref={linksRef} className="mx-auto max-w-7xl space-y-10">
        <Link
          heading="Mogi"
          subheading="AI-Powered Interview Simulation"
          imgSrc="/mogi.png"
          href="https://mogi-three.vercel.app/"
        />
        <Link
          heading="Burogu"
          subheading="Collaborative Blogging Platform"
          imgSrc="/burogu.png"
          href="https://burogu-fontend.vercel.app/"
        />
        <Link
          heading="Notto"
          subheading="Organize Your Thoughts"
          imgSrc="/notto.png"
          href="https://notto-omega.vercel.app/"
        />
      </div>
    </section>
  );
};
const Link: React.FC<LinkProps> = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      x.set(xPct);
      y.set(yPct);
    }
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="link group relative flex items-center justify-between border-b-2 border-neutral-700 py-6 transition-colors duration-500 hover:border-neutral-50 md:py-10 w-full hover:bg-neutral-800"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16, scale: 1.05 },
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16, scale: 1.1 },
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1.1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        src={imgSrc}
        className="absolute z-0 h-32 w-48 rounded-lg object-cover md:h-48 md:w-64 shadow-lg transition-shadow duration-500 group-hover:shadow-2xl"
        alt={`Image representing a project: ${heading}`}
      />
      

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50 transition-transform duration-500 group-hover:translate-x-2" />
      </motion.div>
    </motion.a>
  );
};
