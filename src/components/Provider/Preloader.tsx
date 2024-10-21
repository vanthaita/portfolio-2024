'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
  "Chào buổi sáng, bắt đầu hành trình mới!",
  "おはようございます、今日も一緒に頑張りましょう！",
  "Good morning, let's start something amazing!",
  "Học hôm nay, thành công ngày mai!",
  "学びは未来への鍵です。",
  "Knowledge is the key to your future!"
];

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
    }, 700);

    const timeout = setTimeout(() => {
      setLoading(false);
      onLoadingComplete();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black z-50 text-white h-screen overflow-hidden"
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

export default PreLoader;
