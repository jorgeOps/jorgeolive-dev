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
    url: 'https://jorgeolive.com/en',
    locale: 'en_US',
    type: 'website',
    siteName: 'Jorge Olive',
    images: [
      {
        url: 'https://jorgeolive.com/og-image.png',
        width: 2752,
        height: 1536,
        alt: 'Jorge Olive - Custom Web Design',
      },
    ],
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
