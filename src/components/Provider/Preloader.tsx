'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
  {
    text: "Chào buổi sáng, bắt đầu hành trình mới!",
    language: "Vietnamese",
    duration: 0.8
  },
  {
    text: "おはようございます、今日も一緒に頑張りましょう！",
    language: "Japanese",
    duration: 0.9
  },
  {
    text: "Good morning, let's start something amazing!",
    language: "English",
    duration: 0.7
  },
];

const PreLoader: React.FC<{ onLoadingComplete: () => void }> = ({ onLoadingComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Word rotation interval
    const wordInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % greetings.length);
    }, 1500);

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 1;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setIsExiting(true);
          setTimeout(onLoadingComplete, 800); // Match exit animation duration
          return 100;
        }
        return newProgress;
      });
    }, 30); // 3000ms total / 100 steps = 30ms per step

    return () => {
      clearInterval(wordInterval);
      clearInterval(progressInterval);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-neutral-950 z-50 text-white h-screen overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          }}
        >
          <div className="relative h-32 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={greetings[currentIndex].text}
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  transition: { 
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1] 
                  }
                }}
                exit={{ 
                  y: -20, 
                  opacity: 0,
                  transition: { 
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1] 
                  }
                }}
                className="text-3xl md:text-4xl font-medium text-center px-4"
              >
                {greetings[currentIndex].text}
                <motion.span 
                  className="absolute -bottom-6 right-0 text-xs text-neutral-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                >
                  {greetings[currentIndex].language}
                </motion.span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-20 w-full max-w-md px-8">
            <div className="h-px w-full bg-neutral-700 overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;