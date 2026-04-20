import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - Custom Web Design',
  description: 'Basic website, advanced website with backend, and SEO management. Web solutions tailored to your business needs with transparent development.',
  openGraph: {
    title: 'Web Design Services - Jorge Olive',
    description: 'Basic website, advanced website with backend, and SEO management for your business',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
