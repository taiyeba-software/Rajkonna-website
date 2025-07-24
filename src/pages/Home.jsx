import { Navbar } from '../components/Navbar';
import { StarBackground } from '../components/StarBackground';
import { HeroSection } from '../components/HeroSection';
import VideoPinSection from '../components/VideoPinSection';

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <Navbar />
      <div className="content-wrapper">
        <HeroSection />

        {/* Pink overlay + video are handled INSIDE this component now */}
        <VideoPinSection />
      </div>
    </div>
  );
}

export default Home;
