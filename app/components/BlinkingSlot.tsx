"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BlinkingSlot() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  if (prefersReducedMotion) {
    return (
      <span className="font-display text-sage inline-block">[_]</span>
    );
  }

  return (
    <motion.span
      className="font-display text-sage inline-block"
      animate={{ opacity: [1, 0, 1] }}
      transition={{
        duration: 1.1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      [_]
    </motion.span>
  );
}
