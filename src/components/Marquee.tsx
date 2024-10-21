import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

export const Marquee = () => {
  const targetRef = useRef<HTMLElement | null>(null); 
  const textRef = useRef<HTMLDivElement | null>(null);
  const [textWidth, setTextWidth] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.scrollWidth);
    }
  }, [textRef]);

  const speed = textWidth / 400; 

  return (
    <section ref={targetRef} className="h-[8vh] overflow-hidden text-white mt-3">
      <div className="sticky top-0 flex h-[8vh] items-center overflow-hidden">
        <motion.div
          ref={textRef}
          style={{ x: useTransform(scrollYProgress, [0, 1], [0, -textWidth]) }}
          animate={{ x: [0, -textWidth] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: speed, 
          }}
          className="whitespace-nowrap flex"
        >
          <span className="mr-10 text-5xl font-black uppercase leading-[0.85] md:text-7xl md:leading-[0.85]">
            &#34;If you want something, all the universe will conspire to help
            you achieve it.&#34; – Paulo Coelho, The Alchemist. The power of
            desire and persistence can turn dreams into reality. Keep moving
            forward, stay determined with your goals, and good things will come.
          </span>
          <span className="mr-10 text-5xl font-black uppercase leading-[0.85] md:text-7xl md:leading-[0.85]">
            &#34;When you want something, all the universe conspires in helping
            you to achieve it.&#34; – Paulo Coelho, The Alchemist. Remember,
            courage is the key to pursuing your dreams. Believe in the journey
            and follow your heart.
          </span>
        </motion.div>
      </div>
    </section>
  );
};
