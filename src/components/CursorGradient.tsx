'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CursorGradient() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const springConfig = { damping: 50, stiffness: 200 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMounted(true);

    // Detect if it's a touch device
    const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouchScreen);

    if (hasTouchScreen) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  // Don't render until mounted or on touch devices
  if (!isMounted || isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute -inset-[400px]"
        style={{
          x,
          y,
          background: 'radial-gradient(600px circle at center, rgba(139, 92, 63, 0.06), transparent 50%)',
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </div>
  );
}
