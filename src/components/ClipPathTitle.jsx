// ClipPathTitle.jsx
import { StarBackground } from "./StarBackground";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export const ClipPathTitle = ({ title, color, bg, className, borderColor }) => {
  const titleRef = useRef();
  const initialClip = "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)";
  const fullClip = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";

  useEffect(() => {
    const el = titleRef.current;

    gsap.fromTo(
      el,
      { clipPath: initialClip, opacity: 0 },
      {
        clipPath: fullClip,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // when top of el reaches 80% of viewport height
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
    return (
    <div
      className="general-title relative overflow-hidden"
      ref={titleRef}
      style={{ clipPath: initialClip }}
    >
      {/* ⭐ Star Background */}
      <div className="absolute inset-0 z-0">
        <StarBackground />
      </div>

      {/* ✂️ Clipped title box */}
      <div
        style={{ borderColor }}
        className={`${className} border-[.5vw] text-nowrap z-10 relative`}
      >
        <div
          className="pb-5 md:px-14 px-3 md:pt-0 pt-3"
          style={{ backgroundColor: bg }}
        >
          <h2 style={{ color }}>{title}</h2>
        </div>
      </div>
    </div>
  );
};


