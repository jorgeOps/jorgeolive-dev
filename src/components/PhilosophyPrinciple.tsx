'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface PhilosophyPrincipleProps {
  label: string;
  text: string;
  index: number;
}

export function PhilosophyPrinciple({ label, text, index }: PhilosophyPrincipleProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.3, 1], [60, 0, -20]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.8], [0.9, 1, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, scale }}
      className="group"
    >
      <div className="flex gap-4 items-start">
        <motion.div
          className="shrink-0 w-1 h-16 bg-gradient-to-b from-primary/60 to-primary/10 group-hover:from-primary group-hover:to-primary/30 transition-all duration-500"
          style={{
            scaleY: useTransform(scrollYProgress, [0, 0.3], [0, 1]),
          }}
        />
        <div className="pt-1">
          <h3 className="font-serif text-headline-sm text-primary mb-2 tracking-tight">
            {label}
          </h3>
          <p className="font-sans text-body-lg text-on-surface/70 leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
