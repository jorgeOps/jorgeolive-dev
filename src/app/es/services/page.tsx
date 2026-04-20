import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AnimatedServices } from '@/components/AnimatedServices';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { getTranslations } from '@/lib/i18n';

export default function ServicesPage() {
  const locale = 'es';
  const t = getTranslations(locale);

  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: t.services.basic.title,
      description: t.services.basic.description,
      features: t.services.basic.features,
      ideal: t.services.basic.ideal,
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: t.services.advanced.title,
      description: t.services.advanced.description,
      features: t.services.advanced.features,
      ideal: t.services.advanced.ideal,
      featured: true,
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: t.services.seo.title,
      description: t.services.seo.description,
      features: t.services.seo.features,
      ideal: t.services.seo.ideal,
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: t.services.process.step1.title,
      description: t.services.process.step1.description,
    },
    {
      number: 2,
      title: t.services.process.step2.title,
      description: t.services.process.step2.description,
    },
    {
      number: 3,
      title: t.services.process.step3.title,
      description: t.services.process.step3.description,
    },
  ];

  return (
    <div className="min-h-screen relative">
      <WhatsAppButton />
      <Navigation locale={locale} />
      <AnimatedServices
        title={t.services.title}
        subtitle={t.services.subtitle}
        disclaimer={t.services.disclaimer}
        services={services}
        processTitle={t.services.process.title}
        processSteps={processSteps}
      />
      <Footer locale={locale} />
    </div>
  );
}
