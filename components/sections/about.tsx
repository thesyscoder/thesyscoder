"use client";

import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { Cpu, Globe, Shield, Terminal } from "lucide-react";

export function About() {
  const specs = [
    { label: "Core Version", value: "v2.0.0-indigo", icon: <Terminal size={14} /> },
    { label: "Processor", value: "SRE / Platform", icon: <Cpu size={14} /> },
    { label: "Security", value: "mTLS / Zero-Trust", icon: <Shield size={14} /> },
    { label: "Uptime", value: "99.99% Optimized", icon: <Globe size={14} /> },
  ];

  return (
    <section id="about" className="py-24 sm:py-48 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-8 bg-accent" />
              <Typography variant="small" className="text-accent font-bold">System Specification</Typography>
            </div>
            <Typography variant="h2" className="text-gradient">
              Distributed Thinking. <br />
              Operational <span className="text-accent italic">Rigor.</span>
            </Typography>
            <Typography variant="body" className="text-lg">
              I am a specialized Site Reliability Engineer with over 6 years of experience building and operating highly available, multi-region Kubernetes platforms.
            </Typography>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
             {specs.map((spec, i) => (
               <motion.div
                 key={spec.label}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="p-8 terminal-card group hover:border-accent/30 transition-all"
               >
                  <div className="flex items-center gap-4 mb-6">
                     <div className="p-2 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-black transition-all">
                        {spec.icon}
                     </div>
                     <Typography variant="mono" className="text-[10px] opacity-40 uppercase tracking-widest">{spec.label}</Typography>
                  </div>
                  <Typography variant="h3" className="text-2xl group-hover:text-accent transition-colors">{spec.value}</Typography>
               </motion.div>
             ))}

             <div className="sm:col-span-2 p-8 terminal-card border-dashed border-white/10 mt-4">
                <Typography variant="body" className="text-sm italic opacity-50">
                  "Reliability is a first-class feature. My work focuses on reducing operational toil, optimizing MTTR, and ensuring that systems fail clearly and gracefully."
                </Typography>
             </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
