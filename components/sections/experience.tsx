"use client";

import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { EXPERIENCE } from "@/lib/constants";
import { motion } from "framer-motion";
import { Activity, Cpu, Globe, Shield, Terminal } from "lucide-react";

export function Experience() {
  const getIcon = (company: string) => {
    switch (company.toLowerCase()) {
      case "microsoft": return <Shield className="w-4 h-4 text-blue-400" />;
      case "nuance": return <Activity className="w-4 h-4 text-emerald-400" />;
      case "coredge.io": return <Cpu className="w-4 h-4 text-purple-400" />;
      default: return <Globe className="w-4 h-4 text-neutral-400" />;
    }
  };

  return (
    <section id="experience" className="py-24 sm:py-48 relative overflow-hidden bg-black">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_100%_50%,rgba(99,102,241,0.03)_0%,transparent_50%)]" />

      <Container>
        <div className="flex flex-col gap-12 mb-24">
          <div className="flex items-center gap-4">
             <div className="px-3 py-1 border border-white/10 rounded-full flex items-center gap-2 bg-white/5">
                <Terminal size={12} className="text-accent" />
                <Typography variant="small" className="text-accent tracking-widest">execution.history</Typography>
             </div>
             <div className="h-px flex-1 bg-white/5" />
          </div>
          <Typography variant="h2" className="text-gradient max-w-3xl">
            Traction <br /> & <span className="text-accent italic">Architecture.</span>
          </Typography>
        </div>

        <div className="flex flex-col gap-6">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="terminal-card group"
            >
              <div className="terminal-header flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                 <div className="flex items-center gap-4">
                    <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-accent/30 transition-colors">
                       {getIcon(exp.company)}
                    </div>
                    <div>
                       <Typography variant="h4" className="text-xl font-bold tracking-tight mb-0.5">{exp.company}</Typography>
                       <Typography variant="small" className="text-[9px] opacity-40">{exp.role}</Typography>
                    </div>
                 </div>
                 <div className="flex items-center gap-6">
                    <div className="hidden sm:flex flex-col items-end">
                       <Typography variant="small" className="text-[8px] opacity-30 uppercase tracking-widest font-bold">Period</Typography>
                       <Typography variant="mono" className="text-[10px] text-accent/80 font-bold">{exp.period}</Typography>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-accent/20 animate-pulse hidden sm:block" />
                 </div>
              </div>

              <div className="p-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
                 <div className="lg:col-span-4 flex flex-col gap-8">
                    <div className="border border-white/5 bg-white/[0.02] p-6 rounded-2xl flex flex-col gap-4">
                       <Typography variant="small" className="text-accent font-bold">Context</Typography>
                       <Typography variant="body" className="text-sm leading-relaxed italic font-light opacity-60">
                          "{exp.description}"
                       </Typography>
                    </div>
                 </div>

                 <div className="lg:col-span-8 flex flex-col gap-8">
                    <div className="flex flex-col gap-6">
                       <Typography variant="small" className="opacity-30 tracking-[0.3em] font-bold">.outcomes</Typography>
                       <div className="grid grid-cols-1 gap-6">
                          {exp.responsibilities.map((resp, i) => (
                            <div key={i} className="flex gap-4 group/item">
                               <div className="w-1 h-1 rounded-full bg-accent/30 mt-2.5 flex-shrink-0 group-hover/item:bg-accent transition-colors" />
                               <Typography variant="body" className="text-[15px] leading-relaxed text-muted-foreground/80 font-light group-hover/item:text-foreground transition-colors">
                                  {resp}
                               </Typography>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
