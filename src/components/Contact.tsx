import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };


  return (
    <motion.div
      className="relative flex w-full flex-col items-center justify-between h-svh"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="bg-black h-svh w-full  rounded-lg flex flex-col items-center justify-center"
        variants={containerVariants}
      >
        <motion.h1
          className="text-6xl uppercase text-white font-bold text-center"
          variants={textVariants}
        >
          Let&apos;s make it happen
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
