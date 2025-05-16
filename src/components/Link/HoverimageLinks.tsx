import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs, SiTypescript, SiMongodb, SiPrisma, SiPython } from "react-icons/si";

interface LinkProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  description: string;
  demoHref: string;
  sourceHref?: string;
  techStack: { icon: React.ElementType; name: string }[];
}

export const HoverImageLinks: React.FC = () => {
  const linksRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const links = gsap.utils.toArray<HTMLDivElement>('.link-card');

    if (links.length === 0) return;

    const triggerAnimation = gsap.fromTo(
      links,
      { autoAlpha: 0, y: 50, scale: 0.85 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: linksRef.current || document.body,
          start: "top 85%",
          end: "bottom 15%",
          scrub: 1.2,
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      triggerAnimation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className=" p-4 md:p-8 lg:p-12">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-black uppercase tracking-wide mb-8 md:mb-12 transition-transform duration-500 hover:scale-[1.02]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
      >
        Featured Projects
      </motion.h1>
      <div ref={linksRef} className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Link
            heading="Mogi"
            subheading="AI-Powered Interview Simulation"
            description="A platform that uses AI to simulate realistic job interviews with personalized feedback and performance analytics."
            imgSrc="/mogi.png"
            demoHref="https://mogi-three.vercel.app/"
            sourceHref="https://github.com/your-repo/mogi" 
            techStack={[
              { icon: SiNextdotjs, name: "Next.js" },
              { icon: SiTypescript, name: "TypeScript" },
              { icon: SiTailwindcss, name: "Tailwind CSS" },
            ]}
          />
          <Link
            heading="Burogu"
            subheading="Collaborative Blogging Platform"
            description="A multi-author blogging platform with real-time collaboration features and rich text editing capabilities."
            imgSrc="/burogu.png"
            demoHref="https://burogu-fontend.vercel.app/"
            sourceHref="https://github.com/your-repo/burogu" 
            techStack={[
              { icon: SiReact, name: "React" },
              { icon: SiNodedotjs, name: "Node.js" },
              { icon: SiMongodb, name: "MongoDB" },
            ]}
          />
          <Link
            heading="Notto"
            subheading="Organize Your Thoughts"
            description="A minimalist note-taking app with markdown support, cloud sync, and organizational features."
            imgSrc="/notto.png"
            demoHref="https://notto-omega.vercel.app/"
            sourceHref="https://github.com/your-repo/notto"
            techStack={[
              { icon: SiNextdotjs, name: "Next.js" },
              { icon: SiPrisma, name: "Prisma" },
              { icon: SiTailwindcss, name: "Tailwind CSS" },
            ]}
          />
          <Link
            heading="TaskFlow"
            subheading="Productivity Management System"
            description="An all-in-one productivity tool combining task management, time tracking, and team collaboration features."
            imgSrc="/taskflow.png"
            demoHref="#"
            sourceHref="#" 
            techStack={[
              { icon: SiReact, name: "React" },
              { icon: SiPython, name: "Python" },
              { icon: SiTypescript, name: "TypeScript" },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const Link: React.FC<LinkProps> = ({ heading, imgSrc, subheading, description, demoHref, sourceHref, techStack }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="whileHover"
      className="link-card group relative flex flex-col bg-white border border-slate-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="overflow-hidden">
        <motion.img
          variants={{
            initial: { scale: 1.05, opacity: 0.9 },
            whileHover: {
              scale: 1,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              }
            },
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          src={imgSrc}
          className="w-full h-48 object-cover"
          alt={`Image representing ${heading} project`}
        />
      </div>

      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <motion.h3
            variants={{
              initial: { x: 0 },
              whileHover: { x: -4 },
            }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 12,
              staggerChildren: 0.03,
              delayChildren: 0.05,
            }}
            className="text-xl md:text-2xl font-semibold text-slate-800 transition-colors duration-300 group-hover:text-indigo-600"
          >
            {heading.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 4, scale: 1.03 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </motion.h3>

          <p className="mt-1.5 text-sm md:text-base text-slate-500 group-hover:text-slate-600 transition-colors duration-300">
            {subheading}
          </p>

          <p className="mt-3 text-xs md:text-sm text-slate-600 line-clamp-3 group-hover:text-slate-700 transition-colors duration-300">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs bg-slate-100 rounded-full text-slate-700 group-hover:bg-slate-200 transition-colors"
              >
                <tech.icon className="text-sm" />
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 md:mt-6 pt-4 border-t border-slate-200 flex flex-wrap gap-3 justify-start">
          {sourceHref && sourceHref !== "#" && (
            <motion.a
              href={sourceHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-white bg-black border border-slate-300 px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              whileHover={{ y: -2, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <FiGithub className="text-base" />
              Source Code
            </motion.a>
          )}
          {demoHref && demoHref !== "#" && (
            <motion.a
              href={demoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-white bg-black px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              whileHover={{ y: -2, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <FiExternalLink className="text-base" />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};