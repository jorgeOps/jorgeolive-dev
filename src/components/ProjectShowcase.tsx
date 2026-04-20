'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Project } from '@/data/projects';
import { Locale } from '@/lib/i18n';
import Image from 'next/image';
import { useState, useRef, MouseEvent, useEffect } from 'react';

interface ProjectShowcaseProps {
  project: Project;
  locale: Locale;
  index: number;
  viewLiveText: string;
  legacyText: string;
}

export function ProjectShowcase({ project, locale, index, viewLiveText, legacyText }: ProjectShowcaseProps) {
  const [imageError, setImageError] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const previewUrl = `https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url`;
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { damping: 20, stiffness: 200 });

  useEffect(() => {
    const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouchScreen);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    const xPct = (mouseXPos / width) - 0.5;
    const yPct = (mouseYPos / height) - 0.5;

    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    mouseX.set(0);
    mouseY.set(0);
  };

  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 20,
        delay: index * 0.15,
      }}
      className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center"
    >
      <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={() => project.status === 'active' && window.open(project.url, '_blank')}
          style={isTouchDevice ? {} : {
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className={`relative aspect-[16/10] bg-surface-container-low rounded-lg overflow-hidden group ${project.status === 'active' ? 'cursor-pointer' : 'cursor-default'}`}
        >
          {project.status === 'legacy' ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-surface-container-high to-surface-container">
              <div className="text-center px-6">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-label-lg font-sans text-primary mb-3">
                  {legacyText}
                </span>
                <p className="font-sans text-body-md text-on-surface/50">No longer online</p>
              </div>
            </div>
          ) : (
            !imageError && (
              <>
                <Image
                  src={previewUrl}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-all duration-700 grayscale-[100%] group-hover:grayscale-0 group-hover:scale-105"
                  onError={() => setImageError(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </>
            )
          )}
        </motion.div>
      </div>

      <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="space-y-4 sm:space-y-5">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-label-sm sm:text-label-md font-sans text-on-surface/50 tracking-wider uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="font-serif text-headline-lg sm:text-display-sm text-primary leading-tight">
            {project.title}
          </h3>

          <div className="w-12 sm:w-16 h-0.5 bg-primary/30" />

          <p className="font-sans text-body-md sm:text-body-lg text-on-surface/80 leading-relaxed">
            {project.description[locale]}
          </p>

          {project.status === 'active' && (
            <button
              onClick={() => window.open(project.url, '_blank')}
              className="group inline-flex items-center gap-2 font-sans text-label-lg text-primary hover:text-primary/70 transition-colors duration-400"
            >
              <span>{viewLiveText}</span>
              <svg
                className="w-4 h-4 transition-transform duration-400 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
