"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  className?: string;
}

export function Marquee({ items, reverse = false, className }: MarqueeProps) {
  return (
    <div className={cn("flex overflow-hidden py-4 bg-black/50 border-y border-white/5", className)}>
      <motion.div
        animate={{
          x: reverse ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap"
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center mx-8"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent/40 mr-4">//</span>
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/60">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
