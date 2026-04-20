import es from '@/locales/es.json';
import en from '@/locales/en.json';

export type Locale = 'es' | 'en';

export const translations = {
  es,
  en,
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
