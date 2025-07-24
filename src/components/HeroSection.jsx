"use client";
import { motion } from "framer-motion";

// Animation variants
const wordFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container text-center z-10">
        {/* Tagline */}
        <div className="mx-auto flex flex-col items-center">
          {/* Line 1: Feel like royalty */}
          <motion.h1
            className="flex flex-wrap justify-center gap-5"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {[
              { text: "Feel", font: "cursive" },
              { text: "like", font: "normal" },
              { text: "royalty", font: "normal" },
            ].map((word, index) => (
              <motion.span
                key={index}
                className={`
                  ${
                    word.font === "cursive"
                      ? "font-edunsw italic"
                      : "font-mplus font-semibold"
                  }
                  text-[30.6666px] md:text-[41.6px] lg:text-[60.6666px]
                  leading-tight
                `}
                variants={wordFadeUp}
                custom={index}
              >
                {word.text}
              </motion.span>
            ))}
          </motion.h1>

          {/* Line 2: every single day */}
          <motion.h1
            className="mt-2 flex flex-wrap justify-center gap-5"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {[
              { text: "every", font: "normal" },
              { text: "single", font: "normal" },
              { text: "day", font: "cursive" },
            ].map((word, index) => (
              <motion.span
                key={index}
                className={`
                  ${
                    word.font === "cursive"
                      ? "font-edunsw italic"
                      : "font-mplus font-semibold"
                  }
                  text-[30.6666px] md:text-[41.6px] lg:text-[60.6666px]
                  leading-tight
                `}
                variants={wordFadeUp}
                custom={index + 3}
              >
                {word.text}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Subtagline */}
        <motion.p
          className="
            mt-4
            font-mplus
            text-[11.3333px] md:text-[6.49166px] lg:text-[11.3333px]
            font-normal
            text-[hsl( 0,0%,95%)]
            max-w-[387px] md:max-w-[289px] w-full mx-auto
          "
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          Rediscover self-love through skincare rituals crafted to treat you
          like the queen you are.
        </motion.p>
      </div>
    </section>
  );
};
