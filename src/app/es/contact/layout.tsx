import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto - Hablemos de Tu Proyecto',
  description: 'Contáctame para crear la web perfecta para tu negocio. Primera consulta sin compromiso. Respondo en menos de 24 horas.',
  openGraph: {
    title: 'Contacto - Jorge Olive',
    description: 'Contáctame para crear la web perfecta para tu negocio',
    url: 'https://jorgeolive.com/es/contact',
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
