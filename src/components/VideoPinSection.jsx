import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(ScrollTrigger);

const VideoPinSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    // Only run the animation on non-mobile devices
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "top top", // Starts when the top of the section hits the top of the viewport
          end: "200% top", // Ends after scrolling 200% of the viewport height
          scrub: 1.5,      // Smoothly links animation to scroll
          pin: true,       // Pins the section in place during the animation
        },
      });

      // Animate the clip-path from its initial small circle to a full one
      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    }
  }, [isMobile]); // Dependency array ensures this runs if isMobile changes

  return (
    <section className="vd-pin-section">
      <div
        className="size-full video-box"
        style={{
          // Set the initial state of the clip-path
          clipPath: isMobile
            ? "circle(100% at 50% 50%)" // Fully visible on mobile
            : "circle(6% at 50% 50%)",   // Starts as a small circle on desktop
        }}
      >
        <video
          className="size-full object-cover"
          src="assets/videos/pin-video.mp4"
          playsInline
          muted
          loop
          autoPlay
        />
      </div>
    </section>
  );
};

export default VideoPinSection;