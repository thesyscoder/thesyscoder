"use client";

import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { PROJECTS } from "@/lib/constants";
import { motion } from "framer-motion";
import { Folder, Github } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-48 bg-[#050505] relative">
      <Container>
        <div className="flex flex-col gap-6 mb-24">
           <div className="flex items-center gap-4">
              <Folder size={14} className="text-accent" />
              <Typography variant="small" className="text-accent font-bold tracking-[0.2em]">repository.index</Typography>
              <div className="h-px flex-1 bg-white/5" />
           </div>
           <Typography variant="h2" className="text-gradient">
              Projects & <br /> <span className="text-accent italic">Blueprints.</span>
           </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="terminal-card group p-8 sm:p-12 space-y-8 flex flex-col justify-between"
            >
               <div className="space-y-6">
                  <div className="flex items-center justify-between">
                     <div className="flex gap-2">
                        {project.tech.map(t => (
                          <span key={t} className="text-[8px] font-mono px-2 py-1 bg-white/5 border border-white/10 rounded uppercase tracking-widest text-white/40">{t}</span>
                        ))}
                     </div>
                     <div className="flex gap-4">
                        <a href={project.links.github} target="_blank" className="text-white/20 hover:text-white transition-colors">
                           <Github size={18} />
                        </a>
                     </div>
                  </div>
                  <div className="space-y-4">
                     <Typography variant="h3" className="text-3xl font-bold group-hover:text-accent transition-colors">{project.title}</Typography>
                     <Typography variant="body" className="opacity-60">{project.description}</Typography>
                  </div>
               </div>

               <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 bg-accent/40 rounded-full" />
                     <Typography variant="small" className="text-[9px] opacity-40 uppercase tracking-widest">Outcome</Typography>
                  </div>
                  <Typography variant="mono" className="text-[10px] text-accent font-bold">{project.outcome}</Typography>
               </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
