import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { EditorialNote } from '@/components/EditorialNote';
import { PhilosophyPrinciple } from '@/components/PhilosophyPrinciple';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { QuoteBlock } from '@/components/QuoteBlock';
import { Button } from '@/components/ui/Button';
import { TextReveal } from '@/components/TextReveal';
import { CursorGradient } from '@/components/CursorGradient';
import { PageTransition } from '@/components/PageTransition';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { projects } from '@/data/projects';
import { getTranslations } from '@/lib/i18n';
import Link from 'next/link';

export default function HomePage() {
  const locale = 'es';
  const t = getTranslations(locale);

  return (
    <div className="min-h-screen relative">
      <CursorGradient />
      <WhatsAppButton />
      <Navigation locale={locale} />

      <PageTransition>
        <main className="pt-24 sm:pt-32 px-4 sm:px-6 lg:px-12">
        {/* Hero Editorial */}
        <section className="max-w-6xl mx-auto mb-24 sm:mb-40">
          <div className="mb-6 sm:mb-8">
            <p className="font-sans text-label-md sm:text-label-lg text-on-surface/50 tracking-wider uppercase mb-4">
              {t.home.hero.greeting}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
            <div className="lg:col-span-8">
              <TextReveal className="font-serif text-display-sm sm:text-display-md lg:text-display-lg text-primary mb-6 sm:mb-8 leading-[1.1] tracking-tight">
                {t.home.hero.title}
              </TextReveal>

              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                <p className="font-sans text-body-lg sm:text-headline-sm lg:text-headline-md text-on-surface/80 leading-relaxed max-w-2xl">
                  {t.home.hero.subtitle}
                </p>
              </div>

              <Link href="/es/contact">
                <Button size="lg" className="group">
                  {t.home.hero.cta}
                  <svg
                    className="inline-block w-5 h-5 ml-2 transition-transform duration-400 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <EditorialNote text={t.home.hero.note} align="left" />
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="max-w-5xl mx-auto mb-40">
          <div className="mb-16">
            <h2 className="font-serif text-display-md text-primary mb-3">
              {t.home.philosophy.title}
            </h2>
            <div className="w-24 h-1 bg-primary/20" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {t.home.philosophy.principles.map((principle, index) => (
              <PhilosophyPrinciple
                key={principle.label}
                label={principle.label}
                text={principle.text}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Projects Showcase */}
        <section className="max-w-7xl mx-auto mb-40">
          <h2 className="font-serif text-display-md text-primary mb-20 text-center lg:text-left">
            {t.home.projects.title}
          </h2>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <ProjectShowcase
                key={project.id}
                project={project}
                locale={locale}
                index={index}
                viewLiveText={t.home.projects.viewLive}
                legacyText={t.home.projects.legacy}
              />
            ))}
          </div>
        </section>

        {/* Difference Section */}
        <section className="max-w-5xl mx-auto mb-40">
          <div className="bg-surface-container-low rounded-lg p-10 lg:p-16 border border-outline-variant/10">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <h2 className="font-serif text-display-sm text-primary mb-8 leading-tight">
                  {t.home.difference.title}
                </h2>
                <p className="font-sans text-body-lg text-on-surface/80 leading-relaxed">
                  {t.home.difference.text}
                </p>
              </div>
              <div className="lg:col-span-5 flex items-center">
                <QuoteBlock quote={t.home.difference.quote} />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-4xl mx-auto mb-32 text-center">
          <div className="space-y-8">
            <h2 className="font-serif text-headline-lg text-primary">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="font-sans text-body-lg text-on-surface/70 max-w-2xl mx-auto">
              Si buscas alguien que entienda tu negocio y construya una web que funcione de verdad,
              hablemos. Sin compromiso, sin presión.
            </p>
            <Link href="/es/contact">
              <Button size="lg" variant="secondary">
                Contactar
              </Button>
            </Link>
          </div>
        </section>
        </main>

        <Footer locale={locale} />
      </PageTransition>
    </div>
  );
}
