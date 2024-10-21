import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HireMe from '../HireMe';
import Link from 'next/link';
const links = [
  { name: 'LINKEDIN', href: 'https://www.linkedin.com/in/vanthaita/' },
  { name: 'GITHUB', href: 'https://github.com/vanthaita/' },
  { name: 'INSTAGRAM', href: 'https://instagram.com' }
];
interface MenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, toggleMenu }) => {
  const menuVariants = {
    hidden: {
      x: '100%', 
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    visible: {
      x: 0, 
      transition: { duration: 0.7, ease: 'easeInOut' },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 right-0 h-full bg-[#0D0D0D] text-white z-[9999] flex flex-col p-8 sm:w-full md:w-1/2 shadow-xl"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
        >
          <motion.button
            onClick={toggleMenu}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-[#E3E3DE] shadow-lg text-black fixed top-5 right-5 z-[9998] text-2xl"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            ✕
          </motion.button>
          <motion.nav
            className=" font-bold text-8xl mt-8 flex flex-col tracking-wide leading-none space-y-[-0.2rem]"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            >
            {['HOME', 'WORKS', 'ABOUT', 'CONTACT'].map((link, index) => (
                <motion.a
                key={index}
                href={`#${link.toLowerCase()}`}
                onClick={toggleMenu}
                variants={linkVariants}
                whileHover={{ x: 15, color: '#E5E5E5' }} 
                transition={{ type: 'tween', duration: 0.3 }}
                className="hover:underline transition-all"
                >
                {link}
                </motion.a>
            ))}
            </motion.nav>

          <motion.div
            className="mt-auto text-xl space-y-4 leading-none" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="flex flex-row items-start gap-x-4 mt-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  className="font-bold relative overflow-y-hidden group h-fit border"
                  href={link.href} 
                >
                  <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500 px-3 py-4">
                    {link.name} 
                  </span>
                  <span className="absolute inset-0 group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all ease-in-out-circ duration-500 underline flex-nowrap whitespace-nowrap px-3 py-4">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
            <HireMe />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
