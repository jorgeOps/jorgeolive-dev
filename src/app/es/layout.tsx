import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jorge Olive - Diseño Web Personalizado para Negocios',
  description: 'Desarrollo sitios web únicos y personalizados para pequeños negocios. Diseño moderno, código limpio y despliegue profesional con Next.js y React.',
  alternates: {
    canonical: '/es',
    languages: {
      'es-ES': '/es',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'Jorge Olive - Diseño Web Personalizado',
    description: 'Desarrollo sitios web únicos y personalizados para pequeños negocios',
    url: 'https://jorgeolive.com/es',
    locale: 'es_ES',
    type: 'website',
    siteName: 'Jorge Olive',
    images: [
      {
        url: 'https://jorgeolive.com/og-image.png',
        width: 2752,
        height: 1536,
        alt: 'Jorge Olive - Diseño Web Personalizado',
      },
    ],
  },
};

export default function EsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
