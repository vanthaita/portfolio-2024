/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FiExternalLink, FiGithub, FiYoutube } from "react-icons/fi";
import { SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs, SiTypescript, SiMongodb, SiPrisma, SiPostgresql, SiDocker, SiTrpc, SiExpo, SiGithub } from "react-icons/si";
import { FaAws } from "react-icons/fa";

interface LinkProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  demoHref: string;
  sourceHref?: string;
  techStack: { icon: React.ElementType; name: string }[];
}

export const HoverImageLinks: React.FC = () => {
 

  return (
    <section className="p-4 md:p-8 lg:p-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-black uppercase tracking-wide mb-8 md:mb-12">
        Featured Projects
      </h1>
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Pirate Social */}
          <Link
            heading="Pirate Social"
            subheading="Social Media Platform"
            imgSrc="https://res.cloudinary.com/dq2z27agv/image/upload/q_auto,f_webp,w_1200/v1747420420/iqwgxelz1cojudr4qmsh.png"
            demoHref="https://youtu.be/WOpr_G24b84"
            sourceHref="https://github.com/TDevUIT/piratesocial-v2"
            techStack={[
              { icon: SiNextdotjs, name: "Next.js" },
              { icon: SiNodedotjs, name: "NestJS" },
              { icon: SiPostgresql, name: "PostgreSQL" },
              { icon: SiDocker, name: "Docker" },
              { icon: FaAws, name: "AWS S3" },
              { icon: SiTypescript, name: "TypeScript" },
            ]}
          />

          {/* RepoMind */}
          <Link
            heading="RepoMind"
            subheading="AI-Powered GitHub Assistant"
            imgSrc="https://res.cloudinary.com/dq2z27agv/image/upload/q_auto,f_webp,w_1200/v1747419884/azbfoah4s23kvgbxlqsb.png"
            demoHref="https://youtu.be/0UlmJsTIOD8"
            sourceHref="https://github.com/vanthaita/repomind"
            techStack={[
              { icon: SiNextdotjs, name: "Next.js" },
              { icon: SiTrpc, name: "tRPC" },
              { icon: SiPostgresql, name: "PostgreSQL" },
              { icon: SiPrisma, name: "Prisma" },
              { icon: SiGithub, name: "GitHub API" },
            ]}
          />

          {/* Bloai */}
          <Link
            heading="Bloai"
            subheading="AI & SEO Blogging Platform"
            imgSrc="https://res.cloudinary.com/dq2z27agv/image/upload/q_auto,f_webp,w_1200/v1747420368/rhkrirrupcdmdv567a2s.png"
            demoHref="https://www.bloai.blog/"
            sourceHref="https://github.com/TDevUIT/Bloai"
            techStack={[
              { icon: SiNextdotjs, name: "Next.js" },
              { icon: SiTrpc, name: "tRPC" },
              { icon: SiPostgresql, name: "PostgreSQL" },
              { icon: SiTypescript, name: "TypeScript" },
            ]}
          />

          {/* Kaisho */}
          <Link
            heading="Kaisho"
            subheading="Japanese Learning Platform"
            imgSrc="https://res.cloudinary.com/dq2z27agv/image/upload/q_auto,f_webp,w_1200/v1747420022/nwqmivcjihqjdgjegjay.png"
            demoHref="https://kaisho.vercel.app/"
            sourceHref="https://github.com/vanthaita/Kaisho"
            techStack={[
              { icon: SiNextdotjs, name: "Next.js" },
              { icon: SiTypescript, name: "TypeScript" },
              { icon: SiTailwindcss, name: "Tailwind CSS" },
            ]}
          />

          {/* Mogi */}
          <Link
            heading="Mogi"
            subheading="AI-Powered Interview Simulation"
            imgSrc="/mogi.png"
            demoHref="https://youtu.be/_tGqa74K49g"
            sourceHref="https://github.com/your-repo/mogi"
            techStack={[
              { icon: SiNextdotjs, name: "Next.js" },
              { icon: SiNodedotjs, name: "NestJS" },
              { icon: SiPostgresql, name: "PostgreSQL" },
            ]}
          />

          {/* Burogu */}
          <Link
            heading="Burogu"
            subheading="Collaborative Blogging Platform"
            imgSrc="/burogu.png"
            demoHref="https://youtu.be/lxkugvKfWcE"
            sourceHref="https://github.com/your-repo/burogu"
            techStack={[
              { icon: SiReact, name: "React" },
              { icon: SiNodedotjs, name: "Node.js" },
              { icon: SiMongodb, name: "MongoDB" },
            ]}
          />

          {/* Sprout Career */}
          <Link
            heading="Sprout Career"
            subheading="Job Recruitment Platform"
            imgSrc="https://res.cloudinary.com/dq2z27agv/image/upload/q_auto,f_webp,w_1200/v1747420064/uup5uughpthlk0w2heqn.png"
            demoHref="https://joblume.vercel.app/en"
            sourceHref="https://github.com/vanthaita/Sprout-Career"
            techStack={[
              { icon: SiNextdotjs, name: "Next.js" },
              { icon: SiNodedotjs, name: "NestJS" },
              { icon: SiPostgresql, name: "PostgreSQL" },
              { icon: SiDocker, name: "Docker" },
            ]}
          />

          {/* Kapi */}
          <Link
            heading="Kapi"
            subheading="Japanese Learning Mobile App"
            imgSrc="https://res.cloudinary.com/dq2z27agv/image/upload/q_auto,f_webp,w_1200/v1747420624/gkwduwjekmgwxb2galgc.png"
            demoHref="#"
            sourceHref="https://github.com/TDevUIT/Kapi"
            techStack={[
              { icon: SiReact, name: "React Native" },
              { icon: SiExpo, name: "Expo" },
              { icon: SiTailwindcss, name: "Tailwind CSS" },
              { icon: SiNodedotjs, name: "NestJS" },
              { icon: SiPostgresql, name: "PostgreSQL" },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const Link: React.FC<LinkProps> = ({ heading, imgSrc, subheading, demoHref, sourceHref, techStack }) => {
  return (
    <div className="link-card group relative flex flex-col bg-white border border-slate-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
      <div className="overflow-hidden">
        <img
          src={imgSrc || ''}
          className="w-full h-48 object-cover group-hover:scale-100 scale-105 opacity-90 group-hover:opacity-100 transition-all duration-300"
          alt={`Image representing ${heading} project`}
        />
      </div>

      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-xl md:text-2xl font-semibold text-slate-800 transition-colors duration-300 group-hover:text-indigo-600">
            {heading}
          </h3>

          <p className="mt-1.5 text-sm md:text-base text-slate-500 group-hover:text-slate-600 transition-colors duration-300">
            {subheading}
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
            <a
              href={sourceHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-white bg-black border border-slate-300 px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <FiGithub className="text-base" />
              Source Code
            </a>
          )}
          
          {demoHref && demoHref !== "#" && (
            <a
              href={demoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-white bg-indigo-600 px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {demoHref.startsWith('https://youtu.be') ? (
                <>
                  <FiYoutube className="text-base" />
                  View Demo
                </>
              ) : (
                <>
                  <FiExternalLink className="text-base" />
                  Live Demo
                </>
              )}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};