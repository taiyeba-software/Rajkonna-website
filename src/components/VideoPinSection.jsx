import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoPinSection = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    gsap.set(video, { opacity: 0, clipPath: "circle(6% at 50% 50%)" });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top+=5px",
      end: "+=600px",
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress;
        gsap.to(video, { opacity: p, duration: 0.3 });
        gsap.to(video, {
          clipPath: `circle(${6 + 94 * p}% at 50% 50%)`,
          ease: "power2.out",
        });
        if (p > 0.01 && video.paused) video.play();
      },
    });
  }, []);

  return (
    <section ref={containerRef} className="vd-pin-section">
      {/* Pink overlay filter */}
      <div className="absolute inset-0 bg-pink-300 opacity-50 z-40 pointer-events-none" />

      {/* Video with reveal clip-path */}
      <video
        ref={videoRef}
        className="video-box"
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/assets/videos/pin-video.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default VideoPinSection;
