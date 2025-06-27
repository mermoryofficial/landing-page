"use client";

import { useAnimate } from "motion/react";
import { useEffect } from "react";

/**
 * Interpolates the background color of the children element between two colors.
 * @param {React.ReactNode} children - The child elements to be animated.
 * @param {string} className - The class name of the element to be animated.
 * @returns {React.ReactNode} The animated child elements.
 */
export default function ColorInterpolation({ children, className }) {
  const [motionRef, animate] = useAnimate();

  useEffect(() => {
    const motionElement = motionRef.current;
    const motionAnimation = animate(
      motionElement,
      { backgroundColor: ["#369DE3", "#BCADF2"] },
      {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }
    );

    return () => {
      motionAnimation.cancel();
    };
  }, []);

  return (
    <>
      <div ref={motionRef} className={className}>
        {children}
      </div>
    </>
  );
}