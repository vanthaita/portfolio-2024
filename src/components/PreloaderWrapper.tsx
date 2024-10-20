'use client';

import React, { useState, useEffect } from 'react';
import PreLoader from '@/components/Preloader';

const PreloaderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);

  useEffect(() => {
    const handleLoadingComplete = () => {
      setIsPreloaderDone(true);
    };

    setTimeout(() => handleLoadingComplete(), 2000); 

    return () => {};
  }, []);

  return (
    <>
      {!isPreloaderDone ? (
        <PreLoader onLoadingComplete={() => setIsPreloaderDone(true)} />
      ) : (
        children
      )}
    </>
  );
};

export default PreloaderWrapper;
