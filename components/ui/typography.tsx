import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "small" | "mono";
}

export function Typography({
  children,
  className,
  variant = "body",
}: TypographyProps) {
  const variants = {
    h1: "text-5xl font-extrabold tracking-tighter text-foreground sm:text-7xl lg:text-8xl leading-[0.85] uppercase",
    h2: "text-4xl font-bold tracking-tighter text-foreground sm:text-6xl leading-[0.9] uppercase",
    h3: "text-2xl font-bold tracking-tighter text-foreground sm:text-4xl uppercase",
    h4: "text-xl font-bold tracking-tight text-foreground sm:text-2xl uppercase",
    body: "text-base sm:text-lg leading-relaxed text-muted-foreground font-light",
    small: "text-[10px] sm:text-xs leading-none text-muted-foreground uppercase tracking-[0.2em] font-mono",
    mono: "font-mono text-sm tracking-tighter text-muted-foreground",
  };

  return (
    <div className={cn(variants[variant], className)}>
      {children}
    </div>
  );
}
