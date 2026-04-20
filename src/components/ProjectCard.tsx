'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Project } from '@/data/projects';
import { Locale } from '@/lib/i18n';
import Image from 'next/image';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  translations: {
    viewLive: string;
    legacy: string;
  };
}

export function ProjectCard({ project, locale, translations }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const previewUrl = `https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url`;

  return (
    <Card elevation="medium" className="group">
      <div className="aspect-[16/10] bg-surface-container-low relative overflow-hidden">
        {project.status === 'legacy' ? (
          <div className="absolute inset-0 flex items-center justify-center bg-surface-container-high">
            <div className="text-center px-6">
              <p className="font-serif text-headline-sm text-primary mb-2">{translations.legacy}</p>
              <p className="font-sans text-body-md text-on-surface/60">Archive</p>
            </div>
          </div>
        ) : (
          !imageError && (
            <Image
              src={previewUrl}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-600 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          )
        )}
      </div>

      <div className="p-8 lg:p-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-secondary-container text-label-md font-sans text-on-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-serif text-headline-sm text-primary mb-4">
          {project.title}
        </h3>

        <p className="font-sans text-body-lg text-on-surface/70 mb-8 leading-relaxed">
          {project.description[locale]}
        </p>

        {project.status === 'active' && (
          <Button
            variant="secondary"
            onClick={() => window.open(project.url, '_blank')}
          >
            {translations.viewLive} →
          </Button>
        )}
      </div>
    </Card>
  );
}
