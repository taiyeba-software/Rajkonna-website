import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    generateStars();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 5000); // more stars
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 1.5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.4 + 0.6,
        animationDuration: Math.random() * 3 + 2,
        animationDelay: Math.random() * 4,
      });
    }

    setStars(newStars);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[hsl(340,26%,70%)] star-background-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-glitter"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
            animationDelay: `${star.animationDelay}s`,
          }}
        />
      ))}
    </div>
  );
};

