'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Navbar = () => {
  const navLinksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const navItems = navLinksRef.current?.querySelectorAll('li');


    const hoverIn = (item: Element) => {
      gsap.to(item, {
        duration: 0.4,
        x: 10,
        color: '#f18b2f',
        ease: 'power1.out',
      });
    };
    const hoverOut = (item: Element) => {
      gsap.to(item, {
        duration: 0.4,
        x: 0,
        color: '#4B5563',
        ease: 'power1.in',
      });
    };

    navItems?.forEach((item) => {
      item.addEventListener('mouseenter', () => hoverIn(item));
      item.addEventListener('mouseleave', () => hoverOut(item));
    });

    return () => {
      navItems?.forEach((item) => {
        item.removeEventListener('mouseenter', () => hoverIn(item));
        item.removeEventListener('mouseleave', () => hoverOut(item));
      });
    };
  }, []);

  return (
    <header className="top-0 z-40 w-full px-4">
      <div className="mt-6 flex grid-cols-12 flex-row items-start justify-between gap-x-6 lg:grid lg:items-center">
        <div className="col-span-8 flex flex-col items-start gap-x-10 gap-y-4 lg:flex-row lg:items-center">
          <div className="w-fit">
            <Link aria-label="Back to Home" href="/">
              <span className="text-lg font-extrabold leading-snug tracking-wider text-gray-700">
                TA THAI<sup>©</sup>
              </span>
            </Link>
          </div>
          <span className="flex w-fit max-w-[18ch] text-lg font-semibold leading-snug text-gray-600 sm:max-w-max md:text-lg 2xl:text-xl">
            (Web & Mobile App Developer)
          </span>
        </div>

        <nav className="col-span-4 flex justify-end text-lg text-gray-600 md:text-lg 2xl:text-xl mr-2">
          <ul ref={navLinksRef} className="flex flex-col items-start gap-x-4 md:flex-row">
            {['Works', 'About', 'Contact'].map((item, index) => (
              <li key={index} className="flex leading-snug">
                <Link href={`/#${item.toLowerCase()}`}>
                  <span className="relative block h-fit font-semibold">
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
