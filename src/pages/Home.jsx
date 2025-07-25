import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { VideoPinSection } from "../components/VideoPinSection"; 
import { AboutSection } from "../components/AboutSection";
import { Product } from "../components/Product";
import { Contact } from "../components/Contact";
import { RajkonnaFooter } from "../components/RajkonnaFooter";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <StarBackground />
        <Navbar />
        {/* Sticky Hero + Video should be isolated */}
        <section className="relative z-[20] min-h-screen">
          <VideoPinSection />
          <HeroSection />
        </section>
      </div>

      {/* About section should appear normally, ABOVE z-10 */}
      <section className="relative z-[30]">
        <AboutSection />
        <Product />
        <Contact />
        <RajkonnaFooter />
      </section>
    </>
  );
};

export default Home;
