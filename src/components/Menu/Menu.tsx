import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HireMe from '../HireMe';
import Link from 'next/link';

const socialLinks = [
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
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    },
    visible: {
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      },
    },
  };

  const navItems = ['HOME', 'WORKS', 'ABOUT', 'CONTACT'];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 right-0 h-full bg-white text-gray-900 z-[9999] flex flex-col p-8 w-full md:w-1/2 lg:w-1/3 shadow-lg"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
        >
          {/* Close Button */}
          <motion.button
            onClick={toggleMenu}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white fixed top-6 right-6 z-50 text-xl"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            ✕
          </motion.button>

          {/* Main Navigation */}
          <motion.nav
            className="font-bold text-5xl md:text-6xl lg:text-7xl mt-20 flex flex-col space-y-2"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                onClick={toggleMenu}
                variants={linkVariants}
                whileHover={{ 
                  x: 15, 
                  color: '#4f46e5',
                  transition: { duration: 0.3 }
                }}
                className="hover:underline underline-offset-8 decoration-2"
              >
                {item}
              </motion.a>
            ))}
          </motion.nav>

          {/* Footer Section */}
          <motion.div
            className="mt-auto space-y-6 pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group overflow-hidden px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all"
                >
                  <span className="block group-hover:-translate-y-6 transition-transform duration-300">
                    {link.name}
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center translate-y-6 group-hover:translate-y-0 transition-transform duration-300 text-indigo-600">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Hire Me Button */}
            <div className="pt-4">
              <HireMe />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;