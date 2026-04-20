import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AnimatedServices } from '@/components/AnimatedServices';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { getTranslations } from '@/lib/i18n';

export default function ServicesPage() {
  const locale = 'en';
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
              {t.services.title}
            </TextReveal>
          <p className="font-sans text-body-lg sm:text-headline-sm lg:text-headline-md text-on-surface/70 text-center mb-6 sm:mb-8">
            {t.services.subtitle}
          </p>
          <div className="max-w-3xl mx-auto bg-tertiary-container/30 rounded-lg p-6 border border-outline-variant/15">
            <p className="font-sans text-body-lg text-on-surface/80 text-center leading-relaxed">
              {t.services.disclaimer}
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto mb-32">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0 }}
            >
              <Card elevation="high" className="p-8 lg:p-10">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="font-serif text-headline-lg text-primary mb-4">
                {t.services.basic.title}
              </h2>
              <p className="font-sans text-body-lg text-on-surface/70 mb-8">
                {t.services.basic.description}
              </p>
              <ul className="space-y-4 mb-8">
                {t.services.basic.features.map((feature, index) => (
                  <li key={index} className="flex gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-sans text-body-md text-on-surface">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-outline-variant/20">
                <p className="font-sans text-label-lg text-on-surface/60">
                  {t.services.basic.ideal}
                </p>
              </div>
            </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.1 }}
            >
              <Card elevation="high" className="p-8 lg:p-10 lg:scale-105 border-2 border-primary/20 scale-100">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h2 className="font-serif text-headline-lg text-primary mb-4">
                {t.services.advanced.title}
              </h2>
              <p className="font-sans text-body-lg text-on-surface/70 mb-8">
                {t.services.advanced.description}
              </p>
              <ul className="space-y-4 mb-8">
                {t.services.advanced.features.map((feature, index) => (
                  <li key={index} className="flex gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-sans text-body-md text-on-surface">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-outline-variant/20">
                <p className="font-sans text-label-lg text-on-surface/60">
                  {t.services.advanced.ideal}
                </p>
              </div>
            </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
            >
              <Card elevation="high" className="p-8 lg:p-10">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              <h2 className="font-serif text-headline-lg text-primary mb-4">
                {t.services.seo.title}
              </h2>
              <p className="font-sans text-body-lg text-on-surface/70 mb-8">
                {t.services.seo.description}
              </p>
              <ul className="space-y-4 mb-8">
                {t.services.seo.features.map((feature, index) => (
                  <li key={index} className="flex gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-sans text-body-md text-on-surface">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-outline-variant/20">
                <p className="font-sans text-label-lg text-on-surface/60">
                  {t.services.seo.ideal}
                </p>
              </div>
            </Card>
            </motion.div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto mb-32">
          <h2 className="font-serif text-display-md text-primary mb-16 text-center">
            {t.services.process.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-surface-container-lowest border-2 border-primary/20 flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-headline-lg text-primary">1</span>
              </div>
              <h3 className="font-serif text-headline-sm text-primary mb-4">
                {t.services.process.step1.title}
              </h3>
              <p className="font-sans text-body-lg text-on-surface/70">
                {t.services.process.step1.description}
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-surface-container-lowest border-2 border-primary/20 flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-headline-lg text-primary">2</span>
              </div>
              <h3 className="font-serif text-headline-sm text-primary mb-4">
                {t.services.process.step2.title}
              </h3>
              <p className="font-sans text-body-lg text-on-surface/70">
                {t.services.process.step2.description}
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-surface-container-lowest border-2 border-primary/20 flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-headline-lg text-primary">3</span>
              </div>
              <h3 className="font-serif text-headline-sm text-primary mb-4">
                {t.services.process.step3.title}
              </h3>
              <p className="font-sans text-body-lg text-on-surface/70">
                {t.services.process.step3.description}
              </p>
            </div>
          </div>
        </section>
        </main>

        <Footer locale={locale} />
      </PageTransition>
    </div>
  );
}
