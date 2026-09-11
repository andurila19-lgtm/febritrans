"use client";

import { motion, type Variants } from "motion/react";
import { type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  staggerChildren?: number;
  once?: boolean;
  amount?: number;
}

const getVariants = (direction: Direction, duration: number): Variants => {
  const hidden: Record<string, number> = { opacity: 0 };
  const visible: Record<string, number> = { opacity: 1 };

  switch (direction) {
    case "up":
      hidden.y = 40;
      visible.y = 0;
      break;
    case "down":
      hidden.y = -40;
      visible.y = 0;
      break;
    case "left":
      hidden.x = -60;
      visible.x = 0;
      break;
    case "right":
      hidden.x = 60;
      visible.x = 0;
      break;
    case "scale":
      // Replaced scale zoom with gentle fade
      break;
    case "none":
      break;
  }

  return {
    hidden,
    visible: {
      ...visible,
      transition: {
        duration,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };
};

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  staggerChildren,
  once = true,
  amount = 0.15,
}: ScrollRevealProps) {
  const variants = getVariants(direction, duration);

  if (staggerChildren) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
        transition={{
          staggerChildren,
          delayChildren: delay,
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Child item for stagger animations
export function ScrollRevealItem({
  children,
  direction = "up",
  duration = 0.5,
  className = "",
}: {
  children: ReactNode;
  direction?: Direction;
  duration?: number;
  className?: string;
}) {
  const variants = getVariants(direction, duration);

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
