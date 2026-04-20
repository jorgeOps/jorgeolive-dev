import type { Metadata } from 'next';
import { Noto_Serif, Manrope } from 'next/font/google';
import './globals.css';

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jorge Olive - Diseño Web Personalizado | Custom Web Design',
  description: 'Diseño web personalizado para pequeños negocios. Portfolio de proyectos reales con Vercel. Custom web design for small businesses.',
  keywords: [
    'diseño web',
    'web design',
    'frontend developer',
    'portfolio',
    'custom websites',
    'páginas web personalizadas',
    'Vercel',
    'Next.js',
    'React',
  ],
  authors: [{ name: 'Jorge Olive' }],
  creator: 'Jorge Olive',
  openGraph: {
    title: 'Jorge Olive - Diseño Web Personalizado',
    description: 'Creo páginas web únicas para pequeños negocios',
    type: 'website',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${notoSerif.variable} ${manrope.variable}`}>
      <body className="bg-surface text-on-surface antialiased">{children}</body>
    </html>
  );
}
