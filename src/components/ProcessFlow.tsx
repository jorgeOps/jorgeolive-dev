'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface ProcessFlowProps {
  steps: ProcessStep[];
}

export function ProcessFlow({ steps }: ProcessFlowProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative">
      {/* Mobile: Vertical Flow */}
      <div className="md:hidden space-y-8">
        {steps.map((step, index) => (
          <div key={step.number} className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: 'spring', stiffness: 80 }}
              className="flex gap-6"
            >
              <div className="relative flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-surface-container-lowest border-2 border-primary/20 flex items-center justify-center shrink-0 relative z-10">
                  <span className="font-serif text-headline-md text-primary">
                    {step.number}
                  </span>
                </div>

                {/* Animated vertical arrow */}
                {index < steps.length - 1 && mounted && (
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 h-24">
                    <svg className="w-6 h-full" viewBox="0 0 24 96" fill="none">
                      <motion.path
                        d="M12 0 L12 96 M12 96 L8 88 M12 96 L16 88"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary/30"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                          pathLength: { duration: 1.5, delay: index * 0.3, repeat: Infinity, ease: "easeInOut" },
                          opacity: { duration: 0.3, delay: index * 0.3 }
                        }}
                      />
                    </svg>
                  </div>
                )}
              </div>

              <div className="flex-1 pt-3">
                <h3 className="font-serif text-headline-sm text-primary mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-body-md text-on-surface/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Desktop: Horizontal Flow */}
      <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-12">
        {steps.map((step, index) => (
          <div key={step.number} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: 'spring', stiffness: 80 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-surface-container-lowest border-2 border-primary/20 flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="font-serif text-headline-lg text-primary">
                  {step.number}
                </span>
              </div>
              <h3 className="font-serif text-headline-sm text-primary mb-4">
                {step.title}
              </h3>
              <p className="font-sans text-body-lg text-on-surface/70">
                {step.description}
              </p>
            </motion.div>

            {/* Animated horizontal arrow connecting steps */}
            {index < steps.length - 1 && mounted && (
              <div className="absolute top-10 left-[60%] w-[80%] hidden md:block">
                <svg className="w-full h-8" viewBox="0 0 120 32" fill="none" preserveAspectRatio="none">
                  <motion.path
                    d="M0 16 L120 16 M120 16 L110 10 M120 16 L110 22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary/30"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      pathLength: { duration: 2, delay: index * 0.4, repeat: Infinity, ease: "easeInOut" },
                      opacity: { duration: 0.3, delay: index * 0.4 }
                    }}
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
