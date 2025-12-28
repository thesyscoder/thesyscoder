"use client";

import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { CERTIFICATIONS, SKILLS } from "@/lib/constants";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden bg-black/20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Typography variant="mono" className="mb-4 text-accent uppercase tracking-widest text-xs font-bold">
            02 // arsenal
          </Typography>
          <Typography variant="h2" className="text-glow font-light lowercase"> technical ecosystem </Typography>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl group hover:border-accent/30 transition-all duration-500"
            >
              <Typography variant="h4" className="mb-8 flex items-center gap-3 lowercase font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {category.category}
              </Typography>
              <ul className="space-y-4">
                {category.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <Typography variant="body" className="group-hover:text-foreground transition-colors duration-300 font-light lowercase">
                      {skill}
                    </Typography>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <Typography variant="h3" className="mb-12 font-light lowercase text-glow">professional certifications</Typography>
          <div className="flex flex-wrap gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert}
                className="glass rounded-full px-6 py-2 text-[10px] font-mono text-muted-foreground hover:text-accent hover:border-accent/40 transition-all duration-300 lowercase"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
