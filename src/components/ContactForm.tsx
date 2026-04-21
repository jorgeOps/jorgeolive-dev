'use client';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Card } from '@/components/ui/Card';
import { useState, FormEvent } from 'react';

interface ContactFormProps {
  translations: {
    name: string;
    email: string;
    business: string;
    message: string;
    send: string;
  };
}

export function ContactForm({ translations }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      business: formData.get('business'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      (e.target as HTMLFormElement).reset();

      // Reset to idle after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');

      // Reset to idle after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  return (
    <Card elevation="high" className="p-8 lg:p-12">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          name="name"
          label={translations.name}
          required
          disabled={status === 'sending'}
        />

        <Input
          name="email"
          type="email"
          label={translations.email}
          required
          disabled={status === 'sending'}
        />

        <Input
          name="business"
          label={translations.business}
          disabled={status === 'sending'}
        />

        <Textarea
          name="message"
          label={translations.message}
          required
          disabled={status === 'sending'}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Enviando... / Sending...' : status === 'success' ? '✓ Enviado / Sent!' : translations.send}
        </Button>

        {status === 'success' && (
          <div className="p-4 bg-primary-container rounded-lg border border-primary/20">
            <p className="text-center font-sans text-body-lg text-primary font-semibold">
              ✓ ¡Mensaje enviado correctamente! / Message sent successfully!
            </p>
            <p className="text-center font-sans text-body-md text-on-surface/70 mt-2">
              Te responderé pronto / I'll reply soon
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <p className="text-center font-sans text-body-lg text-red-600 font-semibold">
              ✗ Error al enviar / Error sending
            </p>
            <p className="text-center font-sans text-body-md text-red-600/70 mt-2">
              Por favor intenta de nuevo / Please try again
            </p>
          </div>
        )}
      </form>
    </Card>
  );
}
