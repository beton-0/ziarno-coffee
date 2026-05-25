"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
};

export function MagneticButton({ children, href, onClick, variant = "primary", className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.5 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const styles = {
    primary:
      "bg-ink text-cream hover:bg-roast",
    ghost:
      "bg-transparent text-ink hover:text-roast",
    outline:
      "bg-transparent text-ink border border-ink/30 hover:border-roast hover:text-roast",
  }[variant];

  const Inner = (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: springX, y: springY }}
      className={cn("inline-block", className)}
    >
      <span
        className={cn(
          "inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm tracking-wide uppercase transition-colors duration-500",
          styles,
        )}
      >
        {children}
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick}>
        {Inner}
      </a>
    );
  }
  return (
    <button onClick={onClick} className="cursor-pointer">
      {Inner}
    </button>
  );
}
