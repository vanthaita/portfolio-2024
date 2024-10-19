'use client';
import React, { useEffect, useState } from 'react';

const LocalTime = () => {
  const [time, setTime] = useState('');

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('vi-VN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const localTime = new Date();
      const vietnamTime = new Date(localTime.toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' }));
      setTime(formatTime(vietnamTime));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="end-1 col-span-8 flex w-full flex-col items-end justify-end md:col-span-4 bottom-0 absolute">
      <div className="overflow-clip">
        <span className="block max-w-[15ch] text-right font-mono text-base-medium font-medium uppercase leading-snug tracking-mono text-secondary-100 md:max-w-max 3xl:text-base">
          Local time
        </span>
      </div>
      <div className="overflow-clip">
        <span className="block text-heading-2 font-semibold uppercase leading-none tracking-heading text-secondary-300 sm:text-heading-1 3xl:text-heading-1 text-3xl"> 
          {time} {'AM'}, HCM
        </span>
      </div>
    </div>
  );
};

export default LocalTime;
