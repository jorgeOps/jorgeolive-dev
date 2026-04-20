'use client';

import { Locale, getTranslations } from '@/lib/i18n';

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const t = getTranslations(locale);

  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/15 mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="text-center">
          <p className="font-sans text-body-md text-on-surface/70">
            {t.footer.built} © {t.footer.year}
          </p>
        </div>
      </div>
    </footer>
  );
}
