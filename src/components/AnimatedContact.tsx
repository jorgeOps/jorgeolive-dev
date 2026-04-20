'use client';

import { ContactForm } from '@/components/ContactForm';
import { Card } from '@/components/ui/Card';
import { TextReveal } from '@/components/TextReveal';
import { CursorGradient } from '@/components/CursorGradient';
import { PageTransition } from '@/components/PageTransition';

interface AnimatedContactProps {
  title: string;
  subtitle: string;
  whatsapp: {
    text: string;
    button: string;
  };
  formTranslations: {
    name: string;
    email: string;
    business: string;
    message: string;
    send: string;
  };
  info: {
    title: string;
    response: string;
    meeting: string;
    flexible: string;
  };
}

export function AnimatedContact({ title, subtitle, whatsapp, formTranslations, info }: AnimatedContactProps) {
  const phoneNumber = '34717701249';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  return (
    <>
      <CursorGradient />
      <PageTransition>
        <main className="pt-24 sm:pt-32 px-4 sm:px-6 lg:px-12">
          <section className="max-w-4xl mx-auto mb-12 sm:mb-20">
            <TextReveal className="font-serif text-display-sm sm:text-display-md lg:text-display-lg text-primary mb-4 sm:mb-6 text-center">
              {title}
            </TextReveal>
            <p className="font-sans text-body-lg sm:text-headline-sm lg:text-headline-md text-on-surface/70 text-center max-w-2xl mx-auto">
              {subtitle}
            </p>
          </section>

          <section className="max-w-6xl mx-auto mb-20 sm:mb-32">
            <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
              <div className="lg:col-span-3 space-y-8">
                <ContactForm translations={formTranslations} />

                {/* WhatsApp Option */}
                <div className="text-center">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-outline-variant/20"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-surface-container-lowest text-on-surface/60 font-sans">
                        {whatsapp.text}
                      </span>
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-[#C8A882] hover:bg-[#B89872] text-[#1C1B1F] font-sans font-semibold rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    {whatsapp.button}
                  </a>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <Card elevation="medium" className="p-8">
                  <h2 className="font-serif text-headline-md text-primary mb-6">
                    {info.title}
                  </h2>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-sans text-body-lg font-semibold text-primary mb-1">
                          {info.title}
                        </h3>
                        <p className="font-sans text-body-md text-on-surface/70">
                          {info.response}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-sans text-body-lg font-semibold text-primary mb-1">
                          {info.meeting}
                        </h3>
                        <p className="font-sans text-body-md text-on-surface/70">
                          {info.meeting}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-sans text-body-lg font-semibold text-primary mb-1">
                          {info.flexible}
                        </h3>
                        <p className="font-sans text-body-md text-on-surface/70">
                          {info.flexible}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
    </>
  );
}
