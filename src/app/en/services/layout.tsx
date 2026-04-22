import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - Custom Web Design',
  description: 'Basic website, advanced website with backend, and SEO management. Web solutions tailored to your business needs with transparent development.',
  openGraph: {
    title: 'Web Design Services - Jorge Olive',
    description: 'Basic website, advanced website with backend, and SEO management for your business',
    url: 'https://jorgeolive.com/en/services',
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

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
