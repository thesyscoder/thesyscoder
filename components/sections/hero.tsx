"use client";

import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center bg-black">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.05)_0%,transparent_50%)]" />
      <div className="noise" />

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-8 bg-accent" />
                <Typography variant="small" className="text-accent font-bold">Pruthviraj Sonawane</Typography>
              </div>
              <Typography variant="h1">
                Engineering <br />
                <span className="text-accent italic">Resilience.</span>
              </Typography>
              <Typography variant="body" className="max-w-xl text-lg">
                I build large-scale cloud native platforms that are boring to operate. Focused on Kubernetes, observability, and infrastructure as code.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
               <button className="px-8 py-4 bg-accent text-white font-bold rounded-lg flex items-center gap-2 hover:bg-accent/90 transition-all">
                  initiate_contact <ArrowUpRight size={18} />
               </button>
               <button className="px-8 py-4 border border-white/10 hover:bg-white/5 text-white font-bold rounded-lg flex items-center gap-2 transition-all">
                  download_cv <Download size={18} />
               </button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-10">
               <div className="flex flex-col gap-1">
                  <Typography variant="h3">6+</Typography>
                  <Typography variant="small" className="opacity-40">Years Exp</Typography>
               </div>
               <div className="h-10 w-px bg-white/10" />
               <div className="flex flex-col gap-1">
                  <Typography variant="h3">200+</Typography>
                  <Typography variant="small" className="opacity-40">Incidents Solved</Typography>
               </div>
               <div className="h-10 w-px bg-white/10" />
               <div className="flex flex-col gap-1">
                  <Typography variant="h3">99.99</Typography>
                  <Typography variant="small" className="opacity-40">Availability</Typography>
               </div>
            </motion.div>
          </div>

          {/* Right Content - Terminal Window Photo */}
          <div className="lg:col-span-5 relative hidden lg:block">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
               className="terminal-card"
             >
                <div className="terminal-header">
                   <div className="terminal-dot bg-red-500/50" />
                   <div className="terminal-dot bg-yellow-500/50" />
                   <div className="terminal-dot bg-green-500/50" />
                   <div className="ml-4 text-[10px] font-mono opacity-30 tracking-widest uppercase">system_portrait.jpg</div>
                </div>
                <div className="relative aspect-[4/5] w-full">
                   <Image
                     src="/profile.jpg"
                     alt="Profile"
                     fill
                     className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                   />
                </div>
             </motion.div>
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 blur-3xl rounded-full" />
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 blur-3xl rounded-full" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
