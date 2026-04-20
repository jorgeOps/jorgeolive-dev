import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AnimatedContact } from '@/components/AnimatedContact';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { getTranslations } from '@/lib/i18n';

export default function ContactPage() {
  const locale = 'es';
  const t = getTranslations(locale);

  return (
    <div className="min-h-screen relative">
      <WhatsAppButton />
      <Navigation locale={locale} />
      <AnimatedContact
        title={t.contact.title}
        subtitle={t.contact.subtitle}
        whatsapp={t.contact.whatsapp}
        formTranslations={t.contact.form}
        info={t.contact.info}
      />
      <Footer locale={locale} />
    </div>
  );
}
