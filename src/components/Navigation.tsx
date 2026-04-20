'use client';

import { cn } from '@/lib/utils';
import { Locale, getTranslations } from '@/lib/i18n';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface NavigationProps {
  locale: Locale;
}

export function Navigation({ locale }: NavigationProps) {
  const pathname = usePathname();
  const t = getTranslations(locale);
  const [isOpen, setIsOpen] = useState(false);

  const currentLocale = pathname.startsWith('/en') ? 'en' : 'es';
  const otherLocale = currentLocale === 'en' ? 'es' : 'en';

  const links = [
    { href: `/${currentLocale}`, label: t.nav.home },
    { href: `/${currentLocale}/services`, label: t.nav.services },
    { href: `/${currentLocale}/contact`, label: t.nav.contact },
  ];

  const toggleLocale = () => {
    const currentPath = pathname.replace(`/${currentLocale}`, '');
    return `/${otherLocale}${currentPath}`;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-gallery border-b border-outline-variant/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href={`/${currentLocale}`} className="font-serif text-headline-sm sm:text-headline-md text-primary relative z-10">
            Jorge Olive
          </Link>

          <div className="hidden md:flex items-center gap-8 relative z-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-sans text-label-lg transition-colors duration-400',
                  pathname === link.href
                    ? 'text-primary font-semibold'
                    : 'text-on-surface/70 hover:text-primary'
                )}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href={toggleLocale()}
              className="px-4 py-2 rounded-full bg-secondary-container text-label-md font-sans text-on-secondary transition-all duration-400 hover:bg-surface-container-high"
            >
              {otherLocale.toUpperCase()}
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 w-6 relative z-10"
            aria-label="Menu"
          >
            <span className={cn('h-0.5 w-full bg-primary transition-all duration-400', isOpen && 'rotate-45 translate-y-2')} />
            <span className={cn('h-0.5 w-full bg-primary transition-all duration-400', isOpen && 'opacity-0')} />
            <span className={cn('h-0.5 w-full bg-primary transition-all duration-400', isOpen && '-rotate-45 -translate-y-2')} />
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden pb-6 border-t border-outline-variant/10 mt-4 pt-4"
          >
            <div className="flex flex-col gap-5">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'font-sans text-body-lg transition-colors duration-400 block py-2',
                      pathname === link.href
                        ? 'text-primary font-semibold'
                        : 'text-on-surface/70'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.1 }}
              >
                <Link
                  href={toggleLocale()}
                  onClick={() => setIsOpen(false)}
                  className="inline-block px-4 py-2 rounded-full bg-secondary-container text-label-md font-sans text-on-secondary"
                >
                  {otherLocale.toUpperCase()}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
