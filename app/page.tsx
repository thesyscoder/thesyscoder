"use client";

import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  const tickerItems = [
    "platform resilience",
    "kubernetes orchestration",
    "slo-driven reliability",
    "infrastructure as code",
    "incident response",
    "observability stack",
  ];

  return (
    <main className="flex flex-col gap-0 bg-black min-h-screen">
      <Hero />
      <Marquee items={tickerItems} />
      <About />
      <Skills />
      <Experience />
      <Marquee items={tickerItems} reverse />
      <Projects />
      <Contact />
    </main>
  );
}
