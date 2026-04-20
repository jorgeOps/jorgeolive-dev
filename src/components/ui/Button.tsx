'use client';

import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps, useMotionValue, useSpring } from 'framer-motion';
import { forwardRef, useRef, MouseEvent, useEffect, useState } from 'react';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const localRef = useRef<HTMLButtonElement>(null);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 300 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    useEffect(() => {
      const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(hasTouchScreen);
    }, []);

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
      if (isTouchDevice) return;

      const button = localRef.current;
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      // Magnetic pull effect - move button slightly toward cursor
      x.set(distanceX * 0.15);
      y.set(distanceY * 0.15);
    };

    const handleMouseLeave = () => {
      if (isTouchDevice) return;
      x.set(0);
      y.set(0);
    };

    const baseStyles = 'rounded font-sans font-medium transition-all duration-500 ease-in-out';

    const variants = {
      primary: 'bg-primary text-on-primary hover:bg-primary/90',
      secondary: 'bg-secondary-container text-on-secondary border border-outline-variant/20 hover:bg-surface-container-high',
    };

    const sizes = {
      sm: 'px-4 py-2 text-label-md',
      md: 'px-6 py-3 text-label-lg',
      lg: 'px-8 py-4 text-body-lg',
    };

    return (
      <motion.button
        ref={(node) => {
          (localRef as any).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
