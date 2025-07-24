import { motion } from "framer-motion";

export const HeroSection = () => (
  <section className="home-hero-container">
    <div className="text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[48px] sm:text-[60px] md:text-[72px] leading-tight font-bold"
        style={{ fontFamily: "Spectral-Bold" }}
      >
        <span style={{ fontFamily: "EduCursive" }} className="text-glow">
          Feel
        </span>{" "}
        like royalty,
        <br />
        every single <span style={{ fontFamily: "EduCursive" }}>day</span>.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-4 max-w-xl mx-auto text-lg md:text-xl"
        style={{ fontFamily: "MPLUS-Rounded" }}
      >
        Rediscover self-love through skincare rituals crafted to treat you like the queen you are.
      </motion.p>
    </div>
  </section>
);