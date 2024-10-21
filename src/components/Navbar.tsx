/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Link from 'next/link';

const Navbar = () => {
  const scrollToSection = (event: any, sectionId: any) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="top-0 z-40 w-full px-4 bg-black">
      <div className="mt-6 flex grid-cols-12 flex-row items-start justify-between gap-x-6 lg:grid lg:items-center">
        <div className="col-span-8 flex flex-col items-start gap-x-10 gap-y-4 lg:flex-row lg:items-center">
          <div className="w-fit">
            <Link aria-label="Back to Home" href="/">
              <span className="text-lg font-extrabold leading-snug tracking-wider text-gray-400">
                TA THAI<sup>©</sup>
              </span>
            </Link>
          </div>
          <span className="flex w-fit max-w-[18ch] text-lg font-semibold leading-snug text-gray-400 sm:max-w-max md:text-lg 2xl:text-xl">
            (Web & Mobile App Developer)
          </span>
        </div>

        <nav className="col-span-4 flex justify-end text-lg text-gray-400 md:text-lg 2xl:text-xl mr-2">
          <ul className="flex flex-col items-start gap-x-4 md:flex-row">
            {['Works', 'About', 'Contact'].map((item, index) => (
              <li key={index} className="flex leading-snug">
                <Link
                  className="font-bold relative overflow-y-hidden w-full group h-fit"
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollToSection(e, item.toLowerCase())} // Add onClick handler
                >
                  <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">
                    {item}
                  </span>
                  <span className="absolute inset-0 group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all ease-in-out-circ duration-500 underline flex-nowrap whitespace-nowrap">
                    {item}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <svg className="absolute cursor-none">
        <filter id="grainy">
          <feTurbulence type="turbulence" baseFrequency="0.5"></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
      </svg>
    </header>
  );
};

export default Navbar;
