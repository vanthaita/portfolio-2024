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
      href: "/",
      label: "Resume",
    },
    {
      id: 5,
      href: "https://github.com/vanthaita",
      label: "Github",
    },
    {
      id: 6,
      href: "/",
      label: "Legal",
    },
  ];

  return (
    <footer className="mb-16 sm:mb-0 text-white pt-10 max-w-[91%] w-full mx-auto">
      <div className="border-b border-b-gray-400 pb-6 w-full">
        <span className="sr-only">Portfolio Footer</span>
        <FooterTitle />
      </div>
      <div className="flex flex-row gap-y-12 gap-x-2  items-start justify-between pt-6 pb-10 text-text">
        <div className="gap-y-4 b-8 flex flex-col text-base xl:text-h6 2xl:text-h5">
          <div className="flex w-56 gap-x-1 xl:w-96">
          <span className="flex flex-col text-heading-3 font-bold leading-tight tracking-heading text-secondary-300 sm:order-first sm:text-heading-2 md:col-span-6"><span>© 2024 <br className="block lg:hidden"/>Ta Thai</span><span>All rights reserved.</span></span>
          </div>
        </div>
        <ul className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid xl:grid-cols-3 gap-x-8 gap-y-3">
          {links.map((link) => (
            <li key={link.id} className="flex w-fit group text-base xl:text-h7 2xl:text-h6">
              <Link className="group" href={link.href} target={link.id === 5 ? "_blank" : "_self"} rel={link.id === 5 ? "noopener noreferrer" : undefined}>
                {link.label}
              </Link>
              <span className="relative overflow-hidden h-fit w-fit">
                <GoArrowUpRight className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]" />
                <GoArrowUpRight className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
  