import { motion } from "framer-motion";
import { CloudRain } from "lucide-react";
import { StarBackground } from "./StarBackground";


export const HeroSection = () => {
  return (
    <div
      className="absolute top-[110px] left-0 w-full z-10 text-center px-4 pointer-events-none"
    >
      <StarBackground/>
      <StarBackground/>
      <StarBackground/>
      
      <h1
        className="text-[60px] sm:text-[72px] font-bold text-foreground text-glow"
        style={{ fontFamily: "MPLUSRounded" }}
      >
        <span className="text-white" style={{ fontFamily: "EduCursive" }}>
          Feel
        </span>{" "}
        like royalty,
        <br />
        every single{" "}
        <span className="text-white" style={{ fontFamily: "EduCursive" }}>
          day
        </span>
        .
      </h1>

      <p
        className="mt-4 max-w-xl mx-auto text-lg md:text-xl text-white"
        style={{ fontFamily: "MPLUSRounded" }}
      >
        Rediscover self-love through skincare rituals crafted to treat you
        like the queen you are.
      </p>
      
       <motion.a
      href="#products"
      whileHover={{
        scale: 1.08,
        rotate: -1,
        boxShadow: "0 0 26px rgba(200, 20, 90, 0.6)", // Juicier glow
        filter: "brightness(1.2) blur(0.5px)",
        backgroundColor: "#C8145A", // Vivid mulberry
      }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mt-14 px-6 py-2 rounded-full bg-[#C8145A] text-white text-sm font-mplus shadow-md animate-glow inline-block"
      title="Explore Rajkonna products"
    >
      Enter Ritual Space 
    </motion.a>




    </div>
  );
};
