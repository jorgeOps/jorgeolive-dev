import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Let\'s Talk About Your Project',
  description: 'Contact me to create the perfect website for your business. First consultation with no commitment. I respond within 24 hours.',
  openGraph: {
    title: 'Contact - Jorge Olive',
    description: 'Contact me to create the perfect website for your business',
    url: 'https://jorgeolive.com/en/contact',
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
