import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { VideoPinSection } from "../components/VideoPinSection"; // Make sure it's a named export!

const Home = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Background Stars (behind everything) */}
    <StarBackground />

    {/* Top Navbar (height: ~70px) */}
    <Navbar />

    {/* Fixed Hero Text (always visible at top-[70px]) */}
    <HeroSection />

    {/* Scrollable Content Section with Video Reveal */}
    <div className="relative z-0">
      <VideoPinSection />
      {/* Add more sections here like <AboutSection />, etc. */}
    </div>
  </div>
);

export default Home;
