import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios - Diseño Web Personalizado',
  description: 'Web básica, web avanzada con backend, y gestión SEO. Soluciones web adaptadas a las necesidades de tu negocio con desarrollo transparente.',
  openGraph: {
    title: 'Servicios de Diseño Web - Jorge Olive',
    description: 'Web básica, web avanzada con backend, y gestión SEO para tu negocio',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
