"use client";

import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { SITE_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";
import { BookOpen, Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  const contactLinks = [
    { name: "GitHub", href: SITE_CONFIG.links.github, icon: Github },
    { name: "LinkedIn", href: SITE_CONFIG.links.linkedin, icon: Linkedin },
    { name: "Medium", href: SITE_CONFIG.links.medium, icon: BookOpen },
    { name: "Email", href: `mailto:${SITE_CONFIG.links.email}`, icon: Mail },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-black/40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="mono" className="mb-4 text-accent uppercase tracking-widest text-xs font-bold">
              06 // connect
            </Typography>
            <Typography variant="h2" className="mb-8 font-light lowercase text-glow">
              let&apos;s build resilient <br /> systems together.
            </Typography>
            <Typography variant="body" className="text-xl mb-12 font-light text-muted-foreground lowercase">
              currently open to architectural consulting, senior engineering roles, and high-impact product collaborations.
            </Typography>

            <div className="flex flex-col gap-6">
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-2xl glass group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
                    <link.icon size={18} className="group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div>
                    <Typography variant="small" className="font-mono text-accent/80 line-clamp-1 lowercase">{link.name} // .link</Typography>
                    <Typography variant="h4" className="text-foreground/80 group-hover:text-foreground transition-colors duration-300 font-light lowercase">
                      {link.href.replace("https://", "").replace("mailto:", "").replace("linkedin.com/in/", "").replace("github.com/", "")}
                    </Typography>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center items-center text-center glass rounded-3xl p-12"
          >
            <Typography variant="h3" className="mb-4 font-light lowercase text-glow">ready to start?</Typography>
            <Typography variant="body" className="mb-8 max-w-sm font-light text-muted-foreground lowercase">
              i typically respond within 24 hours. looking forward to hearing about your project goals.
            </Typography>
            <a
              href={`mailto:${SITE_CONFIG.links.email}`}
              className="rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-all duration-300"
            >
              send an email
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
