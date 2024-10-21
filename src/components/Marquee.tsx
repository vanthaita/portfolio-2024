import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";

export const Marquee = () => {
  const targetRef = useRef(null);

  // Get scroll progress using useScroll
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -4000]);

  return (
    <section
      ref={targetRef}
      className="h-[8vh] overflow-auto text-white mt-3"
    >
      <div className="sticky top-0 flex h-[8vh] items-center overflow-hidden">
        <motion.p
          style={{ x }}
          animate={{ x: [0, -4000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 10,
          }}
          className="whitespace-nowrap text-5xl font-black uppercase leading-[0.85] md:text-7xl md:leading-[0.85]"
        >
          Nothing in this world can take the place of persistence. Talent will
          not; nothing is more common than unsuccessful men with talent. Genius
          will not; unrewarded genius is almost a proverb. Education will not;
          the world is full of educated derelicts. Persistence and determination
          alone are omnipotent. The slogan Press On! has solved and always
          will solve the problems of the human race.
        </motion.p>
      </div>
    </section>
  );
};
