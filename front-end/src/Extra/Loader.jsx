import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LoaderAnimation = () => {
  const dotsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    dotsRef.current.forEach((dot, index) => {
      tl.to(
        dot,
        {
          y: -10, // Move up
          ease: "power1.inOut",
          duration: 0.3,
        },
        index * 0.1 // Delay for snake effect
      ).to(
        dot,
        {
          y: 0, // Move back down
          ease: "power1.inOut",
          duration: 0.3,
        },
        index * 0.1
      );
    });

    return () => tl.kill();
  }, []);

  return (
    <div className="flex space-x-2">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="w-3 h-3 bg-black border-amber-200 border-4  text-center   rounded-full border-double"
        ></div>
      ))}
    </div>
  );
};

export default LoaderAnimation;
