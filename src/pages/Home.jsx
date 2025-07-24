import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import VideoPinSection from "../components/VideoPinSection";

const Home = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <StarBackground />
    <Navbar />
    <div className="content-wrapper relative z-20">
      <HeroSection />
      <VideoPinSection />
    </div>
  </div>
);

export default Home;

