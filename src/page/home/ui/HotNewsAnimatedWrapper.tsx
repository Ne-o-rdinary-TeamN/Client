"use client";

import { motion } from "motion/react";
import { type ReactNode } from "react";

interface HotNewsAnimatedWrapperProps {
  children: ReactNode;
  index: number;
}

export default function HotNewsAnimatedWrapper({
  children,
  index,
}: HotNewsAnimatedWrapperProps) {
  return (
    <motion.div
      className={`w-full`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        stiffness: 100,
      }}
    >
      {children}
    </motion.div>
  );
}
