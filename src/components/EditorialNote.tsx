'use client';

import { motion } from 'framer-motion';

interface EditorialNoteProps {
  text: string;
  align?: 'left' | 'right';
}

export function EditorialNote({ text, align = 'left' }: EditorialNoteProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className={`${align === 'right' ? 'ml-auto' : 'mr-auto'} max-w-md`}
    >
      <div className="relative pl-6 border-l-2 border-primary/30">
        <p className="font-sans text-body-md text-on-surface/60 italic leading-relaxed">
          {text}
        </p>
        <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary/40" />
      </div>
    </motion.div>
  );
}
