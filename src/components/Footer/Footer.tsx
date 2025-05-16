import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { FooterTitle } from "./FooterSvgTitle";

export default function Footer() {
  const links = [
    {
      id: 1,
      href: "#about",
      label: "About Me",
    },
    {
      id: 2,
      href: "#works",
      label: "Projects",
    },
    {
      id: 3,
      href: "#contact",
      label: "Contact",
    },
    {
      id: 4,
      href: "/resume-en.pdf",
      label: "Resume (EN)",
      download: true
    },
    {
      id: 5,
      href: "https://github.com/vanthaita",
      label: "Github",
      external: true
    },
    {
      id: 6,
      href: "/legal",
      label: "Legal",
    },
  ];

  return (
    <footer className="mb-16 sm:mb-0 text-gray-900 pt-10 max-w-[91%] w-full mx-auto">
      <div className="border-b border-b-gray-200 pb-6 w-full">
        <span className="sr-only">Portfolio Footer</span>
        <FooterTitle />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-8 items-start justify-between pt-6 pb-10">
        {/* Copyright Section */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-bold leading-tight text-gray-800">
              © 2024 <span className="block sm:inline">Ta Thai</span>
            </span>
            <span className="text-gray-500 text-sm sm:text-base">
              All rights reserved.
            </span>
          </div>
        </div>

        {/* Links Section */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4">
          {links.map((link) => (
            <li key={link.id} className="flex items-center group">
              <Link
                className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : undefined}
                download={link.download}
              >
                {link.label}
                {link.external && (
                  <span className="relative overflow-hidden h-4 w-4">
                    <GoArrowUpRight className="absolute group-hover:-translate-y-4 group-hover:translate-x-4 duration-300 transition-transform ease-in-out-circ text-gray-400" />
                    <GoArrowUpRight className="absolute group-hover:translate-x-0 duration-300 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-4 -translate-x-4 text-gray-600" />
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}