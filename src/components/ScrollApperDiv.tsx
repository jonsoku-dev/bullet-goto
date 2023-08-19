"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface ScrollAppearDivProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollAppearDiv: React.FC<ScrollAppearDivProps> = ({
  children,
  className,
}) => {
  const controls = useAnimation();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      // Find the previous sibling element (which should be a div)
      const target = ref.current.previousElementSibling as HTMLElement;

      if (!target) return;

      const topPosition = target.offsetTop;
      const triggerPosition = topPosition + target.offsetHeight * 0.3; // This is where 70% of the target div is scrolled into view

      if (window.scrollY > triggerPosition && !scrolled) {
        setScrolled(true);
        controls.start({ opacity: 1, y: 0 });
      } else if (window.scrollY <= triggerPosition && scrolled) {
        setScrolled(false);
        // controls.start({ opacity: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, controls, ref]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -40 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAppearDiv;
