import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoPinSection = () => {
  const videoContainerRef = useRef(null);
  const videoBoxRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(() => {
    const container = videoContainerRef.current;
    const videoBox = videoBoxRef.current;
    const video = videoRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top+=3", // Trigger after 10px scroll
        end: "100% top",
        scrub: 1.5,
        pin: true,
      },
    });

    tl.to(videoBox, {
      clipPath: "circle(100% at 50% 50%)",
      ease: "power2.out",
    });

    ScrollTrigger.create({
      trigger: container,
      start: "top top+=10",
      once: true,
      onEnter: () => video.play(),
    });
  }, []);

  return (
    <section
      ref={videoContainerRef}
      className="vd-pin-section h-[100vh] relative overflow-hidden"
    >
      <div
        ref={videoBoxRef}
        className="w-full h-full video-box"
        style={{
          clipPath: "circle(6% at 50% 50%)",
          transition: "clip-path 0.5s ease-out",
        }}
      >
        <video
          ref={videoRef}
          src="/public/assets/videos/pin-video.mp4"
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>
    </section>
  );
};

export default VideoPinSection;


