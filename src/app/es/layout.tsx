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
    url: '/es',
    locale: 'es_ES',
  },
};

export default function EsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
