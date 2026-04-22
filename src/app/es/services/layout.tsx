import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios - Diseño Web Personalizado',
  description: 'Web básica, web avanzada con backend, y gestión SEO. Soluciones web adaptadas a las necesidades de tu negocio con desarrollo transparente.',
  openGraph: {
    title: 'Servicios de Diseño Web - Jorge Olive',
    description: 'Web básica, web avanzada con backend, y gestión SEO para tu negocio',
    url: 'https://jorgeolive.com/es/services',
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

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
