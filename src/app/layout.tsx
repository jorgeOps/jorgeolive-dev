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
  metadataBase: new URL('https://jorgeolive.com'),
  title: {
    default: 'Jorge Olive - Diseño Web Personalizado | Custom Web Design',
    template: '%s | Jorge Olive',
  },
  description: 'Diseño web personalizado para negocios que quieren destacar. Desarrollo sitios web únicos con Next.js, React y despliegue en Vercel. Custom web design for businesses that want to stand out.',
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
    'TypeScript',
    'Tailwind CSS',
    'desarrollador web',
    'web developer',
    'freelance',
    'Jorge Olive',
  ],
  authors: [{ name: 'Jorge Olive', url: 'https://jorgeolive.com' }],
  creator: 'Jorge Olive',
  publisher: 'Jorge Olive',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    url: 'https://jorgeolive.com',
    title: 'Jorge Olive - Diseño Web Personalizado',
    description: 'Diseño web personalizado para negocios que quieren destacar. Desarrollo sitios web únicos con Next.js y React.',
    siteName: 'Jorge Olive',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jorge Olive - Diseño Web Personalizado',
    description: 'Diseño web personalizado para negocios que quieren destacar',
    creator: '@jorgeolive',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  manifest: '/manifest.json',
  verification: {
    // Añade aquí tus códigos de verificación cuando los tengas
    // google: 'tu-codigo-de-verificacion',
    // yandex: 'tu-codigo-yandex',
    // bing: 'tu-codigo-bing',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${notoSerif.variable} ${manrope.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1C1B1F" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="bg-surface text-on-surface antialiased">{children}</body>
    </html>
  );
}
