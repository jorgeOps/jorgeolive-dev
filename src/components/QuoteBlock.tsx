'use client';

import { motion } from 'framer-motion';

interface QuoteBlockProps {
  quote: string;
}

export function QuoteBlock({ quote }: QuoteBlockProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="absolute -left-4 top-0 text-[120px] leading-none font-serif text-primary/10 select-none">
        "
      </div>
      <p className="relative font-serif text-headline-md text-primary leading-relaxed italic pl-8">
        {quote}
      </p>
    </motion.blockquote>
  );
}
