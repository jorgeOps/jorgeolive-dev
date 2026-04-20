import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto - Hablemos de Tu Proyecto',
  description: 'Contáctame para crear la web perfecta para tu negocio. Primera consulta sin compromiso. Respondo en menos de 24 horas.',
  openGraph: {
    title: 'Contacto - Jorge Olive',
    description: 'Contáctame para crear la web perfecta para tu negocio',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
