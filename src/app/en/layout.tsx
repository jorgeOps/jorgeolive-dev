import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jorge Olive - Custom Web Design for Businesses',
  description: 'I build unique, custom websites for small businesses. Modern design, clean code, and professional deployment with Next.js and React.',
  alternates: {
    canonical: '/en',
    languages: {
      'es-ES': '/es',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'Jorge Olive - Custom Web Design',
    description: 'I build unique, custom websites for small businesses',
    url: '/en',
    locale: 'en_US',
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
