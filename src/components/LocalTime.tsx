'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LocalTime = () => {
  const [time, setTime] = useState('');
  const [amPm, setAmPm] = useState('');
  const [hasLoaded, setHasLoaded] = useState(false);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const localTime = new Date();
      const vietnamTime = new Date(localTime.toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' }));
      const formattedTime = formatTime(vietnamTime);

      setTime(formattedTime.split(' ')[0]);
      setAmPm(formattedTime.split(' ')[1]);
      setHasLoaded(true);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const timeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="end-1 col-span-8 flex w-auto flex-col md:items-end md:justify-end md:col-span-4 md:right-0 md:top-1/3 absolute
    -bottom-4 justify-end items-end mb-[5.25px] md:mb-4 p-4">
      <div className="overflow-clip">
        <span className="block max-w-[15ch] text-right font-mono md:text-xl font-medium uppercase leading-snug text-white md:max-w-max 3xl:text-base text-base">
          Local time
        </span>
      </div>
      <div className="overflow-clip">
        <motion.span
          className="block text-heading-2 font-semibold uppercase leading-none tracking-heading text-white sm:text-heading-1 3xl:text-heading-1 text-2xl"
          initial="hidden"
          animate={hasLoaded ? 'visible' : 'hidden'}
          variants={timeVariants}
        >
          {time} {amPm}, HCM
        </motion.span>
      </div>
    </div>
  );
};

export default LocalTime;
