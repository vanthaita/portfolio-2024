'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["Chào buổi sáng", "おはようございます", "Good morning"];
const preloaderVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const PreLoader: React.FC<{ onLoadingComplete: () => void }> = ({ onLoadingComplete }) => {
    const [loading, setLoading] = useState(true);
    const [wordIndex, setWordIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 500);
  
      const timeout = setTimeout(() => {
        setLoading(false);
        onLoadingComplete();
      }, 2000);
  
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }, [onLoadingComplete]);
  
    return (
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-white z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={preloaderVariants}
          >
            <motion.div
              key={words[wordIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold"
            >
              {words[wordIndex]}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };


  export default PreLoader