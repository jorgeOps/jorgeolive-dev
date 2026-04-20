'use client';

import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  elevation?: 'low' | 'medium' | 'high';
  children?: React.ReactNode;
}

export function Card({ className, elevation = 'medium', children, ...props }: CardProps) {
  const elevations = {
    low: 'bg-surface-container-low',
    medium: 'bg-surface-container-lowest',
    high: 'bg-surface-container-lowest shadow-[0_0_60px_rgba(47,52,48,0.06)]',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn('rounded-lg overflow-hidden', elevations[elevation], className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
