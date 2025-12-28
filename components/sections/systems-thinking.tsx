"use client";

import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function SystemsThinking() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="systems" ref={containerRef} className="py-24 sm:py-32 overflow-hidden bg-black/20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div style={{ opacity }}>
            <Typography variant="mono" className="mb-4 text-accent uppercase tracking-widest">
              04 // mindset
            </Typography>
            <Typography variant="h2" className="mb-8 font-light text-glow">
              designing for <span className="text-accent">failure</span>, <br />
              architecting for <span className="text-secondary italic">scale</span>.
            </Typography>
            <div className="space-y-6 max-w-lg">
              <Typography variant="body" className="text-lg font-light leading-relaxed">
                i don&apos;t just write code; i engineer resilience. my mental model starts with the assumption that every component will fail.
              </Typography>
              <Typography variant="body" className="text-muted-foreground">
                from circuit breakers in gRPC services to SLO-driven alerting in kubernetes, i focus on building systems that are observable, predictable, and self-healing.
              </Typography>
            </div>
          </motion.div>

          {/* Abstract Architecture Diagram */}
          <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
            <svg viewBox="0 0 400 400" className="w-full h-full text-accent/40">
              {/* Nodes */}
              <motion.circle cx="200" cy="80" r="10" fill="currentColor" className="text-accent" />
              <motion.circle cx="80" cy="200" r="10" fill="currentColor" className="text-secondary" />
              <motion.circle cx="320" cy="200" r="10" fill="currentColor" className="text-accent" />
              <motion.circle cx="200" cy="320" r="10" fill="currentColor" className="text-primary" />

              {/* Connections */}
              <motion.path
                d="M200 80 L80 200 L200 320 L320 200 Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                style={{ pathLength }}
              />
              <motion.path
                d="M200 80 L200 320"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                style={{ pathLength }}
              />
              <motion.path
                d="M80 200 L320 200"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                style={{ pathLength }}
              />

              {/* Animated Particles along paths */}
              {[0, 0.25, 0.5, 0.75].map((delay) => (
                <motion.circle
                  key={delay}
                  r="3"
                  fill="#6366f1"
                  initial={{ offsetDistance: "0%" }}
                  animate={{ offsetDistance: "100%" }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: delay * 3,
                  }}
                  style={{
                    offsetPath: "path('M200 80 L80 200 L200 320 L320 200 Z')",
                  }}
                />
              ))}
            </svg>

            {/* Glass Labels */}
            <motion.div
               variants={{
                 hidden: { opacity: 0, scale: 0.8 },
                 visible: { opacity: 1, scale: 1 }
               }}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="absolute top-[10%] left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full text-[10px] font-mono tracking-tighter"
            >
               ingress gateway
            </motion.div>
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="absolute bottom-[10%] left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full text-[10px] font-mono tracking-tighter"
            >
               persistent state
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
