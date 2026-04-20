'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { TextReveal } from '@/components/TextReveal';
import { CursorGradient } from '@/components/CursorGradient';
import { PageTransition } from '@/components/PageTransition';
import { ProcessFlow } from '@/components/ProcessFlow';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  ideal: string;
  featured?: boolean;
}

interface AnimatedServicesProps {
  title: string;
  subtitle: string;
  disclaimer: string;
  services: Service[];
  processTitle: string;
  processSteps: Array<{
    number: number;
    title: string;
    description: string;
  }>;
}

export function AnimatedServices({
  title,
  subtitle,
  disclaimer,
  services,
  processTitle,
  processSteps,
}: AnimatedServicesProps) {
  return (
    <>
      <CursorGradient />
      <PageTransition>
        <main className="pt-24 sm:pt-32 px-4 sm:px-6 lg:px-12">
          <section className="max-w-5xl mx-auto mb-16 sm:mb-20">
            <TextReveal className="font-serif text-display-sm sm:text-display-md lg:text-display-lg text-primary mb-4 sm:mb-6 text-center">
              {title}
            </TextReveal>
            <p className="font-sans text-body-lg sm:text-headline-sm lg:text-headline-md text-on-surface/70 text-center mb-6 sm:mb-8">
              {subtitle}
            </p>
            <div className="max-w-3xl mx-auto bg-tertiary-container/30 rounded-lg p-6 border border-outline-variant/15">
              <p className="font-sans text-body-lg text-on-surface/80 text-center leading-relaxed">
                {disclaimer}
              </p>
            </div>
          </section>

          <section className="max-w-7xl mx-auto mb-32">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ type: 'spring', stiffness: 80, damping: 20, delay: index * 0.1 }}
                >
                  <Card
                    elevation="high"
                    className={`p-8 lg:p-10 h-full ${
                      service.featured
                        ? 'lg:scale-105 border-2 border-primary/20 scale-100'
                        : ''
                    }`}
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      {service.icon}
                    </div>
                    <h2 className="font-serif text-headline-lg text-primary mb-4">
                      {service.title}
                    </h2>
                    <p className="font-sans text-body-lg text-on-surface/70 mb-8">
                      {service.description}
                    </p>
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-3">
                          <svg
                            className="w-5 h-5 text-primary shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="font-sans text-body-md text-on-surface">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-6 border-t border-outline-variant/20">
                      <p className="font-sans text-label-lg text-on-surface/60">
                        {service.ideal}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="max-w-5xl mx-auto mb-32">
            <h2 className="font-serif text-display-md text-primary mb-16 text-center">
              {processTitle}
            </h2>
            <ProcessFlow steps={processSteps} />
          </section>
        </main>
      </PageTransition>
    </>
  );
}
