'use client';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import throttle from 'lodash/throttle';

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = throttle((event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }, 16);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Outer circle */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          top: mousePosition.y - 50,
          left: mousePosition.x - 50,
          width: 100,
          height: 100,
          borderRadius: "50%",
          border: "2px solid rgba(255, 255, 255, 0,5)",
          background: "rgba(255, 255, 255, 0.1)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Page content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
