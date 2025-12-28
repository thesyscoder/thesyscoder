import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-black/40">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <Typography variant="mono" className="text-xs tracking-[0.3em] font-bold text-glow lowercase">
            {SITE_CONFIG.name} // {new Date().getFullYear()}
          </Typography>
          <div className="flex gap-8">
            <a href={SITE_CONFIG.links.github} target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono text-muted-foreground hover:text-accent transition-colors lowercase">.github</a>
            <a href={SITE_CONFIG.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono text-muted-foreground hover:text-accent transition-colors lowercase">.linkedin</a>
            <a href={SITE_CONFIG.links.medium} target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono text-muted-foreground hover:text-accent transition-colors lowercase">.medium</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
